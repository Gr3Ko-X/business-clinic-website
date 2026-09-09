import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  SERVICE_LABELS,
  buildContactEmail,
  createTransporter,
  getRecipients,
  type ContactPayload,
} from "@/lib/contact-mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_ORG = 200;
const MAX_PHONE = 40;
const MAX_DETAILS = 5000;

/** Simple in-memory rate limit: max 5 submissions per IP per 15 minutes. */
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map<string, number[]>();

function logContactError(message: string) {
  console.error(message);
  try {
    fs.appendFileSync(
      path.join(process.cwd(), "contact-error.log"),
      `${new Date().toISOString()} ${message}\n`
    );
  } catch {
    // ignore
  }
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionLog.get(ip) ?? []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  submissionLog.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }
  recent.push(now);
  submissionLog.set(ip, recent);
  return false;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(body: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;
  const data: ContactPayload = {
    name: asString(raw.name),
    email: asString(raw.email),
    org: asString(raw.org),
    phone: asString(raw.phone),
    service: asString(raw.service),
    details: asString(raw.details),
  };

  if (
    !data.name ||
    !data.email ||
    !data.org ||
    !data.phone ||
    !data.service ||
    !data.details
  ) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  if (!EMAIL_RE.test(data.email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  if (!(data.service in SERVICE_LABELS)) {
    return { ok: false, error: "Please select a valid engagement category." };
  }

  if (
    data.name.length > MAX_NAME ||
    data.email.length > MAX_EMAIL ||
    data.org.length > MAX_ORG ||
    data.phone.length > MAX_PHONE ||
    data.details.length > MAX_DETAILS
  ) {
    return { ok: false, error: "One or more fields exceed the allowed length." };
  }

  return { ok: true, data };
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const validated = validatePayload(body);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const recipients = getRecipients();
    const smtpUser = process.env.SMTP_USER?.trim().replace(/^['"]|['"]$/g, "");

    if (!smtpUser || recipients.length === 0) {
      logContactError(
        `Contact API misconfigured: smtpUser=${Boolean(smtpUser)} recipients=${recipients.length} keys=${Object.keys(
          process.env
        )
          .filter((k) => k.startsWith("SMTP") || k.startsWith("CONTACT"))
          .join(",")}`
      );
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again later." },
        { status: 500 }
      );
    }

    const { subject, text, html } = buildContactEmail(validated.data);
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Website Contact Form" <${smtpUser}>`,
      to: recipients,
      replyTo: validated.data.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.stack || error.message : String(error);
    logContactError(`Contact form email failed: ${message}`);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}

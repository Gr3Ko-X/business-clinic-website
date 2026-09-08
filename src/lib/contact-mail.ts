import nodemailer from "nodemailer";

export const SERVICE_LABELS: Record<string, string> = {
  "india-entry": "Foreign Company India Entry & Setup",
  "msme-growth": "MSME Operations & OEE Optimization",
  "industrial-assurance": "Industrial QA & Pre-Dispatch Inspection",
  documentation: "Techno-Commercial / Technical Manuals",
  "regulatory-wpc": "Defence Industrial License / WPC import clearances",
  others: "Others",
};

export type ContactPayload = {
  name: string;
  email: string;
  org: string;
  phone: string;
  service: string;
  details: string;
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getRecipients(): string[] {
  const fromList = process.env.CONTACT_EMAILS
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (fromList && fromList.length > 0) {
    return fromList;
  }

  const single = process.env.CONTACT_EMAIL?.trim();
  return single ? [single] : [];
}

export function createTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "465");

  if (!host || !user || !pass || !Number.isFinite(port)) {
    throw new Error("SMTP configuration is incomplete");
  }

  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function buildContactEmail(payload: ContactPayload) {
  const category =
    SERVICE_LABELS[payload.service] ?? payload.service;
  const submittedAt = new Date().toISOString();

  const text = [
    "New Website Enquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.org}`,
    `Phone: ${payload.phone}`,
    `Engagement Category: ${category}`,
    "",
    "Outline of Requirements:",
    payload.details,
    "",
    `Submitted At: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0c1d4a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px; color: #0c1d4a;">New Website Enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 180px;">Name</td>
          <td style="padding: 8px 0;">${escapeHtml(payload.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email</td>
          <td style="padding: 8px 0;">${escapeHtml(payload.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Company</td>
          <td style="padding: 8px 0;">${escapeHtml(payload.org)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Phone</td>
          <td style="padding: 8px 0;">${escapeHtml(payload.phone)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Engagement Category</td>
          <td style="padding: 8px 0;">${escapeHtml(category)}</td>
        </tr>
      </table>
      <h3 style="margin: 24px 0 8px;">Outline of Requirements</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.details)}</p>
      <p style="margin-top: 24px; color: #64748b; font-size: 12px;">
        Submitted At: ${escapeHtml(submittedAt)}
      </p>
    </div>
  `.trim();

  return {
    subject: `Consultation Request — ${payload.name} (${payload.org})`,
    text,
    html,
  };
}

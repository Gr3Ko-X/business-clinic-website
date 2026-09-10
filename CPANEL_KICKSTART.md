# cPanel Kickstart — Business Clinic (Next.js)

Manual deploy guide for **indiabusinessclinic.com** on cPanel / CloudLinux Passenger.

> Shared hosting **cannot reliably run `next build`** (1 GB RAM → `EAGAIN`).  
> **Build on your Mac**, upload `.next`, then restart the Node app.

---

## Paths (this project)

| What | Path |
|------|------|
| cPanel user | `indiabus` |
| Git clone (repo) | `/home3/indiabus/repositories/business-clinic-website-production` |
| Node Application root | `repositories/business-clinic-website-production` |
| Full app path | `/home3/indiabus/repositories/business-clinic-website-production` |
| Node venv activate | `source /home3/indiabus/nodevenv/repositories/business-clinic-website-production/22/bin/activate` |
| Startup file | `app.js` |
| Domain | `indiabusinessclinic.com` |

---

## One-time Setup Node.js App settings

In **cPanel → Setup Node.js App**:

| Field | Value |
|--------|--------|
| Node.js version | 22.x |
| Application mode | Production |
| Application root | `repositories/business-clinic-website-production` |
| Application URL | `indiabusinessclinic.com` |
| Application startup file | `app.js` |

### Environment variables (required)

Add in the Node.js App UI (no quotes around values):

```text
NODE_ENV=production
SMTP_HOST=localhost
SMTP_PORT=465
SMTP_USER=hello@indiabusinessclinic.com
SMTP_PASS=YOUR_PASSWORD_HERE
CONTACT_EMAIL=hello@indiabusinessclinic.com
CONTACT_EMAILS=hello@indiabusinessclinic.com,sanjay@indiabusinessclinic.com,indiabusinessclinic@gmail.com
```

Notes:
- On the same cPanel server, prefer `SMTP_HOST=localhost` over `mail.indiabusinessclinic.com`.
- Do **not** wrap values in `'...'` or `"..."` in the cPanel UI.

---

## A. Local Mac — build the app

```bash
cd /Users/greko/Downloads/Business-Clinic

# install (first time / after package.json changes)
npm install

# production build (use webpack if Turbopack is flaky)
npm run build -- --webpack

# zip .next for upload (hidden folder)
rm -f next-build.zip
zip -r next-build.zip .next
```

Show hidden files in Finder if needed: **Cmd + Shift + .**

Also keep these files ready to upload if they changed:

- `app.js`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `public/` (if assets changed)
- `src/` is **not** required to *serve* if `.next` is complete, but keep the server clone updated via git for source of truth

---

## B. cPanel — stop the app (required before replacing files)

### Option 1 — UI (recommended)

1. **Setup Node.js App**
2. Open this application
3. Click **STOP APP**
4. Wait ~5 seconds

### Option 2 — SSH

```bash
source /home3/indiabus/nodevenv/repositories/business-clinic-website-production/22/bin/activate
cd /home3/indiabus/repositories/business-clinic-website-production

# mark restart + kill stale workers
mkdir -p tmp
touch tmp/restart.txt
pkill -f "repositories/business-clinic-website-production" || true
```

Still click **STOP APP** in the UI when possible — Passenger caches workers aggressively.

---

## C. Upload & extract `.next`

1. File Manager → `/home3/indiabus/repositories/business-clinic-website-production`
2. Settings → enable **Show Hidden Files (dotfiles)**
3. Upload `next-build.zip` (or `.next.zip`)
4. Extract it in that folder
5. Confirm you have a folder named **`.next`** (not `next` or nested wrong)
6. Delete the zip after extract

Via SSH (if you uploaded the zip to the app folder):

```bash
cd /home3/indiabus/repositories/business-clinic-website-production
# adjust zip name if different
unzip -o next-build.zip
ls -la .next/BUILD_ID
rm -f next-build.zip
```

Upload updated `app.js` / `package.json` / `public` the same way if they changed.

---

## D. Install production dependencies (on server)

```bash
source /home3/indiabus/nodevenv/repositories/business-clinic-website-production/22/bin/activate
cd /home3/indiabus/repositories/business-clinic-website-production

# do NOT run npm run build on cPanel
npm install --omit=dev
```

Or use **Run NPM Install** in Setup Node.js App.

---

## E. Ensure Passenger `app.js` is correct

`app.js` must use Next + Passenger (`listen('passenger')`).  
If the site shows **“It works! NodeJS …”**, the default sample app is still running.

Write/overwrite on the server:

```bash
cd /home3/indiabus/repositories/business-clinic-website-production

cat > app.js <<'EOF'
const { createServer } = require("http");
const { parse } = require("url");
const fs = require("fs");
const path = require("path");
const next = require("next");

const logFile = path.join(__dirname, "startup.log");

function log(message) {
  const line = `${new Date().toISOString()} ${message}\n`;
  try { fs.appendFileSync(logFile, line); } catch (_) {}
  console.log(message);
}

const underPassenger = typeof PhusionPassenger !== "undefined";
if (underPassenger) {
  PhusionPassenger.configure({ autoInstall: false });
}

log(`boot underPassenger=${underPassenger} cwd=${process.cwd()} dir=${__dirname}`);

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();
const port = underPassenger ? "passenger" : Number(process.env.PORT) || 3000;

app.prepare().then(() => {
  log("next.prepare() ok");
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(port, () => log(`listening on ${String(port)}`));
}).catch((err) => {
  log(`FATAL: ${err && err.stack ? err.stack : String(err)}`);
  process.exit(1);
});
EOF

grep -n "PhusionPassenger\|startup.log" app.js
rm -f startup.log
mkdir -p tmp
touch tmp/restart.txt
pkill -f "repositories/business-clinic-website-production" || true
```

---

## F. Start the app

1. **Setup Node.js App → START APP** (or Restart)
2. Open **https://indiabusinessclinic.com** (hard refresh: Cmd+Shift+R)

Verify Passenger loaded the new process:

```bash
cd /home3/indiabus/repositories/business-clinic-website-production
cat startup.log
curl -sL https://indiabusinessclinic.com/ | head -20
```

Expected in `startup.log`:

```text
underPassenger=true
next.prepare() ok
listening on passenger
```

Expected from `curl`: Business Clinic HTML (not `It works!`).

---

## G. Full redeploy checklist (copy/paste)

### On Mac

```bash
cd /Users/greko/Downloads/Business-Clinic
npm install
npm run build -- --webpack
rm -f next-build.zip
zip -r next-build.zip .next
```

### On cPanel

1. **STOP APP**
2. Upload + extract `next-build.zip` → `.next`
3. Upload `app.js` if changed
4. SSH:

```bash
source /home3/indiabus/nodevenv/repositories/business-clinic-website-production/22/bin/activate
cd /home3/indiabus/repositories/business-clinic-website-production
npm install --omit=dev
rm -f startup.log
mkdir -p tmp
touch tmp/restart.txt
pkill -f "repositories/business-clinic-website-production" || true
```

5. **START APP**
6. Check site + `cat startup.log`

---

## H. Contact form / SMTP troubleshooting

If `POST /api/contact` returns **500**:

### 1) Confirm Node env vars exist in Setup Node.js App

Especially `SMTP_*` and `CONTACT_EMAILS` (no quotes).

### 2) Test SMTP from the app venv

```bash
source /home3/indiabus/nodevenv/repositories/business-clinic-website-production/22/bin/activate
cd /home3/indiabus/repositories/business-clinic-website-production

node <<'EOF'
const nodemailer = require("nodemailer");
const strip = (v) => (v || "").trim().replace(/^['"]|['"]$/g, "");
const host = strip(process.env.SMTP_HOST);
const user = strip(process.env.SMTP_USER);
const pass = strip(process.env.SMTP_PASS);
const port = Number(strip(process.env.SMTP_PORT) || 465);
console.log({ host, user, port, passLen: pass.length, emails: process.env.CONTACT_EMAILS });
const t = nodemailer.createTransport({
  host, port, secure: port === 465,
  auth: { user, pass },
  tls: { rejectUnauthorized: false },
});
t.sendMail({
  from: `"Test" <${user}>`,
  to: user,
  subject: "SMTP test",
  text: "ok",
}).then(() => console.log("SMTP OK")).catch((e) => console.error("SMTP FAIL", e.message));
EOF
```

### 3) Prefer localhost SMTP on same server

Set:

```text
SMTP_HOST=localhost
SMTP_PORT=465
```

Then STOP → START and retest the form.

### 4) App error log (after deploying logging build)

```bash
cat /home3/indiabus/repositories/business-clinic-website-production/contact-error.log
```

---

## I. What NOT to do on cPanel

- ❌ `npm run build` / `next build` (hits LVE limits → `EAGAIN`)
- ❌ Expect File Manager upload of `app.js` to apply without **STOP / kill / START**
- ❌ Put quotes around env values in the Node.js App UI
- ❌ Point Application root at a different folder than where `.next` and `app.js` live

---

## J. Quick health commands

```bash
source /home3/indiabus/nodevenv/repositories/business-clinic-website-production/22/bin/activate
cd /home3/indiabus/repositories/business-clinic-website-production

pwd
head -20 app.js
ls -la .next/BUILD_ID public package.json
node -e "console.log(require.resolve('next'))"
cat startup.log 2>/dev/null
curl -sI https://indiabusinessclinic.com/ | head
```

Manual Next smoke test (does **not** use Passenger; uses port 3000):

```bash
NODE_ENV=production timeout 15 node app.js
# expect: Next.js ready / listening on 3000
```

---

## K. Git note

`.cpanel.yml` can copy files on Deploy HEAD Commit, but **build artifacts (`.next`) are still produced on your Mac** and uploaded manually with this workflow.

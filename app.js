const { createServer } = require("http");
const { parse } = require("url");
const fs = require("fs");
const path = require("path");
const next = require("next");

const logFile = path.join(__dirname, "startup.log");

function log(message) {
  const line = `${new Date().toISOString()} ${message}\n`;
  try {
    fs.appendFileSync(logFile, line);
  } catch (_) {
    // ignore log write failures
  }
  console.log(message);
}

// cPanel / Phusion Passenger support
const underPassenger = typeof PhusionPassenger !== "undefined";
if (underPassenger) {
  PhusionPassenger.configure({ autoInstall: false });
}

log(`boot underPassenger=${underPassenger} cwd=${process.cwd()} dir=${__dirname}`);

const app = next({
  dev: false,
  dir: __dirname,
});
const handle = app.getRequestHandler();
const port = underPassenger ? "passenger" : Number(process.env.PORT) || 3000;

app
  .prepare()
  .then(() => {
    log("next.prepare() ok");
    const server = createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, () => {
      log(`listening on ${String(port)}`);
    });
  })
  .catch((err) => {
    log(`FATAL: ${err && err.stack ? err.stack : String(err)}`);
    process.exit(1);
  });

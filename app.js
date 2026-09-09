const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

// cPanel / Phusion Passenger support
if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false });
}

const dev = false;
const app = next({
  dev,
  dir: __dirname,
});
const handle = app.getRequestHandler();

const port =
  typeof PhusionPassenger !== "undefined"
    ? "passenger"
    : Number(process.env.PORT) || 3000;

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`Next.js ready (${String(port)})`);
    });
  })
  .catch((err) => {
    console.error("Failed to start Next.js:", err);
    process.exit(1);
  });

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "qr");

const BTS_QR_URL =
  "https://businessclinic.in/bengaluru-tech-summit-2026?ref=bts-qr";

const baseName = "bengaluru-tech-summit-2026";

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const svgPath = path.join(outDir, `${baseName}.svg`);
  const pngPath = path.join(outDir, `${baseName}.png`);

  await QRCode.toFile(svgPath, BTS_QR_URL, {
    type: "svg",
    margin: 2,
    width: 512,
    color: {
      dark: "#0c1d4a",
      light: "#ffffff",
    },
  });

  await QRCode.toFile(pngPath, BTS_QR_URL, {
    type: "png",
    margin: 2,
    width: 1024,
    color: {
      dark: "#0c1d4a",
      light: "#ffffff",
    },
  });

  console.log(`Generated ${svgPath}`);
  console.log(`Generated ${pngPath}`);
  console.log(`Target URL: ${BTS_QR_URL}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

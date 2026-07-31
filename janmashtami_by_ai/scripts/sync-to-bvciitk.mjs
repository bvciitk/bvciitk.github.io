import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, "../out");
const targetDir = path.resolve(__dirname, "../../bvciitk/Janmashtami");

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory ${sourceDir} does not exist. Run 'npm run build' first.`);
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function copyRecursiveSync(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log(`Syncing build output from ${sourceDir} to ${targetDir}...`);
copyRecursiveSync(sourceDir, targetDir);
console.log("Successfully synced janmashtami25 static export into bvciitk/Janmashtami!");

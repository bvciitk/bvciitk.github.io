import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = `C:/Users/ishaa/.gemini/antigravity-ide/brain/469558c2-8fe3-427c-9294-6f2cae3cd3f4`;

async function capture() {
  console.log("Launching puppeteer...");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:/Users/ishaa/.cache/puppeteer/chrome/win64-150.0.7871.24/chrome-win64/chrome.exe',
  });
  const page = await browser.newPage();
  
  // Set mobile viewport (iPhone 13 / 14: 390 x 844)
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  console.log("Navigating to http://localhost:3000/Janmashtami/ ...");
  await page.goto('http://localhost:3000/Janmashtami/', { waitUntil: 'networkidle2' });

  // Capture initial screen
  await page.screenshot({ path: `${outputDir}/mobile_initial.png` });
  console.log("Saved mobile_initial.png");

  // Scroll down a bit (800px)
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${outputDir}/mobile_scroll_800.png` });
  console.log("Saved mobile_scroll_800.png");

  // Scroll down more
  await page.evaluate(() => window.scrollBy(0, 1500));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${outputDir}/mobile_scroll_2300.png` });
  console.log("Saved mobile_scroll_2300.png");

  await browser.close();
  console.log("Done!");
}

capture().catch(err => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});

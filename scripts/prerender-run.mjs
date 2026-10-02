// Пререндер: после сборки открывает сайт в headless Chrome и сохраняет готовый HTML
// в dist/index.html, чтобы поисковики видели весь контент без выполнения JavaScript.
// Если Chrome недоступен — сборка не падает, сайт просто работает как обычный SPA.
import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const DIST = "dist";
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml" };

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  ];
  return candidates.find((p) => p && existsSync(p));
}

async function main() {
  const chrome = findChrome();
  if (!chrome) {
    console.warn("[prerender] Chrome не найден — пропускаю пререндер");
    return;
  }
  const { default: puppeteer } = await import("puppeteer-core");

  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = normalize(join(DIST, urlPath === "/" ? "index.html" : urlPath));
    if (!file.startsWith(normalize(DIST)) || !existsSync(file)) file = join(DIST, "index.html");
    res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const origin = `http://127.0.0.1:${server.address().port}`;

  const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    // Внешние запросы (Метрика, карты, шрифты) блокируем: пререндер не должен засорять статистику
    await page.setRequestInterception(true);
    page.on("request", (r) => (r.url().startsWith(origin) || r.url().startsWith("data:") ? r.continue() : r.abort()));
    await page.goto(origin, { waitUntil: "load" });
    await page.waitForSelector("#root h1", { timeout: 15000 });
    const html = await page.$eval("#root", (el) => el.innerHTML);
    if (!html || html.length < 5000) throw new Error(`слишком короткий результат (${html.length})`);

    const indexPath = join(DIST, "index.html");
    const src = await readFile(indexPath, "utf8");
    const out = src.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
    if (out === src) throw new Error('не найден <div id="root"></div>');
    await writeFile(indexPath, out);
    console.log(`[prerender] готово: ${html.length} символов HTML добавлено в dist/index.html`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((e) => {
  console.warn("[prerender] не удалось, сайт будет без пререндера:", e.message);
});

// Пререндер: после сборки открывает каждую страницу сайта (главную и страницы услуг) в headless Chrome
// и сохраняет готовый HTML, чтобы поисковики видели весь контент без выполнения JavaScript.
// Для каждой страницы подставляются свои title, description, canonical, Open Graph и микроразметка.
// Если Chrome недоступен — сборка не падает, сайт просто работает как обычный SPA.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml" };

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

const attr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function jsonLd(obj) {
  return `    <script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>\n`;
}

/** Подставляет в HTML-шаблон главной метаданные конкретной страницы услуги. */
function applyHead(tpl, page, SITE) {
  const url = `${SITE}/${page.slug}/`;
  const hero = page.blocks.find((b) => b.id === "hero")?.c?.photo;
  const jpg = hero && !hero.srcSet ? `${SITE}${hero.src.replace(".webp", ".jpg")}` : `${SITE}/og-image.jpg`;
  let h = tpl;
  const set = (re, to) => {
    if (!re.test(h)) console.warn("[prerender] не найден тег для замены:", re);
    h = h.replace(re, () => to);
  };
  set(/<title>[\s\S]*?<\/title>/, `<title>${attr(page.title)}</title>`);
  set(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${attr(page.description)}" />`);
  set(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  set(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${attr(page.title)}" />`);
  set(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${attr(page.description)}" />`);
  set(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  set(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${jpg}" />`);
  set(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${attr(page.title)}" />`);
  set(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${attr(page.description)}" />`);
  set(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${jpg}" />`);
  // предзагрузка фото первого экрана именно этой страницы
  if (hero) {
    const pre = hero.srcSet
      ? `<link rel="preload" as="image" href="${hero.src}" imagesrcset="${hero.srcSet}" imagesizes="(max-width: 700px) 100vw, 1232px" fetchpriority="high" />`
      : `<link rel="preload" as="image" href="${hero.src}" fetchpriority="high" />`;
    h = h.replace(/<link rel="preload" as="image"[^>]*\/>/, () => pre);
  }

  // Микроразметка страницы: услуга, хлебные крошки, вопросы и ответы
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.service.name,
    description: page.description,
    url,
    provider: { "@type": "Organization", "@id": `${SITE}/#organization`, name: "ООО ЭНЕРГИЯ" },
    areaServed: { "@type": "Country", name: "Россия" },
  };
  if (page.service.priceFrom) {
    service.offers = {
      "@type": "Offer",
      priceCurrency: "RUB",
      priceSpecification: { "@type": "UnitPriceSpecification", minPrice: page.service.priceFrom, priceCurrency: "RUB", unitText: "кг" },
    };
  }
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: page.nav, item: url },
    ],
  };
  let extra = jsonLd(service) + jsonLd(crumbs);
  const faq = page.blocks.find((b) => b.id === "faq")?.c?.items;
  if (faq?.length) {
    extra += jsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
    });
  }
  h = h.replace("</head>", () => extra + "  </head>");
  return h;
}

async function main() {
  const chrome = findChrome();
  if (!chrome) {
    console.warn("[prerender] Chrome не найден — пропускаю пререндер");
    return;
  }
  const { default: puppeteer } = await import("puppeteer-core");
  const { PAGES, SITE } = await import(pathToFileURL(join(process.cwd(), "src/app/pages/pages.data.js")).href);

  const tpl = await readFile(join(DIST, "index.html"), "utf8");

  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = normalize(join(DIST, urlPath === "/" ? "index.html" : urlPath));
    if (!file.startsWith(normalize(DIST)) || !existsSync(file) || statSync(file).isDirectory()) file = join(DIST, "index.html");
    res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const origin = `http://127.0.0.1:${server.address().port}`;

  const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const results = [];
  try {
    const routes = [{ path: "/", page: null }, ...PAGES.map((p) => ({ path: `/${p.slug}/`, page: p }))];
    for (const { path, page: def } of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1366, height: 900 });
      // Внешние запросы (Метрика, карты, шрифты) блокируем: пререндер не должен засорять статистику
      await page.setRequestInterception(true);
      page.on("request", (r) => (r.url().startsWith(origin) || r.url().startsWith("data:") ? r.continue() : r.abort()));
      await page.goto(origin + path, { waitUntil: "load" });
      await page.waitForSelector("#root h1", { timeout: 15000 });
      const html = await page.$eval("#root", (el) => el.innerHTML);
      await page.close();
      if (!html || html.length < 5000) throw new Error(`${path}: слишком короткий результат (${html.length})`);
      results.push({ path, def, html });
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Запись только после успешного рендера всех страниц
  for (const { path, def, html } of results) {
    let out = def ? applyHead(tpl, def, SITE) : tpl;
    const next = out.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
    if (next === out) throw new Error(`${path}: не найден <div id="root"></div>`);
    const target = def ? join(DIST, def.slug, "index.html") : join(DIST, "index.html");
    if (def) await mkdir(join(DIST, def.slug), { recursive: true });
    await writeFile(target, next);
    console.log(`[prerender] ${path} — ${html.length} символов`);
  }
}

main().catch((e) => {
  console.warn("[prerender] не удалось, сайт будет без пререндера:", e.message);
});

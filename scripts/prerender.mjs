// Обёртка: любые ошибки пререндера не должны ломать сборку и деплой сайта.
try {
  await import("./prerender-run.mjs");
} catch (e) {
  console.warn("[prerender] пропущен из-за ошибки:", e.message);
}

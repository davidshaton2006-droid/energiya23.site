import { useEffect, useState } from "react";

const STORAGE_KEY = "energiya23_cookie_consent";
const METRIKA_ID = 113330393;

type Consent = "accepted" | "rejected" | null;

function loadMetrika() {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (w.__energiyaMetrikaLoaded) return;
  w.__energiyaMetrikaLoaded = true;

  w.ym = w.ym || function (...args: any[]) {
    (w.ym.a = w.ym.a || []).push(args);
  };
  w.ym.l = Date.now();

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://mc.yandex.ru/metrika/tag.js?id=" + METRIKA_ID;
  document.head.appendChild(script);

  w.ym(METRIKA_ID, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  });
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Consent;
    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
      if (saved === "accepted") loadMetrika();
    } else {
      setOpen(true);
    }

    const openSettings = () => setOpen(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setOpen(false);
    if (value === "accepted") loadMetrika();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Настройки cookie"
      style={{
        position: "fixed",
        left: "16px",
        right: "16px",
        bottom: "16px",
        zIndex: 9999,
        maxWidth: "760px",
        margin: "0 auto",
        background: "#fff",
        border: "1px solid #E5E5E5",
        borderRadius: "16px",
        boxShadow: "0 14px 40px rgba(0,0,0,.18)",
        padding: "18px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ color: "#222", fontWeight: 900, fontSize: "18px", marginBottom: "8px" }}>
        Файлы cookie и аналитика
      </div>
      <div style={{ color: "#555", fontSize: "14px", lineHeight: 1.55 }}>
        Мы используем необходимые технические данные для работы сайта. Яндекс.Метрика и связанные
        аналитические cookie загружаются только после вашего согласия. Подробнее в{" "}
        <a href="/privacy/#cookies" target="_blank" rel="noopener" style={{ color: "#E87722" }}>
          Политике обработки персональных данных
        </a>.
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "14px" }}>
        <button
          type="button"
          onClick={() => choose("accepted")}
          style={{
            border: 0,
            borderRadius: "10px",
            background: "#E87722",
            color: "#fff",
            padding: "11px 18px",
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Разрешить аналитику
        </button>
        <button
          type="button"
          onClick={() => choose("rejected")}
          style={{
            border: "1px solid #D8D8D8",
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
            padding: "11px 18px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Только необходимые
        </button>
      </div>
      {consent && (
        <div style={{ marginTop: "10px", color: "#777", fontSize: "12px" }}>
          Текущий выбор: {consent === "accepted" ? "аналитика разрешена" : "только необходимые"}.
        </div>
      )}
    </div>
  );
}
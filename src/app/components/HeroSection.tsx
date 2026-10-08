import { Phone, ChevronDown } from "lucide-react";
import { LeadFormCompact } from "./LeadForm";

const HERO_DEFAULT = {
  badge: "Производство с 2014 года · Краснодар",
  h1: ["Производство деталей", "металлоконструкций", "в Краснодаре"],
  sub: "Производим детали металлоконструкций промышленного качества для строительства складов, ангаров и промышленных зданий. Государственные и коммерческие B2B-заказы. Точное изготовление по проектной документации, стабильные сроки, доставка по всей России.",
  term: "Сроки от 10 дней",
  chips: ["🛡️ Гарантия 3 года", "📄 Фиксированная цена", "🚛 Доставка по России"],
  formTitle: "Рассчитаем стоимость по вашим чертежам",
  formSub: "Оставьте номер телефона, менеджер перезвонит вам в течение рабочего дня.",
  stats: [
    { value: "2014", label: "год основания" },
    { value: "10+", label: "лет опыта" },
    { value: "90%", label: "клиентов возвращаются" },
    { value: "1 млн+", label: "км доставок" },
  ],
  photo: {
    src: "/img/hero-1280.webp",
    srcSet: "/img/hero-640.webp 640w, /img/hero-1280.webp 1280w",
    w: 1280,
    h: 535,
    alt: "Производство металлоконструкций",
  },
  source: "hero",
};

export function HeroSection({ c = {} }: { c?: Partial<typeof HERO_DEFAULT> }) {
  const H = { ...HERO_DEFAULT, ...c };
  const scrollToContact = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown = () => {
    const el = document.querySelector("#for-who");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundColor: "#F5F5F5",
        fontFamily: "Montserrat, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          minHeight: "calc(100vh - 72px)",
          padding: "24px 24px 80px 24px",
        }}
        className="hero-grid"
      >
        {/* Top: photo */}
        <div
          className="hero-photo"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "32px",
            height: "400px",
            width: "100%",
          }}
        >
          <img
            src={H.photo.src}
            srcSet={H.photo.srcSet}
            sizes="(max-width: 700px) 100vw, 1232px"
            width={H.photo.w}
            height={H.photo.h}
            decoding="async"
            fetchpriority="high"
            alt={H.photo.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          {/* Slight overlay for readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          {/* Floating badge top-right */}
          <div className="anim-float"
            style={{
              position: "absolute",
              top: "28px",
              right: "28px",
              backgroundColor: "#6DBE45",
              borderRadius: "14px",
              padding: "12px 20px",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(109,190,69,0.35)",
            }}
          >
            <div style={{ color: "#fff", fontSize: "24px", fontWeight: 900, lineHeight: 1 }}>2014</div>
            <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 600, marginTop: "2px" }}>год основания</div>
          </div>
          {/* Floating badge bottom-left */}
          <div className="anim-float-b"
            style={{
              position: "absolute",
              bottom: "28px",
              left: "28px",
              backgroundColor: "#E87722",
              borderRadius: "14px",
              padding: "12px 20px",
              boxShadow: "0 4px 16px rgba(232,119,34,0.4)",
            }}
          >
            <div style={{ color: "#fff", fontSize: "20px", fontWeight: 900 }}>от 10 дней</div>
            <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 600, marginTop: "2px" }}>производственный цикл</div>
          </div>
        </div>

        {/* Bottom: text content */}
        <div
          className="hero-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(232,119,34,0.10)",
              border: "1.5px solid #E87722",
              borderRadius: "8px",
              padding: "6px 14px",
              width: "fit-content",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E87722", display: "inline-block" }} />
            <span style={{ color: "#E87722", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {H.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              color: "#222222",
              fontSize: "clamp(26px, 3.5vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {H.h1[0]}<br />
            <span style={{ color: "#6DBE45" }}>{H.h1[1]}</span>{" "}
            {H.h1[2]}
          </h1>

          {/* Sub */}
          <p
            style={{
              color: "#3F3F3F",
              fontSize: "clamp(17px, 1.4vw, 19px)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "560px",
            }}
          >
            {H.sub}
          </p>

          {/* Lead form */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "1.5px solid rgba(109,190,69,0.45)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 8px 28px rgba(0,0,0,0.07)",
              maxWidth: "560px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ color: "#222", fontSize: "19px", fontWeight: 900, lineHeight: 1.3, marginBottom: "4px" }}>
              {H.formTitle}
            </div>
            <div style={{ color: "#4A4A4A", fontSize: "17px", lineHeight: 1.5, marginBottom: "14px" }}>
              {H.formSub}
            </div>
            <LeadFormCompact source={H.source} buttonText="Рассчитать" pulse phoneOnly />
          </div>

          {/* Tags row */}
          <div className="hero-tags" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div
              style={{
                backgroundColor: "#6DBE45",
                borderRadius: "12px",
                padding: "10px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ color: "#fff", fontSize: "17px", fontWeight: 800 }}>
                ООО ЭНЕРГИЯ
              </span>
              <span className="tag-sep" style={{ width: "1px", height: "16px", backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}>
                {H.term}
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#E87722",
                borderRadius: "12px",
                padding: "10px 20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ color: "#fff", fontSize: "16px", fontWeight: 700 }}>{H.chips[0]}</span>
              <span className="tag-sep" style={{ width: "1px", height: "16px", backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "#fff", fontSize: "16px", fontWeight: 700 }}>{H.chips[1]}</span>
              <span className="tag-sep" style={{ width: "1px", height: "16px", backgroundColor: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "#fff", fontSize: "16px", fontWeight: 700 }}>{H.chips[2]}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-row" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="tel:+79604933356"
              className="hero-cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#E87722",
                color: "#fff",
                padding: "15px 24px",
                borderRadius: "14px",
                fontSize: "17px",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(232,119,34,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(232,119,34,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(232,119,34,0.35)";
              }}
            >
              <Phone size={17} />
              <span className="hero-phone-full">Позвоните нам: +7 (960) 493-33-56</span>
              <span className="hero-phone-short">+7 (960) 493-33-56</span>
            </a>
            <button
              onClick={scrollToContact}
              className="hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "transparent",
                color: "#333",
                padding: "15px 28px",
                borderRadius: "14px",
                fontSize: "17px",
                fontWeight: 700,
                border: "2px solid #CCCCCC",
                cursor: "pointer",
                fontFamily: "Montserrat, sans-serif",
                transition: "border-color 0.2s, background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#6DBE45";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(109,190,69,0.07)";
                (e.currentTarget as HTMLButtonElement).style.color = "#6DBE45";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#CCCCCC";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#333";
              }}
            >
              Оставить заявку
            </button>
          </div>

          {/* Stats row */}
          <div
            className="hero-stats"
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              paddingTop: "16px",
              borderTop: "1px solid #E0E0E0",
            }}
          >
            {H.stats.map((stat) => (
              <div key={stat.value} style={{ textAlign: "center", flex: "1 1 auto", minWidth: "60px" }}>
                <div style={{ color: "#E87722", fontSize: "clamp(18px, 2vw, 28px)", fontWeight: 900, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ color: "#666", fontSize: "13px", fontWeight: 500, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={scrollDown}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#999",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          zIndex: 2,
          animation: "heroBounce 2s infinite",
        }}
      >
        <span style={{ fontSize: "12px", fontFamily: "Montserrat, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Листать
        </span>
        <ChevronDown size={18} />
      </button>

      <style>{`
        /* Hero section padding: mobile = no top bar (72px nav), desktop = top bar + nav (~100px) */
        .hero-section { padding-top: 72px; }
        @media (min-width: 768px) {
          .hero-section { padding-top: 100px; }
        }

        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .hero-grid {
            padding: 16px 16px 60px 16px !important;
            gap: 24px !important;
          }
          .hero-content {
            padding: 0 !important;
            gap: 18px !important;
          }
          .hero-photo {
            height: 200px !important;
            border-radius: 20px !important;
          }
          /* CTA buttons: stack vertically, full width */
          .hero-cta-row {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            width: 100% !important;
            justify-content: center !important;
            padding: 14px 20px !important;
          }
          /* Hide long phone text, show short */
          .hero-phone-full { display: none !important; }
          .hero-phone-short { display: inline !important; }
          /* Separators inside tags */
          .tag-sep { display: none !important; }
          /* Stats row: 2x2 grid */
          .hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
        }

        /* Desktop: hide short phone text */
        @media (min-width: 769px) {
          .hero-phone-short { display: none !important; }
          .hero-phone-full { display: inline !important; }
        }

        /* Wide screens: text + form on the left, photo on the right, so the form is visible in the first screen */
        @media (min-width: 1024px) {
          .hero-grid {
            flex-direction: row !important;
            align-items: center !important;
            gap: 48px !important;
            min-height: auto !important;
            padding-top: 32px !important;
            padding-bottom: 72px !important;
          }
          .hero-content { order: 1; flex: 1 1 54%; min-width: 0; gap: 14px !important; }
          .hero-content h1 { font-size: clamp(30px, 3.1vw, 44px) !important; }
          .hero-content > p { font-size: 18px !important; line-height: 1.6 !important; }
          .hero-photo { order: 2; flex: 0 0 42%; width: auto !important; height: 640px !important; }
        }
      `}</style>
    </section>
  );
}

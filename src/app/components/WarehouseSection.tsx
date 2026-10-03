import { Package } from "lucide-react";

const metalItems = [
  "Балка двутавровая (двутавр) — различные типоразмеры",
  "Швеллер горячекатаный и гнутый",
  "Уголок стальной равнополочный и неравнополочный",
  "Лист горячекатаный (различные толщины)",
  "Труба профильная квадратная и прямоугольная",
  "Круг стальной (прутки)",
  "Полоса стальная",
  "Арматура и вспомогательный прокат",
];

const warehouseImg = "/img/sklad-metalloprokata.webp";

export function WarehouseSection() {
  return (
    <section
      id="warehouse"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "80px 16px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#E87722",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "6px 20px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          >
            Склад
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            Металлопрокат в наличии —{" "}
            <span style={{ color: "#E87722" }}>оперативный отпуск</span>
          </h2>
          <p style={{ color: "#4A4A4A", fontSize: "18px", marginTop: "12px", maxWidth: "640px", margin: "12px auto 0" }}>
            Собственный склад позволяет существенно сокращать сроки исполнения заказов
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          {/* Left: image */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4/3",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={warehouseImg}
              width={1100}
              height={490}
              loading="lazy"
              decoding="async"
              alt="Склад металлопроката"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                backgroundColor: "#E87722",
                borderRadius: "12px",
                padding: "12px 20px",
                boxShadow: "0 4px 16px rgba(232,119,34,0.4)",
              }}
            >
              <div style={{ color: "#fff", fontSize: "24px", fontWeight: 900 }}>от 10 дней</div>
              <div style={{ color: "rgba(255,255,255,0.90)", fontSize: "16px", fontWeight: 600 }}>
                производственный цикл
              </div>
            </div>
          </div>

          {/* Right: metal list */}
          <div>
            <div
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                padding: "32px",
                border: "1.5px solid #EBEBEB",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <Package size={24} color="#E87722" />
                <h3 style={{ color: "#222", fontSize: "20px", fontWeight: 800, margin: 0 }}>
                  Металлопрокат на складе:
                </h3>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {metalItems.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        backgroundColor: "rgba(232,119,34,0.12)",
                        border: "1px solid rgba(232,119,34,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ color: "#E87722", fontSize: "12px", fontWeight: 900 }}>✓</span>
                    </span>
                    <span style={{ color: "#333", fontSize: "18px", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  backgroundColor: "rgba(109,190,69,0.08)",
                  borderRadius: "12px",
                  border: "1px solid rgba(109,190,69,0.20)",
                  color: "#3F3F3F",
                  fontSize: "17px",
                  lineHeight: 1.7,
                }}
              >
                Наличие собственного склада металла обеспечивает возможность{" "}
                <span style={{ color: "#6DBE45", fontWeight: 700 }}>
                  приступать к производству немедленно
                </span>{" "}
                — без ожидания поставки материалов.
              </div>

              <a
                href="tel:+79604933356"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "24px",
                  backgroundColor: "#E87722",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: 800,
                  textDecoration: "none",
                  fontFamily: "Montserrat, sans-serif",
                  boxShadow: "0 4px 16px rgba(232,119,34,0.30)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >
                Уточнить наличие и цены: +7 (960) 493-33-56
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

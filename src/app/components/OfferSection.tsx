import { LeadFormCompact } from "./LeadForm";

// Боли заказчика металлоконструкций → чем ответ подтверждён на сайте (цена в договоре, сроки, ЧПУ, гарантия).
const pains = [
  { pain: "Срок сорвали, объект стоит", fix: "Производственный цикл от 10 дней. Собственный склад металлопроката: начинаем без ожидания закупки." },
  { pain: "Цена выросла по ходу работ", fix: "Фиксированная стоимость по договору, без скрытых наценок и доплат." },
  { pain: "Детали не сошлись на монтаже", fix: "Производим по чертежам КМ и КМД на ЧПУ-станках, перед отгрузкой — контрольная сборка и маркировка." },
  { pain: "Что делать, если найдутся недочёты", fix: "Гарантия 3 года на продукцию, контроль качества на каждом этапе." },
];

export function OfferSection() {
  return (
    <section
      id="offer"
      style={{
        background: "linear-gradient(135deg, #1E1E1E 0%, #2B2B2B 100%)",
        padding: "72px 16px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <style>{`
        .offer-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          grid-template-areas: "intro form" "pains form";
          column-gap: 40px;
          row-gap: 0;
          align-items: start;
        }
        .o-intro { grid-area: intro; }
        .o-pains { grid-area: pains; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 28px; }
        .o-form { grid-area: form; }
        @media (max-width: 900px) {
          .offer-grid { grid-template-columns: 1fr; grid-template-areas: "intro" "form" "pains"; row-gap: 24px; }
          .o-pains { margin-top: 0; }
        }
        @media (max-width: 560px) {
          .o-pains { grid-template-columns: 1fr; }
        }
      `}</style>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="offer-grid">
          <div className="o-intro">
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#6DBE45",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "6px 18px",
                borderRadius: "20px",
                marginBottom: "16px",
              }}
            >
              Без рисков для вашего объекта
            </span>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(26px, 3.4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Боитесь сорванных сроков и <span style={{ color: "#E87722" }}>доплат при монтаже?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(17px, 1.4vw, 20px)", lineHeight: 1.65, margin: "16px 0 0", maxWidth: "620px" }}>
              Закрепим цену и сроки в договоре и сделаем детали строго по вашим чертежам. Они приедут на объект
              маркированными и готовыми к монтажу без доработок.
            </p>

          </div>

          <div className="o-pains">
              {pains.map((p) => (
                <div
                  key={p.pain}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "16px",
                    padding: "16px 18px",
                  }}
                >
                  <div style={{ color: "#FF9A57", fontSize: "17px", fontWeight: 800, marginBottom: "6px", textDecoration: "line-through", textDecorationColor: "rgba(255,154,87,0.5)" }}>
                    {p.pain}
                  </div>
                  <div style={{ color: "#fff", fontSize: "18px", lineHeight: 1.5 }}>
                    <span style={{ color: "#6DBE45", fontWeight: 900 }}>✓ </span>
                    {p.fix}
                  </div>
                </div>
              ))}
          </div>

          <div
            className="o-form"
            style={{
              backgroundColor: "#fff",
              borderRadius: "24px",
              padding: "clamp(20px, 3.5vw, 32px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            }}
          >
            <h3 style={{ color: "#222", fontSize: "clamp(20px, 2.2vw, 24px)", fontWeight: 900, lineHeight: 1.25, margin: "0 0 6px" }}>
              Получите расчёт стоимости и сроков по вашим чертежам
            </h3>
            <p style={{ color: "#666", fontSize: "18px", lineHeight: 1.55, margin: "0 0 18px" }}>
              Оставьте имя и телефон. Менеджер свяжется с вами в течение рабочего дня и уточнит детали.
            </p>
            <LeadFormCompact source="offer" buttonText="Получить расчёт" />
          </div>
        </div>
      </div>
    </section>
  );
}

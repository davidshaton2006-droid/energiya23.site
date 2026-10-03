// «Вопросы и ответы»: раскрывающиеся карточки в стиле сайта. Нативный <details> — работает без JS и читается поисковиками.
type Qa = { q: string; a: string };

export function FaqSection({ c = {} }: { c?: { badge?: string; titleBefore?: string; titleAccent?: string; items?: Qa[] } }) {
  const items: Qa[] = c.items ?? [];
  return (
    <section
      id="faq"
      style={{ backgroundColor: "#F5F5F5", padding: "80px 16px", fontFamily: "Montserrat, sans-serif" }}
    >
      <style>{`
        .faq-item summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item .faq-plus { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: rgba(232,119,34,0.12); color: #E87722; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; transition: transform .25s; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-item[open] { border-color: rgba(232,119,34,0.4) !important; }
      `}</style>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
            {c.badge ?? "FAQ"}
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            {c.titleBefore ?? "Вопросы и"} <span style={{ color: "#E87722" }}>{c.titleAccent ?? "ответы"}</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {items.map((it, i) => (
            <details
              key={i}
              className="faq-item"
              style={{
                backgroundColor: "#fff",
                border: "1.5px solid #EBEBEB",
                borderRadius: "16px",
                padding: "18px 22px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              }}
            >
              <summary style={{ color: "#222", fontSize: "18px", fontWeight: 700, lineHeight: 1.4 }}>
                <span>{it.q}</span>
                <span className="faq-plus" aria-hidden="true">+</span>
              </summary>
              <p style={{ color: "#3F3F3F", fontSize: "17px", lineHeight: 1.65, margin: "12px 0 0" }}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

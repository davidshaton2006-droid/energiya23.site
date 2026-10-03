// «Как мы работаем»: нумерованные шаги в стиле сайта (круги-номера, карточки, мягкая тень).
type Step = { title: string; text?: string };

export function ProcessSection({ c = {} }: { c?: { badge?: string; titleBefore?: string; titleAccent?: string; subtitle?: string; steps?: Step[] } }) {
  const steps: Step[] = c.steps ?? [];
  return (
    <section
      id="process"
      style={{ backgroundColor: "#FFFFFF", padding: "80px 16px", fontFamily: "Montserrat, sans-serif" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#6DBE45",
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
            {c.badge ?? "Как мы работаем"}
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            {c.titleBefore ?? "Четыре шага от заявки до"} <span style={{ color: "#6DBE45" }}>{c.titleAccent ?? "готовых деталей"}</span>
          </h2>
          {c.subtitle && (
            <p style={{ color: "#4A4A4A", fontSize: "18px", maxWidth: "640px", margin: "12px auto 0" }}>{c.subtitle}</p>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {steps.map((st, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                padding: "28px 24px",
                border: "1.5px solid #EBEBEB",
                boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: i % 2 ? "#6DBE45" : "#E87722",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 900,
                  boxShadow: i % 2 ? "0 4px 14px rgba(109,190,69,0.35)" : "0 4px 14px rgba(232,119,34,0.35)",
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ color: "#222", fontSize: "20px", fontWeight: 800, lineHeight: 1.3, margin: 0 }}>{st.title}</h3>
              {st.text && <p style={{ color: "#4A4A4A", fontSize: "17px", lineHeight: 1.6, margin: 0 }}>{st.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

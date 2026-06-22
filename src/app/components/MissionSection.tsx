export function MissionSection() {
  return (
    <section
      id="mission"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "80px 16px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
        {/* Label */}
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#6DBE45",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "8px 24px",
            borderRadius: "20px",
            marginBottom: "32px",
          }}
        >
          Наша миссия
        </span>

        {/* Main text */}
        <h2
          style={{
            color: "#222",
            fontSize: "clamp(22px, 2.8vw, 36px)",
            fontWeight: 900,
            lineHeight: 1.4,
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#6DBE45" }}>Наша миссия</span> — обеспечивать строительную
          отрасль надёжными деталями металлоконструкций промышленного качества
        </h2>

        <p
          style={{
            color: "#555",
            fontSize: "clamp(15px, 1.3vw, 18px)",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          Мы работаем по принципу точности, предсказуемости и ответственности на каждом этапе —
          от разработки проектной документации до доставки готовых деталей на объект.
          Каждый заказ — это наша репутация.
        </p>

        {/* Highlighted quote */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "28px 36px",
            border: "2px solid #6DBE45",
            boxShadow: "0 4px 20px rgba(109,190,69,0.12)",
            display: "inline-block",
            maxWidth: "640px",
          }}
        >
          <p
            style={{
              color: "#333",
              fontSize: "clamp(15px, 1.4vw, 19px)",
              fontWeight: 700,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            «Основной принцип работы —{" "}
            <span style={{ color: "#6DBE45" }}>точность, прогнозируемость, ответственность</span>{" "}
            на каждом этапе. 90% клиентов обращаются к нам повторно или рекомендуют партнёрам.»
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginTop: "48px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "5+", label: "отраслей", color: "#E87722" },
            { value: "10+", label: "лет на рынке", color: "#6DBE45" },
            { value: "3 года", label: "гарантия", color: "#E87722" },
            { value: "от 10 дней", label: "сроки производства", color: "#6DBE45" },
          ].map((s) => (
            <div key={s.value} style={{ textAlign: "center" }}>
              <div style={{ color: s.color, fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ color: "#888", fontSize: "12px", fontWeight: 600, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

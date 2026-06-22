import { Briefcase } from "lucide-react";

const vacancies = [
  { title: "Газорезчик / Оператор плазменной резки", req: "Опыт работы с металлом от 1 года, умение читать чертежи" },
  { title: "Сварщик ручной дуговой сварки (РДС/МИГ/МАГ)", req: "Разряд от 4-го, опыт работы с металлоконструкциями" },
  { title: "Слесарь-сборщик металлоконструкций", req: "Опыт работы на производстве, знание сборочных чертежей" },
  { title: "Оператор ЧПУ (станки для резки и сверления)", req: "Опыт работы с ЧПУ-оборудованием" },
  { title: "Инженер-конструктор (КМ/КМД)", req: "Знание норм промышленного строительства, опыт проектирования" },
  { title: "Водитель-экспедитор (категория С/Е)", req: "Опыт дальних рейсов, ответственность" },
  { title: "Менеджер по продажам (B2B, строительная отрасль)", req: "Опыт в сфере металлоконструкций или строительных материалов" },
];

const benefits = [
  "Официальное трудоустройство",
  "Стабильная заработная плата, выплаты в срок",
  "Работа на современном производственном оборудовании",
  "Профессиональный рост и развитие",
  "Дружный коллектив и понятные задачи",
];

export function VacanciesSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="vacancies"
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
              backgroundColor: "#6DBE45",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "6px 20px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          >
            Вакансии
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            Работа в ООО <span style={{ color: "#6DBE45" }}>ЭНЕРГИЯ</span>
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "580px", margin: "12px auto 0" }}>
            Ищем квалифицированных специалистов, готовых работать в команде профессионалов.
            Если вам близки точность, ответственность и стабильность — добро пожаловать.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {/* Vacancies list */}
          <div>
            <h3 style={{ color: "#E87722", fontSize: "16px", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Briefcase size={20} /> Открытые вакансии:
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {vacancies.map((v, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    border: "1.5px solid #EBEBEB",
                    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(109,190,69,0.35)";
                    el.style.background = "rgba(109,190,69,0.04)";
                    el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#EBEBEB";
                    el.style.background = "#F9F9F9";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        backgroundColor: "#E87722",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 900,
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <div style={{ color: "#222", fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>
                        {v.title}
                      </div>
                      <div style={{ color: "#888", fontSize: "12px", lineHeight: 1.5 }}>{v.req}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                padding: "28px",
                border: "1.5px solid rgba(109,190,69,0.25)",
              }}
            >
              <h3 style={{ color: "#6DBE45", fontSize: "16px", fontWeight: 800, marginBottom: "20px" }}>
                Мы предлагаем:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#6DBE45", fontWeight: 900, fontSize: "14px", flexShrink: 0 }}>✓</span>
                    <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                padding: "28px",
                border: "1.5px solid rgba(232,119,34,0.20)",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                Для отклика на вакансию позвоните нам или напишите на email
              </p>
              <a
                href="tel:+79604933356"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  backgroundColor: "#E87722",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 800,
                  textDecoration: "none",
                  marginBottom: "12px",
                  boxShadow: "0 4px 16px rgba(232,119,34,0.28)",
                  fontFamily: "Montserrat, sans-serif",
                  boxSizing: "border-box",
                }}
              >
                +7 (960) 493-33-56
              </a>
              <button
                onClick={scrollToContact}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#6DBE45",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 700,
                  border: "2px solid #6DBE45",
                  cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif",
                  boxSizing: "border-box",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#6DBE45";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#6DBE45";
                }}
              >
                Откликнуться на вакансию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

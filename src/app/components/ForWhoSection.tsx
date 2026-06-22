import { Building2, TrendingUp, Factory } from "lucide-react";

const groups = [
  {
    icon: Building2,
    title: "Для генподрядчиков и строительных компаний",
    color: "#E87722",
    items: [
      "Изготавливаем любые виды деталей металлоконструкций для складов, ангаров, промзданий",
      "Выполняем проектирование КМД и КМ",
      "Осуществляем доставку собственным транспортом по всей России",
      "Контроль качества на каждом этапе производства",
      "Гарантия соблюдения сроков и фиксированная стоимость по договору",
    ],
  },
  {
    icon: TrendingUp,
    title: "Для инвесторов и девелоперов",
    color: "#6DBE45",
    items: [
      "Персональный менеджер и быстрый расчёт заявок",
      "Специальные условия для крупных и повторных заказов",
      "Участие в национальных инвестиционных проектах",
      "Прозрачная коммуникация и отчётность на каждом этапе",
      "Логистические услуги с контролем сохранности груза",
    ],
  },
  {
    icon: Factory,
    title: "Для производственных и логистических компаний",
    color: "#E87722",
    items: [
      "Лазерная и плазменная резка листового металла",
      "Ленточнопильный раскрой металла шириной до 420 мм",
      "Высокоточное сверление и сборка узлов",
      "Размещение серийных и индивидуальных заказов по вашим чертежам и ТУ",
      "Производство деталей, готовых к монтажу без доработок",
    ],
  },
];

export function ForWhoSection() {
  return (
    <section
      id="for-who"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "80px 16px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
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
            Наши клиенты
          </span>
          <h2
            style={{
              color: "#222",
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Для кого мы <span style={{ color: "#6DBE45" }}>работаем</span>
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "560px", margin: "12px auto 0" }}>
            Комплексные решения для B2B-заказчиков в строительстве и промышленности
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {groups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: "1.5px solid #EBEBEB",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.10)";
                  el.style.borderColor = group.color + "50";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  el.style.borderColor = "#EBEBEB";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: `${group.color}15`,
                    border: `2px solid ${group.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={24} color={group.color} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "#222",
                    fontSize: "16px",
                    fontWeight: 800,
                    lineHeight: 1.4,
                    marginBottom: "20px",
                  }}
                >
                  {group.title}
                </h3>

                {/* Items */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {group.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: group.color,
                          flexShrink: 0,
                          marginTop: "7px",
                        }}
                      />
                      <span style={{ color: "#555", fontSize: "13px", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

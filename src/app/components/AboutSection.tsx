import { Shield, Truck, CheckCircle } from "lucide-react";

const productionImg =
  "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxNDU4NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const equipment = [
  "ЧПУ-станки — исключают ошибки ручной разметки",
  "Лазерная резка металла — высокая точность контура",
  "Плазменная резка металла — листы до 40 мм",
  "Ленточнопильный раскрой — ширина до 420 мм",
  "Высокоточное сверление отверстий",
  "Сборочный участок — контрольная сборка узлов",
];

const logistics = [
  "Собственный транспорт без посредников",
  "Контроль погрузки и сохранности",
  "Доставка по всей России",
  "Более 1 000 000 км — общий пробег выполненных перевозок",
];

const guarantees = [
  "Гарантия 3 года на продукцию",
  "Фиксированная стоимость по договору — без скрытых наценок",
  "Соблюдение сроков производства и доставки",
  "Контроль качества на всех этапах",
  "Прозрачная коммуникация — клиент знает, что и когда получит",
];

const clients = [
  "Генподрядчики и строительные компании",
  "Инвесторы и девелоперы",
  "Агропредприятия",
  "Производственные и логистические компании",
  "Участники национальных инвестиционных проектов",
];

export function AboutSection() {
  return (
    <section
      id="about"
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
            О компании
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            ООО <span style={{ color: "#6DBE45" }}>ЭНЕРГИЯ</span>
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "720px", margin: "12px auto 0" }}>
            Производитель деталей металлоконструкций промышленного качества. Основана в 2014 году,
            Краснодар. Реализовали проекты в рамках национальных инвестиционных программ и выполнили
            сотни коммерческих B2B-заказов.
          </p>
        </div>

        {/* Main content with photo */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
            alignItems: "start",
          }}
        >
          {/* Photo */}
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
              src={productionImg}
              alt="Производство металлоконструкций"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
              }}
            >
              <div style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>
                90% клиентов возвращаются
              </div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px" }}>
                или рекомендуют партнёрам
              </div>
            </div>
            {/* Year badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "#6DBE45",
                borderRadius: "12px",
                padding: "10px 16px",
                textAlign: "center",
                boxShadow: "0 4px 14px rgba(109,190,69,0.35)",
              }}
            >
              <div style={{ color: "#fff", fontSize: "20px", fontWeight: 900, lineHeight: 1 }}>2014</div>
              <div style={{ color: "rgba(255,255,255,0.90)", fontSize: "10px", fontWeight: 600 }}>год основания</div>
            </div>
          </div>

          {/* Info blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Equipment */}
            <div
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "16px",
                padding: "24px",
                border: "1.5px solid #EBEBEB",
              }}
            >
              <h3 style={{ color: "#E87722", fontSize: "15px", fontWeight: 800, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle size={18} /> Производственные мощности
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {equipment.map((item, i) => (
                  <li key={i} style={{ color: "#444", fontSize: "13px", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#6DBE45", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Logistics */}
            <div
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "16px",
                padding: "24px",
                border: "1.5px solid #EBEBEB",
              }}
            >
              <h3 style={{ color: "#E87722", fontSize: "15px", fontWeight: 800, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Truck size={18} /> Логистика
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {logistics.map((item, i) => (
                  <li key={i} style={{ color: "#444", fontSize: "13px", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#E87722", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Guarantees + clients row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Guarantees */}
          <div
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "20px",
              padding: "28px",
              border: "1.5px solid rgba(109,190,69,0.25)",
            }}
          >
            <h3 style={{ color: "#6DBE45", fontSize: "16px", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Shield size={20} /> Гарантии и ответственность
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {guarantees.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#6DBE45", flexShrink: 0, fontWeight: 900, fontSize: "14px" }}>✓</span>
                  <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clients */}
          <div
            style={{
              backgroundColor: "#F9F9F9",
              borderRadius: "20px",
              padding: "28px",
              border: "1.5px solid rgba(232,119,34,0.20)",
            }}
          >
            <h3 style={{ color: "#E87722", fontSize: "16px", fontWeight: 800, marginBottom: "20px" }}>
              Клиенты и партнёры
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {clients.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
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
                      color: "#E87722",
                      fontSize: "10px",
                      fontWeight: 900,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "20px",
                padding: "14px 16px",
                backgroundColor: "rgba(232,119,34,0.07)",
                borderRadius: "10px",
                border: "1px solid rgba(232,119,34,0.15)",
                color: "#555",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              Нас выбирают за <span style={{ color: "#E87722", fontWeight: 700 }}>стабильность, точность</span>,
              соблюдение сроков и предсказуемый результат.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

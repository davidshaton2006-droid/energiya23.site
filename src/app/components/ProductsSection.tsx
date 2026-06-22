import { ChevronRight } from "lucide-react";

const productCategories = [
  {
    title: "Детали металлоконструкций для складов",
    items: [
      "Колонны и стойки каркаса",
      "Фермы покрытия и балки",
      "Прогоны и связи",
      "Узловые и соединительные элементы",
      "Закладные детали и анкерные группы",
    ],
    desc: "Производим несущие и ограждающие конструкции для складских комплексов любой площади и высоты по проектной документации КМ и КМД.",
  },
  {
    title: "Детали металлоконструкций для ангаров",
    items: [
      "Каркасные элементы ангарных конструкций",
      "Рёбра жёсткости и усилительные вставки",
      "Опорные плиты и башмаки",
      "Доборные элементы и нестандартные детали по ТУ",
    ],
    desc: "Производим детали для ангарных конструкций любых типов: арочных, каркасных, модульных. Детали поступают маркированными, готовыми к монтажу.",
  },
  {
    title: "Детали для промышленных зданий",
    items: [
      "Тяжёлые несущие конструкции каркасов",
      "Технологические площадки и этажерки",
      "Опорные и монтажные узлы",
      "Индивидуальные детали по проектной документации",
    ],
    desc: "Выполняем заказы повышенной сложности для производственных, логистических и агропромышленных объектов. Задействовано более 5 отраслей.",
  },
  {
    title: "Проектирование КМ и КМД",
    items: [
      "Разработка схем расположения конструкций",
      "Деталировочные чертежи для производства",
      "Спецификации металлопроката",
      "Сопровождение проекта на всех этапах",
    ],
    desc: "Разрабатываем проектную документацию марок КМ и КМД. Проектирование ведётся специалистами с учётом требований заказчика и действующих СНиП и ГОСТ.",
  },
];

const whatWeProduce = [
  "Детали металлоконструкций для складов",
  "Детали металлоконструкций для ангаров",
  "Детали металлоконструкций для промышленных зданий",
  "Несущие конструкции и фермы",
  "Колонны, балки, прогоны",
  "Узлы и соединительные элементы",
  "Индивидуальные детали по проектной документации КМ и КМД",
  "Серийные и единичные заказы любой сложности",
];

export function ProductsSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="products"
      style={{
        backgroundColor: "#F5F5F5",
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
            Продукция
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            Детали металлоконструкций для{" "}
            <span style={{ color: "#6DBE45" }}>складов, ангаров</span> и промышленных зданий
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "640px", margin: "12px auto 0" }}>
            ООО ЭНЕРГИЯ производит полный комплект деталей металлоконструкций
            промышленного качества, готовых к монтажу без доработок
          </p>
        </div>

        {/* What we produce banner */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "40px",
            border: "1.5px solid #EBEBEB",
            boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ color: "#6DBE45", fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>
            Мы производим:
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "12px",
            }}
          >
            {whatWeProduce.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ChevronRight size={16} color="#E87722" style={{ flexShrink: 0 }} />
                <span style={{ color: "#333", fontSize: "14px", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid #F0F0F0",
              color: "#666",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            Компания поставляет продукцию по всей России.{" "}
            <span style={{ color: "#E87722", fontWeight: 700 }}>Собственный автопарк.</span>{" "}
            Общий пробег выполненных перевозок —{" "}
            <span style={{ color: "#E87722", fontWeight: 700 }}>более 1 000 000 км.</span>
          </div>
        </div>

        {/* Product categories grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {productCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "28px",
                border: "1.5px solid #EBEBEB",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.09)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
              }}
            >
              {/* Category number */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#E87722",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 900,
                  color: "#fff",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>

              <h3 style={{ color: "#222", fontSize: "15px", fontWeight: 800, lineHeight: 1.4, margin: 0 }}>
                {cat.title}
              </h3>
              <p style={{ color: "#777", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{cat.desc}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {cat.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#6DBE45", flexShrink: 0, marginTop: "7px" }} />
                    <span style={{ color: "#444", fontSize: "13px", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={scrollToContact}
            style={{
              backgroundColor: "#6DBE45",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              fontFamily: "Montserrat, sans-serif",
              boxShadow: "0 4px 20px rgba(109,190,69,0.30)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(109,190,69,0.40)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(109,190,69,0.30)";
            }}
          >
            Отправить заявку на расчёт
          </button>
        </div>
      </div>
    </section>
  );
}

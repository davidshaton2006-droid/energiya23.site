const advantages = [
  {
    num: "01",
    title: "Точность изготовления",
    sub: "по проектной документации",
    text: "Все детали производятся строго по чертежам КМ и КМД. ЧПУ-станки исключают ошибки ручной разметки. Детали поступают на объект маркированными, готовыми к монтажу без доработок.",
  },
  {
    num: "02",
    title: "Гарантия 3 года",
    sub: "и фиксированная цена по договору",
    text: "Обеспечиваем гарантию 3 года на всю продукцию. Цена фиксируется в договоре — никаких скрытых наценок. Вы точно знаете, сколько и когда получите.",
  },
  {
    num: "03",
    title: "Сроки от 10 дней",
    sub: "серийные и индивидуальные заказы",
    text: "Собственный склад металлопроката позволяет приступать к производству немедленно. Производственный цикл начинается от 10 дней. Выполняем как единичные, так и серийные заказы любой сложности.",
  },
  {
    num: "04",
    title: "Доставка по всей России",
    sub: "собственный автопарк",
    text: "Собственный транспорт без привлечения посредников. Более 1 000 000 км выполненных перевозок. Контроль погрузки и сохранности груза на каждом этапе.",
  },
];

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      style={{
        backgroundColor: "#F5F5F5",
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
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "6px 20px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          >
            Почему выбирают нас
          </span>
          <h2
            style={{
              color: "#222",
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Наши <span style={{ color: "#E87722" }}>преимущества</span>
          </h2>
        </div>

        {/* 2x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {advantages.map((adv) => (
            <div
              key={adv.num}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "32px",
                border: "1.5px solid #EBEBEB",
                boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.10)";
                el.style.borderColor = "rgba(232,119,34,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 18px rgba(0,0,0,0.06)";
                el.style.borderColor = "#EBEBEB";
              }}
            >
              {/* Number badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#E87722",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(232,119,34,0.30)",
                  }}
                >
                  <span style={{ color: "#fff", fontSize: "16px", fontWeight: 900 }}>{adv.num}</span>
                </div>
                <div>
                  <div style={{ color: "#222", fontSize: "17px", fontWeight: 800, lineHeight: 1.3 }}>
                    {adv.title}
                  </div>
                  <div style={{ color: "#E87722", fontSize: "12px", fontWeight: 600, marginTop: "2px" }}>
                    {adv.sub}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "#F0F0F0" }} />

              {/* Text */}
              <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

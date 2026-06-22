const priceRows = [
  {
    service: "Изготовление деталей металлоконструкций для складов и ангаров (простые конструкции)",
    note: "Цена указана за работу, без стоимости материала",
    price: "от 20 р/кг",
    highlight: false,
  },
  {
    service: "Изготовление деталей металлоконструкций для промышленных зданий (сложные узлы)",
    note: "Цена указана за работу, без стоимости материала",
    price: "от 36 р/кг",
    highlight: false,
  },
  {
    service: "Металлоконструкции по индивидуальным чертежам заказчика",
    note: "По проектной документации КМ и КМД",
    price: "по запросу",
    highlight: true,
  },
  {
    service: "Лазерная резка металла",
    note: "Высокоточная резка по чертежам",
    price: "от 15 р/кг",
    highlight: false,
  },
  {
    service: "Плазменная резка металла",
    note: "Толщина реза — до 40 мм",
    price: "от 15 р/кг",
    highlight: false,
  },
  {
    service: "Ленточнопильный раскрой металла",
    note: "Ширина до 420 мм",
    price: "от 12 р/кг",
    highlight: false,
  },
  {
    service: "Доставка металлоконструкций собственным транспортом",
    note: "По всей территории России",
    price: "по запросу",
    highlight: true,
  },
  {
    service: "Проектирование КМ и КМД",
    note: "Разработка проектной документации",
    price: "по запросу",
    highlight: true,
  },
];

export function PriceSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="price"
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
            Прайс-лист
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            Цены на производство{" "}
            <span style={{ color: "#E87722" }}>деталей металлоконструкций</span>
          </h2>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "640px", margin: "12px auto 0" }}>
            Стоимость производства формируется индивидуально. Для точного расчёта отправьте
            проектную документацию или спецификацию.
          </p>
        </div>

        {/* Price table */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1.5px solid #EBEBEB",
            boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
            marginBottom: "32px",
          }}
        >
          {/* Table header — hidden on mobile via CSS */}
          <div
            className="price-table-header"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              backgroundColor: "#E87722",
              padding: "16px 28px",
              gap: "16px",
            }}
          >
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Вид работы
            </div>
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Примечание
            </div>
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", minWidth: "100px", textAlign: "right" }}>
              Цена
            </div>
          </div>

          {/* Mobile-only header */}
          <div
            className="price-mobile-header"
            style={{ backgroundColor: "#E87722", padding: "14px 20px", display: "none" }}
          >
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Прайс-лист
            </div>
          </div>

          {/* Rows */}
          {priceRows.map((row, idx) => (
            <div
              key={idx}
              className="price-table-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr auto",
                padding: "18px 28px",
                gap: "16px",
                borderBottom: idx < priceRows.length - 1 ? "1px solid #F0F0F0" : "none",
                backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#FAFAFA",
                transition: "background 0.15s",
                cursor: "default",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(232,119,34,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = idx % 2 === 0 ? "#FFFFFF" : "#FAFAFA";
              }}
            >
              <div className="price-col-service" style={{ color: "#333", fontSize: "14px", lineHeight: 1.5 }}>{row.service}</div>
              <div className="price-col-note" style={{ color: "#888", fontSize: "13px", lineHeight: 1.5 }}>{row.note}</div>
              <div
                className="price-col-price"
                style={{
                  minWidth: "100px",
                  textAlign: "right",
                  color: row.highlight ? "#6DBE45" : "#E87722",
                  fontSize: "15px",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                {row.price}
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "24px 28px",
            border: "1.5px solid rgba(109,190,69,0.25)",
            marginBottom: "32px",
            color: "#555",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          <span style={{ color: "#6DBE45", fontWeight: 700 }}>Для расчёта вашего заказа</span> по цене и
          срокам производства — позвоните нам или отправьте спецификацию. Коммерческое предложение
          готовим под конкретный проект, сроки и бюджет клиента.
          <br />
          <span style={{ color: "#888" }}>Отдел продаж: пн–пт 8:00–17:00</span>
          <span style={{ margin: "0 12px", color: "#CCC" }}>|</span>
          <a href="tel:+79604933356" style={{ color: "#E87722", fontWeight: 700, textDecoration: "none" }}>
            +7 (960) 493-33-56
          </a>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={scrollToContact}
            style={{
              backgroundColor: "#E87722",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              fontFamily: "Montserrat, sans-serif",
              boxShadow: "0 4px 20px rgba(232,119,34,0.30)",
              transition: "transform 0.2s, box-shadow 0.2s",
              width: "100%",
              maxWidth: "420px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(232,119,34,0.40)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(232,119,34,0.30)";
            }}
          >
            Отправить спецификацию для расчёта
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .price-table-header { display: none !important; }
          .price-mobile-header { display: block !important; }
          .price-table-row {
            grid-template-columns: 1fr !important;
            padding: 16px 20px !important;
            gap: 6px !important;
          }
          .price-col-service {
            font-size: 13px !important;
            font-weight: 600;
            color: #222 !important;
          }
          .price-col-note {
            font-size: 11px !important;
            color: #aaa !important;
          }
          .price-col-price {
            text-align: left !important;
            padding-top: 6px !important;
            font-size: 16px !important;
            border-top: 1px solid #f0f0f0;
            min-width: unset !important;
          }
        }
      `}</style>
    </section>
  );
}

import { Star } from "lucide-react";

const galleryImages = [
  {
    url: "/img/svarka-balki.webp",
    label: "Несущие металлоконструкции",
  },
  {
    url: "/img/arochnye-karkasy.webp",
    label: "Ангарные конструкции",
  },
  {
    url: "/img/svarka-konstrukcii.webp",
    label: "Сварка и сборка узлов",
  },
  {
    url: "/img/lentochnaya-pila.webp",
    label: "Ленточнопильный раскрой металла",
  },
];

const reviews = [
  {
    name: "Михаил Сергеев",
    company: "ООО «СтройКомплект»",
    role: "Главный инженер",
    text: "Работаем с ООО ЭНЕРГИЯ уже третий год. Все детали приходят точно по проекту, маркированные, готовые к монтажу. Ни разу не было проблем со сроками. Рекомендуем как надёжного партнёра.",
    rating: 5,
  },
  {
    name: "Алексей Фролов",
    company: "ГК «ПромСтрой»",
    role: "Директор по снабжению",
    text: "Отличное качество изготовления, фиксированные цены по договору — это главное для нас. Особенно ценим скорость: от заявки до получения деталей прошло 14 дней. Для сложного объекта это отличный результат.",
    rating: 5,
  },
  {
    name: "Дмитрий Краснов",
    company: "ИП «Краснов Д.В.»",
    role: "Руководитель проекта",
    text: "Заказывали колонны и фермы для производственного цеха. Точность изготовления — на высшем уровне. Менеджер всегда на связи, держал в курсе каждого этапа. Обязательно обратимся снова.",
    rating: 5,
  },
];

export function GalleryReviews() {
  return (
    <>
      {/* Gallery */}
      <section
        id="gallery"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "80px 16px",
          fontFamily: "Montserrat, sans-serif",
        }}
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
              Галерея
            </span>
            <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900 }}>
              Примеры нашей <span style={{ color: "#6DBE45" }}>продукции</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1.02)";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
                }}
              >
                <img src={img.url} alt={img.label} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    backgroundColor: "rgba(232,119,34,0.92)",
                    borderRadius: "10px",
                    padding: "8px 14px",
                  }}
                >
                  <span style={{ color: "#fff", fontSize: "17px", fontWeight: 700 }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        style={{
          backgroundColor: "#F5F5F5",
          padding: "80px 16px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
              Отзывы клиентов
            </span>
            <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900 }}>
              Что говорят наши <span style={{ color: "#E87722" }}>клиенты</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1.5px solid #EBEBEB",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px" }}>
                  {Array(review.rating).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="#E87722" color="#E87722" />
                  ))}
                </div>

                {/* Text */}
                <p style={{ color: "#3F3F3F", fontSize: "18px", lineHeight: 1.7, margin: 0, flexGrow: 1, fontStyle: "italic" }}>
                  «{review.text}»
                </p>

                {/* Author */}
                <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: "16px" }}>
                  <div style={{ color: "#222", fontSize: "18px", fontWeight: 800 }}>{review.name}</div>
                  <div style={{ color: "#6DBE45", fontSize: "16px", fontWeight: 600 }}>{review.company}</div>
                  <div style={{ color: "#999", fontSize: "16px" }}>{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

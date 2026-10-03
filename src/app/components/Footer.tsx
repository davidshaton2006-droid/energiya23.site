import { Logo } from "./Logo";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Продукция", href: "#products" },
  { label: "Склад", href: "#warehouse" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Прайс-лист", href: "#price" },
  { label: "Вакансии", href: "#vacancies" },
  { label: "Контакты", href: "#contacts" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/" + href;
  };

  return (
    <footer
      style={{
        backgroundColor: "#222222",
        fontFamily: "Montserrat, sans-serif",
        borderTop: "3px solid #E87722",
      }}
    >
      {/* Main footer content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 16px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Company info */}
          <div style={{ gridColumn: "span 1" }}>
            <Logo />
            <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.7, marginTop: "16px", maxWidth: "280px" }}>
              Производство деталей металлоконструкций промышленного качества для строительства
              складов, ангаров и промышленных зданий.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <a
                href="https://wa.me/79604933356"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(37,211,102,0.12)",
                  border: "1.5px solid rgba(37,211,102,0.30)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.12)"; }}
              >
                <MessageCircle size={18} color="#25D366" />
              </a>
              <a
                href="tel:+79604933356"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(232,119,34,0.12)",
                  border: "1.5px solid rgba(232,119,34,0.30)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,119,34,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,119,34,0.12)"; }}
              >
                <Phone size={18} color="#E87722" />
              </a>
              <a
                href="mailto:energiya787@mail.ru"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(109,190,69,0.12)",
                  border: "1.5px solid rgba(109,190,69,0.30)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(109,190,69,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(109,190,69,0.12)"; }}
              >
                <Mail size={18} color="#6DBE45" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
              Разделы сайта
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#999",
                      fontSize: "15px",
                      fontFamily: "Montserrat, sans-serif",
                      padding: "6px 0",
                      textAlign: "left",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#E87722"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#999"; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
              Услуги
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["Металлоконструкции для складов", "/metallokonstrukcii-dlya-skladov/"],
                ["Металлоконструкции для ангаров", "/metallokonstrukcii-dlya-angarov/"],
                ["Металлоконструкции для промзданий", "/metallokonstrukcii-dlya-promyshlennyh-zdanij/"],
                ["Лазерная резка металла", "/lazernaya-rezka-metalla/"],
                ["Плазменная резка металла", "/plazmennaya-rezka-metalla/"],
                ["Ленточнопильный раскрой", "/lentochnopilnyj-raskroj-metalla/"],
                ["Проектирование КМ и КМД", "/proektirovanie-km-kmd/"],
                ["Огнезащита и АКЗ", "/ognezashchita-metallokonstrukcij/"],
                ["Доставка по России", "/dostavka-metallokonstrukcij/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} style={{ color: "#999", fontSize: "15px", textDecoration: "none", display: "inline-block", padding: "4px 0" }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
              Контакты
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Phone size={15} color="#E87722" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#777", fontSize: "13px", marginBottom: "2px" }}>Телефон</div>
                  <a href="tel:+79604933356" style={{ color: "#fff", fontSize: "16px", fontWeight: 700, textDecoration: "none" }}>
                    +7 (960) 493-33-56
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Mail size={15} color="#6DBE45" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#777", fontSize: "13px", marginBottom: "2px" }}>Email</div>
                  <a href="mailto:energiya787@mail.ru" style={{ color: "#fff", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>
                    energiya787@mail.ru
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={15} color="#E87722" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ color: "#777", fontSize: "13px", marginBottom: "2px" }}>Адрес</div>
                  <div style={{ color: "#ccc", fontSize: "15px", lineHeight: 1.5 }}>
                    г. Краснодар,<br />ул. Ростовское шоссе 14/2
                  </div>
                </div>
              </div>
              <div style={{ color: "#999", fontSize: "14px" }}>
                <span style={{ color: "#6DBE45", fontWeight: 600 }}>Пн–Пт:</span> 8:00–17:00
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+79604933356"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                backgroundColor: "#E87722",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 800,
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                boxShadow: "0 4px 14px rgba(232,119,34,0.30)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
            >
              <Phone size={14} />
              Позвонить
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px 16px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div style={{ color: "#777", fontSize: "14px" }}>
            © 2014–2026 ООО ЭНЕРГИЯ. Производство деталей металлоконструкций в Краснодаре.
          </div>
          <div style={{ color: "#666", fontSize: "14px" }}>
            г. Краснодар, ул. Ростовское шоссе 14/2 | +7 (960) 493-33-56 |{" "}
            <a href="/privacy/" style={{ color: "#999", textDecoration: "underline" }}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
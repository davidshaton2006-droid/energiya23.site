import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Продукция", href: "#products" },
  { label: "Склад", href: "#warehouse" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Прайс", href: "#price" },
  { label: "Вакансии", href: "#vacancies" },
  { label: "Контакты", href: "#contacts" },
];

export function Header({ items = navItems }: { items?: { label: string; href: string }[] } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/" + href;
  };

  return (
    <header
      style={{
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "#FFFFFF",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "0 1px 0 #EBEBEB",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top bar */}
      <div className="hidden md:block" style={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid #E8E8E8" }}>
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <span style={{ color: "#666", fontSize: "12px" }}>
            г. Краснодар, ул. Ростовское шоссе 14/2
          </span>
          <div className="flex items-center gap-4">
            <span style={{ color: "#666", fontSize: "12px" }}>Пн–Пт: 8:00–17:00</span>
            <a
              href="tel:+79604933356"
              style={{ color: "#E87722", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}
            >
              +7 (960) 493-33-56
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <button onClick={() => handleNav("#hero")} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#444",
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#E87722";
                  (e.target as HTMLButtonElement).style.background = "rgba(232,119,34,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#444";
                  (e.target as HTMLButtonElement).style.background = "none";
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://wa.me/79604933356"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#25D366",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <a
              href="tel:+79604933356"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#E87722",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Phone size={14} />
              Позвонить
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#333" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #EBEBEB", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mt-3">
              <a
                href="https://wa.me/79604933356"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="tel:+79604933356"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  backgroundColor: "#E87722",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <Phone size={15} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
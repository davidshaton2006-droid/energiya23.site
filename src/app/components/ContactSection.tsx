import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const partnerBenefits = [
  "Работаем с 2014 года — опыт в реализации государственных и коммерческих проектов",
  "Задействовано более 5 отраслей — понимаем специфику разных сфер",
  "90% клиентов возвращаются или рекомендуют нас партнёрам",
  "Фиксированная стоимость по договору — никаких скрытых платежей",
  "Гарантия 3 года на продукцию",
  "Сроки производства от 10 дней",
  "Собственный транспорт — доставка по всей России",
  "Контроль качества на каждом этапе производства",
];

const steps = [
  { num: "1", text: "Отправьте проектную документацию, чертежи или спецификацию" },
  { num: "2", text: "Получите расчёт стоимости и сроков производства" },
  { num: "3", text: "Зафиксируйте условия в договоре с гарантиями" },
  { num: "4", text: "Получите готовые детали в срок с доставкой на объект" },
];

export function ContactSection() {
  useEffect(() => {
    // Внедряем скрипты amoCRM только если они еще не добавлены
    if (!document.getElementById("amoforms_script_1703750")) {
      const formContainer = document.getElementById("amoCRM-form-container");
      
      if (formContainer) {
        // Скрипт конфигурации
        const configScript = document.createElement("script");
        configScript.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1703750",hash:"1b9b12cdc655fd30cda4d4e013c87d10",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;
        
        // Основной скрипт формы
        const mainScript = document.createElement("script");
        mainScript.id = "amoforms_script_1703750";
        mainScript.async = true;
        mainScript.charset = "utf-8";
        mainScript.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1777207576";
        
        // Вставляем скрипты в наш контейнер
        formContainer.appendChild(configScript);
        formContainer.appendChild(mainScript);
      }
    }
  }, []);

  return (
    <>
      {/* Partnership section */}
      <section
        id="partnership"
        style={{
          backgroundColor: "#F5F5F5",
          padding: "80px 16px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
              Сотрудничество
            </span>
            <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900 }}>
              Приглашаем к <span style={{ color: "#6DBE45" }}>постоянному сотрудничеству</span>
            </h2>
            <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "640px", margin: "12px auto 0" }}>
              ООО ЭНЕРГИЯ выстраивает с каждым клиентом стабильные, долгосрочные
              партнёрские отношения. Для постоянных партнёров — максимально комфортные условия.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {/* Benefits */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "32px",
                border: "1.5px solid rgba(109,190,69,0.25)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ color: "#6DBE45", fontSize: "17px", fontWeight: 800, marginBottom: "24px" }}>
                Почему нас выбирают партнёры:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {partnerBenefits.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#6DBE45", fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to start */}
            <div>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "32px",
                  border: "1.5px solid rgba(232,119,34,0.20)",
                  marginBottom: "24px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ color: "#E87722", fontSize: "17px", fontWeight: 800, marginBottom: "24px" }}>
                  Как начать сотрудничество:
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {steps.map((step) => (
                    <div key={step.num} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: "#E87722",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 900,
                          flexShrink: 0,
                        }}
                      >
                        {step.num}
                      </div>
                      <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.6, paddingTop: "6px" }}>
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1.5px solid #EBEBEB",
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                }}
              >
                <p style={{ color: "#555", fontSize: "14px", marginBottom: "16px", lineHeight: 1.6 }}>
                  Мы неустанно развиваем производство и расширяем мощности, ориентируясь на
                  потребности наших партнёров.
                </p>
                <a
                  href="tel:+79604933356"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    backgroundColor: "#6DBE45",
                    color: "#fff",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: 800,
                    textDecoration: "none",
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    boxShadow: "0 4px 16px rgba(109,190,69,0.28)",
                    boxSizing: "border-box",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
                >
                  Оставить заявку на сотрудничество
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts section */}
      <section
        id="contacts"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "80px 16px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
              Контакты
            </span>
            <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900 }}>
              Свяжитесь с <span style={{ color: "#E87722" }}>нами</span>
            </h2>
            <p style={{ color: "#666", fontSize: "16px", marginTop: "12px", maxWidth: "580px", margin: "12px auto 0" }}>
              Готовы подготовить коммерческое предложение под ваш проект.
              Отправьте спецификацию или чертежи — свяжемся в течение рабочего дня.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  icon: Phone,
                  label: "Телефон",
                  value: "+7 (960) 493-33-56",
                  href: "tel:+79604933356",
                  color: "#E87722",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "energiya787@mail.ru",
                  href: "mailto:energiya787@mail.ru",
                  color: "#6DBE45",
                },
                {
                  icon: MapPin,
                  label: "Адрес производства",
                  value: "г. Краснодар, ул. Ростовское шоссе 14/2",
                  href: "https://maps.yandex.ru/?text=г.+Краснодар,+ул.+Ростовское+шоссе+14/2",
                  color: "#E87722",
                },
                {
                  icon: Clock,
                  label: "Режим работы отдела продаж",
                  value: "Пн–Пт: 8:00–17:00",
                  href: null,
                  color: "#6DBE45",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                const content = (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: "#F9F9F9",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      border: "1.5px solid #EBEBEB",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      cursor: item.href ? "pointer" : "default",
                    }}
                    onMouseEnter={(e) => {
                      if (item.href) {
                        (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}50`;
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#EBEBEB";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        backgroundColor: `${item.color}12`,
                        border: `1.5px solid ${item.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color={item.color} />
                    </div>
                    <div>
                      <div style={{ color: "#999", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                        {item.label}
                      </div>
                      <div style={{ color: "#222", fontSize: "14px", fontWeight: 700 }}>{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={idx} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    {content}
                  </a>
                ) : (
                  <div key={idx}>{content}</div>
                );
              })}

              {/* Requisites */}
              <div
                style={{
                  backgroundColor: "#F9F9F9",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  border: "1.5px solid #EBEBEB",
                }}
              >
                <div style={{ color: "#999", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                  Реквизиты компании
                </div>
                <div style={{ color: "#555", fontSize: "13px", lineHeight: 1.8 }}>
                  <div style={{ fontWeight: 700, color: "#222" }}>ООО ЭНЕРГИЯ</div>
                  <div>ИНН/КПП: [укажите] | ОГРН: [укажите]</div>
                </div>
                <button
                  style={{
                    marginTop: "12px",
                    backgroundColor: "transparent",
                    border: "1.5px solid rgba(232,119,34,0.40)",
                    color: "#E87722",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "Montserrat, sans-serif",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,119,34,0.07)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                >
                  Скачать реквизиты
                </button>
              </div>
            </div>

            {/* Form */}
            <div
              style={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                padding: "clamp(20px, 4vw, 36px)",
                border: "1.5px solid #EBEBEB",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              
              
              
              {/* amoCRM Form Container */}
              <div 
                id="amoCRM-form-container"
                style={{ 
                  width: "100%", 
                  minHeight: "400px", 
                  position: "relative",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                {/* 
                  ВНИМАНИЕ: Скрипт amoCRM загружается через useEffect в начале компонента.
                  Этот div служит контейнером, куда amoCRM встроит свою форму.
                */}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div
            style={{
              marginTop: "40px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1.5px solid #EBEBEB",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?mode=search&text=%D0%B3.%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80,%20%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5,%2014/2&z=16"
              width="100%"
              height="380"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              title="Карта расположения Завод ЭНЕРГИЯ"
            />
          </div>
        </div>
      </section>
    </>
  );
}
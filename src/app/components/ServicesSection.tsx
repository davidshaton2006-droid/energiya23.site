import { Zap, Flame, Scissors, Drill, Wrench, Truck, Shield, Wind, PaintBucket, Award, Scale, Map, Calculator, PenTool, CheckCircle, Check } from "lucide-react";
const protectionImg = "/img/protection.webp";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Zap,
    title: "Лазерная резка металла",
    desc: "Высокоточная лазерная резка обеспечивает чистый рез с минимальными допусками. Применяется для деталей, требующих особой точности контура.",
    features: ["Точность реза по чертежу", "Минимальная зона термического воздействия", "Обработка деталей сложной формы"],
    color: "#E87722",
  },
  {
    icon: Flame,
    title: "Плазменная резка металла",
    desc: "Плазменная резка для работы с листовым прокатом толщиной до 40 мм. Высокая производительность при выполнении серийных заказов.",
    features: ["Толщина реза — до 40 мм", "Высокая скорость раскроя", "Подходит для серийного производства"],
    color: "#E87722",
  },
  {
    icon: Scissors,
    title: "Ленточнопильный раскрой",
    desc: "Ленточная пила обеспечивает точный раскрой длинномерного и профильного металлопроката. Ширина реза — до 420 мм.",
    features: ["Ширина реза — до 420 мм", "Работа с профилем любого сечения", "Высокая точность размеров заготовок"],
    color: "#6DBE45",
  },
  {
    icon: Drill,
    title: "Высокоточное сверление",
    desc: "Станочное сверление отверстий под болтовые соединения, монтажные элементы и технологические нужды. ЧПУ-управление.",
    features: ["Сверление под болтовые соединения", "Соблюдение допусков проекта", "ЧПУ-управление — исключает ошибки"],
    color: "#6DBE45",
  },
  {
    icon: Wrench,
    title: "Сборка узлов металлоконструкций",
    desc: "Сборочный участок обеспечивает контрольную и окончательную сборку узлов перед отправкой на объект.",
    features: ["Контрольная сборка перед отгрузкой", "Маркировка деталей по монтажной схеме", "Готовность к монтажу без доработок"],
    color: "#E87722",
  },
  {
    icon: Truck,
    title: "Доставка по России",
    desc: "Собственный автопарк обеспечивает доставку в любую точку России с контролем сохранности груза.",
    features: ["Собственный транспорт — без посредников", "Контроль погрузки и сохранности", "Более 1 000 000 км выполненных рейсов"],
    color: "#6DBE45",
  },
];

const protectionTargets = [
  { icon: Shield, title: "Металлоконструкции", desc: "огнезащита (повышение предела огнестойкости) и антикоррозийная защита (АКЗ)" },
  { icon: Flame, title: "Деревянные элементы", desc: "пропитка профессиональными составами для защиты от возгорания" },
  { icon: Wind, title: "Инженерные системы", desc: "огнезащита воздуховодов и вентиляции" },
  { icon: PaintBucket, title: "Спецповерхности", desc: "обработка текстильных материалов и финишная декоративная окраска" },
];

const protectionReasons = [
  "Используем только сертифицированные составы и современное оборудование с ЧПУ.",
  "Сдача работ в МЧС «под ключ» и подготовка полного пакета исполнительной документации.",
  "Работаем по всей России. Оперативно рассчитываем стоимость и выходим на объект.",
  "Гарантируем соответствие ГОСТ и отраслевым стандартам.",
  "Прозрачные условия: работаем с НДС, строго соблюдаем сроки договора.",
  "Квалифицированные бригады с опытом на крупнейших промышленных площадках.",
];

const protectionSteps = [
  { icon: Calculator, title: "Расчет", desc: "Анализируем проект и составляем смету" },
  { icon: PenTool, title: "Проектирование", desc: "Готовим документацию и согласовываем план защиты" },
  { icon: Wrench, title: "Исполнение", desc: "Проводим обработку сертифицированными материалами" },
  { icon: CheckCircle, title: "Сдача", desc: "Контроль качества и передача готового объекта с документами для надзорных органов" },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacts");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
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
              fontSize: "14px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "6px 20px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          >
            Услуги
          </span>
          <h2 style={{ color: "#222", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, lineHeight: 1.2 }}>
            Полный цикл производства{" "}
            <span style={{ color: "#E87722" }}>деталей металлоконструкций</span>
          </h2>
          <p style={{ color: "#4A4A4A", fontSize: "18px", marginTop: "12px", maxWidth: "640px", margin: "12px auto 0" }}>
            Контроль качества ведётся на всех этапах — от разработки проекта до доставки на объект
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1.5px solid #EBEBEB",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.09)";
                  el.style.borderColor = `${service.color}40`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
                  el.style.borderColor = "#EBEBEB";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: `${service.color}12`,
                    border: `2px solid ${service.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={24} color={service.color} />
                </div>

                <h3 style={{ color: "#222", fontSize: "18px", fontWeight: 800, marginBottom: "10px", lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p style={{ color: "#4A4A4A", fontSize: "17px", lineHeight: 1.6, marginBottom: "16px" }}>
                  {service.desc}
                </p>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "#F0F0F0", marginBottom: "16px" }} />

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {service.features.map((feat, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span
                        style={{
                          color: service.color,
                          fontSize: "16px",
                          fontWeight: 900,
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "#3F3F3F", fontSize: "17px", lineHeight: 1.5 }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Special Protection Service */}
        <div style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          padding: "40px",
          border: "1.5px solid #EBEBEB",
          boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
          marginBottom: "48px"
        }}>
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, color: "#222", marginBottom: "12px", lineHeight: 1.2 }}>
              Комплексная защита и <span style={{ color: "#E87722" }}>спецобработка</span> конструкций
            </h3>
            <p style={{ fontSize: "18px", color: "#3F3F3F", lineHeight: 1.6, margin: 0, maxWidth: "800px" }}>
              Обеспечиваем долговечность и безопасность ваших объектов: от разработки проекта до официальной сдачи контролирующим органам.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              marginBottom: "40px",
              alignItems: "start",
            }}
          >
            {/* Image Side */}
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4/3",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}>
              <ImageWithFallback
                src={protectionImg}
                loading="lazy"
                decoding="async"
                alt="Спецобработка конструкций"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                <div style={{ color: "#fff", fontSize: "20px", fontWeight: 800 }}>Сдача работ в МЧС «под ключ»</div>
                <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "17px" }}>и подготовка исполнительной документации</div>
              </div>
            </div>

            {/* Info Side */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Targets */}
              <div>
                <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#222", marginBottom: "16px" }}>Что мы обрабатываем:</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
                  {protectionTargets.map((target, idx) => {
                    const TIcon = target.icon;
                    return (
                      <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(109,190,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <TIcon size={16} color="#6DBE45" />
                        </div>
                        <div>
                          <div style={{ fontSize: "18px", fontWeight: 700, color: "#333", marginBottom: "4px", lineHeight: 1.2 }}>{target.title}</div>
                          <div style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.4 }}>{target.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Reasons */}
              <div>
                <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#222", marginBottom: "16px" }}>Почему выбирают нас:</h4>
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                   <div style={{ padding: "6px 12px", borderRadius: "6px", backgroundColor: "rgba(232,119,34,0.1)", color: "#E87722", fontSize: "16px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}><Award size={14} /> Экспертность</div>
                   <div style={{ padding: "6px 12px", borderRadius: "6px", backgroundColor: "rgba(232,119,34,0.1)", color: "#E87722", fontSize: "16px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}><Scale size={14} /> Сервис и закон</div>
                   <div style={{ padding: "6px 12px", borderRadius: "6px", backgroundColor: "rgba(232,119,34,0.1)", color: "#E87722", fontSize: "16px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}><Map size={14} /> Масштаб</div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {protectionReasons.map((reason, idx) => (
                    <li key={idx} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <Check size={16} color="#E87722" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "17px", color: "#3F3F3F", lineHeight: 1.5 }}>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div style={{ backgroundColor: "#F9F9F9", borderRadius: "16px", padding: "24px", border: "1px solid #EBEBEB" }}>
            <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#222", marginBottom: "20px", textAlign: "center" }}>Как мы работаем (4 простых шага)</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
               {protectionSteps.map((step, idx) => {
                 const SIcon = step.icon;
                 return (
                   <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                     <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#fff", border: "2px solid rgba(109,190,69,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                        <SIcon size={20} color="#6DBE45" />
                        <div style={{ position: "absolute", top: "-6px", right: "-6px", width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#E87722", color: "#fff", fontSize: "15px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{idx + 1}</div>
                     </div>
                     <div style={{ fontSize: "17px", fontWeight: 800, color: "#333", marginBottom: "6px" }}>{step.title}</div>
                     <div style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.4 }}>{step.desc}</div>
                   </div>
                 )
               })}
            </div>
          </div>
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
              fontSize: "18px",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              fontFamily: "Montserrat, sans-serif",
              boxShadow: "0 4px 20px rgba(232,119,34,0.30)",
              transition: "transform 0.2s, box-shadow 0.2s",
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
            Рассчитать стоимость услуг
          </button>
        </div>
      </div>
    </section>
  );
}

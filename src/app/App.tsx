import { useEffect } from "react";
import { initReveal } from "./lib/reveal";
import { findPage } from "./pages/pages.data.js";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { MissionSection } from "./components/MissionSection";
import { ProductsSection } from "./components/ProductsSection";
import { WarehouseSection } from "./components/WarehouseSection";
import { ServicesSection } from "./components/ServicesSection";
import { OfferSection } from "./components/OfferSection";
import { ProcessSection } from "./components/ProcessSection";
import { AboutSection } from "./components/AboutSection";
import { PriceSection } from "./components/PriceSection";
import { GalleryReviews } from "./components/GalleryReviews";
import { VacanciesSection } from "./components/VacanciesSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

type Block = { id: string; c?: any };

// Главная страница: порядок блоков и их содержимое остаются прежними
const HOME_BLOCKS: Block[] = [
  { id: "hero" },
  { id: "forWho" },
  { id: "advantages" },
  { id: "mission" },
  { id: "products" },
  { id: "warehouse" },
  { id: "services" },
  { id: "offer" },
  { id: "about" },
  { id: "price" },
  { id: "gallery" },
  { id: "vacancies" },
  { id: "contacts" },
];

const NAV_LABELS: Record<string, [string, string]> = {
  products: ["Что входит", "#products"],
  advantages: ["Преимущества", "#advantages"],
  gallery: ["Фото", "#gallery"],
  process: ["Как работаем", "#process"],
  price: ["Цены", "#price"],
  faq: ["Вопросы", "#faq"],
  contacts: ["Контакты", "#contacts"],
};

function renderBlock(block: Block, slug: string | null) {
  const { id, c } = block;
  // Источник заявки (виден в Telegram): hero / offer / contacts на главной, либо «страница--блок»
  const src = (name: string) => (slug ? `${slug}--${name}` : name);
  switch (id) {
    case "hero":
      return <HeroSection key={id} c={{ ...c, source: src("hero") }} />;
    case "forWho":
      return <ForWhoSection key={id} c={c} />;
    case "advantages":
      return <AdvantagesSection key={id} c={c} />;
    case "mission":
      return <MissionSection key={id} />;
    case "products":
      return <ProductsSection key={id} c={c} />;
    case "warehouse":
      return <WarehouseSection key={id} />;
    case "services":
      return <ServicesSection key={id} />;
    case "offer":
      return <OfferSection key={id} c={{ ...c, source: src("offer") }} />;
    case "process":
      return <ProcessSection key={id} c={c} />;
    case "about":
      return <AboutSection key={id} />;
    case "price":
      return <PriceSection key={id} c={c} />;
    case "gallery":
      return <GalleryReviews key={id} c={c} showReviews={!slug} />;
    case "vacancies":
      return <VacanciesSection key={id} />;
    case "faq":
      return <FaqSection key={id} c={c} />;
    case "contacts":
      return <ContactSection key={id} source={src("contacts")} showPartnership={!slug} />;
    default:
      return null;
  }
}

export default function App() {
  const page = typeof window !== "undefined" ? findPage(window.location.pathname) : null;
  const blocks: Block[] = page ? page.blocks : HOME_BLOCKS;
  const slug: string | null = page ? page.slug : null;

  const navItems = page
    ? [
        { label: "Главная", href: "/" },
        ...blocks
          .filter((b) => NAV_LABELS[b.id] && b.id !== "contacts")
          .slice(0, 5)
          .map((b) => ({ label: NAV_LABELS[b.id][0], href: NAV_LABELS[b.id][1] })),
        { label: "Контакты", href: "#contacts" },
      ]
    : undefined;

  useEffect(() => {
    let cleanup = () => {};
    const timer = window.setTimeout(() => { cleanup = initReveal(); }, 60);
    return () => { window.clearTimeout(timer); cleanup(); };
  }, []);

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "#FFFFFF" }}>
      <Header items={navItems} />
      <main>{blocks.map((b) => renderBlock(b, slug))}</main>
      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import { initReveal } from "./lib/reveal";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { MissionSection } from "./components/MissionSection";
import { ProductsSection } from "./components/ProductsSection";
import { WarehouseSection } from "./components/WarehouseSection";
import { ServicesSection } from "./components/ServicesSection";
import { OfferSection } from "./components/OfferSection";
import { AboutSection } from "./components/AboutSection";
import { PriceSection } from "./components/PriceSection";
import { GalleryReviews } from "./components/GalleryReviews";
import { VacanciesSection } from "./components/VacanciesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    let cleanup = () => {};
    const timer = window.setTimeout(() => { cleanup = initReveal(); }, 60);
    return () => { window.clearTimeout(timer); cleanup(); };
  }, []);

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "#FFFFFF" }}>
      <Header />
      <main>
        <HeroSection />
        <ForWhoSection />
        <AdvantagesSection />
        <MissionSection />
        <ProductsSection />
        <WarehouseSection />
        <ServicesSection />
        <OfferSection />
        <AboutSection />
        <PriceSection />
        <GalleryReviews />
        <VacanciesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

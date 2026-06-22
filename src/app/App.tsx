import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { MissionSection } from "./components/MissionSection";
import { ProductsSection } from "./components/ProductsSection";
import { WarehouseSection } from "./components/WarehouseSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { PriceSection } from "./components/PriceSection";
import { GalleryReviews } from "./components/GalleryReviews";
import { VacanciesSection } from "./components/VacanciesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
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

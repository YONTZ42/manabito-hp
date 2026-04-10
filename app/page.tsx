import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ConcernsSection } from "@/components/sections/concerns-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InstagramNewsSection } from "@/components/sections/instagram-news-section";
import { ServiceDetailsSection } from "@/components/sections/service-details-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConcernsSection />
        <ServicesSection />
        <ServiceDetailsSection />
        <AchievementsSection />
        <InstagramNewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

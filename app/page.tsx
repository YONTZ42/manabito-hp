import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ConcernsSection } from "@/components/sections/concerns-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InstagramNewsSection } from "@/components/sections/instagram-news-section";
import { ServiceDetailsSection } from "@/components/sections/service-details-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WaveDivider } from "@/components/ui/wave-divider";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WaveDivider fillColor="fill-white" variant="wave" />
        <ConcernsSection />
        <WaveDivider fillColor="fill-[#fbf8f1]" variant="curve" />
        <ServicesSection />
        <WaveDivider fillColor="fill-white" variant="slant" />
        <ServiceDetailsSection />
        <WaveDivider fillColor="fill-[#fbf8f1]" variant="wave" />
        <AchievementsSection />
        <WaveDivider fillColor="fill-white" variant="wave" />
        <InstagramNewsSection />
        <WaveDivider fillColor="fill-[#2e6f67]" variant="curve" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

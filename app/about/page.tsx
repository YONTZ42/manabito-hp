import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "代表紹介 | 合同会社マナビト",
  description:
    "合同会社マナビト代表 酒井慶太のプロフィールと、マナビト創業の想いをご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

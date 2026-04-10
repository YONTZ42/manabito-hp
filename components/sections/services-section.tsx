import { ServiceSlideCard } from "@/components/cards/service-slide-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function ServicesSection() {
  const loopedServices = [...services, ...services];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-base-bg py-16 md:py-24"
    >
      {/* Background decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-soft/50 blur-3xl" />
      <div className="absolute -right-10 top-40 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
      
      <Container className="relative">
        <SectionHeading
          eyebrow="Services"
          title="ターゲットに合わせて、学びの場を設計します"
          description="行政、教育、企業、地域団体それぞれの目的に応じて、企画・調整・学びの導線づくりまで含めてサポートします。"
          descriptionColor="rgb(36, 53, 51)"
        />
      </Container>

    <div className="mt-12 w-full">
      {/* overflow-x-auto: 横スクロールを有効化
        scrollbar-hide: スクロールバーを隠したい場合（任意）
        flex-nowrap: 折り返さないように設定
      */}
      <div className="flex w-full overflow-x-auto pb-6 gap-5 px-4 md:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide">
        {services.map((service, index) => (
          <div key={`${service.title}-${index}`} className="snap-center">
            <ServiceSlideCard
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              accentTone={service.accentTone}
            />
          </div>
        ))}
        
      </div>
    </div>
    </section>
  );
}

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
      {/* Colorful background decorations */}
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-accent-sky/25 blur-3xl" />
      <div className="absolute -right-10 top-40 h-48 w-48 rounded-full bg-accent-peach/30 blur-3xl" />
      <div className="absolute left-1/2 bottom-20 h-40 w-40 rounded-full bg-accent-lime/25 blur-3xl" />
      
      <Container className="relative">
        <SectionHeading
          eyebrow="Services"
          title="ターゲットに合わせて、学びの場を設計します"
          description="行政、教育、企業、地域団体それぞれの目的に応じて、企画・調整・学びの導線づくりまで含めてサポートします。"
          descriptionColor="rgb(36, 53, 51)"
        />
      </Container>

      <div className="mt-12 overflow-hidden">
        <div className="pause-marquee flex w-max gap-5 px-4 animate-marquee md:px-6 lg:px-8">
          {loopedServices.map((service, index) => (
            <ServiceSlideCard
              key={`${service.title}-${index}`}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              accentTone={service.accentTone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

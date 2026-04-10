import { ServiceSlideCard } from "@/components/cards/service-slide-card";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-soft/30 py-16 md:py-20"
    >
      {/* Background decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-white/50 blur-3xl" />

      <Container className="relative">
        {/* Section header with solution emphasis */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Solutions</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text-main md:text-4xl">
            その悩み、<span className="relative inline-block text-brand"><span className="absolute bottom-1 left-0 h-3 w-full bg-accent-yellow/50 -z-10" />マナビトが解決</span>します
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-sub">
            <span className="font-semibold text-text-main">企画から運営まで、ワンストップで伴走。</span><br className="hidden sm:block" />
            あなたは本来の仕事に集中できます。
          </p>
        </div>

        {/* Solution points */}
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3">
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-main shadow-soft">
              <svg className="h-4 w-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              企画・設計はお任せ
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-main shadow-soft">
              <svg className="h-4 w-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              調整・連携もサポート
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-main shadow-soft">
              <svg className="h-4 w-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              現場に寄り添う伴走支援
            </span>
          </>
        </div>
      </Container>

      {/* Service cards slider */}
      <div className="mt-10 w-full">
        <div className="flex w-full gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scrollbar-hide md:px-6 lg:px-8">
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

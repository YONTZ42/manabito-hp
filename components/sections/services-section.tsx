import { ServiceSlideCard } from "@/components/cards/service-slide-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/service-details";

const serviceIcons: Record<string, React.ReactNode> = {
  "administration-support": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  ),
  "inspection-training": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  "experiential-learning": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
  "seminars-training": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-base-bg bg-section-sky py-16 md:py-20"
    >
      {/* Background decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent-sky/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-white/50 blur-3xl" />

      <Container className="relative">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">Solutions</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text-main md:text-5xl">
            その悩み、<span className="highlight-marker">マナビトが解決</span>します
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-sub">
            <span className="underline-accent text-text-main">企画から運営まで、ワンストップで伴走。</span><br className="hidden sm:block" />
            あなたは本来の仕事に集中できます。
          </p>
        </AnimateOnScroll>

        {/* Solution points */}
        <AnimateOnScroll delay={200} className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3">
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
        </AnimateOnScroll>
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

      {/* Service detail link cards */}
      <Container className="relative mt-4">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">For You</p>
          <h3 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-3xl">
            あなたに合った<span className="highlight-marker">学びの形</span>
          </h3>
        </AnimateOnScroll>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceDetails.map((service, index) => (
            <AnimateOnScroll key={service.slug} animation="fadeScale" delay={index * 100}>
              <a
                href={service.href}
                className="group flex items-start gap-4 rounded-2xl border border-base-border bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-strong"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  {serviceIcons[service.slug]}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-brand">{service.target}</p>
                  <p className="mt-1 font-heading text-base font-bold text-text-main">{service.catchphrase}</p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { WaveDivider } from "@/components/ui/wave-divider";
import type { ServiceDetail } from "@/data/service-details";

const flowColors = [
  "from-brand to-brand-dark",
  "from-accent-yellow to-amber-500",
  "from-brand-muted to-brand",
  "from-accent-warm to-orange-500",
];

const flowBgColors = [
  "bg-brand-soft",
  "bg-accent-yellow/15",
  "bg-accent-sky",
  "bg-accent-peach/30",
];

const offeringAccents = [
  "border-t-brand",
  "border-t-accent-yellow",
  "border-t-brand-muted",
];

export function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <Header />
      <main>
        {/* ───── Hero ───── */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-soft/60 via-white to-accent-sky/40">
          {/* decorative blobs */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-accent-yellow/15 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-accent-peach/20 blur-2xl" />

          <Container className="relative py-20 md:py-28 lg:py-32">
            <AnimateOnScroll animation="fadeUp">
              <div className="max-w-4xl">
                <Chip variant="brand">{detail.catchphrase}</Chip>

                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/90 px-5 py-2 text-sm font-bold text-brand shadow-soft backdrop-blur">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                  </svg>
                  {detail.target}
                </p>

                <h1 className="mt-6 whitespace-pre-line text-balance font-heading text-3xl font-black leading-tight text-text-main md:text-5xl lg:text-6xl">
                  {detail.heroTitle}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-sub md:text-lg">
                  {detail.heroLead}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/#contact" size="lg">
                    お問い合わせ
                  </Button>
                  <Button href="/#services" variant="secondary" size="lg">
                    サービス一覧へ戻る
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>

        <WaveDivider fillColor="fill-base-bg" variant="curve" />

        {/* ───── Pain Points ───── */}
        {detail.painPoints.length > 0 && (
          <section className="bg-base-bg pb-16 pt-8 md:pb-20 md:pt-10">
            <Container>
              <AnimateOnScroll animation="fadeUp">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-warm">
                    Concerns
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-text-main md:text-3xl">
                    こんなお悩みはありませんか？
                  </h2>
                </div>
              </AnimateOnScroll>

              <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4">
                {detail.painPoints.map((pain, i) => (
                  <AnimateOnScroll key={pain} animation="fadeSlideLeft" delay={i * 120}>
                    <div className="relative rounded-2xl border border-accent-yellow/30 bg-white px-6 py-5 shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-strong">
                      {/* speech-bubble tail */}
                      <div className="absolute -left-2 top-5 h-4 w-4 rotate-45 border-b border-l border-accent-yellow/30 bg-white" />
                      <div className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-yellow/20">
                          <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="pt-0.5 text-base font-medium leading-relaxed text-text-main">
                          {pain}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll animation="fadeUp" delay={300}>
                <p className="mt-8 text-center text-base text-text-sub md:text-lg">
                  マナビトが、<span className="highlight-marker">企画から運営まで一貫して</span>伴走します。
                </p>
              </AnimateOnScroll>
            </Container>
          </section>
        )}

        <WaveDivider fillColor="fill-white" variant="wave" />

        {/* ───── Overview ───── */}
        <section className="bg-white pb-16 pt-8 md:pb-20 md:pt-10">
          <Container>
            <AnimateOnScroll animation="fadeUp">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  Overview
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-4xl">
                  {detail.description}
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.summary.map((item, index) => (
                <AnimateOnScroll key={item} animation="fadeScale" delay={index * 150}>
                  <article className="group relative overflow-hidden rounded-3xl border border-base-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong md:p-8">
                    {/* colored top bar */}
                    <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${flowColors[index % flowColors.length]}`} />

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand font-display text-lg font-bold text-white shadow-md transition-transform group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-5 text-base font-semibold leading-relaxed text-text-main md:text-lg">
                      {item}
                    </p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        {/* ───── Offerings ───── */}
        <section className="relative overflow-hidden bg-base-bg py-16 md:py-20">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />

          <Container className="relative">
            <AnimateOnScroll animation="fadeUp">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  Offerings
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-4xl">
                  具体的な提供内容
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.offerings.map((offering, index) => (
                <AnimateOnScroll key={offering.title} animation="fadeUp" delay={index * 150}>
                  <div className={`group overflow-hidden rounded-3xl border-t-4 ${offeringAccents[index % offeringAccents.length]} border border-base-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong md:p-8`}>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-main">{offering.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-sub">{offering.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        <WaveDivider fillColor="fill-white" variant="curve" />

        {/* ───── Flow — コダテル風カードステップ ───── */}
        <section className="bg-white pb-16 pt-8 md:pb-20 md:pt-10">
          <Container>
            <AnimateOnScroll animation="fadeUp">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  Flow
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-4xl">
                  ご依頼の流れ
                </h2>
              </div>
            </AnimateOnScroll>

            {/* Desktop: horizontal card flow */}
            <div className="mt-12 hidden md:block">
              <div className="grid grid-cols-4 gap-0">
                {detail.flow.map((item, index) => (
                  <AnimateOnScroll key={item.step} animation="fadeUp" delay={index * 200}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* connector arrow */}
                      {index < detail.flow.length - 1 && (
                        <div className="absolute right-0 top-8 z-10 translate-x-1/2">
                          <svg className="h-5 w-5 text-brand/30" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}

                      {/* step circle */}
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${flowColors[index % flowColors.length]} font-display text-xl font-bold text-white shadow-lg`}>
                        {index + 1}
                      </div>

                      {/* card */}
                      <div className={`mt-4 w-full rounded-2xl ${flowBgColors[index % flowBgColors.length]} p-5`}>
                        <h3 className="font-heading text-base font-bold text-text-main">
                          {item.step}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-sub">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="mt-10 space-y-0 md:hidden">
              {detail.flow.map((item, index) => (
                <AnimateOnScroll key={item.step} animation="fadeSlideLeft" delay={index * 150}>
                  <div className="relative flex gap-5 pb-8 last:pb-0">
                    {/* vertical line */}
                    {index < detail.flow.length - 1 && (
                      <div className="absolute left-6 top-14 h-[calc(100%-2.5rem)] w-0.5 bg-gradient-to-b from-brand/30 to-brand/5" />
                    )}
                    {/* step circle */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${flowColors[index % flowColors.length]} font-display text-base font-bold text-white shadow-md`}>
                      {index + 1}
                    </div>
                    <div className={`flex-1 rounded-2xl ${flowBgColors[index % flowBgColors.length]} p-4`}>
                      <h3 className="font-heading text-base font-bold text-text-main">
                        {item.step}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-sub">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        {/* ───── CTA ───── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-brand py-16 md:py-24">
          {/* decorative circles */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute right-1/3 top-1/4 h-24 w-24 rounded-full bg-accent-yellow/10" />

          <Container className="relative text-center">
            <AnimateOnScroll animation="fadeScale">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Contact
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-white md:text-4xl">
                まずはお気軽にご相談ください
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                ご状況に合わせた進め方をご提案します。お見積りやご質問だけでも構いません。
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/#contact"
                  variant="yellow"
                  size="lg"
                  className="shadow-[0_4px_24px_rgba(245,200,76,0.4)]"
                >
                  お問い合わせ
                </Button>
                <Button
                  href="/"
                  variant="ghost"
                  size="lg"
                  className="border border-white/30 !text-white hover:bg-white/10"
                >
                  トップページへ戻る
                </Button>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

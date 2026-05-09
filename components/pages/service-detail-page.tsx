import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { ServiceDetail } from "@/data/service-details";

export function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate border-b border-base-border bg-soft-radial">
          <div className="hero-decor-circle left-[-72px] top-16 h-56 w-56 bg-brand-soft/70" />
          <div className="hero-decor-circle bottom-[-88px] right-[-18px] h-64 w-64 bg-accent-yellow/20" />

          <Container className="relative py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                {detail.catchphrase}
              </p>
              <p className="mt-4 inline-flex rounded-full border border-brand/20 bg-white/80 px-4 py-2 text-sm font-medium text-text-main">
                {detail.target}
              </p>
              <h1 className="mt-6 whitespace-pre-line text-balance font-heading text-3xl font-black text-text-main md:text-5xl lg:text-6xl">
                {detail.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-sub md:text-lg">
                {detail.heroLead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact">お問い合わせ</Button>
                <Button href="/#services" variant="secondary">
                  サービス一覧へ戻る
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Pain Points — concerns との接続 */}
        {detail.painPoints.length > 0 && (
          <section className="bg-base-bg py-12 md:py-16">
            <Container>
              <p className="text-center text-base font-semibold text-text-main md:text-lg">
                こんなお悩みはありませんか？
              </p>
              <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-3">
                {detail.painPoints.map((pain) => (
                  <div
                    key={pain}
                    className="flex items-start gap-3 rounded-2xl border border-accent-yellow/40 bg-white px-5 py-4 shadow-soft"
                  >
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium text-text-main md:text-base">{pain}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-base text-text-sub">
                マナビトが、<span className="highlight-marker">企画から運営まで一貫して</span>伴走します。
              </p>
            </Container>
          </section>
        )}

        {/* Overview — ポイント3つ */}
        <section className="section-padding bg-white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">Overview</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-4xl">{detail.description}</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.summary.map((item, index) => (
                <article key={item} className="surface-card p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-text-main md:text-lg">{item}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Offerings — 具体的な提供内容 */}
        <section className="section-padding bg-base-bg">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">Offerings</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-4xl">具体的な提供内容</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.offerings.map((offering) => (
                <div key={offering.title} className="surface-card p-6 md:p-8">
                  <h3 className="font-heading text-lg font-bold text-text-main">{offering.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-sub">{offering.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Flow — 進め方のステップ */}
        <section className="section-padding bg-white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">Flow</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-text-main md:text-4xl">ご依頼の流れ</h2>
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-0">
              {detail.flow.map((item, index) => (
                <div key={item.step} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Vertical line */}
                  {index < detail.flow.length - 1 && (
                    <div className="absolute left-5 top-12 h-[calc(100%-2rem)] w-px bg-brand/20" />
                  )}
                  {/* Step number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading text-lg font-bold text-text-main">{item.step}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-sub">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-brand py-16 md:py-20">
          <Container className="text-center">
            <h2 className="font-heading text-2xl font-bold text-white md:text-4xl">
              まずはお気軽にご相談ください
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
              ご状況に合わせた進め方をご提案します。お見積りやご質問だけでも構いません。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/#contact" variant="yellow" className="bg-accent-yellow !text-text-main shadow-[0_4px_20px_rgba(245,200,76,0.4)]">
                お問い合わせ
              </Button>
              <Button href="/" variant="ghost" className="border border-white/30 !text-white hover:bg-white/10">
                トップページへ戻る
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceDetail } from "@/data/service-details";

export function ServiceDetailPage({ detail }: { detail: ServiceDetail }) {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate border-b border-base-border bg-soft-radial">
          <div className="hero-decor-circle left-[-72px] top-16 h-56 w-56 bg-brand-soft/70" />
          <div className="hero-decor-circle bottom-[-88px] right-[-18px] h-64 w-64 bg-accent-yellow/20" />

          <Container className="relative py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Service Details
              </p>
              <p className="mt-4 inline-flex rounded-full border border-brand/20 bg-white/80 px-4 py-2 text-sm font-medium text-text-main">
                {detail.target}
              </p>
              <h1 className="mt-6 text-balance text-4xl font-black md:text-6xl">
                {detail.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-base md:text-lg">{detail.heroLead}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact">お問い合わせ</Button>
                <Button href="/#service-details" variant="secondary">
                  サービス一覧へ戻る
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-padding bg-white">
          <Container>
            <SectionHeading
              eyebrow="Overview"
              title={detail.catchphrase}
              description={detail.description}
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.summary.map((item) => (
                <article key={item} className="surface-card p-6 md:p-8">
                  <p className="font-latin text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                    Point
                  </p>
                  <p className="mt-4 text-base font-semibold text-text-main md:text-lg">{item}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-padding bg-base-bg">
          <Container>
            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="surface-card p-8 md:p-10">
                <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  Offerings
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">提供イメージ</h2>
                <div className="mt-6 space-y-3">
                  {detail.offerings.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-base-border bg-base-bg/70 px-5 py-4"
                    >
                      <p className="font-medium text-text-main">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-8 md:p-10">
                <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  Flow
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">進行の大枠</h2>
                <div className="mt-6 space-y-4">
                  {detail.flow.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 rounded-[24px] bg-white p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft font-latin text-sm font-semibold text-brand">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-text-main">{item}</p>
                        <p className="mt-1 text-sm">
                          今後この領域に具体的な説明や事例を追加できる余白を残しています。
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-20 md:pb-28">
          <Container>
            <div className="surface-card bg-white p-8 md:p-10">
              <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Next Step
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                ここから先は詳細コンテンツを段階的に拡充できます
              </h2>
              <p className="mt-4 max-w-3xl text-base md:text-lg">
                本ページは、大枠レイアウトと導線を先に整えた初期版です。実績紹介、事例、FAQ、
                料金目安などは後続実装で追加しやすい構成にしています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact">相談する</Button>
                <Button href="/" variant="secondary">
                  トップページへ戻る
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

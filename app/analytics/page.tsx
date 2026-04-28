import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Analytics",
  description:
    "Vercel Analytics の導入状況と、デプロイ後の確認手順をまとめたページです。",
};

const checkpoints = [
  {
    title: "導入状況",
    description:
      "このサイト全体に Vercel Analytics を組み込み、App Router のページ遷移を自動で計測する構成にしています。",
  },
  {
    title: "データ反映条件",
    description:
      "Vercel へデプロイした URL に実際のアクセスが発生すると、ページビューが収集されます。ローカル環境の確認だけでは集計されません。",
  },
  {
    title: "確認場所",
    description:
      "集計結果は Vercel Dashboard の Analytics 画面で確認します。数値が出ない場合は 30 秒ほど待ち、広告ブロッカーも確認してください。",
  },
];

const steps = [
  "Vercel にデプロイする",
  "公開 URL を開いて複数ページを移動する",
  "30 秒ほど待って Vercel Dashboard の Analytics を確認する",
];

export default function AnalyticsPage() {
  return (
    <>
      <main className="relative overflow-hidden bg-base-bg">
        <section className="relative isolate border-b border-base-border bg-soft-radial">
          <div className="hero-decor-circle left-[-80px] top-12 h-56 w-56 bg-brand-soft/70" />
          <div className="hero-decor-circle bottom-[-90px] right-[-20px] h-64 w-64 bg-accent-yellow/20" />

          <Container className="relative py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Vercel Analytics
              </p>
              <h1 className="mt-4 text-balance text-4xl font-black md:text-6xl">
                デプロイ後のアクセス計測を、
                <span className="key-phrase">このサイト全体で有効化</span>
                しました。
              </h1>
              <p className="mt-6 max-w-3xl text-base md:text-lg">
                `@vercel/analytics` をレイアウトに組み込み、Vercel 上で公開したページの閲覧データを自動収集する構成です。
                実際のレポートはこのページ内ではなく、Vercel Dashboard の Analytics 画面で確認します。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/" size="md">
                  トップページへ戻る
                </Button>
                <Button
                  href="https://vercel.com/dashboard"
                  variant="secondary"
                  size="md"
                >
                  Vercel Dashboard を開く
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {checkpoints.map((item) => (
                <article key={item.title} className="surface-card p-6 md:p-8">
                  <p className="font-latin text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                    Check
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">{item.title}</h2>
                  <p className="mt-4 text-sm md:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-20 md:pb-28">
          <Container>
            <div className="surface-card overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="bg-white p-8 md:p-10">
                  <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                    Flow
                  </p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    確認手順
                  </h2>
                  <ol className="mt-6 space-y-4">
                    {steps.map((step, index) => (
                      <li
                        key={step}
                        className="flex gap-4 rounded-[24px] border border-base-border bg-base-bg/70 p-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <p className="pt-1 text-sm text-text-main md:text-base">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-brand px-8 py-10 text-white">
                  <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                    Notes
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-8 text-white/88 md:text-base">
                    <li>
                      データが見えない場合は、公開 URL で複数ページを移動してから再確認してください。
                    </li>
                    <li>
                      コンテンツブロッカーや広告ブロッカーが有効だと計測されないことがあります。
                    </li>
                    <li>
                      本番計測は Vercel デプロイ後に有効になります。Preview / Production の切り替えも Dashboard 側で確認できます。
                    </li>
                  </ul>

                  <div className="mt-8 rounded-[24px] border border-white/20 bg-white/10 p-5">
                    <p className="text-sm font-semibold text-white">
                      Dashboard path
                    </p>
                    <p className="mt-2 font-latin text-sm text-white/80">
                      Project → Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-sm font-medium text-brand transition hover:text-brand-dark"
              >
                サイトへ戻って計測用のページ遷移を行う
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getGa4DashboardData } from "@/lib/ga4";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Google Analytics 4 の主要指標を確認できる管理画面です。",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

function MiniBarChart({ values }: { values: number[] }) {
  const maxValue = Math.max(...values, 1);

  return (
    <div className="mt-6 flex h-44 items-end gap-2 rounded-[24px] border border-base-border bg-base-bg/70 p-4">
      {values.map((value, index) => {
        const height = Math.max((value / maxValue) * 100, 6);

        return (
          <div key={`${index}-${value}`} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-full bg-brand/85 transition-opacity hover:opacity-80"
              style={{ height: `${height}%` }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default async function AnalyticsPage() {
  const dashboard = await getGa4DashboardData();

  return (
    <>
      <main className="relative overflow-hidden bg-base-bg">
        <section className="relative isolate border-b border-base-border bg-soft-radial">
          <div className="hero-decor-circle left-[-80px] top-12 h-56 w-56 bg-brand-soft/70" />
          <div className="hero-decor-circle bottom-[-90px] right-[-20px] h-64 w-64 bg-accent-yellow/20" />

          <Container className="relative py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Google Analytics 4
              </p>
              <h1 className="mt-4 text-balance text-4xl font-black md:text-6xl">
                サイトの閲覧状況を、
                <span className="key-phrase">この画面で直接確認</span>
                できます。
              </h1>
              <p className="mt-6 max-w-3xl text-base md:text-lg">
                GA4 のタグは `@next/third-parties/google` で全ページに組み込み、管理画面は
                Google Analytics Data API から主要指標を取得して表示します。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/" size="md">
                  トップページへ戻る
                </Button>
                {dashboard.status === "ready" ? (
                  <div className="inline-flex items-center rounded-full border border-brand/20 bg-white/80 px-4 py-2 text-sm text-text-main">
                    表示範囲: {dashboard.rangeLabel}
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            {dashboard.status === "ready" ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {dashboard.summary.map((item) => (
                  <article key={item.label} className="surface-card p-6 md:p-8">
                    <p className="font-latin text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                      Metric
                    </p>
                    <h2 className="mt-3 text-lg font-bold">{item.label}</h2>
                    <p className="mt-5 font-latin text-4xl font-semibold text-text-main">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm text-brand">{item.change} vs 前期間</p>
                  </article>
                ))}
              </div>
            ) : null}

            {dashboard.status === "missing-config" ? (
              <div className="surface-card p-8 md:p-10">
                <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  Setup Required
                </p>
                <h2 className="mt-3 text-3xl font-bold">GA4 の設定が不足しています</h2>
                <p className="mt-4 text-base">
                  数値を表示するには、以下の環境変数を設定し、GA4 プロパティへサービスアカウントを閲覧権限付きで追加してください。
                </p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {dashboard.missingKeys.map((key) => (
                    <div
                      key={key}
                      className="rounded-[24px] border border-base-border bg-base-bg/70 px-5 py-4"
                    >
                      <p className="font-latin text-sm font-semibold text-text-main">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {dashboard.status === "error" ? (
              <div className="surface-card p-8 md:p-10">
                <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  API Error
                </p>
                <h2 className="mt-3 text-3xl font-bold">GA4 データを取得できませんでした</h2>
                <p className="mt-4 text-base">{dashboard.message}</p>
              </div>
            ) : null}
          </Container>
        </section>

        {dashboard.status === "ready" ? (
          <section className="pb-20 md:pb-28">
            <Container>
              <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="surface-card p-8 md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                        Trend
                      </p>
                      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        7日間の推移
                      </h2>
                    </div>
                    <p className="text-sm text-text-sub">
                      更新日時: {dashboard.updatedAt}
                    </p>
                  </div>

                  <MiniBarChart values={dashboard.trend.map((item) => item.activeUsers)} />

                  <div className="mt-4 grid grid-cols-4 gap-3 text-xs text-text-sub md:grid-cols-8">
                    {dashboard.trend.map((item) => (
                      <div key={item.date} className="text-center">
                        <p>{item.date.slice(5)}</p>
                        <p className="mt-1 font-latin text-sm text-text-main">
                          {item.activeUsers}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card p-8 md:p-10">
                  <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                    Property
                  </p>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">管理情報</h2>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-[24px] border border-base-border bg-base-bg/70 p-5">
                      <p className="text-sm text-text-sub">Measurement ID</p>
                      <p className="mt-2 font-latin text-lg font-semibold text-text-main">
                        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-base-border bg-base-bg/70 p-5">
                      <p className="text-sm text-text-sub">Property ID</p>
                      <p className="mt-2 font-latin text-lg font-semibold text-text-main">
                        {dashboard.propertyId}
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-base-border bg-base-bg/70 p-5">
                      <p className="text-sm text-text-sub">集計期間</p>
                      <p className="mt-2 text-base font-semibold text-text-main">
                        {dashboard.rangeLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <div className="surface-card p-8 md:p-10">
                  <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                    Top Pages
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">よく見られているページ</h2>
                  <div className="mt-6 space-y-3">
                    {dashboard.topPages.map((page) => (
                      <div
                        key={page.path}
                        className="flex items-center justify-between gap-4 rounded-[24px] border border-base-border bg-white p-4"
                      >
                        <div className="min-w-0">
                          <p className="truncate font-latin text-sm font-semibold text-text-main">
                            {page.path}
                          </p>
                          <p className="mt-1 text-sm text-text-sub">
                            ユーザー {page.users.toLocaleString("ja-JP")}
                          </p>
                        </div>
                        <p className="font-latin text-lg font-semibold text-brand">
                          {page.views.toLocaleString("ja-JP")} PV
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card p-8 md:p-10">
                  <p className="font-latin text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                    Sources
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">主な流入元</h2>
                  <div className="mt-6 space-y-3">
                    {dashboard.trafficSources.map((source) => (
                      <div
                        key={source.source}
                        className="flex items-center justify-between gap-4 rounded-[24px] border border-base-border bg-white p-4"
                      >
                        <div className="min-w-0">
                          <p className="truncate font-latin text-sm font-semibold text-text-main">
                            {source.source}
                          </p>
                          <p className="mt-1 text-sm text-text-sub">
                            セッション {source.sessions.toLocaleString("ja-JP")}
                          </p>
                        </div>
                        <p className="font-latin text-lg font-semibold text-brand">
                          {source.users.toLocaleString("ja-JP")} Users
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="text-sm font-medium text-brand transition hover:text-brand-dark"
                >
                  サイトへ戻る
                </Link>
              </div>
            </Container>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

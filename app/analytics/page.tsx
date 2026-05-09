import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
  robots: { index: false, follow: false },
};

export default function AnalyticsPage() {
  const embedUrl = process.env.LOOKER_STUDIO_EMBED_URL;

  if (!embedUrl) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-bg p-4">
        <div className="max-w-md rounded-2xl border border-base-border bg-white p-8 text-center shadow-soft">
          <p className="font-heading text-lg font-bold text-text-main">
            Analytics ダッシュボード
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-sub">
            環境変数 <code className="rounded bg-brand-soft px-1.5 py-0.5 text-xs font-mono text-brand">LOOKER_STUDIO_EMBED_URL</code> が設定されていません。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-base-bg">
      <header className="border-b border-base-border bg-white px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-heading text-lg font-bold text-text-main">
            Analytics
          </p>
          <a
            href="/"
            className="text-sm font-medium text-brand transition hover:text-brand-dark"
          >
            ← サイトに戻る
          </a>
        </div>
      </header>
      <main className="flex-1">
        <iframe
          src={embedUrl}
          className="h-[calc(100vh-49px)] w-full border-0"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </main>
    </div>
  );
}

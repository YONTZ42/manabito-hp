import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

function ComingSoonCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-base-border bg-white/60 p-8 text-center backdrop-blur-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-sky/20">
        {icon}
      </div>
      <h4 className="font-heading text-lg font-bold text-text-main">{title}</h4>
      <div className="mt-3 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        <span className="text-sm font-medium text-brand">準備中</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-sub">
        現在コンテンツを準備しています。<br />
        もうしばらくお待ちください。
      </p>
    </div>
  );
}

export function InstagramNewsSection() {
  return (
    <section id="updates" className="relative overflow-hidden bg-base-bg py-16 md:py-24">
      {/* Colorful background decorations */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-yellow/20 blur-3xl" />
      <div className="absolute -left-20 top-1/2 h-56 w-56 rounded-full bg-accent-pink/25 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-accent-sky/30 blur-3xl" />
      
      <Container className="relative">
        <SectionHeading
          eyebrow="Updates"
          title="Instagram と最新情報"
          description="活動の様子やお知らせを通して、マナビトの今を伝えます。Instagramや各種メディアをまとめる予定です！"
          descriptionColor="rgb(36, 53, 51)"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-bold text-text-main">
                Instagram
              </h3>
            </div>
            <ComingSoonCard
              title="Instagram投稿"
              icon={
                <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
              }
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-bold text-text-main">
                NEWS
              </h3>
            </div>
            <ComingSoonCard
              title="お知らせ・メディア掲載"
              icon={
                <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

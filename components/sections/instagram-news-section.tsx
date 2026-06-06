import { InstagramPostCard } from "@/components/cards/instagram-post-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getInstagramFeed } from "@/lib/instagram";

function ComingSoonCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-base-border bg-white/60 p-8 text-center backdrop-blur-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
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

export async function InstagramNewsSection() {
  const { posts, profileUrl } = await getInstagramFeed();

  return (
    <section id="updates" className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-sky/20 blur-3xl" />
      <div className="absolute -left-20 top-1/2 h-56 w-56 rounded-full bg-accent-peach/15 blur-3xl" />
      
      <Container className="relative">
        <SectionHeading
          eyebrow="Updates"
          title="Instagram と最新情報"
          description="活動の様子やお知らせを通して、マナビトの今を伝えます。Instagramの最新投稿と、今後追加するお知らせをこちらにまとめます。"
          descriptionColor="rgb(36, 53, 51)"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="font-heading text-2xl font-bold text-text-main">
                Instagram
              </h3>
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand/20 bg-white px-4 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand-soft/50"
              >
                プロフィールを見る
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {posts.map((post, index) => (
                <InstagramPostCard
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  caption={post.caption}
                  href={post.permalink}
                  imageUrl={post.imageUrl}
                  mediaType={post.mediaType}
                  colorIndex={index}
                />
              ))}
            </div>
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

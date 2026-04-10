import { InstagramPostCard } from "@/components/cards/instagram-post-card";
import { NewsCard } from "@/components/cards/news-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { instagramPosts } from "@/data/instagram-posts";
import { newsItems } from "@/data/news";

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
          description="活動の様子やお知らせを通して、マナビトの今を伝えます。初期実装ではダミーデータ表示にして、後からInstagram連携やCMS連携へつなげやすくします。"
          descriptionColor="rgb(36, 53, 51)"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading text-2xl font-bold text-text-main">
                Instagram
              </h3>
              <a href="#" className="text-sm font-medium text-brand">
                一覧を見る
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {instagramPosts.map((post, index) => (
                <InstagramPostCard
                  key={post.title}
                  title={post.title}
                  date={post.date}
                  colorIndex={index}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading text-2xl font-bold text-text-main">
                NEWS
              </h3>
              <a href="#" className="text-sm font-medium text-brand">
                お知らせ一覧
              </a>
            </div>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <NewsCard
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  category={item.category}
                  colorIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

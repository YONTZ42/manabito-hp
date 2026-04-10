import { InstagramPostCard } from "@/components/cards/instagram-post-card";
import { NewsCard } from "@/components/cards/news-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { instagramPosts } from "@/data/instagram-posts";
import { newsItems } from "@/data/news";

export function InstagramNewsSection() {
  return (
    <section id="updates" className="bg-base-bg py-16 md:py-24">
      <Container>
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
              {instagramPosts.map((post) => (
                <InstagramPostCard
                  key={post.title}
                  title={post.title}
                  date={post.date}
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
              {newsItems.map((item) => (
                <NewsCard
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

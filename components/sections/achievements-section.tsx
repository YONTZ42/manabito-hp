import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Colorful background decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent-sky/30 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-accent-peach/40 blur-3xl" />
      <div className="absolute left-1/3 bottom-10 h-40 w-40 rounded-full bg-accent-lime/30 blur-3xl" />
      
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Achievements"
              title="代表の経験と実践が、信頼の土台です"
              description="地域の現場に入りながら、学びの設計、対話の場づくり、研修や視察の企画支援を積み重ねてきた実績を、今後ここに掲載していきます。"
              descriptionColor="rgb(36, 53, 51)"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip variant="sky">地域連携</Chip>
              <Chip variant="peach">視察研修</Chip>
              <Chip variant="lime" >教育プログラム</Chip>
              <Chip variant="orange" >人材育成</Chip>
            </div>
          </div>


          <div className="rounded-[32px] border border-base-border bg-base-bg p-6 shadow-soft md:p-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
              {/* 写真＋グラデーション装飾のコンテナ */}
              <div className="relative">
                {/* 背面のグラデーション装飾（少しずらして配置するとオシャレです） */}
                <div className="absolute -inset-2 rotate-3 rounded-[10px] bg-gradient-to-br from-accent-sky via-accent-pink/40 to-accent-lime/50 opacity-50 blur-sm" />
                
                {/* 写真本体 */}
                <div className="relative aspect-[3/5] overflow-hidden rounded-[20px] bg-gradient-to-br from-accent-sky/20 to-accent-pink/20">
                  <Image
                    src="/images/sakai_keita.jpg"
                    alt="代表 酒井 慶太のプロフィール写真"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 220px"
                    priority
                  />
                </div>
              </div>

              {/* テキストコンテンツ */}
              <div>
                <p className="text-sm font-medium text-brand">代表プロフィール</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-text-main">
                  酒井 慶太
                </h3>
                <p className="mt-4 text-base leading-8 text-text-sub">
                  地域、教育、行政、現場の声をつなぎながら、学びを具体的な実践へ落とし込む伴走者として活動。
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-text-sub md:text-base">
                  <li>・地域密着型の研修・体験学習プログラムの設計</li>
                  <li>・行政視察や先進事例学習の企画調整</li>
                  <li>・子ども、若者、地域の声を活かす場づくり支援</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


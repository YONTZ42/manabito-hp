import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AchievementsSection() {
  return (
    <section id="achievements" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Achievements"
              title="代表の経験と実践が、信頼の土台です"
              description="地域の現場に入りながら、学びの設計、対話の場づくり、研修や視察の企画支援を積み重ねてきた実績を、今後ここに掲載していきます。"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip>地域連携</Chip>
              <Chip>視察研修</Chip>
              <Chip>教育プログラム</Chip>
              <Chip>人材育成</Chip>
            </div>
          </div>

          <div className="rounded-[32px] border border-base-border bg-base-bg p-6 shadow-soft md:p-8">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
              <div className="aspect-[4/5] rounded-[28px] bg-accent-sky/70 bg-hero-grid" />
              <div>
                <p className="text-sm font-medium text-brand">代表プロフィール</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-text-main">
                  酒井先生（仮）
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
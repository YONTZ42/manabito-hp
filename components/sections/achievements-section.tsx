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
              title="マナビトの経験と実践の基盤"
              description="地域の現場に入りながら、学びの設計、対話の場づくり、研修や視察の企画支援を積み重ねてきた経験や最新情報を、今後ここに掲載していきます。"
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
              <div className="flex flex-col">
                {/* ヘッダー部分 */}
                <div className="border-b border-base-border pb-4">
                  <p className="text-sm font-medium text-brand">代表プロフィール</p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-text-main">
                    酒井 慶太
                  </h3>
                </div>

                {/* キャッチコピー */}
                <blockquote className="mt-6 border-l-4 border-brand pl-4">
                  <p className="text-lg font-bold leading-relaxed text-text-main md:text-xl">
                    「教室の中だけで、教育は完結しない」
                  </p>
                </blockquote>

                {/* ストーリー本文 */}
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-sub">
                  <p>
                    その痛切な危機感が、私を5年間の教員生活から、街という現場へ駆り立てました。
                  </p>
                  <p>
                    少子高齢化、地域の衰退、そして正解のないこれからの日本。疲弊していく社会を前に、教室で知識を教えるだけでは、子供たちの未来に責任を持てないと感じたからです。
                  </p>
                  <p>
                    最先端の学びと、地域に根ざした教育。その両方の現場で、生徒の可能性が「社会」と接続した瞬間に放たれる爆発的な熱狂を、私は誰よりも見てきました。
                  </p>
                  <p>
                    だからこそ、学びと街をシームレスにつなぐ伴走者として<span className="font-semibold text-brand">『マナビト』</span>を立ち上げました。現在は次世代の街づくりを担う団体の代表も務め、行政と若者の間に立ち、共に未来を企てる場をデザインしています。
                  </p>
                </div>

                {/* ビジョンメッセージ */}
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-sub">
                  <p >
                    街全体をキャンパスに。
                  </p>
                  <p>
                    「やりたい」が、街の「おもしろい」に変わる。
                  </p>
                  <p>
                    その社会の変革こそが、次世代への本当の教育だと信じています。
                  </p>
                </div>

                {/* 活動内容リスト */}
                <div className="mt-6 border-t border-base-border pt-5">
                  <p className="mb-3 text-sm font-semibold text-text-main">主な活動領域</p>
                  <ul className="space-y-2 text-sm leading-relaxed text-text-sub md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-sky" />
                      地域密着型の研修・体験学習プログラムの設計
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-peach" />
                      行政視察や先進事例学習の企画調整
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-lime" />
                      子ども、若者、地域の声を活かす場づくり支援
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


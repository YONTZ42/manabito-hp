"use client";

import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function AnimatedElement({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } ${className}`}
    >
      {children}
    </div>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-soft/50 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <AnimatedElement className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">About</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text-main md:text-4xl">
            なぜマナビトに<mark className="rounded bg-accent-yellow/50 px-1 text-brand">任せられる</mark>のか
          </h2>
        </AnimatedElement>

        {/* Main Profile Card */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">

          {/* Photo Section - Left */}
          <AnimatedElement delay={200} className="flex flex-col items-center lg:sticky lg:top-24">
            {/* Photo with decoration */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-brand/10 blur-md" />
              <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:w-72">
                <Image
                  src="/images/sakai_keita.jpg"
                  alt="代表 酒井 慶太"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                  priority
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="mt-6 text-center">
              <p className="text-sm font-medium text-brand">代表</p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-text-main md:text-3xl">
                酒井 慶太
              </h3>
              <div className="mt-3 space-y-1 text-sm text-text-sub">
                <p>合同会社マナビト 代表社員</p>
                <p className="font-medium text-text-main">NPO法人 土浦わかもののまちプロジェクト<br />代表理事</p>
              </div>
            </div>

            {/* Expertise Tags */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Chip variant="brand">街づくり</Chip>
              <Chip variant="brand">行政連携</Chip>
              <Chip variant="brand">若者支援</Chip>
            </div>

            {/* Trust Indicators */}
            <AnimatedElement delay={600} className="mt-6 flex gap-3">
              <div className="flex-1 rounded-xl bg-brand-soft/50 px-4 py-3 text-center">
                <p className="text-xs font-medium text-brand">教育現場</p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-dark">5<span className="text-xs">年以上</span></p>
              </div>
              <div className="flex-1 rounded-xl bg-brand-soft/50 px-4 py-3 text-center">
                <p className="text-xs font-medium text-brand">NPO代表</p>
                <p className="mt-1 font-heading text-xl font-bold text-brand-dark">現職</p>
              </div>
            </AnimatedElement>
          </AnimatedElement>

          {/* Story Section - Right */}
          <div className="flex flex-col gap-6">

            {/* Quote */}
            <AnimatedElement delay={300}>
              <blockquote className="relative rounded-2xl bg-brand-soft/30 p-6 md:p-8">
                <svg className="absolute left-4 top-4 h-8 w-8 text-brand/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="relative text-xl font-bold leading-relaxed text-text-main md:text-2xl">
                  「教室の中だけで、<br className="hidden sm:block" />
                  <mark className="rounded bg-accent-yellow/60 px-1 text-brand">教育は完結しない</mark>」
                </p>
              </blockquote>
            </AnimatedElement>

            {/* Story Parts */}
            <AnimatedElement delay={400}>
              <div className="rounded-2xl border border-base-border bg-white p-6 shadow-soft">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">1</span>
                  きっかけ
                </h4>
                <p className="mt-3 text-base leading-relaxed text-text-sub">
                  <span className="font-semibold text-text-main">5年間の高校教員生活。</span>テストの点数や校則といった「狭い世界の物差し」だけで、子どもたちの可能性を測ることに限界を感じました。
                </p>
                <p className="mt-2 rounded-lg bg-brand-soft/30 px-3 py-2 text-base font-semibold leading-relaxed text-text-main">
                  「卒業後の社会そのものが、挑戦を応援する場所でなければ、教育の責任は果たせない。」
                </p>
                <p className="mt-2 text-base leading-relaxed text-text-sub">
                  その問いが、私を学校の外へと突き動かしました。
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={500}>
              <div className="rounded-2xl border border-base-border bg-white p-6 shadow-soft">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">2</span>
                  街が「第二の教室」に変わる瞬間
                </h4>
                <p className="mt-3 text-base leading-relaxed text-text-sub">
                  学校を飛び出し、<mark className="rounded bg-accent-yellow/60 px-1 text-text-main">若者と行政をつなぐNPOの代表</mark>として、街���くりに身を投じました。
                </p>
                <p className="mt-2 text-base leading-relaxed text-text-sub">
                  教科書にはない問いに挑み、街の課題を自分事として語り出す子どもたちの眼差しは、驚くほど真剣でした。教室では発揮されなかった個性が、社会というリアルに触れた瞬間、<span className="font-bold text-brand">爆発的な熱量</span>に変わるのを目の当たりにしました。
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={600}>
              <div className="rounded-2xl border border-base-border bg-white p-6 shadow-soft">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">3</span>
                  確信
                </h4>
                <p className="mt-3 text-base leading-relaxed text-text-sub">
                  若者の声が行政に届き、<mark className="rounded bg-accent-yellow/60 px-1 text-text-main">実際に街が変わる。</mark>その成功体験が、子どもたちの自己肯定感を劇的に高めることを確信しました。
                </p>
                <p className="mt-2 text-base leading-relaxed text-text-sub">
                  一方で、行政・教育・地域にはそれぞれの「言葉」があり、想いがすれ違う場面も見てきました。今、求められているのは、それらを翻訳し、一つのチームにする<span className="font-semibold text-text-main">「伴走者」</span>です。
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={700}>
              <div className="rounded-2xl border-2 border-brand/20 bg-brand-soft/20 p-6 shadow-soft">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">4</span>
                  マナビト創業
                </h4>
                <p className="mt-3 text-base leading-relaxed text-text-sub">
                  教員の<mark className="rounded bg-accent-yellow/60 px-1 text-text-main">「人を育てる視点」</mark>と、NPOの<mark className="rounded bg-accent-yellow/60 px-1 text-text-main">「街を動かす実行力」</mark>。その両輪で<span className="font-bold text-brand">『マナビト』</span>を創業しました。
                </p>
                <p className="mt-2 text-base leading-relaxed text-text-sub">
                  行政には若者の新しい視点を、若者には社会に貢献する機会を。
                  大人も子どもも立場を超えて<span className="font-semibold text-text-main">「共に学び、高め合う」</span>。
                  学びが街の力となり、街が人を育む。そんな心地よい循環が生まれる大きな教室のような社会を、皆さまと共に築いていきます。
                </p>
              </div>
            </AnimatedElement>

            {/* Vision */}
            <AnimatedElement delay={800}>
              <div className="rounded-2xl bg-brand p-8 text-center text-white md:p-12">
                <p className="font-heading text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl">
                  社会を、大きな教室に。
                </p>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-white/40" />
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  子どもが輝ける街は、大人も輝ける街。<br />
                  マナビトは、その架け橋になります。

                </p>
              </div>
          </AnimatedElement>

            {/* Activities */}
            <AnimatedElement delay={900}>
              <div className="rounded-2xl border border-base-border bg-white p-6">
                <p className="mb-4 text-sm font-bold text-text-main">主な活動領域</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-lg bg-base-bg p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-text-main">行政連携</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-base-bg p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-muted text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-text-main">若者支援</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-base-bg p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-text-main">街づくり</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </section>
  );
}

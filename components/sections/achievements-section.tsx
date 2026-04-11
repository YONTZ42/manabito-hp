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
            なぜマナビトに<span className="relative inline-block text-brand"><span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-accent-yellow/50" />任せられる</span>のか
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
              <p className="mt-2 text-sm text-text-sub">合同会社マナビト 代表社員</p>
            </div>

            {/* Expertise Tags */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Chip variant="brand">地域連携</Chip>
              <Chip variant="brand">視察研修</Chip>
              <Chip variant="brand">教育設計</Chip>
            </div>

            {/* Trust Indicator */}
            <AnimatedElement delay={600} className="mt-6 rounded-xl bg-brand-soft/50 px-5 py-3 text-center">
              <p className="text-xs font-medium text-brand">教育現場での経験</p>
              <p className="mt-1 font-heading text-2xl font-bold text-brand-dark">5<span className="text-base">年以上</span></p>
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
                  <span className="relative inline-block text-brand">
                    <span className="absolute bottom-0 left-0 -z-10 h-3 w-full bg-accent-yellow" />
                    教育は完結しない
                  </span>」
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
                  その痛切な危機感が、私を<span className="font-semibold text-text-main">5年間の教員生活</span>から、<span className="relative inline-block"><span className="absolute bottom-0 left-0 -z-10 h-2 w-full bg-accent-yellow/60" />街という現場</span>へ駆り立てました。
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={500}>
              <div className="rounded-2xl border border-base-border bg-white p-6 shadow-soft">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">2</span>
                  課題意識
                </h4>
                <p className="mt-3 text-base leading-relaxed text-text-sub">
                  <span className="font-semibold text-text-main">少子高齢化、地域の衰退</span>、そして正解のないこれからの日本。疲弊していく社会を前に、教室で知識を教えるだけでは、<span className="relative inline-block"><span className="absolute bottom-0 left-0 -z-10 h-2 w-full bg-accent-yellow/60" />子供たちの未来に責任を持てない</span>と感じました。
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
                  最先端の学びと、地域に根ざした教育。その両方の現場で、生徒の可能性が「社会」と接続した瞬間に放たれる<span className="font-bold text-brand">爆発的な熱狂</span>を、私は誰よりも見てきました。
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={700}>
              <div className="rounded-2xl border-2 border-brand/20 bg-brand-soft/20 p-6 shadow-soft">
                <h4 className="flex items-center gap-2 text-sm font-bold text-brand">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">4</span>
                  だから、マナビトを立ち上げた
                </h4>
                <p className="mt-3 text-base leading-relaxed text-text-sub">
                  学びと街を<span className="font-semibold text-text-main">シームレスにつなぐ伴走者</span>として<span className="font-bold text-brand">『マナビト』</span>を創業。現在は次世代の街づくりを担う団体の代表も務め、<span className="relative inline-block"><span className="absolute bottom-0 left-0 -z-10 h-2 w-full bg-accent-yellow/60" />行政と若者の間に立ち</span>、共に未来を企てる場をデザインしています。
                </p>
              </div>
            </AnimatedElement>

            {/* Vision */}
          <AnimatedElement delay={800}>
            {/* 1. 影を濃く(shadow-strong)し、relativeを追加して内部の絶対配置を安定させる */}
            <div className="relative rounded-[32px] bg-brand p-8 text-center text-white shadow-strong md:p-10">
              
              {/* 2. 装飾用の下線。親が relative なので、これで正しく文字の下に配置されます */}
              <div className="flex flex-col items-center">
                <div className="relative inline-block">
                  <p className="text-xl font-bold leading-relaxed text-white md:text-2xl">
                    " 社会を、大きな教室に。"
                  </p>
                  <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-accent-yellow/30" />
                </div>

                <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
                  「やりたい」が、街の「おもしろい」に変わる。<br />
                  その社会の変革こそが、次世代への本当の教育。
                </p>
              </div>

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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-text-main">研修・学習設計</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-base-bg p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-muted text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-text-main">視察・企画調整</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-base-bg p-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-text-main">場づくり支援</span>
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

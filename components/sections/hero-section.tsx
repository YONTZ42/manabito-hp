"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const heroImages = [
  {
    src: "/images/hero/tsuchiura_from_sky.jpg",
    alt: "土浦の風景",
  },
  {
    src: "/images/hero/mountain_tsukuba.jpg",
    alt: "筑波山",
  },
  {
    src: "/images/hero/tsuchiura_ship.png",
    alt: "土浦の帆船",
  },
];

const serviceSummaries = [
  "行政支援",
  "視察研修",
  "体験学習",
  "各種セミナー",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-base-bg pb-14 md:pb-20">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="relative h-[50vh] min-h-[280px] max-h-[620px] w-full md:min-h-[380px]">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== currentIndex}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`スライド ${index + 1} を表示`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/65 hover:bg-white/85"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Container>
        <div className="mx-auto max-w-4xl px-2 pt-8 text-center md:pt-10">
          <p className="font-latin text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Manabito
          </p>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-main md:text-5xl">
            社会を、<br className="sm:hidden" />
            大きな教室に。
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-text-sub md:text-lg md:leading-8">
            マナビトは『学び』と『人』を未来へつなぎ、行政支援や視察研修、
            体験学習、各種セミナーを通じて、子どもから大人まで、
            すべての人に学びを届けます。
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {serviceSummaries.map((item) => (
              <span
                key={item}
                className="rounded-full border border-base-border bg-brand-soft px-4 py-2 text-sm font-medium text-brand"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#services">サービスを見る</Button>
            <Button href="#contact" variant="secondary">
              お問い合わせ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
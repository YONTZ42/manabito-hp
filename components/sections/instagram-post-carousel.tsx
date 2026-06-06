"use client";

import { useRef } from "react";

import { InstagramPostCard } from "@/components/cards/instagram-post-card";
import { InstagramIcon } from "@/components/icons/instagram-icon";

type InstagramCarouselPost = {
  id: string;
  title: string;
  date: string;
  caption?: string;
  imageUrl?: string;
  permalink?: string;
  mediaType?: string;
};

type InstagramPostCarouselProps = {
  posts: InstagramCarouselPost[];
  profileUrl: string;
};

export function InstagramPostCarousel({
  posts,
  profileUrl,
}: InstagramPostCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const postCount = posts.length;
  const canNavigate = postCount > 1;

  if (postCount === 0) {
    return null;
  }

  function scrollByCard(direction: -1 | 1) {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    container.scrollBy({
      left: direction * container.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 scroll-smooth"
      >
        {posts.map((post, index) => (
          <div
            className="flex shrink-0 basis-[82%] snap-start sm:basis-[72%] lg:basis-[78%]"
            key={post.id}
          >
            <InstagramPostCard
              title={post.title}
              date={post.date}
              caption={post.caption}
              href={post.permalink}
              imageUrl={post.imageUrl}
              mediaType={post.mediaType}
              colorIndex={index}
              className="h-full w-full"
            />
          </div>
        ))}

        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[420px] shrink-0 basis-[82%] snap-start flex-col justify-between rounded-[24px] border border-brand/20 bg-brand p-6 text-white shadow-soft transition hover:-translate-y-1 hover:shadow-strong sm:basis-[72%] lg:basis-[78%]"
        >
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-sm font-semibold text-white/75">
              Instagram
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-white">
              もっと活動を見る
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/80">
              日々の活動報告やお知らせは、Instagramで更新しています。
            </p>
          </div>
          <span className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-brand">
            詳細はこちら
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </a>
      </div>

      {canNavigate ? (
        <div className="mt-1 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              aria-label="前のInstagram投稿"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-soft/50"
              type="button"
              onClick={() => scrollByCard(-1)}
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="次のInstagram投稿"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-soft/50"
              type="button"
              onClick={() => scrollByCard(1)}
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <p className="text-right text-sm font-medium text-text-sub">
            横にスクロール
          </p>
        </div>
      ) : null}
    </div>
  );
}

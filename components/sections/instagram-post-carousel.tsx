"use client";

import { useMemo, useState } from "react";

import { InstagramPostCard } from "@/components/cards/instagram-post-card";
import { cn } from "@/lib/utils";

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
};

export function InstagramPostCarousel({ posts }: InstagramPostCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const postCount = posts.length;
  const canNavigate = postCount > 1;

  const activePostLabel = useMemo(
    () => `${activeIndex + 1} / ${postCount}`,
    [activeIndex, postCount],
  );

  if (postCount === 0) {
    return null;
  }

  function goToPost(index: number) {
    setActiveIndex((index + postCount) % postCount);
  }

  function goToPrevious() {
    goToPost(activeIndex - 1);
  }

  function goToNext() {
    goToPost(activeIndex + 1);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[28px]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {posts.map((post, index) => (
            <div
              aria-hidden={index !== activeIndex}
              className="min-w-full px-0.5"
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
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {canNavigate ? (
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              aria-label="前のInstagram投稿"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white text-brand shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-soft/50"
              type="button"
              onClick={goToPrevious}
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
              onClick={goToNext}
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

          <div className="flex items-center gap-2">
            {posts.map((post, index) => (
              <button
                aria-label={`Instagram投稿 ${index + 1} を表示`}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === activeIndex
                    ? "w-7 bg-brand"
                    : "w-2.5 bg-brand/20 hover:bg-brand/40",
                )}
                key={post.id}
                type="button"
                onClick={() => goToPost(index)}
              />
            ))}
          </div>

          <p className="min-w-12 text-right text-sm font-medium text-text-sub">
            {activePostLabel}
          </p>
        </div>
      ) : null}
    </div>
  );
}

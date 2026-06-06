import { InstagramIcon } from "@/components/icons/instagram-icon";
import { cn } from "@/lib/utils";

type InstagramPostCardProps = {
  title: string;
  date: string;
  caption?: string;
  href?: string;
  imageUrl?: string;
  mediaType?: string;
  className?: string;
  colorIndex?: number;
};

const gradientColors = [
  "bg-gradient-to-br from-accent-peach to-accent-yellow/60",
  "bg-gradient-to-br from-accent-sky to-accent-pink/50",
  "bg-gradient-to-br from-accent-lime to-accent-sky/60",
  "bg-gradient-to-br from-accent-pink to-accent-peach/60",
];

export function InstagramPostCard({
  title,
  date,
  caption,
  href,
  imageUrl,
  mediaType,
  className,
  colorIndex = 0,
}: InstagramPostCardProps) {
  const content = (
    <>
      <div className="relative aspect-square overflow-hidden bg-hero-grid">
        {imageUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </>
        ) : (
          <div
            className={cn(
              "h-full w-full bg-hero-grid",
              gradientColors[colorIndex % gradientColors.length],
            )}
          />
        )}
        {mediaType ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-text-main shadow-sm">
            {mediaType === "VIDEO" ? "Reel / Video" : "Post"}
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
          <InstagramIcon className="h-4 w-4" />
          Instagram
        </p>
        <h3 className="mt-2 font-heading text-base font-bold text-text-main">
          {title}
        </h3>
        {caption ? (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-text-sub">
            {caption}
          </p>
        ) : null}
        <p className="mt-3 text-sm text-text-sub">{date}</p>
      </div>
    </>
  );

  const classes = cn(
    "group overflow-hidden rounded-[24px] border border-base-border bg-white shadow-soft transition-transform hover:scale-[1.02]",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={classes}>
      {content}
    </article>
  );
}

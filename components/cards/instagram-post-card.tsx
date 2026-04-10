import { cn } from "@/lib/utils";

type InstagramPostCardProps = {
  title: string;
  date: string;
  className?: string;
  colorIndex?: number;
};

const gradientColors = [
  "bg-gradient-to-br from-accent-peach to-accent-yellow/60",
  "bg-gradient-to-br from-accent-sky to-accent-pink/50",
  "bg-gradient-to-br from-accent-lime to-accent-sky/60",
  "bg-gradient-to-br from-accent-pink to-accent-peach/60",
];

export function InstagramPostCard({ title, date, className, colorIndex = 0 }: InstagramPostCardProps) {
  return (
    <article className={cn("overflow-hidden rounded-[24px] border border-base-border bg-white shadow-soft transition-transform hover:scale-[1.02]", className)}>
      <div className={cn("aspect-square bg-hero-grid", gradientColors[colorIndex % gradientColors.length])} />
      <div className="p-4">
        <p className="text-xs font-medium text-brand">Instagram</p>
        <h3 className="mt-2 font-heading text-base font-bold text-text-main">{title}</h3>
        <p className="mt-2 text-sm text-text-sub">{date}</p>
      </div>
    </article>
  );
}

import { cn } from "@/lib/utils";

type InstagramPostCardProps = {
  title: string;
  date: string;
  className?: string;
};

export function InstagramPostCard({ title, date, className }: InstagramPostCardProps) {
  return (
    <article className={cn("overflow-hidden rounded-[24px] border border-base.border bg-white shadow-soft", className)}>
      <div className="aspect-square bg-accent.peach/60 bg-hero-grid bg-hero-grid" />
      <div className="p-4">
        <p className="text-xs font-medium text-brand">Instagram</p>
        <h3 className="mt-2 font-heading text-base font-bold text-text.main">{title}</h3>
        <p className="mt-2 text-sm text-text.sub">{date}</p>
      </div>
    </article>
  );
}
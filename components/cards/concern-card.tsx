import { cn } from "@/lib/utils";

type ConcernCardProps = {
  index: number;
  title: string;
  description: string;
  className?: string;
};

export function ConcernCard({ index, title, description, className }: ConcernCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-[28px] border border-base.border bg-white p-6 shadow-soft",
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent.sky font-latin text-lg font-bold text-brand">
        {String(index).padStart(2, "0")}
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-text.main">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-text.sub md:text-base">{description}</p>
    </article>
  );
}
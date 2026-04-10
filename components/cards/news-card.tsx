type NewsCardProps = {
  title: string;
  date: string;
  category: string;
  colorIndex?: number;
};

const categoryColors = [
  "bg-accent-sky text-brand",
  "bg-accent-peach text-brand-dark",
  "bg-accent-lime text-brand",
  "bg-accent-pink text-brand-dark",
];

export function NewsCard({ title, date, category, colorIndex = 0 }: NewsCardProps) {
  return (
    <article className="rounded-[24px] border border-base-border bg-white p-5 shadow-soft transition-colors hover:border-brand/30">
      <div className="flex items-center gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[colorIndex % categoryColors.length]}`}>
          {category}
        </span>
        <span className="text-sm text-text-sub">{date}</span>
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-text-main">{title}</h3>
    </article>
  );
}

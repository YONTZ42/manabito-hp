type NewsCardProps = {
  title: string;
  date: string;
  category: string;
};

export function NewsCard({ title, date, category }: NewsCardProps) {
  return (
    <article className="rounded-[24px] border border-base.border bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-brand.soft px-3 py-1 text-xs font-medium text-brand">
          {category}
        </span>
        <span className="text-sm text-text.sub">{date}</span>
      </div>
      <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-text.main">{title}</h3>
    </article>
  );
}
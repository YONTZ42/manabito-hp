import { cn } from "@/lib/utils";

type ConcernCardProps = {
  index: number;
  title: string;
  description: string;
  highlightWords?: string[];
  className?: string;
};

function highlightText(text: string, highlightWords: string[] = []) {
  if (highlightWords.length === 0) return text;
  
  let result = text;
  highlightWords.forEach((word) => {
    result = result.replace(
      word,
      `<mark class="rounded bg-accent-yellow/60 px-0.5 font-bold text-brand">${word}</mark>`
    );
  });
  return result;
}

export function ConcernCard({ index, title, description, highlightWords = [], className }: ConcernCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-base-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-strong",
        className,
      )}
    >
      {/* Left accent line (slides in on hover) */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent-yellow transition-all duration-300 -translate-x-full group-hover:translate-x-0" />

      {/* Number badge */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-latin text-base font-bold text-white transition-transform duration-300 group-hover:scale-110">
        {String(index).padStart(2, "0")}
      </div>
      
      {/* Title with highlight */}
      <h3 
        className="mt-4 font-heading text-lg font-bold leading-relaxed text-text-main md:text-xl"
        dangerouslySetInnerHTML={{ __html: highlightText(title, highlightWords) }}
      />
      
      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-text-sub">{description}</p>
      
      {/* Concern indicator */}
      <div className="mt-4 flex items-center gap-2 text-xs text-text-sub">
        <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
        <span>多くの方が抱える課題です</span>
      </div>
    </article>
  );
}

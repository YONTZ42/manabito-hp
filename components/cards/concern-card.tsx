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
      `<span class="relative inline-block font-bold text-brand"><span class="absolute bottom-0 left-0 h-2.5 w-full bg-accent-yellow -z-10"></span>${word}</span>`
    );
  });
  return result;
}

export function ConcernCard({ index, title, description, highlightWords = [], className }: ConcernCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-2xl border border-base-border bg-white p-6 shadow-soft transition-all hover:border-brand/20 hover:shadow-strong",
        className,
      )}
    >
      {/* Number badge */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-latin text-sm font-bold text-white">
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

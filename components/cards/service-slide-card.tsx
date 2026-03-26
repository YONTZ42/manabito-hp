import { cn } from "@/lib/utils";

type AccentTone = "mint" | "sky" | "peach" | "lemon" | "lavender";

type ServiceSlideCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  accentTone?: AccentTone;
};

const toneClassMap: Record<AccentTone, string> = {
  mint: "bg-brand.soft",
  sky: "bg-accent.sky",
  peach: "bg-accent.peach",
  lemon: "bg-accent.yellow/40",
  lavender: "bg-accent.lime",
};

export function ServiceSlideCard({
  title,
  description,
  imageSrc,
  accentTone = "mint",
}: ServiceSlideCardProps) {
  return (
    <article className="w-[300px] shrink-0 overflow-hidden rounded-[30px] border border-base.border bg-white shadow-soft md:w-[360px]">
      <div className={cn("relative h-[260px] w-full", toneClassMap[accentTone])}>
        <div className="absolute inset-0 bg-hero-grid bg-hero-grid opacity-70" />
        <div className="absolute inset-5 rounded-[24px] border border-white/50 bg-white/25" />
        <div className="absolute inset-x-6 bottom-6 rounded-[24px] bg-white/80 p-4 backdrop-blur-sm">
          <p className="text-sm font-medium text-text.sub">イメージ画像</p>
          <p className="mt-1 truncate text-sm text-text.sub">{imageSrc}</p>
        </div>
      </div>
      <div className="h-[140px] p-6">
        <h3 className="font-heading text-xl font-bold leading-snug text-text.main">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text.sub">{description}</p>
      </div>
    </article>
  );
}
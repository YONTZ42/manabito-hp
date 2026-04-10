import { cn } from "@/lib/utils";
import Image from "next/image";
type AccentTone = "brand" | "brandLight" | "brandDark" | "yellow";

type ServiceSlideCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  accentTone?: AccentTone;
  titleBorderColor?: string;
};

const toneClassMap: Record<AccentTone, string> = {
  brand: "bg-brand",
  brandLight: "bg-brand-soft",
  brandDark: "bg-brand-dark",
  yellow: "bg-accent-yellow",
};

export function ServiceSlideCard({
  title,
  description,
  imageSrc,
  accentTone = "brand",
}: ServiceSlideCardProps) {
return(
<div>
    {imageSrc ? (
      <article className="w-[260px] shrink-0 overflow-hidden rounded-2xl border border-base-border bg-white shadow-soft">
        <div className={cn("relative h-[160px] w-full", toneClassMap[accentTone])}>
          <Image
            src={imageSrc}
            alt={description}
            fill
            priority={title === "子ども・若者からの意見を聞きたい"}
            className="absolute h-full w-full object-cover"
            sizes="260px"
          />
        </div>
        <div className="p-4">
          <h3 className="font-heading text-base font-bold leading-snug text-text-main">{title}</h3>
          <div className={cn("mt-2 h-0.5 w-20", toneClassMap[accentTone])} />
          <p className="mt-2 text-xs leading-relaxed text-text-sub">{description}</p>
        </div>
      </article>

    ) : (
      <article className="w-[260px] shrink-0 overflow-hidden rounded-2xl border border-base-border bg-white shadow-soft">
        <div className={cn("relative h-[160px] w-full", toneClassMap[accentTone])}>
          <div className="absolute inset-0 bg-hero-grid opacity-70" />
          <div className="absolute inset-3 rounded-xl border border-white/50 bg-white/25" />
        </div>
        <div className="p-4">
          <h3 className="font-heading text-base font-bold leading-snug text-text-main">{title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-text-sub">{description}</p>
        </div>
      </article>
    )
    }
</div>
);
}

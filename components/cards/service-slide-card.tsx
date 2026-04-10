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
      <article className="w-[400px] shrink-0 overflow-hidden rounded-[30px] border border-base.brand bg-white shadow-soft md:w-[360px]">
        <div className={cn("relative h-[260px] w-full", toneClassMap[accentTone])}>
          <div className="absolute inset-0 bg-hero-grid bg-hero-grid opacity-100" >
            <Image
              src={imageSrc} // 画像パスを適切に変更してください
              alt={description}
              fill
              priority={title === "子ども・若者からの意見を聞きたい"} // 最初のカードを優先的に読み込む

              className="absolute h-full w-full object-cover"
              sizes="(max-width: 768px) 500vw, 500px"
            />
            
          </div>
          </div>
          <div className="h-[160px] p-6">
            <h3 className="font-heading text-xl font-bold leading-snug text-text.main">{title}</h3>
            <div className={cn("mt-2 h-0.5 w-40", toneClassMap[accentTone])} />
            <p className="mt-3 text-sm leading-7 text-text.sub">{description}</p>
          </div>
      </article>

    ) : (
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
    )
    }
</div>
);
}

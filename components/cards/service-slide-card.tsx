import { cn } from "@/lib/utils";
import Image from "next/image";
type AccentTone = "mint" | "sky" | "peach" | "lemon" | "lavender" | "pink" | "coral";

type ServiceSlideCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  accentTone?: AccentTone;
  titleBorderColor?: string;
};

const toneClassMap: Record<AccentTone, string> = {
  // ミント：ライムと混ぜて、ネオンに近いフレッシュな緑に
  mint: "bg-gradient-to-br from-accent-mint via-accent-mint to-accent-lime",
  
  // スカイ：あえて青と緑を混ぜて、深く鮮やかなターコイズ系に
  sky: "bg-gradient-to-br from-accent-sky via-accent-sky to-accent-mint",
  
  // ピーチ：オレンジをしっかり混ぜて、夕焼けのようなエネルギーを出す
  peach: "bg-gradient-to-br from-accent-peach via-accent-peach to-accent-orange",
  
  // レモン：黄色とオレンジで、ビタミンカラーを強調
  lemon: "bg-gradient-to-br from-accent-yellow via-accent-yellow to-accent-orange",
  
  // ラベンダー：スカイとピンクをしっかり混ぜ、青紫〜赤紫の対比を作る
  lavender: "bg-gradient-to-br from-accent-sky via-accent-pink to-accent-pink",
  
  // ピンク：コーラルを混ぜて、赤みの強い情熱的なピンクに
  pink: "bg-gradient-to-br from-accent-pink via-accent-pink to-accent-coral",
  
  // コーラル：最もパキッとした赤系。オレンジとぶつけて力強く
  coral: "bg-gradient-to-br from-accent-coral via-accent-coral to-accent-orange",
};

export function ServiceSlideCard({
  title,
  description,
  imageSrc,
  accentTone = "mint",
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

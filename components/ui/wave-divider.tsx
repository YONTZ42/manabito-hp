import { cn } from "@/lib/utils";

type WaveDividerProps = {
  fillColor?: string;
  variant?: "wave" | "curve" | "slant";
  flip?: boolean;
  className?: string;
};

const paths: Record<string, string> = {
  wave: "M0,64 C320,120 640,0 960,64 C1280,128 1600,20 1920,64 L1920,160 L0,160 Z",
  curve: "M0,96 Q960,0 1920,96 L1920,160 L0,160 Z",
  slant: "M0,128 L1920,32 L1920,160 L0,160 Z",
};

export function WaveDivider({
  fillColor = "fill-white",
  variant = "wave",
  flip = false,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "relative -mt-px w-full overflow-hidden leading-[0]",
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        className={cn("block h-[clamp(40px,6vw,80px)] w-full", fillColor)}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}

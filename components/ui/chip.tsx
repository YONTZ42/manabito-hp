import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "default" | "sky" | "peach" | "lime" | "pink" | "yellow";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: ChipVariant;
};

const variantClasses: Record<ChipVariant, string> = {
  default: "border-brand-soft bg-brand-soft text-brand",
  sky: "border-accent-sky bg-accent-sky text-brand",
  peach: "border-accent-peach bg-accent-peach text-brand-dark",
  lime: "border-accent-lime bg-accent-lime text-brand",
  pink: "border-accent-pink bg-accent-pink text-brand-dark",
  yellow: "border-accent-yellow/50 bg-accent-yellow/40 text-brand-dark",
};

export function Chip({ children, className, variant = "default" }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

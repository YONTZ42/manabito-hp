import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "default" | "sky" | "peach" | "lime" | "pink" | "yellow" | "orange";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: ChipVariant;
};

const variantClasses: Record<ChipVariant, string> = {
  default: "border-brand-soft bg-brand-soft text-brand",
  sky: "border-accent-sky bg-accent-sky text-text.sub",
  peach: "border-accent-peach bg-accent-peach text-text.sub",
  lime: "border-accent-lime bg-accent-lime text-text.sub",
  pink: "border-accent-pink bg-accent-pink text-brand-sub",
  yellow: "border-accent-yellow/50 bg-accent-yellow/40 text-brand-dark",
  orange: "border-accent-orange bg-accent-orange text-brand-sub",

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

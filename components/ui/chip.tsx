import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "default" | "brand" | "yellow";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: ChipVariant;
};

const variantClasses: Record<ChipVariant, string> = {
  default: "border-brand-soft bg-brand-soft text-brand",
  brand: "border-brand/20 bg-brand-soft text-brand-dark",
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

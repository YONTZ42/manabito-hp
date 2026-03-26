import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-base.border bg-brand.soft px-4 py-2 text-sm font-medium text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
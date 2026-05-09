"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeScale" | "fadeSlideLeft" | "fadeSlideRight";
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
};

const hiddenClasses: Record<string, string> = {
  fadeUp: "translate-y-8 opacity-0",
  fadeScale: "translate-y-5 scale-95 opacity-0",
  fadeSlideLeft: "-translate-x-8 opacity-0",
  fadeSlideRight: "translate-x-8 opacity-0",
};

const visibleClasses = "translate-y-0 translate-x-0 scale-100 opacity-100";

export function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  className,
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses : hiddenClasses[animation],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

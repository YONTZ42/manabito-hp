"use client";

import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type ModalProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}>;

export function Modal({ open, onClose, title, className, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        aria-label="モーダルを閉じる"
        className="absolute inset-0 bg-text.main/35 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative z-10 w-full max-w-xl rounded-4xl bg-white p-6 shadow-soft animate-fadeUp md:p-8",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {title ? (
              <h3 className="font-heading text-2xl font-bold text-text.main">{title}</h3>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-base.border px-3 py-1 text-sm text-text.sub transition hover:bg-base.bg"
          >
            閉じる
          </button>
        </div>

        <div className="mt-6 text-text.sub">{children}</div>
      </div>
    </div>
  );
}
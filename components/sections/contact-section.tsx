"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContactFormModal } from "@/components/contact-form-modal";

export function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-brand py-20 md:py-28">
        {/* Floating decorations */}
        <div className="absolute -left-10 top-16 h-48 w-48 rounded-full bg-accent-yellow/20 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-accent-sky/15 blur-3xl" />

        <Container className="relative text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            行政支援、視察研修、体験学習、各種セミナーなど、<br className="hidden sm:block" />
            目的に合わせたご相談を受け付けています。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="tel:090-7823-4128"
              variant="ghost"
              className="border border-white/30 bg-white/10 !text-white backdrop-blur-sm hover:bg-white/20"
            >
              電話で問い合わせる
            </Button>
            <Button
              onClick={() => setOpen(true)}
              variant="yellow"
              className="bg-accent-yellow !text-text-main shadow-[0_4px_20px_rgba(245,200,76,0.4)] hover:shadow-[0_6px_28px_rgba(245,200,76,0.5)] hover:-translate-y-0.5 animate-pulse-soft"
            >
              お問い合わせフォーム
            </Button>
          </div>
        </Container>
      </section>

      <ContactFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContactFormModal } from "@/components/contact-form-modal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-white py-16 md:py-24">
        {/* Background decorations */}
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-brand-soft/50 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
        
        <Container className="relative">
          <div className="rounded-[36px] bg-white border border-brand from-brand to-brand px-6 py-10 text-main shadow-soft md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Contact"
              title="まずはお気軽にご相談ください"
              description="行政支援、視察研修、体験学習、各種セミナーなど、目的に合わせたご相談を受け付けています。"
              className="max-w-2xl"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="tel:090-7823-4128"
                variant="ghost"
                className="border border-accent-yellow bg-white text-text-main hover:bg-white/60"
                style={{ color: 'rgb(36, 53, 51)' }}
              >
                電話で問い合わせる
              </Button>
              <Button
                onClick={() => setOpen(true)}
                variant="yellow"
                className="bg-accent-yellow text-text-main hover:opacity-95 shadow-soft"
              >
                お問い合わせフォーム
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ContactFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

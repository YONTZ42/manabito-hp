"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Modal } from "@/components/ui/modal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="bg-white py-16 md:py-24">
        <Container>
          <div className="rounded-[36px] bg-brand px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Contact"
              title="まずはお気軽にご相談ください"
              description="行政支援、視察研修、体験学習、各種セミナーなど、目的に合わせたご相談を受け付けています。"
              className="max-w-2xl"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="tel:090-7823-4128"
                variant="secondary"
                className="border-white/50 bg-white text-soft hover:bg-white/90"
                style={{ color: 'rgb(36, 53, 51)' }}
              >
                電話で問い合わせる
              </Button>
              <Button
                onClick={() => setOpen(true)}
                className="bg-accent-yellow text-text-main hover:opacity-95"
              >
                フォームで問い合わせる
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} title="お問い合わせフォーム">
        <div className="space-y-4">
          <p>
            初期実装ではモーダルの見た目のみを用意しています。後続でフォーム送信機能やバリデーションを追加できます。
          </p>
          <div className="rounded-3xl bg-base-bg p-4 text-sm leading-7">
            ・お名前
            <br />
            ・ご所属
            <br />
            ・お問い合わせ内容
            <br />
            ・連絡先メールアドレス
          </div>
        </div>
      </Modal>
    </>
  );
}

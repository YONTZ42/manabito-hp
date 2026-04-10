"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

// ロゴ画像のパス（画像がある場合は設定してください）
const LOGO_IMAGE_PATH = "/images/MANABITO_LOGO.png";

const navItems = [
  { label: "理念", href: "#top" },
  { label: "お悩み", href: "#concerns" },
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#achievements" },
  { label: "最新情報", href: "#updates" },
  { label: "お問い合わせ", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
    { label: "理念", href: "#top" },
    { label: "お悩み", href: "#concerns" },
    { label: "サービス", href: "#services" },
    { label: "実績", href: "#achievements" },
    { label: "最新情報", href: "#updates" },
    { label: "お問い合わせ", href: "#contact" },
    ];

    
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-md transition-all duration-300",
          isScrolled && "shadow-soft",
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-4 py-3">
          <Link
            href="#top"
            className="group flex min-w-0 items-center gap-3"
            aria-label="合同会社マナビト トップへ戻る"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hiddenshadow-soft transition-transform duration-200 group-hover:scale-[1.03]">
              <Image
                src={LOGO_IMAGE_PATH}
                alt="マナビト ロゴ"
                fill
                sizes="(max-width: 768px) 30vw, 50px"
                className="object-cover"
                onError={(e) => {
                  // 画像が見つからない場合はフォールバック表示
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="flex h-full w-full items-center justify-center text-sm font-bold text-white">M</span>';
                  }
                }}
              />
            </div>

            <div className="min-w-0 shrink-0">
              <p className="whitespace-nowrap font-heading text-sm font-bold text-text-main sm:text-base md:text-lg">
                合同会社マナビト
              </p>
              <p className="whitespace-nowrap text-[10px] text-text-sub sm:text-xs">
                社会を、大きな教室に。
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="グローバルナビゲーション">
            {navItems.slice(1, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-sub transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {/* モバイル: アイコンのみ */}
            <Button href="#contact" size="sm" className="inline-flex px-2.5 sm:hidden" aria-label="お問い合わせ">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </Button>
            {/* デスクトップ: テキスト */}
            <Button href="#contact" size="sm" className="hidden sm:inline-flex">
              お問い合わせ
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="メニューを開く"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 items-center justify-center rounded-full border border-base-border bg-white px-4 text-sm font-medium text-text-main transition hover:bg-base-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              MENU
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[70] transition duration-300",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="メニューを閉じる"
          className={cn(
            "absolute inset-0 bg-text-main/35 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />

        <aside
          id="mobile-menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-base-border bg-white p-6 shadow-soft transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-heading text-lg font-bold text-text-main">
                合同会社マナビト
              </p>
              <p className="mt-1 text-sm text-text-sub">
                地域と人をつなぐ学びのデザイン
              </p>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full border border-base-border px-4 text-sm font-medium text-text-sub transition hover:bg-base-bg"
            >
              閉じる
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-2" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-text-main transition hover:bg-brand-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <Button href="#contact" className="w-full" onClick={() => setMenuOpen(false)}>
              お問い合わせ
            </Button>
            <Button
              href="tel:000-0000-0000"
              variant="secondary"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              電話で相談する
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}

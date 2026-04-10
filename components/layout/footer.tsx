import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-base-border bg-white py-8">
      {/* Subtle colorful accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-sky via-accent-pink to-accent-yellow" />
      
      <Container className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-text-main">合同会社マナビト</p>
          <p className="mt-1 text-sm text-text-sub">地域と人をつなぎ、学びを未来へ届ける。</p>
        </div>
        <p className="text-sm text-text-sub">© Manabito Inc. All rights reserved.</p>
      </Container>
    </footer>
  );
}

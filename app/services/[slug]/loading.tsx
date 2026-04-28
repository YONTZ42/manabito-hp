import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main className="bg-base-bg">
      <section className="border-b border-base-border bg-soft-radial">
        <Container className="py-20 md:py-28">
          <div className="h-4 w-32 rounded-full bg-brand-soft" />
          <div className="mt-4 h-10 max-w-3xl rounded-2xl bg-white/80 md:h-14" />
          <div className="mt-6 h-24 max-w-2xl rounded-[28px] bg-white/80" />
        </Container>
      </section>
    </main>
  );
}

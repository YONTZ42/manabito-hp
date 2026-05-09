import { ConcernCard } from "@/components/cards/concern-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Container } from "@/components/ui/container";
import { concerns } from "@/data/concerns";

export function ConcernsSection() {
  return (
    <section
      id="concerns"
      className="relative overflow-hidden bg-white bg-section-peach py-16 md:py-24"
    >
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-accent-peach/30 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-accent-sky/20 blur-3xl" />

      <Container>
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">Concerns</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text-main md:text-5xl">
            こんな<span className="underline-accent">お悩み</span>はありませんか？
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-sub">
            「やりたいことはある。でも、<span className="highlight-marker">時間も人手も足りない</span>」<br className="hidden sm:block" />
            そんな現場の声に、私たちは向き合ってきました。
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern, index) => (
            <AnimateOnScroll key={concern.title} animation="fadeScale" delay={index * 100}>
              <ConcernCard
                index={index + 1}
                title={concern.title}
                description={concern.description}
                highlightWords={concern.highlightWords}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={600} className="mt-12 text-center">
          <p className="text-lg font-semibold text-text-main">
            一つでも当てはまるなら、<span className="underline-accent text-brand">マナビト</span>がお力になれます。
          </p>
          <svg className="mx-auto mt-4 h-8 w-8 animate-bounce text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

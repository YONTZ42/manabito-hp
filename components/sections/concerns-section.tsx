import { ConcernCard } from "@/components/cards/concern-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { concerns } from "@/data/concerns";

export function ConcernsSection() {
  return (
    <section
      id="concerns"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-accent-sky/60 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-accent-peach/60 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-32 w-32 -translate-x-1/2 rounded-full bg-accent-pink/40 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-36 w-36 rounded-full bg-accent-lime/50 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Concerns"
          title="こんなお悩みはありませんか？"
          description="現場の声を集めたい、視察や学びの場をつくりたい、でも企画や調整まで手が回らない。そんな悩みに、地域と実践の視点から伴走します。"
          align="center"
          descriptionColor="rgb(36, 53, 51)"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {concerns.map((concern, index) => (
            <ConcernCard
              key={concern.title}
              index={index + 1}
              title={concern.title}
              description={concern.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

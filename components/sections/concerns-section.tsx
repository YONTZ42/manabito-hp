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
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-brand-soft/40 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />

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

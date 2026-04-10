import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const serviceDetails = [
  {
    target: "行政職員の方へ",
    catchphrase: "若者とマナブ",
    description: "子ども・若者政策支援コンサルティング",
    href: "/services/government",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    target: "政治家の方へ",
    catchphrase: "事例をマナブ",
    description: "地方議員の行政視察・研修の企画及び運営",
    href: "/services/politicians",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    target: "学校・保護者の方へ",
    catchphrase: "現場でマナブ",
    description: "農業体験や工場見学などの体験型学習の企画及び運営",
    href: "/services/schools",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    target: "企業・学習団体の方へ",
    catchphrase: "講座でマナブ",
    description: "人材育成のための教育研修・セミナーの企画及び実施",
    href: "/services/corporate",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

function ServiceDetailCard({
  target,
  catchphrase,
  description,
  href,
  icon,
}: {
  target: string;
  catchphrase: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-base-border bg-white p-6 shadow-soft transition-all hover:border-brand/30 hover:shadow-strong md:p-8">
      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        {icon}
      </div>

      {/* Target */}
      <p className="text-sm font-semibold text-brand">{target}</p>

      {/* Catchphrase */}
      <h3 className="mt-2 font-heading text-xl font-bold text-text-main md:text-2xl">
        {catchphrase}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-sub md:text-base">
        {description}
      </p>

      {/* Button */}
      <div className="mt-6">
        <Button
          href={href}
          variant="ghost"
          size="sm"
          className="w-full justify-center border border-brand/20 bg-brand-soft/50 text-brand hover:bg-brand hover:text-white"
        >
          詳しく見る
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export function ServiceDetailsSection() {
  return (
    <section id="service-details" className="relative overflow-hidden bg-base-bg py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-brand-soft/50 blur-3xl" />
      <div className="absolute -left-10 bottom-20 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="For You"
          title="あなたに合った学びの形"
          description="それぞれの立場や目的に応じて、最適なプログラムをご用意しています。詳細ページで具体的な内容をご確認ください。"
          align="center"
          descriptionColor="rgb(36, 53, 51)"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceDetails.map((service) => (
            <ServiceDetailCard
              key={service.target}
              target={service.target}
              catchphrase={service.catchphrase}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

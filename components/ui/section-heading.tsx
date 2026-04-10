import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  descriptionColor?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  descriptionColor,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-latin text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-text.main md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-text.sub md:text-lg" style={{ color: descriptionColor || '#ffffff' }}>{description}</p>
      ) : null}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export default function SectionHeading({ eyebrow, title, intro, align = "center", as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">{eyebrow}</p>}
      <Tag className="mt-3 font-display text-4xl font-medium leading-tight text-forest sm:text-5xl">{title}</Tag>
      {intro && <p className="mt-4 leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-forest/10 bg-sage-soft">
      <div className="rise-in mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl font-medium leading-tight text-forest sm:text-6xl">{title}</h1>
        {intro && <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">{intro}</p>}
      </div>
    </section>
  );
}

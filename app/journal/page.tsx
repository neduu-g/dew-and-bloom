import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { articles } from "../data/journal";

export const metadata: Metadata = {
  title: "Skincare Journal",
  description: "Sample articles on routines, common ingredients and self-care from the Dew & Bloom concept.",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skincare Journal"
        title="Notes on slow skincare"
        intro="Short reads on routines, ingredients and small rituals."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p role="note" className="mx-auto max-w-3xl rounded-2xl border border-sage bg-white px-5 py-4 text-center text-sm text-ink-soft">
          These sample articles are general information, not medical advice. For any skin concern, please speak to a
          qualified health professional.
        </p>

        <nav aria-label="Articles" className="mt-12">
          <ul className="grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <a href={`#${a.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-deep">
                    <Image src={a.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage-deep">
                    {a.category} &middot; {a.readTime}
                  </p>
                  <p className="mt-1 font-display text-2xl leading-tight text-forest group-hover:underline group-hover:decoration-sage">{a.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{a.excerpt}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto mt-20 max-w-3xl space-y-20">
          {articles.map((a) => (
            <article key={a.slug} id={a.slug} aria-labelledby={`${a.slug}-title`} className="scroll-mt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">
                {a.category} &middot; {a.readTime}
              </p>
              <h2 id={`${a.slug}-title`} className="mt-2 font-display text-4xl font-medium text-forest sm:text-5xl">
                {a.title}
              </h2>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl">
                <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
              </div>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
                {a.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-ink-soft">General information, not medical advice.</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

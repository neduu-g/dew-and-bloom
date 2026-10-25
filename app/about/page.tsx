import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { values } from "../data/content";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story, mission and product philosophy behind Dew & Bloom, a fictional skincare brand concept.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="rise-in">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">Our story</p>
          <h1 className="mt-3 font-display text-5xl font-medium leading-tight text-forest sm:text-6xl">
            Born from a quiet morning ritual
          </h1>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
            <p>
              Dew &amp; Bloom began with a simple wish: a routine that felt calm instead of complicated. We wanted
              fewer steps, kinder textures and labels that anyone could read.
            </p>
            <p>
              So we started small, with a cleanser, a serum and a moisturiser, made with botanical waters and
              familiar ingredients. The collection has grown, but the idea has not changed.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl">
          <Image
            src="/images/about-profile.jpg"
            alt="Profile of a woman with a long braided ponytail against a warm tan background"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-sage-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">Mission</p>
            <p className="mt-3 font-display text-3xl leading-snug text-forest">
              To make gentle, well-made skincare that turns an everyday routine into a small moment of care.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">Product philosophy</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              We keep formulas focused and textures comfortable. We list every ingredient in plain view and describe
              how a product feels and how to use it, not what it will &ldquo;fix&rdquo;. We would rather under-promise and
              let the experience speak for itself.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center font-display text-5xl font-medium text-forest">What we value</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="rounded-3xl bg-white p-8 text-center">
              <h3 className="font-display text-3xl text-forest">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6">
        <p className="inline-block rounded-full bg-blush px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-forest">
          Concept Project
        </p>
        <h2 className="mt-4 font-display text-3xl text-forest">About this website</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Dew &amp; Bloom is a fictional skincare brand concept with a refined product-led website, product pages and an
          interactive shopping cart. It was designed and built by{" "}
          <a href={site.neduhubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest underline decoration-sage underline-offset-4">
            NeduHub
          </a>
          . The brand, products, prices and testimonials are not real, no payments are taken and no orders are placed.
        </p>
        <Link href="/shop" className="mt-8 inline-block rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-cream hover:bg-forest-soft">
          Shop Now
        </Link>
      </section>
    </>
  );
}

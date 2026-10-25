import Image from "next/image";
import Link from "next/link";
import DemoForm from "./components/DemoForm";
import ProductCard from "./components/ProductCard";
import SectionHeading from "./components/SectionHeading";
import { highlights, routine, testimonials } from "./data/content";
import { getProduct, products } from "./data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:py-24">
          <div className="rise-in">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-deep">Gentle botanical skincare</p>
            <h1 className="mt-5 font-display text-6xl font-medium leading-[0.95] text-forest sm:text-7xl">
              Skincare for slow, <em className="text-sage-deep">dewy</em> mornings
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Soft textures, botanical waters and short ingredient lists, made for routines that feel like a calm
              moment in your day.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/shop" className="rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-soft">
                Shop Now
              </Link>
              <Link href="/about" className="text-sm font-semibold text-forest underline decoration-sage decoration-2 underline-offset-8">
                Our story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blush/70 blur-2xl" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl">
              <Image
                src="/images/hero-morning-ritual.jpg"
                alt="A smiling woman in a white robe and hair towel, holding a cup of coffee"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand intro */}
      <section className="bg-sage-soft">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="font-display text-3xl leading-snug text-forest sm:text-4xl">
            &ldquo;We make the kind of skincare we wanted for ourselves: gentle, honest and lovely to use every
            day.&rdquo;
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">The Dew &amp; Bloom studio</p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Featured" title="New to the shelf" intro="A few pieces to start a simple routine." />
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Ingredient and value highlights */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
            <Image
              src="/images/botanicals-light.jpg"
              alt="Dried flowers and small plants arranged in a row on a light background"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">What goes in</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">Ingredients you can read</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h.title}>
                  <h3 className="font-display text-2xl text-blush">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/75">{h.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Bestsellers" title="Loved on repeat" />
          <Link href="/shop" className="text-sm font-semibold text-forest underline decoration-sage decoration-2 underline-offset-8">
            Shop all products
          </Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Routine */}
      <section className="bg-blush/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="A simple routine" title="Four steps, morning and night" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {routine.map((r, i) => {
              const product = getProduct(r.product);
              return (
                <li key={r.step} className="rounded-3xl bg-cream p-6">
                  <p className="font-display text-5xl text-sage">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl text-forest">{r.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.text}</p>
                  {product && (
                    <Link href={`/shop/${product.slug}`} className="mt-4 inline-block text-sm font-semibold text-forest underline decoration-sage underline-offset-4">
                      {product.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Sample testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Sample testimonials"
          title="Kind words"
          intro="These are sample testimonials written for this concept. They are not real customer reviews."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i} className="flex flex-col rounded-3xl border border-forest/10 bg-white p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage-deep">Sample testimonial</p>
              <blockquote className="mt-4 flex-1 font-display text-2xl leading-snug text-forest">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-5 text-sm text-ink-soft">{t.name}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] bg-forest px-6 py-12 text-cream sm:px-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-medium">Notes from the studio</h2>
            <p className="mt-3 text-cream/75">New products, gentle routines and journal stories, about once a month.</p>
          </div>
          <DemoForm inline dark submitLabel="Subscribe">
            <label className="flex-1">
              <span className="sr-only">Email address</span>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-cream/30 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none"
              />
            </label>
          </DemoForm>
        </div>
      </section>
    </>
  );
}

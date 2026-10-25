import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import ProductGallery from "../../components/ProductGallery";
import ProductPurchase from "../../components/ProductPurchase";
import { categoryName, getProduct, products, relatedProducts } from "../../data/products";
import { formatNaira } from "../../data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.description } : { title: "Product not found" };
}

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-8 text-sm text-ink-soft sm:px-6">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/shop" className="hover:text-forest">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{categoryName(product.category)}</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-forest">
            {product.name}
          </li>
        </ol>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:gap-16">
        <ProductGallery key={product.slug} images={product.images} name={product.name} />

        <div className="rise-in">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">{categoryName(product.category)}</p>
          <h1 className="mt-2 font-display text-5xl font-medium leading-tight text-forest">{product.name}</h1>
          <p className="mt-2 text-ink-soft">{product.tagline}</p>
          <p className="mt-6 font-display text-3xl text-forest">
            {formatNaira(product.price)} <span className="font-sans text-sm text-ink-soft">/ {product.size}</span>
          </p>
          <p className="mt-6 leading-relaxed text-ink">{product.description}</p>

          <div className="mt-8">
            <ProductPurchase key={product.slug} slug={product.slug} name={product.name} />
          </div>

          <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            <details open className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl text-forest [&::-webkit-details-marker]:hidden">
                Ingredients
                <span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.ingredients.join(", ")}.</p>
              <p className="mt-2 text-xs text-ink-soft">Illustrative ingredient list for a fictional product.</p>
            </details>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl text-forest [&::-webkit-details-marker]:hidden">
                How to use
                <span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.directions}</p>
              <p className="mt-2 text-xs text-ink-soft">Patch test before first use. Stop using if irritation occurs.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-4xl font-medium text-forest">You may also like</h2>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}

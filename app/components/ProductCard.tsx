import Image from "next/image";
import Link from "next/link";
import { categoryName, type Product } from "../data/products";
import { formatNaira } from "../data/site";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    <article className="group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block overflow-hidden rounded-2xl bg-cream-deep">
        <div className="relative aspect-[4/5]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {product.bestseller && (
            <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-forest">
              Bestseller
            </span>
          )}
        </div>
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage-deep">
          {categoryName(product.category)}
        </p>
        <h3 className="mt-1 font-display text-2xl leading-tight text-forest">
          <Link href={`/shop/${product.slug}`} className="hover:underline hover:decoration-sage hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <p className="font-semibold text-forest">
            {formatNaira(product.price)} <span className="text-xs font-normal text-ink-soft">/ {product.size}</span>
          </p>
          <AddToCartButton slug={product.slug} name={product.name} className="px-4 py-2 text-xs" />
        </div>
      </div>
    </article>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAX_QTY, removeFromCart, setQuantity, useCart, useHydrated } from "../data/cart";
import { getProduct } from "../data/products";
import { formatNaira } from "../data/site";
import QuantityStepper from "./QuantityStepper";

export default function CartView() {
  const items = useCart();
  const hydrated = useHydrated();
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  const lines = items.flatMap((item) => {
    const product = getProduct(item.slug);
    return product ? [{ product, qty: item.qty, subtotal: product.price * item.qty }] : [];
  });
  const total = lines.reduce((sum, l) => sum + l.subtotal, 0);
  const count = lines.reduce((sum, l) => sum + l.qty, 0);

  if (!hydrated) {
    return <p className="py-16 text-center text-ink-soft">Loading your cart...</p>;
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-md py-10 text-center">
        <svg viewBox="0 0 24 24" className="mx-auto h-14 w-14 text-sage" aria-hidden="true">
          <path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
        <h2 className="mt-4 font-display text-3xl text-forest">Your cart is empty</h2>
        <p className="mt-2 text-ink-soft">Find something gentle for your routine.</p>
        <Link href="/shop" className="mt-6 inline-block rounded-full bg-forest px-7 py-3 text-sm font-semibold text-cream hover:bg-forest-soft">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
      <section aria-labelledby="cart-items">
        <h2 id="cart-items" className="sr-only">
          Items in your cart
        </h2>
        <ul className="divide-y divide-forest/10 border-y border-forest/10">
          {lines.map(({ product, qty, subtotal }) => (
            <li key={product.slug} className="flex gap-4 py-6 sm:gap-6">
              <Link href={`/shop/${product.slug}`} className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-cream-deep sm:h-32 sm:w-28">
                <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="112px" className="object-cover" />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-forest">
                      <Link href={`/shop/${product.slug}`} className="hover:underline">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-ink-soft">
                      {product.size} &middot; {formatNaira(product.price)} each
                    </p>
                  </div>
                  <p className="font-semibold text-forest">{formatNaira(subtotal)}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                  <QuantityStepper
                    value={qty}
                    onChange={(v) => setQuantity(product.slug, v)}
                    max={MAX_QTY}
                    label={`Quantity of ${product.name}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.slug)}
                    className="text-sm text-ink-soft underline underline-offset-4 hover:text-forest"
                  >
                    Remove<span className="sr-only"> {product.name}</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link href="/shop" className="mt-6 inline-block text-sm font-semibold text-forest underline decoration-sage underline-offset-4">
          Continue shopping
        </Link>
      </section>

      <aside aria-labelledby="summary-heading" className="rounded-3xl bg-white p-7 shadow-[0_20px_50px_-35px_rgba(34,55,42,0.6)] lg:sticky lg:top-24">
        <h2 id="summary-heading" className="font-display text-3xl text-forest">
          Summary
        </h2>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-ink-soft">
              Subtotal ({count} item{count === 1 ? "" : "s"})
            </dt>
            <dd className="font-semibold text-forest">{formatNaira(total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-soft">Delivery</dt>
            <dd className="text-ink-soft">Not included in this demo</dd>
          </div>
          <div className="flex items-baseline justify-between border-t border-forest/15 pt-4">
            <dt className="font-display text-xl text-forest">Total</dt>
            <dd className="font-display text-3xl text-forest">{formatNaira(total)}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={() => setCheckoutNotice(true)}
          className="mt-6 w-full rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-soft"
        >
          Checkout
        </button>
        <div role="status" aria-live="polite">
          {checkoutNotice && (
            <p className="mt-4 rounded-xl bg-blush px-4 py-3 text-sm text-forest">
              Demo checkout: no payment is taken and no order is placed.
            </p>
          )}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-soft">
          Your cart is saved in this browser so it is still here after a refresh.
        </p>
      </aside>
    </div>
  );
}

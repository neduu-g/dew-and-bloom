"use client";

import { useEffect, useRef, useState } from "react";
import { addToCart } from "../data/cart";

type AddToCartButtonProps = {
  slug: string;
  name: string;
  qty?: number;
  className?: string;
};

export default function AddToCartButton({ slug, name, qty = 1, className = "" }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function handleClick() {
    addToCart(slug, qty);
    setAdded(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-soft ${className}`}
      >
        {added ? "Added" : "Add to Cart"}
        <span className="sr-only">: {name}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {added ? `${qty} ${name} added to your cart.` : ""}
      </span>
    </>
  );
}

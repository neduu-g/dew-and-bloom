"use client";

import { useState } from "react";
import { categories, products, type CategoryId } from "../data/products";
import ProductCard from "./ProductCard";

type Filter = CategoryId | "all";

export default function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? products : products.filter((p) => p.category === filter);
  const options: { id: Filter; name: string }[] = [{ id: "all", name: "All" }, ...categories];

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap justify-center gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={filter === o.id}
            onClick={() => setFilter(o.id)}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              filter === o.id
                ? "border-forest bg-forest text-cream"
                : "border-forest/20 bg-white text-forest hover:border-forest"
            }`}
          >
            {o.name}
          </button>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink-soft" role="status" aria-live="polite">
        Showing {visible.length} product{visible.length === 1 ? "" : "s"}
        {filter !== "all" ? ` in ${categories.find((c) => c.id === filter)?.name}` : ""}
      </p>
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "../data/products";

export default function ProductGallery({ images, name }: { images: ProductImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-deep">
        <Image src={current.src} alt={current.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      {images.length > 1 && (
        <ul className="mt-4 flex gap-3" aria-label={`${name} images`}>
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                className={`relative block h-20 w-20 overflow-hidden rounded-xl border-2 ${
                  active === i ? "border-forest" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

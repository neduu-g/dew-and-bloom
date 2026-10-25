"use client";

import Link from "next/link";
import { useState } from "react";
import { MAX_QTY } from "../data/cart";
import AddToCartButton from "./AddToCartButton";
import QuantityStepper from "./QuantityStepper";

export default function ProductPurchase({ slug, name }: { slug: string; name: string }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <QuantityStepper value={qty} onChange={setQty} max={MAX_QTY} label="Quantity" />
      <AddToCartButton slug={slug} name={name} qty={qty} className="px-8 py-3" />
      <Link href="/cart" className="text-sm font-semibold text-forest underline decoration-sage underline-offset-4">
        View cart
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import CartView from "../components/CartView";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your Dew & Bloom cart. This is a demo: no payment is taken and no order is placed.",
};

export default function CartPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-5xl font-medium text-forest sm:text-6xl">Your cart</h1>
      <div className="mt-10">
        <CartView />
      </div>
    </section>
  );
}

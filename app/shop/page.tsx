import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ShopGrid from "../components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description: "Cleansers, moisturisers, serums, sunscreen and body care from the Dew & Bloom concept.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader eyebrow="Shop" title="The collection" intro="Every product is fictional and prices are illustrative." />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ShopGrid />
      </section>
    </>
  );
}

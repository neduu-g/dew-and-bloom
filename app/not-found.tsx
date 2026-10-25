import Link from "next/link";
import { BloomMark } from "./components/Logo";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <BloomMark className="mx-auto h-14 w-14" />
      <h1 className="mt-6 font-display text-5xl font-medium text-forest">Page not found</h1>
      <p className="mt-4 text-ink-soft">The page you are looking for does not exist or has moved.</p>
      <Link href="/shop" className="mt-8 inline-block rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-cream hover:bg-forest-soft">
        Back to the shop
      </Link>
    </section>
  );
}

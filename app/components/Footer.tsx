import Link from "next/link";
import { navLinks, site } from "../data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Gentle, botanical skincare for slow mornings and calm evenings.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-cream">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[...navLinks, { href: "/cart", label: "Cart" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl text-cream">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.studio}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Concept Project by{" "}
            <a
              href={site.neduhubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cream underline underline-offset-2 hover:text-blush"
            >
              NeduHub
            </a>
            . Dew &amp; Bloom is a fictional brand.
          </p>
          <p>Prices are illustrative. No payments are taken and no orders are placed.</p>
        </div>
      </div>
    </footer>
  );
}

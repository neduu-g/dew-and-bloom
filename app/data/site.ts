// Contact details for the Dew & Bloom concept. Every value here is a
// placeholder. Replace them before using this site for a real business.

export const site = {
  name: "Dew & Bloom",
  email: "hello@example.com (placeholder)",
  phone: "+234 000 000 0000 (placeholder)",
  studio: "Studio address placeholder, City, State",
  hours: "Monday to Saturday, 9:00 am to 6:00 pm (placeholder)",
  socials: [
    { label: "Instagram", handle: "Instagram handle (placeholder)" },
    { label: "Pinterest", handle: "Pinterest handle (placeholder)" },
  ],
  neduhubUrl: "https://neduhub.vercel.app",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Skincare Journal" },
  { href: "/contact", label: "Contact" },
];

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

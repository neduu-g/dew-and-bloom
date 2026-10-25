// Sample journal articles for the Dew & Bloom concept. General information
// only, not medical advice.

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "a-simple-four-step-routine",
    title: "A simple four-step routine",
    category: "Routines",
    readTime: "3 min read",
    excerpt: "Cleanse, treat, moisturise, protect. How to build a routine you will actually keep.",
    image: "/images/applying-cream.jpg",
    imageAlt: "A woman smoothing a dab of cream onto her cheek",
    body: [
      "A routine does not need ten steps to feel good. Four is plenty for most days, and the order matters more than the number of products.",
      "Cleanse first, so everything that follows goes onto fresh skin. Then use a serum, which is usually the lightest texture. Moisturiser comes next to lock in that layer. In the morning, sun cream is always the final step.",
      "Go from thinnest to thickest texture, give each layer a moment to settle, and keep your evening routine as simple as your morning one. Consistency is what makes a routine feel like yours.",
    ],
  },
  {
    slug: "common-ingredients-explained",
    title: "Five common ingredients, explained",
    category: "Ingredients",
    readTime: "4 min read",
    excerpt: "Glycerin, squalane, niacinamide and more. What these familiar names on labels usually are.",
    image: "/images/botanicals-light.jpg",
    imageAlt: "Dried flowers and small plants arranged in a row on a light background",
    body: [
      "Glycerin is a humectant, which means it draws water into the outer layer of the skin. It shows up in many cleansers, serums and creams.",
      "Squalane is a lightweight oil that feels silky rather than greasy. Sodium hyaluronate is a form of hyaluronic acid, often used in water-light serums. Niacinamide is a form of vitamin B3 found in many moisturisers. Panthenol, or pro-vitamin B5, is common in soothing-feel formulas.",
      "Every skin is different, so if you are unsure about an ingredient, patch test first and speak to a qualified professional.",
    ],
  },
  {
    slug: "small-self-care-habits",
    title: "Small self-care habits for busy weeks",
    category: "Self-care",
    readTime: "3 min read",
    excerpt: "Five-minute rituals that make a busy day feel a little softer.",
    image: "/images/hero-morning-ritual.jpg",
    imageAlt: "A smiling woman in a white robe and towel holding a cup of coffee",
    body: [
      "Self-care does not have to mean a whole spa day. Small, repeatable habits often matter more.",
      "Try washing your face with warm water as a signal that the day is over. Keep a hand cream on your desk. Put your phone down for the five minutes it takes to do your evening routine.",
      "Notice what helps you slow down, and build it into the moments you already have.",
    ],
  },
];

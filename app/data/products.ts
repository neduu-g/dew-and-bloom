// Products for the Dew & Bloom concept. All products are fictional and
// prices are illustrative. Descriptions avoid medical or results claims.

export type CategoryId = "cleansers" | "moisturisers" | "serums" | "sunscreen" | "body";

export const categories: { id: CategoryId; name: string }[] = [
  { id: "cleansers", name: "Cleansers" },
  { id: "moisturisers", name: "Moisturisers" },
  { id: "serums", name: "Serums" },
  { id: "sunscreen", name: "Sunscreen" },
  { id: "body", name: "Body Care" },
];

export type ProductImage = { src: string; alt: string };

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  price: number;
  size: string;
  tagline: string;
  description: string;
  ingredients: string[];
  directions: string;
  images: ProductImage[];
  bestseller?: boolean;
  featured?: boolean;
};

// A second, lifestyle image shown on each product page, by category.
const lifestyle: Record<CategoryId, ProductImage> = {
  cleansers: { src: "/images/cleansing-face.jpg", alt: "A woman washing her face with a soft lather in warm light" },
  moisturisers: { src: "/images/applying-cream.jpg", alt: "A woman smoothing a dab of cream onto her cheek" },
  serums: { src: "/images/serum-hands.jpg", alt: "Hands holding a small dropper bottle over soft white linen" },
  sunscreen: { src: "/images/applying-cream-close.jpg", alt: "A woman applying a light cream to her cheek with her fingertips" },
  body: { src: "/images/botanicals-green.jpg", alt: "Fresh flowers and buds laid out on a pale green background" },
};

function withLifestyle(category: CategoryId, main: ProductImage): ProductImage[] {
  return [main, lifestyle[category]];
}

export const products: Product[] = [
  {
    slug: "soft-glow-cleanser",
    name: "Soft Glow Cleanser",
    category: "cleansers",
    price: 8500,
    size: "150 ml",
    tagline: "A creamy everyday wash",
    description:
      "A soft, low-foam cleanser that lifts away the day without leaving skin feeling tight. Gentle enough for morning and evening.",
    ingredients: ["Aqua", "Glycerin", "Coco-glucoside", "Oat kernel extract", "Aloe vera leaf juice", "Panthenol"],
    directions: "Massage a small amount onto damp skin for 30 seconds, then rinse with lukewarm water.",
    images: withLifestyle("cleansers", { src: "/images/soft-glow-cleanser.jpg", alt: "Two plain white tubes on a peach-coloured block" }),
    bestseller: true,
  },
  {
    slug: "gentle-cream-cleanser",
    name: "Gentle Cream Cleanser",
    category: "cleansers",
    price: 9000,
    size: "120 ml",
    tagline: "A rich, rinse-off cream",
    description:
      "A cushiony cream cleanser for skin that likes a softer touch. It melts away make-up and sunscreen, then rinses clean.",
    ingredients: ["Aqua", "Caprylic triglyceride", "Glycerin", "Shea butter", "Chamomile flower extract", "Tocopherol"],
    directions: "Smooth over dry or damp skin, massage gently, then rinse or remove with a warm cloth.",
    images: withLifestyle("cleansers", { src: "/images/gentle-cream-cleanser.jpg", alt: "A plain white tube beside a swirl of white cream" }),
    featured: true,
  },
  {
    slug: "fresh-gel-cleanser",
    name: "Fresh Gel Cleanser",
    category: "cleansers",
    price: 8000,
    size: "150 ml",
    tagline: "A clear, refreshing gel",
    description: "A light, clear gel that turns into a fine lather. A refreshing start to warm mornings.",
    ingredients: ["Aqua", "Glycerin", "Decyl glucoside", "Cucumber fruit extract", "Green tea leaf extract", "Allantoin"],
    directions: "Work a small amount into a lather with water, massage over the face, then rinse.",
    images: withLifestyle("cleansers", { src: "/images/fresh-gel-cleanser.jpg", alt: "A plain white tube lying on a blue surface scattered with water drops" }),
  },
  {
    slug: "bloom-daily-moisturiser",
    name: "Bloom Daily Moisturiser",
    category: "moisturisers",
    price: 12000,
    size: "50 ml",
    tagline: "A light everyday cream",
    description:
      "A soft, fast-absorbing cream that leaves skin feeling comfortable and smooth. Wears well under sunscreen and make-up.",
    ingredients: ["Aqua", "Glycerin", "Squalane", "Niacinamide", "Ceramide NP", "Rose flower water"],
    directions: "Smooth a pea-sized amount over the face and neck, morning and evening.",
    images: withLifestyle("moisturisers", { src: "/images/bloom-daily-moisturiser.jpg", alt: "An open glass jar of white cream resting on a grey stone" }),
    bestseller: true,
  },
  {
    slug: "night-rest-cream",
    name: "Night Rest Cream",
    category: "moisturisers",
    price: 13500,
    size: "50 ml",
    tagline: "A richer cream for evenings",
    description: "A comforting, richer texture for the end of the day, when skin can take a little more.",
    ingredients: ["Aqua", "Shea butter", "Squalane", "Glycerin", "Oat kernel oil", "Lavender flower water"],
    directions: "Warm a small amount between your fingertips and press gently over the face as the last evening step.",
    images: withLifestyle("moisturisers", { src: "/images/night-rest-cream.jpg", alt: "An open jar of white cream on a dark stone against a black background" }),
  },
  {
    slug: "cloud-gel-cream",
    name: "Cloud Gel Cream",
    category: "moisturisers",
    price: 12500,
    size: "50 ml",
    tagline: "A bouncy, weightless gel-cream",
    description: "An airy gel-cream that sinks in quickly, for days when you want something barely there.",
    ingredients: ["Aqua", "Glycerin", "Sodium hyaluronate", "Aloe vera leaf juice", "Cucumber fruit extract", "Panthenol"],
    directions: "Apply a thin layer to clean skin. Add a second layer on drier areas if you like.",
    images: withLifestyle("moisturisers", { src: "/images/cloud-gel-cream.jpg", alt: "A jar of white cream with its lid floating above it over a stone" }),
    featured: true,
  },
  {
    slug: "dew-drop-hydrating-serum",
    name: "Dew Drop Hydrating Serum",
    category: "serums",
    price: 14500,
    size: "30 ml",
    tagline: "A water-light hydrating serum",
    description:
      "Our signature serum. A silky, water-light layer that leaves skin feeling soft and supple before moisturiser.",
    ingredients: ["Aqua", "Glycerin", "Sodium hyaluronate", "Panthenol", "Rose flower water", "Allantoin"],
    directions: "Apply three or four drops to clean, slightly damp skin. Follow with moisturiser.",
    images: withLifestyle("serums", { src: "/images/dew-drop-serum.jpg", alt: "A glass bottle of golden serum with its dropper on a soft pink surface" }),
    bestseller: true,
  },
  {
    slug: "golden-hour-serum",
    name: "Golden Hour Serum",
    category: "serums",
    price: 15000,
    size: "30 ml",
    tagline: "A silky oil-serum",
    description: "A lightweight oil-serum with a soft, satin finish. A few drops go a long way.",
    ingredients: ["Squalane", "Jojoba seed oil", "Rosehip seed oil", "Sunflower seed oil", "Tocopherol"],
    directions: "Press two or three drops into skin after your water-based serum, or mix one drop into moisturiser.",
    images: withLifestyle("serums", { src: "/images/golden-hour-serum.jpg", alt: "An amber dropper bottle with a blank label on an orange background" }),
    featured: true,
  },
  {
    slug: "calm-petal-serum",
    name: "Calm Petal Serum",
    category: "serums",
    price: 13000,
    size: "30 ml",
    tagline: "A soothing-feel botanical serum",
    description: "A gentle serum with a soft, cooling feel, made for slow evenings and simple routines.",
    ingredients: ["Aqua", "Glycerin", "Centella asiatica extract", "Chamomile flower extract", "Panthenol", "Betaine"],
    directions: "Smooth a few drops over clean skin, then follow with moisturiser.",
    images: withLifestyle("serums", { src: "/images/calm-petal-serum.jpg", alt: "A hand lifting a dropper from a small amber bottle in soft window light" }),
  },
  {
    slug: "sun-veil-spf-cream",
    name: "Sun Veil SPF Cream",
    category: "sunscreen",
    price: 11000,
    size: "50 ml",
    tagline: "A sheer daily sun cream",
    description:
      "A light daily sun cream that blends in without a heavy feel and sits comfortably under make-up.",
    ingredients: ["Aqua", "Zinc oxide", "Caprylic triglyceride", "Glycerin", "Squalane", "Tocopherol"],
    directions:
      "Apply generously as the last step of your morning routine. Reapply through the day, especially after time outdoors.",
    images: withLifestyle("sunscreen", { src: "/images/sun-veil-spf.jpg", alt: "A kraft-paper tube and a matching round tin on a white plinth" }),
    bestseller: true,
  },
  {
    slug: "daylight-spf-fluid",
    name: "Daylight SPF Fluid",
    category: "sunscreen",
    price: 12000,
    size: "40 ml",
    tagline: "A fluid sun lotion for every day",
    description: "A fluid texture in an easy pump, made for quick mornings and top-ups.",
    ingredients: ["Aqua", "Zinc oxide", "Glycerin", "Aloe vera leaf juice", "Squalane", "Tocopherol"],
    directions: "Pump two to three times and spread evenly over the face and neck. Reapply through the day.",
    images: withLifestyle("sunscreen", { src: "/images/daylight-spf-fluid.jpg", alt: "A frosted pump bottle against a warm orange background" }),
  },
  {
    slug: "petal-soft-body-lotion",
    name: "Petal Soft Body Lotion",
    category: "body",
    price: 9500,
    size: "250 ml",
    tagline: "A light, everyday body lotion",
    description: "A smooth body lotion that absorbs quickly and leaves a soft, delicate scent.",
    ingredients: ["Aqua", "Glycerin", "Shea butter", "Sweet almond oil", "Rose flower water", "Panthenol"],
    directions: "Smooth over the body after bathing, while skin is still slightly damp.",
    images: withLifestyle("body", { src: "/images/petal-soft-body-lotion.jpg", alt: "Two plain pump bottles, one dark and one pale blue, against a mauve wall" }),
    bestseller: true,
  },
  {
    slug: "silk-body-butter",
    name: "Silk Body Butter",
    category: "body",
    price: 10500,
    size: "200 g",
    tagline: "A rich, whipped body butter",
    description: "A whipped butter for elbows, knees and anywhere that wants a richer layer.",
    ingredients: ["Shea butter", "Cocoa seed butter", "Coconut oil", "Sweet almond oil", "Tocopherol"],
    directions: "Warm a little between your palms and massage into skin. A small amount goes a long way.",
    images: withLifestyle("body", { src: "/images/silk-body-butter.jpg", alt: "A jar of body butter with a black lid beside pink carnations on marble" }),
    featured: true,
  },
  {
    slug: "velvet-hand-and-body-cream",
    name: "Velvet Hand and Body Cream",
    category: "body",
    price: 7500,
    size: "100 ml",
    tagline: "A soft cream for hands on the go",
    description: "A non-greasy cream in a travel-friendly tube, for hands, elbows and dry spots.",
    ingredients: ["Aqua", "Glycerin", "Shea butter", "Oat kernel extract", "Panthenol"],
    directions: "Massage into hands and dry areas whenever they need it.",
    images: withLifestyle("body", { src: "/images/velvet-hand-body-cream.jpg", alt: "Coral-pink tubes and two silver-lidded jars on a pale surface" }),
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryName(id: CategoryId) {
  return categories.find((c) => c.id === id)?.name ?? id;
}

export function relatedProducts(product: Product, count = 3) {
  const same = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const others = products.filter((p) => p.category !== product.category && p.bestseller);
  return [...same, ...others].slice(0, count);
}

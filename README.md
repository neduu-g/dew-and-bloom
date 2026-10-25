# Dew & Bloom (Concept Project)

Dew & Bloom is a fictional skincare brand concept with a refined product-led website, product pages and an interactive shopping cart.

It was built by NeduHub as a portfolio piece. The brand, products, prices, testimonials and contact details are not real. No payments are taken and no orders are placed.

## How to run it

You need Node.js 20.9 or newer.

1. Open a terminal in this `dew-and-bloom` folder.
2. Run `npm install` (only needed the first time).
3. Run `npm run dev`.
4. Open http://localhost:3000 in your browser.

To check a production build, run `npm run build` and then `npm run start`.

## Pages

| Page | Path | What it does |
| --- | --- | --- |
| Home | `/` | Hero with Shop Now, brand intro, featured products, bestsellers, ingredient and value highlights, four-step routine, sample testimonials, demo newsletter form |
| Shop | `/shop` | Product grid with filters: All, Cleansers, Moisturisers, Serums, Sunscreen, Body Care |
| Product | `/shop/[slug]` | Images, name, price, description, ingredients, directions, quantity selector, Add to Cart, related products |
| Cart | `/cart` | Increase, decrease, remove, line subtotals, total, continue shopping, empty state, demo checkout |
| About | `/about` | Brand story, mission, values, product philosophy and a "Concept Project" note |
| Skincare Journal | `/journal` | Three short sample articles (routines, common ingredients, self-care) with a "not medical advice" note |
| Contact | `/contact` | Placeholder details and a demo form |

## How the cart works

- The cart is saved in the browser's `localStorage` (key `dew-and-bloom-cart`), so it is still there after a refresh. It also stays in step across open tabs.
- The logic lives in `app/data/cart.ts`. Quantities are limited to 1 to 10 per product.
- The cart icon in the header shows the total item count.
- The Checkout button shows only this notice: "Demo checkout: no payment is taken and no order is placed." There are no payment fields.

## How to edit content

All editable content lives in `app/data/`:

- `products.ts`: categories and every product (name, category, price, size, tagline, description, ingredients, directions, images, and the `bestseller` and `featured` flags). Prices are illustrative naira amounts.
- `content.ts`: ingredient highlights, routine steps, sample testimonials and values.
- `journal.ts`: the three sample articles.
- `site.ts`: email, phone, studio address, hours and social handles (all placeholders), plus the nav links.

## Brand

The leaf-and-dew mark and the "Dew & Bloom" wordmark are original SVGs in `app/components/Logo.tsx`. The favicon is `app/icon.svg`. Fonts are Cormorant Garamond (headings) and Manrope (body), loaded through `next/font`. Colours are warm cream, muted sage, soft blush and deep forest green, defined in `app/globals.css`.

## Image credits

All photos are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license). They were resized to 1600px wide (large section photos) or 800px wide (product and card photos) and saved in `public/images/`. Product photos were chosen because their packaging is blank. Any photo showing a real brand name, logo or readable label was not used.

| File | Photographer | Source |
| --- | --- | --- |
| hero-morning-ritual.jpg | Vladimir Yelizarov | https://unsplash.com/photos/smiling-woman-in-white-bathrobe-holding-white-ceramic-mug-crnAlC9fcqE |
| about-profile.jpg | Jessica Felicio | https://unsplash.com/photos/woman-profile-with-braided-ponytail-QS9ZX5UnS14 |
| botanicals-light.jpg | Danielle Suijkerbuijk | https://unsplash.com/photos/various-dried-flowers-and-plants-arranged-on-a-light-background-wUc2nzHiI1I |
| botanicals-green.jpg | Danielle Suijkerbuijk | https://unsplash.com/photos/various-flowers-and-buds-arranged-on-a-light-green-background-VSSCpKvqFnw |
| applying-cream.jpg | Leighann Blackwood | https://unsplash.com/photos/a-woman-putting-cream-on-her-face-NdcuSGxKbwE |
| applying-cream-close.jpg | Leighann Blackwood | https://unsplash.com/photos/a-woman-is-putting-a-lotion-on-her-face-zoYLGk2oULA |
| cleansing-face.jpg | Christian Agbede | https://unsplash.com/photos/young-woman-washing-her-face-with-foamy-cleanser-eVkRkIl3MIA |
| serum-hands.jpg | Mathilde Langevin | https://unsplash.com/photos/person-holding-black-glass-bottle-FDRaYqiTY1k |
| soft-glow-cleanser.jpg | Point Normal | https://unsplash.com/photos/a-tube-of-cream-sitting-on-top-of-a-table-Xp0bTCLD07k |
| gentle-cream-cleanser.jpg | Birgith Roosipuu | https://unsplash.com/photos/a-tube-of-cream-sitting-on-top-of-a-white-plate-4uN0JxJGRQE |
| fresh-gel-cleanser.jpg | Birgith Roosipuu | https://unsplash.com/photos/white-tube-on-pink-surface-CJFG-GOAeVk |
| bloom-daily-moisturiser.jpg | Eveling Salazar | https://unsplash.com/photos/a-jar-of-white-cream-on-a-rock-VRnf9ErHwUE |
| night-rest-cream.jpg | Eveling Salazar | https://unsplash.com/photos/white-cream-in-an-open-jar-on-a-rock-bM-aV4Jt5qM |
| cloud-gel-cream.jpg | Eveling Salazar | https://unsplash.com/photos/a-jar-of-white-cream-floats-above-a-rock-01YhA5XDDLk |
| dew-drop-serum.jpg | Maria Lupan | https://unsplash.com/photos/skincare-serum-bottle-and-dropper-on-a-pink-surface-BlcA2-o-7IM |
| golden-hour-serum.jpg | Point Normal | https://unsplash.com/photos/a-bottle-of-liquid-with-a-dropper-on-a-yellow-background-GjJZ5HBl2qQ |
| calm-petal-serum.jpg | Mona Jain | https://unsplash.com/photos/serum-is-being-poured-from-a-dropper-bottle-j24HPh0Q84g |
| sun-veil-spf.jpg | Bharath Kumar | https://unsplash.com/photos/a-white-container-sitting-on-top-of-a-white-box-T3QEVAjPDnU |
| daylight-spf-fluid.jpg | Birgith Roosipuu | https://unsplash.com/photos/a-bottle-of-lotion-on-an-orange-background-gUZv1Fdkfgw |
| petal-soft-body-lotion.jpg | andrew davies | https://unsplash.com/photos/two-pump-bottles-on-a-dark-shelf-Ye7Y2jwp8s8 |
| silk-body-butter.jpg | Keity | https://unsplash.com/photos/a-small-jar-of-cream-with-pink-flowers-on-marble-k2JN5zC54zQ |
| velvet-hand-body-cream.jpg | Sufyan | https://unsplash.com/photos/a-pink-tube-next-to-two-white-containers-sBjbXysTN5I |

## Known limitations

- Frontend only. There is no backend, database, account or payment.
- The cart lives in one browser. It does not follow you to another device, and clearing browser data empties it.
- Checkout is a demo notice only. Delivery costs are not calculated.
- Newsletter and contact forms show a demo notice and send nothing.
- Ingredient lists are illustrative for fictional products. The site makes no medical, safety or results claims.
- Each product has two photos: its own product photo and a shared photo for its category.
- The first visit to a product address that does not exist (for example `/shop/xyz`) shows the "Page not found" page but returns HTTP status 200. Later visits return 404. This comes from how Next.js 16 streams partially prerendered pages, and visitors see the correct page either way. All real product pages are prerendered at build time.

## Build report

Checked on 24 October 2026:

- `npm run lint`, `npx tsc --noEmit` and `npm run build` pass with no errors. All 14 product pages are prerendered.
- Every page, including two product pages, was opened in Chrome at phone (390px), tablet (820px) and laptop (1366px) widths. There were no console errors, broken images, broken internal links, missing alt text or sideways scrolling.
- Cart tested: an empty cart shows the empty state, and shop filters show the right products (for example 3 Serums, 14 for All). Adding from a card and from a product page with quantity 3 updates the header count. The cart total is ₦52,000 for 1 Soft Glow Cleanser plus 3 Dew Drop Hydrating Serum. Increase, decrease and remove update the totals correctly. The cart survives a page refresh. Quantity stops at 10. Checkout shows only the demo notice, and the page has no payment fields.
- The newsletter demo shows its "nothing was sent" notice.
- The mobile menu opens and closes (including with the Escape key) and closes after navigating.
- The footer on every page reads "Concept Project by NeduHub" and links to https://neduhub.vercel.app.

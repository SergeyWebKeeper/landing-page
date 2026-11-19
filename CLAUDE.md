# Landing Page Template Portfolio

## What this is

A sales portfolio of ready-made landing-page templates for small businesses.
Each numbered folder is a **fully self-contained, static one-page site** built
for a specific profession/niche. The idea: a prospective client browses the
root gallery, finds the template closest to their business, and it gets
skinned with their branding/copy as a paid deliverable.

Note: `financial-advisor/` (no number prefix) at the repo root is a **separate,
pre-existing project** with its own git history and GitHub remote
(`SergeyWebKeeper/financial-advisor`). It is not part of this portfolio and
should not be modified as part of portfolio work — use `03-financial-advisor/`
for the portfolio's financial-advisor template.

## Structure

```
/index.html              — root gallery: showcases and links to every template
/01-taxi-service/        — index.html, style.css, script.js
/02-restaurant/
/03-financial-advisor/
/04-sport-coach/
/05-dental-clinic/
/06-photographer/
/07-barbershop/
/08-law-firm/
/09-real-estate/
/10-yoga-studio/
/11-wedding-planner/
/12-auto-repair/
/13-veterinary-clinic/
/14-bakery-cafe/
/15-cleaning-service/
/16-design-agency/
/17-landscaping/
/18-music-school/
/19-tattoo-studio/
/20-daycare/
/21-bookstore-cafe/
/22-spa-wellness/
/23-electrician/
/24-plumber/
/25-brewery/
/26-interior-design/
/27-driving-school/
/28-pet-grooming/
/29-florist/
/30-it-support/
```

Every template folder is standalone — no shared CSS/JS/assets, no build step.
A folder can be zipped and handed to a client as-is, or opened directly in a
browser.

## Tech constraints

- Plain HTML/CSS/vanilla JS only. No frameworks, no bundlers, no backend.
- Forms are visual/demo only — `preventDefault()` + an inline confirmation
  message, never a real submission endpoint.
- Typography via Google Fonts CDN `<link>` tags. No other external
  dependencies and no external image URLs — every visual is built with CSS
  (gradients, shapes, inline SVG, CSS patterns) so templates open instantly,
  work offline, have nothing to break or license, and stay editable as plain
  markup.
- Each template has a **distinct visual identity**: its own color palette,
  type pairing, layout rhythm, and motion style. Never reuse another
  template's palette, hero pattern, or signature animation.
- Mobile-first and responsive (check ~375px, ~768px, ~1440px).
- Real content structure per page: hero, services/offerings, social proof,
  pricing/CTA, contact/footer — the full sales narrative, not just a hero
  shot.

## Current templates (30)

| # | Folder | Business | Identity |
|---|--------|----------|----------|
| 1 | `01-taxi-service` | Taxi / ride service ("SwiftRide") | Yellow/black, bold sans, route-line motion |
| 2 | `02-restaurant` | Restaurant ("Bella Vista") | Dark maroon + gold, serif elegance, parallax |
| 3 | `03-financial-advisor` | Financial advisor ("Meridian Wealth") | Navy + gold, corporate trust, animated counters |
| 4 | `04-sport-coach` | Personal/sport coach ("Apex Performance") | Dark + neon orange, diagonal cuts, high energy |
| 5 | `05-dental-clinic` | Dental clinic ("Bright Smile Dental") | Mint/white, rounded & friendly, FAQ accordion |
| 6 | `06-photographer` | Photographer ("Lens & Light Studio") | Dark editorial, masonry gallery, big type |
| 7 | `07-barbershop` | Barbershop ("The Gentlemen's Cut") | Black/gold vintage, textured, classic |
| 8 | `08-law-firm` | Law firm ("Sterling & Associates") | Monochrome + burgundy, formal serif |
| 9 | `09-real-estate` | Real estate agency ("Prestige Properties") | Black/gold glassmorphism, luxury |
| 10 | `10-yoga-studio` | Yoga studio ("Serene Flow Yoga") | Earthy tones, organic blobs, calm motion |
| 11 | `11-wedding-planner` | Wedding planner ("Evermore Weddings") | Blush/rose, script accents, drifting petals |
| 12 | `12-auto-repair` | Auto repair shop ("Torque & Tow Auto") | Steel/safety orange, hazard stripes, industrial |
| 13 | `13-veterinary-clinic` | Veterinary clinic ("Paws & Care") | Sky blue/yellow, friendly, floating paw prints |
| 14 | `14-bakery-cafe` | Bakery & cafe ("Sweet Crumb Bakery") | Pastel pink/cream, hand-drawn script, polaroids |
| 15 | `15-cleaning-service` | Cleaning service ("CrystalClean") | Fresh teal/white, crisp minimal, price estimator |
| 16 | `16-design-agency` | Design agency ("Nova Studio") | Dark, animated gradient mesh, bento grid |
| 17 | `17-landscaping` | Landscaping ("GreenScape Outdoor") | Forest green/sand, natural serif, earthy |
| 18 | `18-music-school` | Music school ("Crescendo Music Academy") | Purple/gold, animated equalizer bars |
| 19 | `19-tattoo-studio` | Tattoo studio ("Black Ravens Tattoo") | Black/blood red, gothic blackletter, flicker |
| 20 | `20-daycare` | Daycare / childcare ("Little Sprouts") | Rainbow pastels, bubbly font, drifting balloons |
| 21 | `21-bookstore-cafe` | Bookstore & cafe ("Chapter & Verse") | Warm wood/cream, literary serif, 3D page-flip cards |
| 22 | `22-spa-wellness` | Spa & wellness ("Lumen Spa") | Lavender/sage, minimal caps type, pulsing glow orb |
| 23 | `23-electrician` | Electrician ("Volt & Watt Electric") | Black/electric volt-yellow, animated circuit traces |
| 24 | `24-plumber` | Plumber ("ClearFlow Plumbing") | Deep blue/white, animated seamless wave motion |
| 25 | `25-brewery` | Craft brewery ("Ironclad Brewing Co.") | Amber/copper, industrial slab serif, rising bubbles |
| 26 | `26-interior-design` | Interior design studio ("Atelier Home") | Beige/greige minimalist, drag before/after slider |
| 27 | `27-driving-school` | Driving school ("GreenLight Driving School") | Road black/lane yellow, animated dashed lane line |
| 28 | `28-pet-grooming` | Pet grooming ("Fluff & Fold") | Lilac/pink pastel, bubbly type, floating soap bubbles |
| 29 | `29-florist` | Florist ("Petal & Stem") | Dusty rose/sage, botanical serif, blooming petals |
| 30 | `30-it-support` | IT support ("ByteGuard IT Solutions") | Terminal black/green, monospace, live typing effect |

## Language switch (EN / HE)

Every template has an English/Hebrew toggle (`#langSwitch` in the nav). English
is the markup itself; Hebrew lives in a `HE` dictionary at the bottom of each
`script.js`, keyed by `data-i18n="kN"` attributes (`data-i18n-placeholder` for
inputs). `setLang()` swaps text, sets `<html lang dir>` (RTL for Hebrew), and
remembers the choice in `localStorage`. RTL tweaks and the Hebrew font
(Heebo, plus Frank Ruhl Libre for serif templates) are at the bottom of each
`style.css`. Elements that scripts hold references to (counters, ids) are
translated at the inner-span level so the references stay valid. New templates
should include the switch too.

## Adding a new template

1. Create `NN-profession-name/` (next number in sequence).
2. Add `index.html`, `style.css`, `script.js` — fully self-contained.
3. Pick a palette / type pairing / motion style not already used above.
4. Add a card linking to it from the root `/index.html` gallery.
5. Add a row to the table above.

## Previewing

Open any folder's `index.html` directly in a browser, or serve the whole
repo statically from the root, e.g. `npx serve .`.

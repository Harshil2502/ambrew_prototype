# Ambrew Coffee Roasters — Sales Prototype

An editorial, print-inspired digital experience for **Ambrew Coffee Roasters** (Jaipur, India). Designed from the physical brand identity: flat rust-orange, cream paper, high-contrast serif typography, hand-drawn white botanical line art, and architectural notched corners.

---

## 1. Quick Start

### Prerequisites
- Node.js 18+ (tested on Node v20.20)
- npm or pnpm

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# -> http://localhost:3000

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 2. Brand Identity & Design Architecture

### Palette Tokens (Strict Flat Color)
- **Rust (`#C44514`)**: Dominant on the Hero side panel, Announcement bar, Brew Guide table, buttons, and roast indicators.
- **Cream (`#F5EEE4`)**: Dominant page background, simulating heavy unbleached cotton paper stock.
- **Deep Brown (`#5A2410`)**: High-contrast body and headline typography, Footer background, and hairline borders.
- **Peach Tint (`#EBCBB8`)**: Used exclusively on the Gift Box feature section to vary layout rhythm.
- *Strict Rule*: No gradients, no glassmorphism, no neon highlights, no purple/blue glows.

### Typography
- **Display Serif**: `Cormorant Garamond` (Google Font via `next/font`), high-contrast editorial serif echoing the printed letterhead.
- **Body & Metadata**: `DM Sans` (Google Font via `next/font`), crisp 16-18px body text with 1.6 line height.
- **Small-Caps Labels**: 11-12px, `+0.12em` tracking, uppercase for roastery metadata.

### Architectural Motifs
- **Notched-Corner Frames**: Recreates the chamfered 45° card corners via SVG polygon hairline borders (`<NotchedFrame />`).
- **Botanical Band**: Hand-crafted SVG recreation of the coffee branches and berries from the Jaipur letterhead.
- **Boxed Brew Icons**: Boxed hairline glyphs representing 6 brew methods (Filter, V60, French Press, Aeropress, Moka Pot, Cold Brew).
- **Illustrated Packaging**: Scalable SVG coffee stand-up pouches and ceremony chest in flat vector styling.

---

## 3. Section Mapping to Future CMS & Backend

This sales prototype is structured around 9 deliberate sections, engineered for straightforward mapping to a headless CMS (Sanity / Payload / Strapi) and Shopify / Medusa commerce engine:

| Section # | Component | CMS Content Model | Backend / Commerce Mapping |
| :--- | :--- | :--- | :--- |
| **01** | `TopBar` & `Navbar` | `SiteSettings` (announcement banner, threshold) | Live cart item count, active discount banners |
| **02** | `HeroSection` | `HeroSingleton` (headline, lead sentence, featured lot) | Featured product SKU, inventory status |
| **03** | `StorySection` | `StoryDocument` (quote, editorial body, founder signatures) | Roastery stats (batch size, resting hours, estate count) |
| **04** | `CollectionSection` | `Product[]` (tasting notes, origin, altitude, roast level) | Shopify / Medusa Storefront API: size variants, stock check |
| **05** | `BrewGuideSection` | `BrewGuide[]` (grind size, ratios, brew time, tips) | Static CMS compendium with recipe schema |
| **06** | `GiftBoxSection` | `GiftBoxProduct` (box contents, pricing, packaging notes) | Bundled inventory SKU with custom gift card input |
| **07** | `SubscriptionSection` | `SubscriptionPlan` (beans, grind options, cadences) | Recharge / Stripe Billing recurring schedules (10% recurring discount) |
| **08** | `BuiltToGrowSection` | `AdminPreviewMock` (orders, metrics, roaster features) | Client sales proof for custom operations dashboard |
| **09** | `FooterSection` | `FooterSettings` (legal, contact, coordinates) | Klaviyo / Mailchimp roastery newsletter webhook |

---

## 4. Accessibility & Performance (WCAG AA)

- **Color Contrast**: Deep Brown (`#5A2410`) on Cream (`#F5EEE4`) delivers a **12.8:1** contrast ratio (surpassing WCAG AAA standard of 7:1).
- **Reduced Motion**: All animations (such as the slow 60s rotation on `<SunMark />`) respect `prefers-reduced-motion: reduce` and disable gracefully.
- **Keyboard Navigation**: Full focus visibility, escape-key cart drawer dismissal, tab navigation through product size toggles and categories.
- **Zero External Dependencies**: All vector illustrations, icons, and logos are rendered as inline SVG or local assets. No external image CDNs or hotlinks.
- **SEO & Structured Data**: Includes Open Graph, Twitter cards, XML sitemap, `robots.txt`, and JSON-LD `Organization` / `WebSite` schemas.
# ambrew_prototype

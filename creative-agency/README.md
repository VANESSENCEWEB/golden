# Creative Agency — Design System

A modular design system for **Creative Agency**, a website creation agency covering web design, redesign, branding, logo design, brand restructuring, automation, and landing pages.

Built from patterns observed in the reference collection (`vanessenceweb-agencia_1.html`, `index.html` ONYX/KINETIC, Golden LDN), with a distinct **violet + rose** identity instead of the reference gold palette.

## Quick start

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="creative-agency/creative-agency.css">
<script type="module" src="creative-agency/js/index.js"></script>
```

Open **`design-system.html`** in a browser to preview all tokens, components, and animations.

## Folder structure

```
creative-agency/
├── creative-agency.css      # Single CSS entry point
├── design-system.html       # Living style guide / showcase
├── README.md
├── tokens/
│   ├── colors.css           # Color palette & gradients
│   ├── typography.css       # Font families & type scale
│   ├── spacing.css          # Layout, radii, z-index
│   ├── motion.css           # Easing, durations, delays
│   ├── tokens.json          # Machine-readable tokens
│   └── index.css
├── foundations/
│   ├── reset.css
│   ├── base.css             # Body, headings, utility text classes
│   └── index.css
├── utilities/
│   ├── layout.css           # .ca-wrap, .ca-section, grids
│   ├── effects.css          # .ca-noise, .ca-glass, .ca-bg-grid
│   └── index.css
├── animations/
│   ├── keyframes.css        # @keyframes definitions
│   ├── scroll-reveal.css    # .ca-reveal, .ca-pin-section
│   ├── micro-interactions.css
│   └── index.css
├── components/
│   ├── navigation.css       # .ca-nav
│   ├── buttons.css          # .ca-btn variants
│   ├── hero.css
│   ├── cards.css            # Service & info cards
│   ├── marquee.css
│   ├── portfolio.css
│   ├── stats.css
│   ├── cta.css
│   ├── footer.css
│   ├── laptop-demo.css      # Scroll-driven laptop section
│   └── index.css
└── js/
    ├── index.js             # initCreativeAgency()
    ├── reveal.js
    ├── counters.js
    ├── nav.js
    └── scroll-pin.js
```

## Naming convention

All classes use the `ca-` prefix (Creative Agency) to avoid collisions with reference projects:

| Reference (Vanessenceweb) | Creative Agency |
|---------------------------|-----------------|
| `.reveal` / `.in-view`    | `.ca-reveal` / `.is-visible` |
| `.btn-gold`               | `.ca-btn--primary` |
| `.wrap`                   | `.ca-wrap` |
| `.card`                   | `.ca-card` |
| `.pin-section`            | `.ca-pin-section` |
| `.stage.on`               | `.ca-stage.is-on` |

## Brand identity

| Aspect | Value |
|--------|-------|
| Display font | Space Grotesk |
| Body font | Inter |
| Mono font | JetBrains Mono |
| Primary accent | `#7c3aed` (violet) |
| Hot accent | `#f43f5e` (rose) |
| Background | `#fafaf9` (warm off-white) |
| Card radius | `22px` |
| Dark section radius | `40px` |

## Services covered

- Landing Pages
- Web Redesign
- Web Design
- Brand Identity & Restructuring
- Logo Design
- Automation & Integrations
- Performance & SEO
- Scroll Animations & Motion

## JavaScript API

```js
import { initCreativeAgency } from "./js/index.js";

initCreativeAgency({
  pinSection: "#ca-process",
  pinConfig: {
    typedText: "A brand that moves people.",
    highlightWord: "moves",
  },
});
```

### Modules

- **`reveal.js`** — IntersectionObserver scroll reveals
- **`counters.js`** — Animated stat numbers (`data-target`)
- **`nav.js`** — Nav blur/border on scroll
- **`scroll-pin.js`** — Laptop lid + staged mini-site build on scroll

## Relationship to reference projects

| Pattern source | What was adapted |
|----------------|------------------|
| Vanessenceweb | Layout model, hero, marquee, pin section, reveal, counters |
| ONYX (index.html) | Noise overlay, grid background, micro-interaction easing |
| Golden LDN | Fluid type scale, dark inset sections, ticker concept |

## Next steps

1. Build the full landing page using these components
2. Customize `tokens/colors.css` for your final brand
3. Replace placeholder copy and project thumbnails
4. Add real contact form / CTA links

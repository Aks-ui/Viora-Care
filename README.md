# Viora Care — Cavendish Care Home

Marketing website for **Viora Care Limited** and **Cavendish Care Home**, a
23-bed residential care home at 301 Stroud Road, Gloucester GL1 5LB.

Built with a focus on UX best practices, accessibility and rich, tasteful
motion that suits a warm, trustworthy care brand.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a bespoke design system (calm forest greens, warm
  terracotta accents, heritage gold)
- **Framer Motion** for scroll reveals, staggered entrances, animated counters,
  carousels, parallax and page-level motion
- **Fraunces** (display serif) + **Inter** (body) via `next/font`
- **lucide-react** icons

## Pages

| Route          | Purpose                                                          |
| -------------- | --------------------------------------------------------------- |
| `/`            | Home — hero, stats, welcome, values, care, strategy, reviews    |
| `/about`       | Story, mission/vision, 2003→today timeline, ownership, strategy |
| `/care`        | Residential personal care, person-centred approach, promises    |
| `/our-home`    | Illustrated gallery, facilities, location & map                 |
| `/team`        | The experienced, long-serving team & continuity of care         |
| `/admissions`  | Admissions steps, funding (private & local-authority), FAQs     |
| `/contact`     | Contact details, opening times, map and an enquiry form         |

## UX & accessibility highlights

- Semantic landmarks, a skip-to-content link and visible focus rings
- Adaptive header (light text over dark heroes, solid on scroll)
- Full keyboard support for nav, accordion, carousel and form
- `prefers-reduced-motion` respected throughout (animations gracefully disable)
- Responsive from 320px up; mobile slide-in navigation
- SEO: per-page metadata, Open Graph, `sitemap.xml` and `robots.txt`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/                 # routes (App Router) + layout, sitemap, robots
  components/
    layout/            # Header, Footer, Logo
    motion/            # Reveal, Stagger, Counter (Framer Motion primitives)
    sections/          # Hero, Stats, Testimonials, Timeline, FAQ, CTA, form
    ui/                # SectionHeading, FeatureCard, PageHero, Icon
  lib/site.ts          # single source of truth for content & contact details
```

## Notes

- Imagery uses lightweight inline SVG illustrations, so the site has **no
  external image dependencies** — drop in real photography by replacing the
  illustrated tiles in `our-home` and the hero/welcome visuals.
- The contact form is wired for validation and success/loading states but is
  **not connected to a backend**; point `onSubmit` in
  `components/sections/ContactForm.tsx` at your email/CRM endpoint.
- Phone, email and address in `src/lib/site.ts` are placeholders — update them
  with the home's real details.

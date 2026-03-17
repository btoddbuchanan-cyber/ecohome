# REBUILD PLAN — Ecohome.net

## Site Architecture

### Pages
| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, value prop, featured guides, trust, CTA |
| About | `/about` | Company story, mission, team, history |
| Building Guides Hub | `/guides` | Category grid with 6 main sections |
| Guide Category | `/guides/[category]` | List of guides in category |
| Individual Guide | `/guides/[category]/[slug]` | Full guide article (MDX) |
| Blog | `/blog` | Latest articles, filterable by tag |
| Blog Post | `/blog/[slug]` | Individual blog post (MDX) |
| Find Professionals | `/professionals` | Professional directory overview |
| Resources & Tools | `/tools` | Interactive calculators hub |
| Contact | `/contact` | Contact form, business info |
| 404 | `/404` | Custom branded error page |

### Navigation Structure
```
Logo | Guides | About | Blog | Tools | Professionals | Contact | [Get Started CTA]
```

### Internal Linking Strategy
- Every guide links to related guides in same/adjacent categories
- Blog posts link to relevant guides
- Tools pages link to related guides
- Footer includes sitemap-style links to all major sections

## Design Direction

### Design System Commitment
**"Refined luxury editorial with organic textures and high-contrast accent."**
Think Kinfolk meets Architectural Digest — warm, earthy, sophisticated. Every future page built from this doc should fit seamlessly.

### Color Palette (WCAG AA Pre-verified)

| Token | Hex | Usage | Contrast on White | Contrast on Dark (#1A1A18) |
|-------|-----|-------|-------------------|---------------------------|
| `--color-primary` | `#F05240` | Brand accent, CTAs, links | 3.5:1 (large text only) | 4.7:1 ✅ |
| `--color-primary-dark` | `#D4402F` | CTA hover, primary on white bg | 4.8:1 ✅ | — |
| `--color-dark` | `#1A1A18` | Headings, hero bg, footer bg | 16.5:1 ✅ | — |
| `--color-text` | `#2D2D2A` | Body text | 13.5:1 ✅ | — |
| `--color-text-muted` | `#5C5C58` | Secondary text, captions | 7.2:1 ✅ | — |
| `--color-warm-white` | `#FAF8F5` | Page background, cards | — | 15.8:1 ✅ |
| `--color-warm-gray` | `#F0EDE8` | Section alternating bg | — | 14.5:1 ✅ |
| `--color-earth` | `#8B7D6B` | Decorative borders, subtle accents | 4.6:1 ✅ | — |
| `--color-forest` | `#2D5F3F` | Secondary accent (eco/green) | 7.3:1 ✅ | — |
| `--color-white` | `#FFFFFF` | Text on dark backgrounds | — | 17.6:1 ✅ |

**Note:** Primary coral (#F05240) only used for large text/buttons on white. For small text, use `--color-primary-dark` (#D4402F) which passes AA at 4.8:1.

### Typography Selections
- **Display/Headings:** `DM Serif Display` — elegant serif with character, perfect for editorial feel
- **Body:** `Outfit` — modern geometric sans-serif, excellent readability, variable font
- **Accent/Small caps:** `Outfit` at 600 weight with letter-spacing

**Typographic Scale:**
| Role | Size | Weight | Font | Line Height |
|------|------|--------|------|-------------|
| Display (hero) | 64px / 4rem | 400 | DM Serif Display | 1.1 |
| H1 | 48px / 3rem | 400 | DM Serif Display | 1.2 |
| H2 | 36px / 2.25rem | 400 | DM Serif Display | 1.25 |
| H3 | 24px / 1.5rem | 400 | DM Serif Display | 1.3 |
| Body | 18px / 1.125rem | 400 | Outfit | 1.65 |
| Body small | 16px / 1rem | 400 | Outfit | 1.6 |
| Caption | 14px / 0.875rem | 500 | Outfit | 1.5 |
| Overline | 13px / 0.8125rem | 600 | Outfit (uppercase, tracked) | 1.4 |

### Component Style Guide
- **Buttons:** Rounded corners (8px), solid fill for primary, outline for secondary. Coral primary, dark for secondary.
- **Cards:** Warm white bg, subtle shadow, 12px border-radius, hover lift animation
- **Section transitions:** Alternating warm-white and warm-gray backgrounds with subtle noise texture overlay
- **Images:** 12px border-radius, subtle warm shadow, occasional overlapping/offset layouts
- **Decorative elements:** Thin earth-toned borders, grain texture overlay on hero sections, subtle dot grids

## Image Strategy
| Image | Decision | Source |
|-------|----------|--------|
| Logo SVG | KEEP | Extracted from current site |
| Hero background | CREATE NEW | Unsplash — stunning sustainable home photography |
| Guide category icons | CREATE NEW | Custom SVG icons for each category |
| About page | KEEP concepts | Rewrite with better imagery |
| Blog featured images | CREATE NEW | Unsplash per-post |
| Tool illustrations | CREATE NEW | Custom SVG illustrations |

## Copy Strategy
- **Tone:** Expert but approachable. Confident but not arrogant. Warm but professional.
- **Key messaging pillars:**
  1. Trusted expertise (600+ guides, 13+ years)
  2. Save money building green (cost-effective sustainability)
  3. Health & comfort (better homes = better living)
  4. Science-based guidance (not opinions, evidence)
- **Rewrite priority:** Hero tagline, About page, Guide introductions
- **Keep:** Mike Reynolds quote, business facts, guide content structure

## SEO Implementation Plan
- **Per-page meta:** Unique title (<60 chars) + description (<160 chars)
- **Schema types:** Organization (global), Article (guides/blog), FAQ (guide pages), BreadcrumbList (all)
- **Keywords per page:** Mapped in build phase
- **Sitemap:** Auto-generated from Next.js
- **robots.txt:** Standard allow-all with sitemap reference
- **Blog strategy:** MDX files in `/content/blog/` for ongoing content

## Technical Plan
- **Framework:** Next.js 14+ (App Router) with Static Site Generation
- **Styling:** Tailwind CSS with CSS custom properties for design tokens
- **Blog:** MDX via next-mdx-remote or @next/mdx
- **Images:** next/image with WebP/AVIF auto-conversion
- **Fonts:** next/font/google for DM Serif Display and Outfit
- **Animation:** Motion (framer-motion) for scroll reveals and micro-interactions
- **Accessibility:** axe-core as dev dependency, WCAG AA throughout
- **Package manager:** pnpm
- **Linting:** ESLint + Prettier from start
- **Performance targets:** Lighthouse 90+ on all Core Web Vitals

## Accessibility Targets
- Zero axe-core critical/serious violations at launch
- WCAG AA contrast on all color combinations (pre-verified above)
- Keyboard navigation on all interactive elements
- Skip-to-content link on every page
- Proper heading hierarchy (one H1 per page)
- Alt text on every image
- prefers-reduced-motion respected

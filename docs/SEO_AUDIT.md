# SEO AUDIT — Ecohome.net

## Technical SEO

### Current State
| Check | Status | Notes |
|-------|--------|-------|
| HTTPS | ✅ Active | SSL cert valid |
| Mobile responsive | ⚠️ Partial | Breakpoint at 720px, some layout issues |
| Page load speed | ⚠️ Slow | Heavy JS, multiple ad scripts (AdRoll, RAS), large carousel |
| URL structure | ⚠️ Inconsistent | `/en/guides/` vs `/guides/`, language prefix adds complexity |
| sitemap.xml | ✅ Present | Standard XML sitemap |
| robots.txt | ✅ Present | Standard config |
| Canonical tags | ⚠️ Needs review | Multi-language setup may cause issues |
| 404 page | ⚠️ Generic | No custom branded 404 |
| Redirect chains | ⚠️ Present | `/guides/` redirects to `/en/guides/` |

### On-Page SEO
| Check | Status | Notes |
|-------|--------|-------|
| Title tags | ⚠️ Long | "Eco Homes - Sustainable & Green - Build or Renovate Better - Ecohome" = 68 chars |
| Meta descriptions | ⚠️ Generic | Could be more compelling/action-oriented |
| H1 per page | ❌ Multiple | Homepage has multiple H1s in carousel |
| Image alt text | ⚠️ Inconsistent | Some images missing alt text |
| Internal linking | ✅ Good | Dense internal link structure in body text |
| Keyword usage | ✅ Good | "green building", "sustainable homes", "eco home" well covered |
| Content depth | ✅ Excellent | 600+ guides, very thorough content |

### Content & Strategy
| Area | Assessment |
|------|-----------|
| Blog presence | ✅ Strong — regular article updates |
| Content gap | ⚠️ No interactive tools/calculators |
| Schema/JSON-LD | ❌ Missing or minimal |
| Local SEO | ⚠️ No clear NAP consistency |
| Structured data | ❌ No Article, FAQ, or HowTo schema |

## Recommendations for Rebuild
1. Single H1 per page, proper heading hierarchy
2. Unique, compelling title tags under 60 chars
3. Meta descriptions under 160 chars with CTAs
4. JSON-LD schema on every page (Organization, Article, FAQ, HowTo)
5. Proper sitemap.xml and robots.txt
6. Custom 404 page
7. Image alt text on every image
8. Clean URL structure without language prefix for English (default)
9. Internal linking strategy built into every guide
10. Core Web Vitals optimization (static generation, image optimization)

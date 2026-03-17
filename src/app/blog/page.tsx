import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest articles on sustainable building, green home renovation, energy efficiency, and building science from Ecohome experts.",
};

const blogPosts = [
  {
    title: "What Does an Architect Cost, and Do I Need One to Build a Custom Home?",
    excerpt:
      "Understanding architect fees, when professional design services are worth the investment, and how to get the most value from working with an architect on your custom home project.",
    category: "Planning & Design",
    date: "March 2026",
    slug: "architect-cost-custom-home",
  },
  {
    title: "Metal Siding Guide: Durability, Cost, and Performance vs. Wood",
    excerpt:
      "A comprehensive comparison of modern steel and aluminum siding options against traditional wood, covering longevity, maintenance, cost, and environmental impact.",
    category: "Exterior Cladding",
    date: "March 2026",
    slug: "metal-siding-guide",
  },
  {
    title: "Composting Toilets Buyers Guide: Types, Maintenance & Legal Permits",
    excerpt:
      "Everything you need to know about selecting, installing, and maintaining composting toilets for off-grid, eco-conscious, and water-conserving homes.",
    category: "Plumbing",
    date: "February 2026",
    slug: "composting-toilets-guide",
  },
  {
    title: "Choosing the Best Roof Profile For Your Home",
    excerpt:
      "How roof shape impacts insulation, snow loads, overhangs, and long-term durability for high-performance homes across North American climates.",
    category: "Roof Assemblies",
    date: "February 2026",
    slug: "best-roof-profile",
  },
  {
    title: "Attached Garage Best Practices: High-Performance Doors & Thermal Design",
    excerpt:
      "Essential design strategies for attached garages that prevent air quality issues, minimize thermal bridging, and maintain your home's energy performance.",
    category: "Planning & Design",
    date: "January 2026",
    slug: "attached-garage-best-practices",
  },
  {
    title: "Building High Performance Homes on a Tight Budget",
    excerpt:
      "Practical strategies for achieving excellent energy performance without premium pricing. Smart design choices that deliver the most impact per dollar.",
    category: "Planning & Design",
    date: "January 2026",
    slug: "high-performance-homes-budget",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Blog
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-white max-w-3xl">
            Expert Insights & Building Science
          </h1>
          <p className="mt-6 text-xl text-warm-white/70 max-w-2xl leading-relaxed">
            The latest in sustainable construction, energy efficiency, and green home innovation
            from our team of building science experts.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Featured Post */}
          <ScrollReveal>
            <article className="mb-16 grid lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-forest/20 via-earth/10 to-primary/10 overflow-hidden">
                <div className="w-full h-full" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase text-forest">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-text-muted text-xs">·</span>
                  <span className="text-text-muted text-xs">{blogPosts[0].date}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-dark">
                  <Link href={`/blog`} className="hover:text-primary-dark transition-colors">
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="mt-4 text-text-muted leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <Link
                  href={`/blog`}
                  className="mt-6 inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all duration-200"
                >
                  Read article →
                </Link>
              </div>
            </article>
          </ScrollReveal>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <article className="group">
                  <div className="aspect-[16/10] rounded-xl bg-warm-gray mb-5 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-earth/20 to-forest/20 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-forest">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs">·</span>
                    <span className="text-text-muted text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl text-dark group-hover:text-primary-dark transition-colors">
                    <Link href={`/blog`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { GuideCategories } from "@/components/GuideCategories";
import { TestimonialSection } from "@/components/TestimonialSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecohome — Build Better, Renovate Better, Live Better",
  description:
    "Expert guides and tools for building efficient, sustainable homes affordably. 600+ science-based building guides from North America's trusted green building resource.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      {/* Value Proposition */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-dark">
                Why Ecohome
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-dark leading-tight">
                If you can build a home that costs next to nothing to operate — why would you build
                it any other way?
              </h2>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                Ecohome provides science-based guidance for every stage of building or renovating a
                high-performance home. From foundation to rooftop, our expert guides help you make
                smarter decisions that save money, improve comfort, and reduce environmental impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Save on Energy Costs",
                description:
                  "Learn proven techniques to slash energy bills by 60-90% with proper insulation, air sealing, and efficient mechanical systems.",
                icon: "⚡",
              },
              {
                title: "Healthier Living Spaces",
                description:
                  "Discover how proper ventilation, non-toxic materials, and moisture management create homes that protect your family's health.",
                icon: "🌿",
              },
              {
                title: "Build with Confidence",
                description:
                  "Access 600+ expert guides covering every building decision, backed by hands-on construction experience and building science.",
                icon: "🏗️",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="group p-8 bg-white rounded-2xl border border-warm-gray hover:border-earth/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-dark mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <GuideCategories />

      {/* Testimonial / Quote */}
      <TestimonialSection />

      {/* Featured Content */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-dark">
                Latest from the Blog
              </span>
              <h2 className="mt-4 font-display text-4xl text-dark">
                Expert Insights & Building Science
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "What Does an Architect Cost, and Do I Need One?",
                excerpt:
                  "Understanding architect fees and when professional design services make financial sense for your custom home project.",
                category: "Planning & Design",
              },
              {
                title: "Metal Siding: Durability, Cost & Performance",
                excerpt:
                  "How modern steel and aluminum siding compare to wood in terms of longevity, maintenance, and home protection.",
                category: "Exterior Cladding",
              },
              {
                title: "Composting Toilets: Types, Maintenance & Permits",
                excerpt:
                  "A comprehensive guide to choosing, installing, and maintaining composting toilets for off-grid and eco-conscious homes.",
                category: "Plumbing",
              },
            ].map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.1}>
                <article className="group">
                  <div className="aspect-[16/10] bg-warm-gray rounded-xl mb-5 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-earth/20 to-forest/20 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-forest">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-dark group-hover:text-primary-dark transition-colors">
                    <Link href="/blog" className="block">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all duration-200"
            >
              View all articles
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

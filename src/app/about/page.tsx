import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Founded in 2011 by green building experts, Ecohome is North America's most trusted sustainable building resource. Learn about our mission and team.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-forest/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Our Story
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-white max-w-3xl">
            Building the future of sustainable homes
          </h1>
          <p className="mt-6 text-xl text-warm-white/70 max-w-2xl leading-relaxed">
            Since 2011, we&apos;ve been empowering homeowners with the knowledge to build better,
            more efficient, and healthier homes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-dark">
                  The Beginning
                </span>
                <h2 className="mt-4 font-display text-4xl text-dark">
                  From a 6&times;8 foot office to North America&apos;s leading green building resource
                </h2>
                <p className="mt-6 text-text-muted leading-relaxed text-lg">
                  Ecohome was founded in 2011 by Mike Reynolds and Yanni Milon — two hands-on green
                  home builders who believed that sustainable building knowledge should be accessible
                  to everyone, not locked behind industry jargon.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed">
                  Starting from Mike&apos;s backyard office, Ecohome grew into the most comprehensive
                  green building resource in North America, featuring over 600 expert guides covering
                  every aspect of sustainable home construction and renovation.
                </p>
                <p className="mt-4 text-text-muted leading-relaxed">
                  In 2024, Ecohome was acquired by Raiiz Innovations Inc., a forward-thinking company
                  dedicated to climate-smart living and sustainable technology. This partnership brings
                  new resources and technology to advance our mission.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-forest/20 via-earth/10 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-6xl text-dark mb-2">2011</div>
                  <div className="text-text-muted">Year Founded</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-warm-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-dark">
                Our Mission
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-dark">
                Empower better homebuilding through clear, science-based guidance
              </h2>
              <p className="mt-6 text-text-muted text-lg leading-relaxed">
                We believe every homeowner deserves access to the knowledge needed to build or
                renovate a high-performance, healthy, comfortable home — without breaking the bank.
                Our team of engineers, environmentalists, building experts, writers, and digital
                innovators works every day to make that a reality.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Science-Based",
                description:
                  "Every guide is grounded in building science, tested techniques, and real-world construction experience.",
              },
              {
                title: "Accessible",
                description:
                  "Complex building concepts explained clearly so any homeowner can make informed decisions with confidence.",
              },
              {
                title: "Independent",
                description:
                  "Our recommendations are based on performance and value — not advertising dollars or manufacturer relationships.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="p-8 bg-white rounded-2xl border border-warm-gray">
                  <h3 className="font-display text-xl text-dark mb-3">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-dark mb-12">What We Offer</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "600+ Building Guides", desc: "Covering every stage from planning to finishing" },
              { title: "Professional Directory", desc: "Connect with vetted green building experts" },
              { title: "Product Listings", desc: "Curated sustainable building products and materials" },
              { title: "Expert Q&A Forum", desc: "Get answers from building science professionals" },
              { title: "Prefab Home Directory", desc: "Modern, contemporary, and tiny house options" },
              { title: "Free Tools & Calculators", desc: "Interactive tools to plan your project" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="flex gap-4 p-6 rounded-xl hover:bg-warm-gray/50 transition-colors">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-dark">{item.title}</h3>
                    <p className="mt-1 text-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

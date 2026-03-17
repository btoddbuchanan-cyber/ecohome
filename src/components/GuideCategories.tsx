"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const categories = [
  {
    title: "Planning & Design",
    description: "Budgeting, certifications, site selection, and architectural planning",
    slug: "planning-design",
    bg: "linear-gradient(135deg, #2D5F3F, #4A8A5E)",
  },
  {
    title: "Foundations & Basements",
    description: "Excavation, slab-on-grade, waterproofing, and radon mitigation",
    slug: "foundations-basements",
    bg: "linear-gradient(135deg, #8B7D6B, #A69882)",
  },
  {
    title: "Walls & Roofs",
    description: "Insulation, air barriers, cladding, windows, and roof assemblies",
    slug: "walls-roofs",
    bg: "linear-gradient(135deg, #1A1A18, #3A3A35)",
  },
  {
    title: "Mechanical Systems",
    description: "Heating, cooling, ventilation, plumbing, and renewable energy",
    slug: "mechanical-systems",
    bg: "linear-gradient(135deg, #D4402F, #F05240)",
  },
  {
    title: "Interiors",
    description: "Flooring, kitchens, bathrooms, paints, and healthy finishes",
    slug: "interiors",
    bg: "linear-gradient(135deg, #2D5F3F, #8B7D6B)",
  },
  {
    title: "Exteriors",
    description: "Decks, landscaping, food production, and rainwater collection",
    slug: "exteriors",
    bg: "linear-gradient(135deg, #8B7D6B, #2D5F3F)",
  },
];

export function GuideCategories() {
  return (
    <section className="py-24 bg-warm-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-dark">
              Building Guides
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-dark">
              Every Step of Your Build, Covered
            </h2>
            <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
              From your first sketch to the finishing touches — science-based guidance for every
              decision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 0.08}>
              <Link href={`/guides#${cat.slug}`} className="group block">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{ background: cat.bg }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="font-display text-2xl text-white">{cat.title}</h3>
                    <p className="mt-2 text-white/80 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                    <span className="mt-4 text-white/60 text-sm font-medium group-hover:text-white group-hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1">
                      Explore guides →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

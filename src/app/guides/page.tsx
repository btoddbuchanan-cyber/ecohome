import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Guides",
  description:
    "600+ expert building guides for sustainable home construction and renovation. From planning to finishing — science-based guidance for every decision.",
};

const guideCategories = [
  {
    title: "Planning & Design",
    slug: "planning-design",
    description: "Budgeting, building codes, certifications, architecture, and project planning",
    subcategories: [
      "Lifestyle, Location & Commuting",
      "Grants & Incentives",
      "Building Codes",
      "Green Building Certifications",
      "Concept & Design",
      "Off-Grid & Net-Zero Housing",
      "Materials & Resources",
      "Architecture & Plan Design",
    ],
    gradient: "from-forest to-forest/60",
  },
  {
    title: "Foundations & Basements",
    slug: "foundations-basements",
    description: "Excavation, slab-on-grade, waterproofing, drainage, and radon mitigation",
    subcategories: [
      "Excavation",
      "Radon Mitigation",
      "New Foundations & Slab-on-Grade",
      "Waterproofing & Drainage",
    ],
    gradient: "from-earth to-earth/60",
  },
  {
    title: "Walls & Roofs",
    slug: "walls-roofs",
    description: "Insulation, air barriers, windows, doors, cladding, and roof assemblies",
    subcategories: [
      "Wall Assemblies — New Construction",
      "Wall Assemblies — Renovation",
      "Air & Vapour Barriers",
      "Insulation & Soundproofing",
      "Windows & Doors",
      "Roof Assemblies",
      "Exterior Cladding",
    ],
    gradient: "from-dark to-dark/60",
  },
  {
    title: "Mechanical Systems",
    slug: "mechanical-systems",
    description: "Heating, cooling, ventilation, plumbing, electrical, and renewable energy",
    subcategories: [
      "Heating & Cooling",
      "Ventilation (HRV/ERV)",
      "Plumbing & Water Heaters",
      "Electrical Systems",
      "Renewable Energy",
    ],
    gradient: "from-primary to-primary/60",
  },
  {
    title: "Interiors",
    slug: "interiors",
    description: "Flooring, kitchens, bathrooms, finishes, and healthy indoor environments",
    subcategories: [
      "Walls & Ceilings",
      "Flooring & Stairs",
      "Paints & Natural Coatings",
      "Kitchens & Bathrooms",
      "Basement Finishing",
      "Cleaning & Maintenance",
    ],
    gradient: "from-forest/80 to-earth/60",
  },
  {
    title: "Exteriors",
    slug: "exteriors",
    description: "Decks, landscaping, food production, rainwater collection, and outdoor living",
    subcategories: [
      "Decks, Porches & Gazebos",
      "Permeable Surfaces",
      "Landscaping & Gardens",
      "Rainwater Collection",
      "Food Production",
      "Greenhouses & Sunrooms",
    ],
    gradient: "from-earth/80 to-forest/60",
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-earth/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Building Guides
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-white max-w-4xl">
            Every step of your build, covered
          </h1>
          <p className="mt-6 text-xl text-warm-white/70 max-w-2xl leading-relaxed">
            600+ expert guides covering every stage of sustainable home construction and renovation.
            Science-based advice you can trust.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {guideCategories.map((category, i) => (
              <ScrollReveal key={category.slug}>
                <div
                  id={category.slug}
                  className="scroll-mt-24 grid lg:grid-cols-[1fr,2fr] gap-8 items-start"
                >
                  <div className="lg:sticky lg:top-28">
                    <div
                      className={`h-48 lg:h-64 rounded-xl bg-gradient-to-br ${category.gradient} flex items-end p-6`}
                    >
                      <div>
                        <span className="text-white/60 text-sm font-medium">
                          Category {i + 1} of 6
                        </span>
                        <h2 className="font-display text-3xl text-white mt-1">{category.title}</h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                      {category.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/guides`}
                          className="group flex items-center gap-3 p-4 rounded-xl border border-warm-gray hover:border-earth/30 hover:bg-warm-gray/50 transition-all duration-200"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-text group-hover:text-primary-dark transition-colors">
                            {sub}
                          </span>
                        </Link>
                      ))}
                    </div>
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

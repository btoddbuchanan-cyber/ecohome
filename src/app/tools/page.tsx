import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Green Building Tools & Calculators",
  description:
    "Interactive calculators and tools to help plan your sustainable home project. Estimate energy savings, insulation R-values, heat loss, and more.",
};

const tools = [
  {
    title: "Home Energy Savings Calculator",
    description:
      "Estimate annual energy savings from insulation upgrades, air sealing, and efficient mechanical systems. Compare your current home to a high-performance build.",
    category: "Energy",
    slug: "energy-savings-calculator",
    available: true,
  },
  {
    title: "Insulation R-Value Calculator",
    description:
      "Calculate the ideal insulation R-value for your climate zone and wall/roof assembly. Factor in materials, costs, and performance targets.",
    category: "Building Science",
    slug: "r-value-calculator",
    available: true,
  },
  {
    title: "Heat Loss Estimator",
    description:
      "Estimate your home's heat loss through walls, windows, roof, and foundation. Identify the biggest opportunities for improvement.",
    category: "HVAC",
    slug: "heat-loss-estimator",
    available: true,
  },
  {
    title: "Solar Panel ROI Calculator",
    description:
      "Calculate the return on investment for a solar panel installation based on your location, roof orientation, energy costs, and available incentives.",
    category: "Renewable Energy",
    slug: "solar-roi-calculator",
    available: false,
  },
  {
    title: "Green Building Cost Estimator",
    description:
      "Compare the costs of conventional vs. green building approaches and see how long it takes for energy savings to offset the upfront investment.",
    category: "Planning",
    slug: "cost-estimator",
    available: false,
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Tools & Calculators
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-white max-w-4xl">
            Plan your build with confidence
          </h1>
          <p className="mt-6 text-xl text-warm-white/70 max-w-2xl leading-relaxed">
            Free interactive tools to help you make informed decisions about your sustainable home
            project. No signup required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool.slug} delay={i * 0.08}>
                <div
                  className={`group p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                    tool.available
                      ? "bg-white border-warm-gray hover:border-earth/30 hover:shadow-lg"
                      : "bg-warm-gray/50 border-warm-gray"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-forest">
                      {tool.category}
                    </span>
                    {!tool.available && (
                      <span className="text-xs font-medium text-text-muted bg-warm-gray px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl text-dark mb-3">{tool.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  {tool.available ? (
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Open tool →
                    </Link>
                  ) : (
                    <span className="mt-6 text-text-muted text-sm">Available soon</span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 text-center p-8 bg-warm-gray rounded-2xl">
              <h3 className="font-display text-2xl text-dark mb-3">Need a Custom Calculation?</h3>
              <p className="text-text-muted mb-6 max-w-xl mx-auto">
                Our expert Q&A forum can help with specific building science questions that go
                beyond our calculators.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Ask an Expert
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

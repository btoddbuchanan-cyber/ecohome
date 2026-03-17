import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Green Building Professionals",
  description:
    "Connect with vetted sustainable building professionals near you. Architects, contractors, and specialists committed to green building practices.",
};

const professionalTypes = [
  {
    title: "Architects & Designers",
    description: "Professionals specializing in sustainable, energy-efficient home design",
    count: "120+",
  },
  {
    title: "General Contractors",
    description: "Builders experienced in high-performance construction techniques",
    count: "200+",
  },
  {
    title: "Energy Auditors",
    description: "Certified professionals who assess and optimize home energy performance",
    count: "80+",
  },
  {
    title: "HVAC Specialists",
    description: "Heating, cooling, and ventilation experts for efficient mechanical systems",
    count: "90+",
  },
  {
    title: "Insulation Contractors",
    description: "Specialists in advanced insulation techniques and materials",
    count: "150+",
  },
  {
    title: "Renewable Energy Installers",
    description: "Solar, geothermal, and other renewable energy system professionals",
    count: "100+",
  },
];

export default function ProfessionalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-forest/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Professional Directory
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-white max-w-4xl">
            Find trusted green building professionals
          </h1>
          <p className="mt-6 text-xl text-warm-white/70 max-w-2xl leading-relaxed">
            Connect with architects, builders, and specialists who are committed to sustainable,
            high-performance construction.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl text-dark">Browse by Specialty</h2>
              <p className="mt-4 text-text-muted text-lg">
                Find the right expert for your specific project needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalTypes.map((type, i) => (
              <ScrollReveal key={type.title} delay={i * 0.08}>
                <div className="group p-8 bg-white rounded-2xl border border-warm-gray hover:border-earth/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-xl text-dark">{type.title}</h3>
                    <span className="text-sm font-semibold text-primary">{type.count}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{type.description}</p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-primary-dark hover:text-primary transition-colors"
                    >
                      Browse professionals →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Professionals */}
      <section className="py-24 bg-warm-gray">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-dark mb-4">Are You a Green Building Professional?</h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Join our directory to connect with homeowners actively seeking sustainable building
              expertise. Create your profile and showcase your work.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Create Your Profile
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

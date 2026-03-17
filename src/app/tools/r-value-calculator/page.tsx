"use client";

import { useState } from "react";
import Link from "next/link";

const climateZones = [
  { zone: "1-2", label: "Hot (Florida, Hawaii, South Texas)", wallR: 13, atticR: 30, basementR: 0 },
  { zone: "3", label: "Warm-Humid (Southeast, Southwest)", wallR: 20, atticR: 38, basementR: 5 },
  { zone: "4", label: "Mixed-Humid (Mid-Atlantic, Tennessee)", wallR: 20, atticR: 49, basementR: 10 },
  { zone: "5", label: "Cold (Chicago, Boston, Denver)", wallR: 25, atticR: 49, basementR: 15 },
  { zone: "6", label: "Cold (Minneapolis, Burlington VT)", wallR: 30, atticR: 60, basementR: 15 },
  { zone: "7-8", label: "Very Cold / Subarctic (Alaska, Northern Canada)", wallR: 35, atticR: 60, basementR: 20 },
];

const materials = [
  { name: "Fiberglass Batt", rPerInch: 3.2, costPerSqFt: 0.5 },
  { name: "Mineral Wool Batt", rPerInch: 3.7, costPerSqFt: 0.75 },
  { name: "Cellulose (Blown)", rPerInch: 3.5, costPerSqFt: 0.6 },
  { name: "Spray Foam (Open Cell)", rPerInch: 3.7, costPerSqFt: 1.0 },
  { name: "Spray Foam (Closed Cell)", rPerInch: 6.5, costPerSqFt: 1.5 },
  { name: "Rigid XPS", rPerInch: 5.0, costPerSqFt: 0.9 },
  { name: "Rigid Polyiso", rPerInch: 6.0, costPerSqFt: 0.85 },
  { name: "Rigid EPS", rPerInch: 4.0, costPerSqFt: 0.55 },
];

export default function RValueCalculator() {
  const [selectedZone, setSelectedZone] = useState("5");
  const [selectedMaterial, setSelectedMaterial] = useState("Mineral Wool Batt");
  const [assembly, setAssembly] = useState<"wall" | "attic" | "basement">("wall");

  const zone = climateZones.find((z) => z.zone === selectedZone) ?? climateZones[4];
  const material = materials.find((m) => m.name === selectedMaterial) ?? materials[1];

  const targetR = assembly === "wall" ? zone.wallR : assembly === "attic" ? zone.atticR : zone.basementR;
  const requiredInches = targetR / material.rPerInch;
  const estimatedCost = material.costPerSqFt * (requiredInches / 3.5) * 100; // per 100 sq ft

  return (
    <>
      <section className="relative py-24 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-forest/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/tools" className="text-primary text-sm font-medium hover:text-primary-dark mb-4 inline-block">
            ← Back to Tools
          </Link>
          <h1 className="mt-2 font-display text-4xl md:text-5xl text-white">
            Insulation R-Value Calculator
          </h1>
          <p className="mt-4 text-lg text-warm-white/70 max-w-2xl">
            Find the ideal insulation thickness for your climate zone and assembly type.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-dark">Configuration</h2>

              <div>
                <label htmlFor="climateZone" className="block text-sm font-medium text-dark mb-2">
                  Climate Zone
                </label>
                <select
                  id="climateZone"
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {climateZones.map((z) => (
                    <option key={z.zone} value={z.zone}>
                      Zone {z.zone}: {z.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="assembly" className="block text-sm font-medium text-dark mb-2">
                  Assembly Type
                </label>
                <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Assembly type">
                  {(["wall", "attic", "basement"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setAssembly(type)}
                      className={`py-3 px-4 rounded-lg text-sm font-medium capitalize transition-colors ${
                        assembly === type
                          ? "bg-primary text-white"
                          : "bg-white border border-warm-gray text-text hover:border-earth/30"
                      }`}
                      role="radio"
                      aria-checked={assembly === type}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="material" className="block text-sm font-medium text-dark mb-2">
                  Insulation Material
                </label>
                <select
                  id="material"
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {materials.map((m) => (
                    <option key={m.name} value={m.name}>
                      {m.name} (R-{m.rPerInch}/inch)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-2xl text-dark">Results</h2>

              <div className="p-8 bg-forest/5 rounded-2xl border border-forest/20 text-center">
                <div className="text-sm font-medium text-forest mb-1">Target R-Value</div>
                <div className="font-display text-5xl text-dark">R-{targetR}</div>
                <div className="text-sm text-text-muted mt-1 capitalize">
                  {assembly} — Zone {zone.zone}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl border border-warm-gray text-center">
                  <div className="text-sm text-text-muted mb-1">Required Thickness</div>
                  <div className="font-display text-3xl text-dark">
                    {requiredInches.toFixed(1)}&quot;
                  </div>
                  <div className="text-xs text-text-muted mt-1">{material.name}</div>
                </div>
                <div className="p-6 bg-white rounded-xl border border-warm-gray text-center">
                  <div className="text-sm text-text-muted mb-1">Est. Cost</div>
                  <div className="font-display text-3xl text-dark">
                    ${Math.round(estimatedCost)}
                  </div>
                  <div className="text-xs text-text-muted mt-1">per 100 sq ft</div>
                </div>
              </div>

              <div className="p-6 bg-warm-gray rounded-xl">
                <p className="text-sm text-text-muted leading-relaxed">
                  <strong className="text-dark">Note:</strong> R-value targets shown are based on
                  2021 IECC code minimums for new construction. High-performance homes (Passive House,
                  Net Zero) typically exceed these values by 50-100%.{" "}
                  <Link href="/guides" className="text-primary-dark font-medium">
                    See our insulation guides
                  </Link>{" "}
                  for detailed assembly recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

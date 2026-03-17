"use client";

import { useState } from "react";
import Link from "next/link";

export default function EnergySavingsCalculator() {
  const [homeSize, setHomeSize] = useState(2000);
  const [currentBill, setCurrentBill] = useState(200);
  const [insulation, setInsulation] = useState("average");
  const [airSealing, setAirSealing] = useState("average");
  const [heating, setHeating] = useState("gas-furnace");
  const [calculated, setCalculated] = useState(false);

  const insulationFactors: Record<string, number> = { poor: 0.15, average: 0.25, good: 0.35, excellent: 0.45 };
  const airSealingFactors: Record<string, number> = { poor: 0.1, average: 0.15, good: 0.25, excellent: 0.35 };
  const heatingFactors: Record<string, number> = {
    "gas-furnace": 0.05,
    "heat-pump": 0.30,
    "mini-split": 0.35,
    geothermal: 0.45,
  };

  const insulationSavings = currentBill * 12 * (insulationFactors[insulation] ?? 0);
  const airSealingSavings = currentBill * 12 * (airSealingFactors[airSealing] ?? 0);
  const heatingSavings = currentBill * 12 * (heatingFactors[heating] ?? 0);
  const totalSavings = Math.min(insulationSavings + airSealingSavings + heatingSavings, currentBill * 12 * 0.85);

  return (
    <>
      <section className="relative py-24 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/tools" className="text-primary text-sm font-medium hover:text-primary-dark mb-4 inline-block">
            ← Back to Tools
          </Link>
          <h1 className="mt-2 font-display text-4xl md:text-5xl text-white">
            Home Energy Savings Calculator
          </h1>
          <p className="mt-4 text-lg text-warm-white/70 max-w-2xl">
            Estimate your potential annual savings from common energy efficiency upgrades.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-12">
            {/* Inputs */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-dark">Your Home Details</h2>

              <div>
                <label htmlFor="homeSize" className="block text-sm font-medium text-dark mb-2">
                  Home Size (sq ft): <span className="text-primary font-semibold">{homeSize.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  id="homeSize"
                  min={500}
                  max={5000}
                  step={100}
                  value={homeSize}
                  onChange={(e) => setHomeSize(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>500 sq ft</span>
                  <span>5,000 sq ft</span>
                </div>
              </div>

              <div>
                <label htmlFor="currentBill" className="block text-sm font-medium text-dark mb-2">
                  Monthly Energy Bill ($): <span className="text-primary font-semibold">${currentBill}</span>
                </label>
                <input
                  type="range"
                  id="currentBill"
                  min={50}
                  max={500}
                  step={10}
                  value={currentBill}
                  onChange={(e) => setCurrentBill(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>$50/mo</span>
                  <span>$500/mo</span>
                </div>
              </div>

              <div>
                <label htmlFor="insulation" className="block text-sm font-medium text-dark mb-2">
                  Planned Insulation Level
                </label>
                <select
                  id="insulation"
                  value={insulation}
                  onChange={(e) => setInsulation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="poor">Minimal upgrade</option>
                  <option value="average">Standard upgrade (code minimum)</option>
                  <option value="good">Above-code insulation</option>
                  <option value="excellent">Passive House level</option>
                </select>
              </div>

              <div>
                <label htmlFor="airSealing" className="block text-sm font-medium text-dark mb-2">
                  Air Sealing Level
                </label>
                <select
                  id="airSealing"
                  value={airSealing}
                  onChange={(e) => setAirSealing(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="poor">Basic weatherstripping</option>
                  <option value="average">Standard air barrier</option>
                  <option value="good">Blower-door tested (&lt;3 ACH50)</option>
                  <option value="excellent">Passive House (&lt;0.6 ACH50)</option>
                </select>
              </div>

              <div>
                <label htmlFor="heating" className="block text-sm font-medium text-dark mb-2">
                  Heating System Upgrade
                </label>
                <select
                  id="heating"
                  value={heating}
                  onChange={(e) => setHeating(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="gas-furnace">High-efficiency gas furnace</option>
                  <option value="heat-pump">Air-source heat pump</option>
                  <option value="mini-split">Ductless mini-split</option>
                  <option value="geothermal">Geothermal heat pump</option>
                </select>
              </div>

              <button
                onClick={() => setCalculated(true)}
                className="w-full px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Calculate Savings
              </button>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-display text-2xl text-dark mb-6">Estimated Savings</h2>

              {calculated ? (
                <div className="space-y-6">
                  <div className="p-8 bg-forest/5 rounded-2xl border border-forest/20 text-center">
                    <div className="text-sm font-medium text-forest mb-2">
                      Estimated Annual Savings
                    </div>
                    <div className="font-display text-5xl text-dark">
                      ${Math.round(totalSavings).toLocaleString()}
                    </div>
                    <div className="text-sm text-text-muted mt-2">
                      ${Math.round(totalSavings / 12).toLocaleString()}/month
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between p-4 bg-white rounded-lg border border-warm-gray">
                      <span className="text-sm text-text">Insulation upgrade</span>
                      <span className="text-sm font-semibold text-forest">
                        ${Math.round(insulationSavings).toLocaleString()}/yr
                      </span>
                    </div>
                    <div className="flex justify-between p-4 bg-white rounded-lg border border-warm-gray">
                      <span className="text-sm text-text">Air sealing</span>
                      <span className="text-sm font-semibold text-forest">
                        ${Math.round(airSealingSavings).toLocaleString()}/yr
                      </span>
                    </div>
                    <div className="flex justify-between p-4 bg-white rounded-lg border border-warm-gray">
                      <span className="text-sm text-text">Heating system</span>
                      <span className="text-sm font-semibold text-forest">
                        ${Math.round(heatingSavings).toLocaleString()}/yr
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-warm-gray rounded-xl">
                    <p className="text-sm text-text-muted leading-relaxed">
                      <strong className="text-dark">Note:</strong> These are estimates based on
                      typical savings ranges. Actual savings depend on your climate zone, home
                      construction, energy prices, and usage patterns. For a precise assessment,{" "}
                      <Link href="/professionals" className="text-primary-dark font-medium">
                        consult a certified energy auditor
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-12 bg-warm-gray rounded-2xl text-center">
                  <p className="text-text-muted">
                    Configure your home details and click &quot;Calculate Savings&quot; to see your
                    estimated annual energy savings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeatLossEstimator() {
  const [sqft, setSqft] = useState(2000);
  const [stories, setStories] = useState(2);
  const [windowPct, setWindowPct] = useState(15);
  const [wallR, setWallR] = useState(20);
  const [atticR, setAtticR] = useState(40);
  const [windowU, setWindowU] = useState(0.3);
  const [designTemp, setDesignTemp] = useState(-10);
  const [indoorTemp, setIndoorTemp] = useState(70);
  const [calculated, setCalculated] = useState(false);

  const tempDiff = indoorTemp - designTemp;
  const footprint = sqft / stories;
  const perimeter = Math.sqrt(footprint) * 4;
  const wallHeight = stories * 9;
  const grossWallArea = perimeter * wallHeight;
  const windowArea = grossWallArea * (windowPct / 100);
  const netWallArea = grossWallArea - windowArea;

  const wallLoss = (netWallArea * tempDiff) / wallR;
  const atticLoss = (footprint * tempDiff) / atticR;
  const windowLoss = windowArea * windowU * tempDiff;
  const infiltration = sqft * 0.02 * tempDiff;
  const totalBTU = wallLoss + atticLoss + windowLoss + infiltration;

  return (
    <>
      <section className="relative py-24 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-earth/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/tools" className="text-primary text-sm font-medium hover:text-primary-dark mb-4 inline-block">
            ← Back to Tools
          </Link>
          <h1 className="mt-2 font-display text-4xl md:text-5xl text-white">
            Heat Loss Estimator
          </h1>
          <p className="mt-4 text-lg text-warm-white/70 max-w-2xl">
            Estimate where your home loses the most heat and identify improvement priorities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-12">
            <div className="space-y-5">
              <h2 className="font-display text-2xl text-dark">Home Parameters</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sqft" className="block text-sm font-medium text-dark mb-1">
                    Total Area (sq ft)
                  </label>
                  <input type="number" id="sqft" value={sqft} onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="stories" className="block text-sm font-medium text-dark mb-1">
                    Stories
                  </label>
                  <select id="stories" value={stories} onChange={(e) => setStories(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value={1}>1 Story</option>
                    <option value={2}>2 Stories</option>
                    <option value={3}>3 Stories</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="windowPct" className="block text-sm font-medium text-dark mb-1">
                  Window-to-Wall Ratio: {windowPct}%
                </label>
                <input type="range" id="windowPct" min={5} max={40} value={windowPct}
                  onChange={(e) => setWindowPct(Number(e.target.value))} className="w-full accent-primary" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="wallR" className="block text-sm font-medium text-dark mb-1">
                    Wall R-Value
                  </label>
                  <input type="number" id="wallR" value={wallR} onChange={(e) => setWallR(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="atticR" className="block text-sm font-medium text-dark mb-1">
                    Attic R-Value
                  </label>
                  <input type="number" id="atticR" value={atticR} onChange={(e) => setAtticR(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="windowU" className="block text-sm font-medium text-dark mb-1">
                    Window U-Factor
                  </label>
                  <select id="windowU" value={windowU} onChange={(e) => setWindowU(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value={0.5}>Single pane (U-0.50)</option>
                    <option value={0.3}>Double pane (U-0.30)</option>
                    <option value={0.2}>Triple pane (U-0.20)</option>
                    <option value={0.15}>Passive House (U-0.15)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="designTemp" className="block text-sm font-medium text-dark mb-1">
                    Design Temp (°F)
                  </label>
                  <input type="number" id="designTemp" value={designTemp}
                    onChange={(e) => setDesignTemp(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <button onClick={() => setCalculated(true)}
                className="w-full px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                Calculate Heat Loss
              </button>
            </div>

            <div>
              <h2 className="font-display text-2xl text-dark mb-6">Heat Loss Breakdown</h2>
              {calculated ? (
                <div className="space-y-6">
                  <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center">
                    <div className="text-sm font-medium text-primary-dark mb-1">Total Design Heat Loss</div>
                    <div className="font-display text-4xl text-dark">
                      {Math.round(totalBTU).toLocaleString()}
                    </div>
                    <div className="text-sm text-text-muted mt-1">BTU/hour</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Walls", value: wallLoss, pct: (wallLoss / totalBTU) * 100 },
                      { label: "Windows", value: windowLoss, pct: (windowLoss / totalBTU) * 100 },
                      { label: "Attic/Roof", value: atticLoss, pct: (atticLoss / totalBTU) * 100 },
                      { label: "Air Infiltration", value: infiltration, pct: (infiltration / totalBTU) * 100 },
                    ].sort((a, b) => b.value - a.value).map((item) => (
                      <div key={item.label} className="p-4 bg-white rounded-lg border border-warm-gray">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-text">{item.label}</span>
                          <span className="text-sm text-text-muted">
                            {Math.round(item.value).toLocaleString()} BTU/h ({Math.round(item.pct)}%)
                          </span>
                        </div>
                        <div className="h-2 bg-warm-gray rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-warm-gray rounded-xl">
                    <p className="text-sm text-text-muted leading-relaxed">
                      <strong className="text-dark">Tip:</strong> Focus upgrades on the largest heat
                      loss component first for the best ROI.{" "}
                      <Link href="/guides" className="text-primary-dark font-medium">
                        Browse our insulation and air sealing guides
                      </Link>{" "}
                      for specific recommendations.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-12 bg-warm-gray rounded-2xl text-center">
                  <p className="text-text-muted">
                    Enter your home parameters and click &quot;Calculate Heat Loss&quot; to see
                    where your home loses the most energy.
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

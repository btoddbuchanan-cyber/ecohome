"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "600+", label: "Expert Guides" },
  { value: "13+", label: "Years of Experience" },
  { value: "LEED V4", label: "Platinum Certified Projects" },
  { value: "1M+", label: "Homeowners Helped" },
];

export function StatsBar() {
  return (
    <section className="relative -mt-16 z-20" aria-label="Key statistics">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl border border-warm-gray p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl text-dark">{stat.value}</div>
                <div className="mt-1 text-sm text-text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-dark noise-overlay overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-forest/30"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-forest/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-6">
              North America&apos;s Trusted Green Building Resource
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
          >
            Build homes that{" "}
            <span className="text-primary">cost less</span> to operate
            <span className="text-warm-white/60"> — and more to love</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-warm-white/70 leading-relaxed max-w-2xl"
          >
            600+ expert building guides. Science-based advice for every stage of construction and
            renovation. Save money, improve comfort, and build sustainably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/guides"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 text-lg"
            >
              Explore Building Guides
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-warm-white/20 text-warm-white font-semibold rounded-lg hover:border-warm-white/40 hover:bg-warm-white/5 transition-all duration-200 text-lg"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

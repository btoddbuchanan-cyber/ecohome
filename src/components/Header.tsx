"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/tools", label: "Tools" },
  { href: "/professionals", label: "Professionals" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-warm-gray">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Ecohome home">
          <svg
            viewBox="0 0 200 199.287"
            className="h-9 w-auto"
            aria-hidden="true"
          >
            <polygon
              fill="#F05240"
              points="117.208,93.489 125.476,71.981 22.255,88.254 0,126.809 33.043,156.682 92.839,147.237 73.173,122.88 65.227,113.068 65.234,113.068 65.227,113.068 107.057,106.474 112.564,105.599"
            />
            <polygon
              fill="#F05240"
              points="145.872,144.086 145.872,144.086 143.74,149.614 113.604,112.386 111.774,112.661 78.028,117.985 105.653,152.161 105.633,152.161 143.706,199.287 188.253,199.287 197.577,155.74 159.509,108.622 152.086,127.922"
            />
            <polygon
              fill="#F05240"
              points="118.952,108.065 141.592,136.093 155.251,100.624 155.251,100.624 157.385,95.087 157.385,95.087 179.137,38.567 156.851,0 114.486,13.682 92.727,70.201 97.491,69.454 130.275,64.283 130.275,64.283 136.143,63.357"
            />
          </svg>
          <span className="text-xl tracking-tight">
            <span className="font-bold text-primary">eco</span>
            <span className="font-light text-text-muted">HOME</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-text-muted hover:text-primary-dark transition-colors duration-200 uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-warm-white border-b border-warm-gray shadow-lg lg:hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-text hover:text-primary-dark transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-6 py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

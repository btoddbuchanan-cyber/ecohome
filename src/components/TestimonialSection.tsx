"use client";

import { ScrollReveal } from "./ScrollReveal";

export function TestimonialSection() {
  return (
    <section className="py-32 bg-dark noise-overlay relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-forest/10 blur-3xl translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <ScrollReveal>
          <svg
            className="mx-auto mb-8 text-primary/40"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.84 1.648 1.26 2.748 1.26.963 0 1.763-.29 2.4-.878.63-.576.943-1.365.943-2.368l-.004.004z" />
          </svg>

          <blockquote>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              If you can build a house that costs next to nothing to operate for the same price as a
              traditional house, why would you build it any other way?
            </p>
          </blockquote>
          <cite className="mt-8 block text-warm-white/60 text-lg not-italic">
            <span className="text-warm-white font-medium">Mike Reynolds</span>
            <span className="mx-2">·</span>
            Co-Founder & Editor-in-Chief, Ecohome
          </cite>
        </ScrollReveal>
      </div>
    </section>
  );
}

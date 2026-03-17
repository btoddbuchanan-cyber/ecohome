"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark noise-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-earth/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            Contact
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-white max-w-3xl">
            Let&apos;s start your project
          </h1>
          <p className="mt-6 text-xl text-warm-white/70 max-w-2xl leading-relaxed">
            Have a question about green building? Need expert guidance for your project? We&apos;re
            here to help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-16">
            <ScrollReveal>
              {submitted ? (
                <div className="p-12 bg-forest/5 rounded-2xl border border-forest/20 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h2 className="font-display text-2xl text-dark mb-2">Message Sent</h2>
                  <p className="text-text-muted">
                    Thank you for reaching out. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a topic</option>
                      <option value="building">Building Project Question</option>
                      <option value="renovation">Renovation Guidance</option>
                      <option value="professional">Professional Directory</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-warm-gray bg-white text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl text-dark mb-3">Other Ways to Connect</h3>
                  <p className="text-text-muted leading-relaxed">
                    Browse our 600+ building guides for immediate answers, or join our expert Q&A
                    forum to ask specific questions.
                  </p>
                </div>
                <div className="p-6 bg-warm-gray rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">Expert Q&A Forum</h4>
                  <p className="text-sm text-text-muted mb-3">
                    Get answers from building science professionals and experienced builders.
                  </p>
                  <span className="text-sm font-medium text-primary-dark">Visit Forum →</span>
                </div>
                <div className="p-6 bg-warm-gray rounded-xl">
                  <h4 className="font-semibold text-dark mb-2">For Professionals</h4>
                  <p className="text-sm text-text-muted mb-3">
                    Interested in being listed in our professional directory or contributing
                    content?
                  </p>
                  <span className="text-sm font-medium text-primary-dark">Learn More →</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

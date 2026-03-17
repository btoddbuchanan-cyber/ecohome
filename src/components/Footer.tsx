import Link from "next/link";

const footerLinks = {
  "For Homeowners": [
    { href: "/guides", label: "Building Guides" },
    { href: "/blog", label: "Latest Articles" },
    { href: "/tools", label: "Free Tools" },
    { href: "/professionals", label: "Find Professionals" },
  ],
  Company: [
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
  ],
  Resources: [
    { href: "/guides", label: "Planning & Design" },
    { href: "/guides", label: "Foundations & Basements" },
    { href: "/guides", label: "Walls & Roofs" },
    { href: "/guides", label: "Mechanical Systems" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/ecohome.net" },
  { label: "YouTube", href: "https://youtube.com/ecohome" },
  { label: "Instagram", href: "https://instagram.com/ecohome.net" },
  { label: "LinkedIn", href: "https://linkedin.com/company/ecohome" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-warm-white" role="contentinfo">
      {/* CTA Band */}
      <div className="bg-primary noise-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Build Better?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get expert guidance for your sustainable home project. Free guides, professional
            connections, and the tools you need.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-primary-dark font-semibold rounded-lg hover:bg-warm-white transition-colors duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Ecohome home" className="inline-block mb-4">
              <svg
                viewBox="0 0 200 199.287"
                className="h-12 w-auto"
                aria-hidden="true"
              >
                <g>
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
                </g>
              </svg>
            </Link>
            <p className="text-warm-white/70 text-sm leading-relaxed mb-6">
              North America&apos;s trusted green building resource. Build Better, Renovate Better,
              Live Better&trade;
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-white/50 hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-warm-white/90 mb-4">
                {title}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-warm-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-warm-white/40">
            &copy; {new Date().getFullYear()} Raiiz Innovations Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-warm-white/40">
            <Link href="/privacy" className="hover:text-warm-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-warm-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

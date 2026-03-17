import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-warm-white">
      <div className="text-center px-6">
        <div className="font-display text-8xl md:text-9xl text-primary/20 mb-4">404</div>
        <h1 className="font-display text-4xl md:text-5xl text-dark mb-4">Page not found</h1>
        <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/guides"
            className="px-8 py-3.5 border-2 border-warm-gray text-text font-semibold rounded-lg hover:border-earth/30 hover:bg-warm-gray/50 transition-all"
          >
            Browse Guides
          </Link>
        </div>
      </div>
    </section>
  );
}

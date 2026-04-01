import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <p className="text-teal-500 font-semibold text-sm uppercase tracking-wider mb-4">
          404 — Page not found
        </p>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
          This page doesn't exist
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          The page you're looking for may have been moved or removed. Try one of the links below to get back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary px-8 py-3">
            Go Home
          </Link>
          <Link href="/affirmations" className="btn-secondary px-8 py-3">
            Browse Affirmations
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <Link href="/meditation" className="text-teal-600 hover:text-teal-700 font-medium">Meditation</Link>
          <Link href="/manifestation" className="text-teal-600 hover:text-teal-700 font-medium">Manifestation</Link>
          <Link href="/mindfulness" className="text-teal-600 hover:text-teal-700 font-medium">Mindfulness</Link>
          <Link href="/visualization" className="text-teal-600 hover:text-teal-700 font-medium">Visualization</Link>
          <Link href="/mindset" className="text-teal-600 hover:text-teal-700 font-medium">Mindset</Link>
          <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">Blog</Link>
        </div>
      </div>
    </section>
  );
}

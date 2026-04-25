import Link from 'next/link';

export default function SeoHub({ title, subtitle, description, baseUrl, items }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-600 to-cyan-500 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-100 font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-teal-50 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`${baseUrl}/${item.slug}`}
                className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-cream-200"
              >
                <h2 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-navy-600 text-sm leading-relaxed line-clamp-3">
                  {item.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-navy-600 mb-8">
            Download Selfpause and transform your mindset with personalized affirmations — free.
          </p>
          <a
            href="https://onelink.to/selfpause"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { getMantraPage, getAllMantraSlugs } from '../../../lib/mantras';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllMantraSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const page = getMantraPage(params.slug);
  if (!page) return {};

  return {
    title: `${page.title} | Selfpause`,
    description: page.metaDescription,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: 'article',
      siteName: 'Selfpause',
    },
  };
}

export default function MantraSubPage({ params }) {
  const page = getMantraPage(params.slug);
  if (!page) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream-100 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">
            {page.heroSubtitle}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            {page.title}
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            {page.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {page.sections.map((section, i) => (
            <div key={i} className={i > 0 ? 'mt-12' : ''}>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-navy-700 text-lg leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            {page.cta}
          </h2>
          <p className="text-navy-600 mb-8">
            Download Selfpause and start building a personalized mantra practice — free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-lg"
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-navy-800 font-semibold rounded-full border-2 border-navy-300 hover:border-navy-500 transition-colors"
            >
              Get it on Android
            </a>
          </div>
          <div className="mt-8">
            <Link href="/mantras" className="text-teal-600 hover:text-teal-700 font-medium">
              &larr; Browse all mantra guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

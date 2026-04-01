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
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/mantras/${params.slug}` },
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

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.metaDescription,
    author: { '@type': 'Person', name: 'Jaeden Schafer' },
    publisher: { '@type': 'Organization', name: 'Selfpause', url: 'https://selfpause.com' },
    mainEntityOfPage: `https://selfpause.com/mantras/${params.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://selfpause.com' },
      { '@type': 'ListItem', position: 2, name: 'Mantras', item: 'https://selfpause.com/mantras' },
      { '@type': 'ListItem', position: 3, name: page.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <ol className="flex items-center gap-2 text-sm text-gray-400">
          <li><Link href="/" className="hover:text-teal-500 transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/mantras" className="hover:text-teal-500 transition-colors">Mantras</Link></li>
          <li>/</li>
          <li className="text-gray-600 truncate max-w-[200px]">{page.title}</li>
        </ol>
      </nav>
      {/* Hero */}
      <section className="relative bg-cream-100 pt-6 pb-16 lg:pt-8 lg:pb-20">
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
            <div key={i}>
              {i > 0 && <div className="mt-12" />}
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-navy-700 text-lg leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
              {i === 2 && page.bannerAd && (
                <div className="my-12 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 p-8 text-center shadow-lg">
                  <p className="text-white text-lg font-medium leading-relaxed mb-5">{page.bannerAd}</p>
                  <a href="https://onelink.to/selfpause" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-cream-100 transition-colors shadow-md">Get Started Free</a>
                </div>
              )}
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
          <div className="flex items-center justify-center">
            <a
              href="https://onelink.to/selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-lg"
            >
              Get Started Free
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

import Link from 'next/link';
import { getAllLawOfAttractionSlugs, getLawOfAttractionPage } from '../../lib/law-of-attraction';

export const metadata = {
  title: 'Law of Attraction: History, Science & Practical Exercises | Selfpause',
  description: 'Explore the law of attraction — its history, the science behind it, practical manifestation exercises, and how gratitude and letting go play key roles. Evidence-based guides.',
};

const topics = getAllLawOfAttractionSlugs().map((slug) => {
  const page = getLawOfAttractionPage(slug);
  return { slug, title: page.title, description: page.metaDescription };
});

export default function LawOfAttractionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              The{' '}
              <span className="gradient-text">law of attraction</span>
              {' '}explained
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Separate fact from fiction. Explore the history, science, and practical exercises behind the law of attraction — and learn evidence-based manifestation techniques you can start using today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Manifesting
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                ),
                title: 'Fact vs. Fiction',
                desc: 'We separate the genuine psychological principles from the unfounded metaphysical claims. No hype, just evidence.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                ),
                title: 'Rich History',
                desc: 'From ancient Hermetic philosophy to "The Secret," trace how the law of attraction evolved across centuries and cultures.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                  </svg>
                ),
                title: 'Practical Exercises',
                desc: 'Vision boards, scripting, gratitude walks, and the 369 method — step-by-step practices you can use today.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Explore law of attraction topics
            </h2>
            <p className="text-lg text-gray-500">
              In-depth articles covering the science, history, key practices, and common questions about the law of attraction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/law-of-attraction/${topic.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {topic.description}
                </p>
                <span className="inline-block mt-4 text-teal-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding text-white overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="relative container-narrow mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Start your manifestation journey
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Guided manifestation sessions. Personal affirmations in your voice. AI coaching to keep you on track. All free to start.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-700 font-semibold rounded-full text-lg hover:bg-cream-100 transition-colors shadow-lg"
            >
              Download Free
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white/90 font-semibold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-colors"
            >
              Get it on Android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

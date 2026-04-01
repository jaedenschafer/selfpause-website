import Link from 'next/link';
import { getAllPositivitySlugs, getPositivityPage } from '../../lib/positivity';

export const metadata = {
  title: 'Positivity: Body Image, Mindset Tips & the Science of Optimism',
  description: 'Explore the science of positivity — from body positivity and practical mindset tips to the psychology of optimism. Research-backed guides to help you build a more positive life.',
  alternates: { canonical: '/positivity' },
};

const topics = getAllPositivitySlugs().map((slug) => {
  const page = getPositivityPage(slug);
  return { slug, title: page.title, description: page.metaDescription };
});

export default function PositivityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              The science of{' '}
              <span className="gradient-text">positivity</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Positivity is more than a feeling — it is a skill you can build. Explore the research behind body positivity, practical mindset strategies, and the real difference between positivity and optimism.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Building Positivity
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                ),
                title: 'Body Acceptance',
                desc: 'Learn evidence-based approaches to building a healthier, more compassionate relationship with your body.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                ),
                title: 'Practical Strategies',
                desc: 'Go beyond "think positive" with actionable tips from positive psychology research that actually work.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                ),
                title: 'Understand the Science',
                desc: 'Explore the real differences between positivity and optimism, and learn how each contributes to wellbeing.',
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
              Explore positivity topics
            </h2>
            <p className="text-lg text-gray-500">
              In-depth articles on body image, practical positivity strategies, and the psychology of an optimistic outlook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/positivity/${topic.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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
            Build a more positive mindset
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Guided positivity sessions. Personal affirmations in your voice. AI coaching. All free to start.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://onelink.to/selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-700 font-semibold rounded-full text-lg hover:bg-cream-100 transition-colors shadow-lg"
            >
              Download Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

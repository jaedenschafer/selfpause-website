import Link from 'next/link';
import { getAllVisualizationSlugs, getVisualizationPage } from '../../lib/visualization';

export const metadata = {
  title: 'Visualization Techniques & Guided Imagery | Selfpause',
  description: 'Explore the science of visualization — techniques, skills, and health benefits of guided imagery. Learn how mental imagery can transform your performance, health, and wellbeing.',
};

const topics = getAllVisualizationSlugs().map((slug) => {
  const page = getVisualizationPage(slug);
  return { slug, title: page.title, description: page.metaDescription };
});

export default function VisualizationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              The science of{' '}
              <span className="gradient-text">visualization</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover how mental imagery rewires your brain, improves performance, and supports physical healing. Explore research-backed visualization techniques you can practice today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Try Guided Visualization
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Visualization Works */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="4"/>
                    <line x1="21.17" y1="8" x2="12" y2="8"/>
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
                  </svg>
                ),
                title: 'See It in Your Mind',
                desc: 'Visualization activates the same neural pathways as real experience. Your brain literally cannot tell the difference.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                title: 'Measurable Health Benefits',
                desc: 'Clinical research shows guided imagery reduces pain, lowers blood pressure, and strengthens immune function.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                title: 'Peak Performance',
                desc: 'Elite athletes and surgeons use mental rehearsal to sharpen skills. You can use it for any goal.',
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
              Explore visualization topics
            </h2>
            <p className="text-lg text-gray-500">
              Deep-dive articles on visualization techniques, skills development, and the clinical science of guided imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/visualization/${topic.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
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
            Experience guided visualization
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Guided sessions. Ambient soundscapes. Personalized recordings in your own voice. All free to start.
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

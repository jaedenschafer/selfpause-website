import Link from 'next/link';
import { getAllManifestationSlugs, getManifestationPage } from '../../lib/manifestation';

export const metadata = {
  title: 'Manifestation Guide: Science, Spirituality & Practical Techniques | Selfpause',
  description: 'Explore the truth about manifestation — from scientific research and writing techniques to religious perspectives across Christianity, Islam, and more. Evidence-based guides for every question.',
};

const topics = getAllManifestationSlugs().map((slug) => {
  const page = getManifestationPage(slug);
  return { slug, title: page.title, description: page.metaDescription, subtitle: page.heroSubtitle };
});

export default function ManifestationHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              The complete guide to{' '}
              <span className="gradient-text">manifestation</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Is manifestation real? Is it spiritual? Can it backfire? Get honest, research-backed answers to the biggest questions about manifestation — plus practical techniques you can start using today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Try Selfpause Free
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Manifestation */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              What is manifestation?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              Manifestation is the practice of bringing something into your life through belief, intention, visualization, and action. Rooted in both ancient spiritual traditions and modern psychology, it combines the power of focused thought with practical effort to create meaningful change.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Whether you approach it through faith, science, or personal development, the core principle is the same: clarity about what you want, combined with consistent belief and action, increases your chances of achieving it.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Explore manifestation topics
            </h2>
            <p className="text-lg text-gray-500">
              In-depth, research-backed guides that answer the most common questions about manifestation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/manifestation/${topic.slug}`}
                className="card overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <p className="text-teal-600 font-semibold text-xs uppercase tracking-wider mb-2">
                    {topic.subtitle}
                  </p>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-teal-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Read guide
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Science + Spirituality */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                Manifestation meets modern science
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Manifestation is not just wishful thinking. Research in neuroplasticity, goal-setting psychology, and self-affirmation theory shows that focused intention combined with action produces real, measurable results.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Selfpause combines these evidence-based principles into one app — personalized affirmations in your own voice, AI coaching for goal clarity, and daily reminders that keep you consistent.
              </p>
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Your Practice
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80"
                  alt="Person meditating peacefully at sunrise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl -z-10"/>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding text-white overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="relative container-narrow mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Turn intention into reality
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Record personalized affirmations in your own voice, get AI coaching, and build a daily manifestation practice that actually works.
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

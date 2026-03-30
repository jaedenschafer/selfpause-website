import Link from 'next/link';
import { getAllMindfulnessSlugs, getMindfulnessPage } from '../../lib/mindfulness';

export const metadata = {
  title: 'Mindfulness Guide — Techniques, Research & Practices | Selfpause',
  description: 'Explore evidence-based mindfulness techniques, exercises, and practices. Learn from MBSR research, Jon Kabat-Zinn\'s methods, and clinical studies. Start your mindfulness journey today.',
};

const topics = getAllMindfulnessSlugs().map((slug) => {
  const page = getMindfulnessPage(slug);
  return { slug, title: page.title, description: page.metaDescription, subtitle: page.heroSubtitle };
});

export default function MindfulnessHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              The science of{' '}
              <span className="gradient-text">mindfulness</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore research-backed mindfulness techniques, understand what the clinical evidence actually says, and build a practice grounded in science — not hype.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Practicing Free
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Mindfulness */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                ),
                title: 'Present-Moment Awareness',
                desc: 'Train your attention to stay in the here and now, rather than dwelling on the past or worrying about the future.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                ),
                title: 'Non-Judgmental Observation',
                desc: 'Learn to observe your thoughts and emotions with curiosity and compassion, without labeling them good or bad.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                title: 'Clinically Validated',
                desc: 'Backed by thousands of peer-reviewed studies showing real benefits for anxiety, depression, stress, and focus.',
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
              Explore mindfulness topics
            </h2>
            <p className="text-lg text-gray-500">
              In-depth, research-backed guides on the mindfulness questions that matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/mindfulness/${topic.slug}`}
                className="card overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="p-6 bg-teal-50/50">
                  <p className="text-teal-600 font-semibold text-xs uppercase tracking-wider mb-2">
                    {topic.subtitle}
                  </p>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
                <div className="px-6 py-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <span className="text-teal-600 text-sm font-semibold group-hover:text-teal-700 transition-colors">
                    Read the full guide
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Science Highlight */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                Mindfulness changes your brain — literally
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Harvard researchers found that just 8 weeks of mindfulness practice increases gray matter in the hippocampus and reduces it in the amygdala — your brain's stress center. That means better memory, learning, and emotional regulation.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Jon Kabat-Zinn's MBSR program, developed at UMass Medical Center, has been validated in over 800 clinical studies. Selfpause brings these same evidence-based techniques to your phone.
              </p>
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Try Guided Mindfulness
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
                  alt="Person practicing mindfulness meditation outdoors"
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
            Start your mindfulness journey today
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Guided mindfulness sessions. Personalized affirmations. Your AI life coach. All free to start.
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

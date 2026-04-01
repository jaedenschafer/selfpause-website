import Link from 'next/link';

export const metadata = {
  title: 'Download Selfpause: Daily Affirmations & AI Life Coach App',
  description: 'Download Selfpause — the #1 affirmation app. Record affirmations in your own voice, listen to guided sessions, layer ambient sounds, and get personalized AI coaching. Free on iOS and Android.',
  alternates: { canonical: '/app' },
};

const features = [
  {
    title: 'Record Your Own Affirmations',
    description: 'Your brain responds most powerfully to your own voice. Record unlimited personalized affirmations and listen on repeat to rewire your subconscious mind faster than any pre-recorded track.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    title: 'Guided Affirmation Sessions',
    description: 'Choose from over 1,000 professionally crafted affirmation sessions across categories like confidence, anxiety, sleep, wealth, relationships, health, and self-love. New sessions added weekly.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
  },
  {
    title: 'Ambient Sounds & Music',
    description: 'Layer your affirmations with calming ambient soundscapes — rain, ocean waves, forest, white noise, and meditation music. Create the perfect atmosphere for deep subconscious programming.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    title: 'AI Life Coach',
    description: 'Get personalized guidance from your AI-powered life coach. Identify limiting beliefs, set meaningful goals, craft custom affirmations, and build a practice tailored to your unique journey.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
];

const stats = [
  { number: '500K+', label: 'Downloads' },
  { number: '4.8', label: 'App Store Rating' },
  { number: '1,000+', label: 'Guided Sessions' },
  { number: '50+', label: 'Categories' },
];

export default function AppPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                Your voice.{' '}
                <span className="gradient-text">Your affirmations.</span>{' '}
                Your transformation.
              </h1>
              <p className="text-xl text-gray-500 max-w-xl mb-8 leading-relaxed">
                Selfpause is the only affirmation app that lets you record in your own voice — the most powerful way to rewire your subconscious mind. Combine personal recordings with 1,000+ guided sessions, ambient sounds, and AI coaching.
              </p>
              <div className="flex items-start">
                <a
                  href="https://onelink.to/selfpause"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-10 py-4"
                >
                  Get Started Free
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-72 lg:w-80">
                <div className="aspect-[9/19] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-b from-teal-400 to-teal-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 opacity-80">
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                      <path d="M19 10v2a7 7 0 01-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                    <p className="text-lg font-display font-semibold">Selfpause</p>
                    <p className="text-sm text-white/70 mt-1">Daily Affirmations</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-teal-200/30 rounded-full blur-3xl -z-10"/>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl -z-10"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-display font-bold gradient-text">{stat.number}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Everything you need to transform your mindset
            </h2>
            <p className="text-lg text-gray-500">
              Selfpause combines the most effective tools for reprogramming your subconscious mind into one beautiful app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="card p-8">
                <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              How Selfpause works
            </h2>
            <p className="text-lg text-gray-500">
              Build a personalized affirmation practice in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: '1',
                title: 'Choose or Record',
                desc: 'Browse 1,000+ guided sessions across 50+ categories, or record your own custom affirmations in your voice.',
              },
              {
                step: '2',
                title: 'Personalize Your Experience',
                desc: 'Layer ambient sounds, set your preferred pace, and let the AI coach craft affirmations tailored to your goals.',
              },
              {
                step: '3',
                title: 'Listen Daily and Transform',
                desc: 'Set smart reminders and build a consistent practice. Neuroplasticity does the rest — your mindset shifts with every listen.',
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center mb-4 font-display font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80"
                  alt="Brain visualization representing neuroplasticity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl -z-10"/>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                Backed by neuroscience
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Self-affirmation activates the ventromedial prefrontal cortex — your brain&apos;s reward and valuation center. Research from Carnegie Mellon University shows that self-affirmation lowers cortisol and improves problem-solving under stress.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                When you hear affirmations in your own voice, self-referential processing networks activate more strongly than when you hear someone else&apos;s voice. This is the core principle behind Selfpause — your voice is the most powerful tool for rewiring your own mind.
              </p>
              <Link href="/affirmations" className="text-teal-600 hover:text-teal-700 font-medium">
                Explore the science of affirmations &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding text-white overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="relative container-narrow mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Download Selfpause for free
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Join hundreds of thousands of people who are transforming their mindset with the power of their own voice. Free to start, no credit card required.
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

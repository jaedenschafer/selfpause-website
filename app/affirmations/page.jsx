import Link from 'next/link';

export const metadata = {
  title: 'Affirmations',
  description: 'Explore thousands of guided affirmations across every category — confidence, anxiety, wealth, relationships, sleep, and more. Record your own or listen to professionally crafted sessions.',
  alternates: { canonical: '/affirmations' },
};

const categories = [
  {
    name: 'Confidence & Self-Worth',
    description: 'Build unshakeable self-belief and step into your power with affirmations designed to silence your inner critic.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    sample: [
      'I am worthy of love, success, and happiness.',
      'I trust myself to make the right decisions.',
      'I release the need for external validation.',
    ],
    color: 'bg-amber-50 text-amber-600',
    iconBg: 'bg-amber-100',
  },
  {
    name: 'Anxiety & Calm',
    description: 'Quiet racing thoughts and find your center with affirmations that activate your parasympathetic nervous system.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    sample: [
      'I am safe in this moment.',
      'I release what I cannot control.',
      'Peace flows through me with every breath.',
    ],
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    name: 'Wealth & Abundance',
    description: 'Reprogram your relationship with money and open yourself to financial abundance through a prosperity mindset.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    sample: [
      'I am a magnet for financial abundance.',
      'Money flows to me easily and frequently.',
      'I deserve to be financially free.',
    ],
    color: 'bg-green-50 text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    name: 'Relationships & Love',
    description: 'Attract healthy relationships and deepen existing connections with affirmations rooted in self-love and openness.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    sample: [
      'I am worthy of deep, authentic love.',
      'I attract relationships that nourish my soul.',
      'I communicate with honesty and compassion.',
    ],
    color: 'bg-pink-50 text-pink-600',
    iconBg: 'bg-pink-100',
  },
  {
    name: 'Health & Vitality',
    description: 'Support your physical wellbeing with affirmations that promote healing, energy, and a positive relationship with your body.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    sample: [
      'My body is strong, healthy, and full of energy.',
      'I nourish my body with love and good choices.',
      'Every cell in my body vibrates with health.',
    ],
    color: 'bg-red-50 text-red-600',
    iconBg: 'bg-red-100',
  },
  {
    name: 'Sleep & Relaxation',
    description: 'Drift into deep, restorative sleep with calming affirmations that quiet your mind and relax your body.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
    sample: [
      'I release today and welcome restful sleep.',
      'My mind is calm and my body is at peace.',
      'I deserve deep, uninterrupted rest tonight.',
    ],
    color: 'bg-indigo-50 text-indigo-600',
    iconBg: 'bg-indigo-100',
  },
];

export default function AffirmationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Affirmations for{' '}
              <span className="gradient-text">every part of your life</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore thousands of guided affirmations across every category. Listen to professional recordings or create your own in your voice — the most powerful way to rewire your mindset.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Listening Free
              </a>
              <Link href="/blog" className="btn-secondary text-lg px-10 py-4">
                Learn the Science
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                    <path d="M19 10v2a7 7 0 01-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                ),
                title: 'Record Your Own',
                desc: 'Your brain responds most strongly to your own voice. Record unlimited custom affirmations tailored to your goals.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0118 0v6"/>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
                  </svg>
                ),
                title: 'Listen Anywhere',
                desc: 'Stream guided affirmation sessions during your commute, workout, or right before sleep.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                ),
                title: 'Layer with Music',
                desc: 'Combine your affirmations with ambient nature sounds and meditation music for deeper impact.',
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

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Browse by category
            </h2>
            <p className="text-lg text-gray-500">
              From confidence to sleep, find the affirmations that match where you are in life right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="card overflow-hidden">
                <div className={`p-6 ${cat.color}`}>
                  <div className={`w-14 h-14 rounded-xl ${cat.iconBg} flex items-center justify-center mb-4`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Sample affirmations</p>
                  <ul className="space-y-2">
                    {cat.sample.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 mt-0.5 flex-shrink-0">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>&ldquo;{s}&rdquo;</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Record Your Own CTA */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                Your voice is the most powerful affirmation tool you have
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Neuroscience research shows that hearing affirmations in your own voice activates self-referential brain networks more strongly than hearing them from someone else. That's why Selfpause lets you record unlimited personalized affirmations.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Record once, then listen on repeat during your morning routine, workout, commute, or right before bed. Your brain will do the rest.
              </p>
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Record Your First Affirmation
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80"
                  alt="Person recording affirmations on their phone"
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
            Start your affirmation journey today
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            1,000+ guided affirmations. Unlimited personal recordings. Your AI life coach. All free to start.
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

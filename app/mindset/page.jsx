import Link from 'next/link';

export const metadata = {
  title: 'Mindset: The Science of How Your Thinking Shapes Your Life',
  description: 'Explore the science of mindset — growth vs. fixed mindset, Carol Dweck\'s research, and how your beliefs shape health, success, and mental wellbeing. Build a stronger mindset today.',
  alternates: { canonical: '/mindset' },
};

const guides = [
  {
    slug: 'how-your-mindset-affects-your-health',
    title: 'How Your Mindset Affects Your Health',
    description: 'Discover the science behind the mind-body connection — from Alia Crum\'s Stanford research to placebo effects and longevity studies.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: 'mindset-and-mental-health',
    title: 'Mindset and Mental Health',
    description: 'How growth mindset, cognitive reframing, and self-talk patterns affect anxiety, depression, and emotional resilience.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
];

const mindsetTypes = [
  {
    name: 'Growth Mindset',
    description: 'The belief that abilities and intelligence can be developed through effort, learning, and persistence. People with a growth mindset embrace challenges, learn from criticism, and find inspiration in others\' success.',
    color: 'bg-green-50 text-green-600',
    iconBg: 'bg-green-100',
    traits: ['Embraces challenges', 'Persists through setbacks', 'Sees effort as the path to mastery'],
  },
  {
    name: 'Fixed Mindset',
    description: 'The belief that intelligence, talent, and personality are static traits you are born with. People with a fixed mindset avoid challenges, give up easily, and feel threatened by others\' success.',
    color: 'bg-red-50 text-red-600',
    iconBg: 'bg-red-100',
    traits: ['Avoids challenges', 'Gives up when frustrated', 'Ignores useful feedback'],
  },
];

export default function MindsetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Your mindset shapes{' '}
              <span className="gradient-text">everything</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Pioneering research by Carol Dweck at Stanford University has shown that the beliefs you hold about your own abilities — your mindset — profoundly affect your learning, resilience, health, and success. The best part: your mindset is not fixed. It can be deliberately reshaped through awareness and practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Build a Stronger Mindset
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              The science of mindset
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Decades of research reveal three key mechanisms through which mindset shapes outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                ),
                title: 'Neuroplasticity',
                desc: 'Your brain physically changes based on what you believe and practice. Growth mindset beliefs strengthen neural pathways associated with learning, problem-solving, and emotional regulation.',
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
                title: 'Stress Response',
                desc: 'Your interpretation of stress changes your hormonal response. A growth-oriented stress mindset produces cardiovascular profiles associated with courage rather than fear.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'Self-Fulfilling Prophecy',
                desc: 'What you believe about yourself becomes true through behavior. If you believe you can improve, you practice more, seek feedback, and ultimately perform better.',
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

      {/* Growth vs Fixed */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Growth vs. fixed mindset
            </h2>
            <p className="text-lg text-gray-500">
              Carol Dweck&apos;s research identifies two core belief systems that shape how you respond to every challenge in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mindsetTypes.map((type) => (
              <div key={type.name} className="card overflow-hidden">
                <div className={`p-6 ${type.color}`}>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.traits.map((trait, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 mt-0.5 flex-shrink-0">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              In-depth mindset guides
            </h2>
            <p className="text-lg text-gray-500">
              Explore the research connecting mindset to health, mental wellbeing, and peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/mindset/${guide.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{guide.description}</p>
                <span className="inline-block mt-4 text-teal-600 font-medium text-sm">
                  Read guide &rarr;
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
            Rewire your mindset starting today
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Record growth mindset affirmations in your own voice. Build daily habits backed by science. Transform how you think, feel, and perform.
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

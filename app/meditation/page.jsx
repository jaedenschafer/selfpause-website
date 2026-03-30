import Link from 'next/link';
import { getAllMeditationSlugs, getMeditationPage } from '../../lib/meditation';

export const metadata = {
  title: 'Meditation Guides & Resources | Selfpause',
  description: 'Explore expert meditation guides covering techniques, equipment, anxiety relief, retreats, sleep, and more. Evidence-based resources to deepen your meditation practice.',
};

const guides = [
  {
    slug: 'how-to-meditate',
    title: 'How to Meditate: A Complete Beginner\'s Guide',
    description: 'Learn the fundamentals of meditation with step-by-step instructions, different techniques, and tips for building a consistent practice.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600',
    iconBg: 'bg-teal-100',
    isStatic: true,
  },
  {
    slug: 'how-can-meditation-help-anxiety-and-panic-attacks',
    title: 'How Can Meditation Help Anxiety and Panic Attacks?',
    description: 'Explore the neuroscience of anxiety, specific meditation techniques for panic, and evidence-based strategies for calming your nervous system.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/>
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    slug: 'are-meditation-and-mindfulness-the-same-thing',
    title: 'Are Meditation and Mindfulness the Same Thing?',
    description: 'Understand the difference between meditation and mindfulness, what the research says, and how to use both for better mental health.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    ),
    color: 'bg-purple-50 text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    slug: 'are-meditation-and-yoga-the-same',
    title: 'Are Meditation and Yoga the Same?',
    description: 'Learn how meditation and yoga differ in history, technique, and benefits — and why combining them creates a powerful wellness routine.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    color: 'bg-amber-50 text-amber-600',
    iconBg: 'bg-amber-100',
  },
  {
    slug: 'does-meditation-replace-sleep',
    title: 'Does Meditation Replace Sleep?',
    description: 'What neuroscience actually says about meditation and sleep, whether meditation can compensate for lost rest, and how to use both for optimal health.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
    color: 'bg-indigo-50 text-indigo-600',
    iconBg: 'bg-indigo-100',
  },
  {
    slug: 'are-meditation-retreats-worth-it',
    title: 'Are Meditation Retreats Worth It?',
    description: 'What to expect at a meditation retreat, what research says about intensive practice, costs, and how to decide if a retreat is right for you.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: 'bg-green-50 text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    slug: 'are-meditation-cushions-worth-it',
    title: 'Are Meditation Cushions Worth It?',
    description: 'A practical guide to meditation seating — how posture affects your practice, what a cushion does, alternatives, and whether the investment is worth it.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="6" rx="3"/>
        <path d="M12 11V5"/>
        <circle cx="12" cy="4" r="1"/>
      </svg>
    ),
    color: 'bg-pink-50 text-pink-600',
    iconBg: 'bg-pink-100',
  },
];

export default function MeditationHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Meditation Guides{' '}
              <span className="gradient-text">& Resources</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Evidence-based meditation guides written to help you start, deepen, and sustain your practice. From beginner basics to advanced topics like retreats and anxiety management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Meditating Free
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Browse Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Meditate */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                title: 'Reduce Stress & Anxiety',
                desc: 'Meditation activates your parasympathetic nervous system, lowering cortisol and calming the mind within minutes.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: 'Sharpen Focus',
                desc: 'Regular practice increases gray matter in attention-related brain regions, improving concentration and mental clarity.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                ),
                title: 'Improve Emotional Health',
                desc: 'Meditation strengthens emotional regulation, builds resilience, and helps you respond to life with greater equanimity.',
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

      {/* Guide Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Explore meditation topics
            </h2>
            <p className="text-lg text-gray-500">
              In-depth, research-backed guides to help you understand and get the most from your meditation practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.isStatic ? `/meditation/${guide.slug}` : `/meditation/${guide.slug}`}
                className="card overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className={`p-6 ${guide.color}`}>
                  <div className={`w-14 h-14 rounded-xl ${guide.iconBg} flex items-center justify-center mb-4`}>
                    {guide.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
                </div>
                <div className="px-6 py-4 bg-white flex items-center justify-between">
                  <span className="text-sm font-medium text-teal-600">Read guide</span>
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

      {/* Selfpause CTA */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                Meditation meets affirmations in one powerful app
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Selfpause combines guided meditation sessions, ambient soundscapes, and personalized affirmations you record in your own voice. Research shows that meditation followed by affirmations amplifies the impact of both practices.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Whether you are a complete beginner or an experienced meditator, Selfpause provides the tools to build a practice that fits your life and goals.
              </p>
              <a
                href="https://onelink.to/selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Try Selfpause Free
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
                  alt="Person meditating peacefully outdoors"
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
            Start your meditation journey today
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Guided meditations. Ambient soundscapes. Personalized affirmations. Your AI life coach. All free to start.
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

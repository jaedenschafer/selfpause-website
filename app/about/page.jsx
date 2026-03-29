import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Selfpause was built to make affirmations personal, powerful, and backed by science. Learn about our mission and the team behind the app.',
};

const values = [
  {
    title: 'Science First',
    description: 'Every feature we build is grounded in peer-reviewed research on neuroplasticity, cognitive behavioral science, and positive psychology.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
    ),
  },
  {
    title: 'Personal Over Generic',
    description: 'We believe the most powerful affirmations come from you. That\'s why we built tools for recording, customizing, and personalizing every aspect of your practice.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Accessible to Everyone',
    description: 'Mental wellness shouldn\'t be a luxury. Selfpause offers a generous free tier because we believe everyone deserves tools to build a stronger mindset.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    title: 'Privacy as a Right',
    description: 'Your affirmations and coaching conversations are deeply personal. We never sell your data, and your recordings stay on your device unless you choose to sync them.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
];

const milestones = [
  { year: '2020', text: 'Selfpause launches on the App Store with 50 guided affirmation sessions.' },
  { year: '2021', text: 'Record-your-own-affirmations feature ships. User base crosses 10,000.' },
  { year: '2022', text: 'Ambient sounds library and meditation music added. Available in 5 languages.' },
  { year: '2023', text: '50,000 users. Android version launches on Google Play.' },
  { year: '2024', text: 'AI Life Coach feature launches. Selfpause surpasses 100,000 downloads.' },
  { year: '2025', text: '1,000+ guided affirmations across 20+ categories. Rated 4.8 on the App Store.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              We believe your{' '}
              <span className="gradient-text">own voice</span>{' '}
              is the most powerful tool for change
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Selfpause was built on a simple idea: generic affirmations don't work nearly as well as personalized ones recorded in your own voice. We set out to build the app that finally makes affirmations stick.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  alt="The Selfpause team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl -z-10"/>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Selfpause started in 2020 when our founder, Jaeden Schafer, noticed something frustrating about every affirmation app on the market — they were all one-size-fits-all. The same generic phrases, the same stranger's voice, the same cookie-cutter approach to something as deeply personal as self-talk.
                </p>
                <p>
                  The research was clear: affirmations work best when they're personal and spoken in your own voice. But no app made that easy. So Jaeden built one.
                </p>
                <p>
                  What started as a simple recording tool has grown into a complete mental wellness platform — with thousands of guided sessions, an AI life coach, ambient soundscapes, and a community of over 100,000 people who've made affirmations a daily habit.
                </p>
                <p>
                  We're still a small, passionate team. And we still believe the same thing we believed on day one: the voice that matters most is yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              What we stand for
            </h2>
            <p className="text-lg text-gray-500">
              These principles guide every decision we make — from which features to build to how we treat your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 p-8 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Our journey
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-teal-100 hidden md:block"/>

            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center flex-shrink-0 font-display font-bold text-sm relative z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-semibold text-teal-500">{m.year}</span>
                    <p className="text-gray-600 mt-1">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-white relative overflow-hidden">
        <div className="absolute inset-0 brand-gradient -z-10"/>
        <div className="relative container-narrow mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Join 100,000+ people building a better mindset
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Download Selfpause and start your journey today. Free to use. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-600 font-semibold rounded-full text-lg hover:bg-cream-100 transition-colors shadow-lg"
            >
              Download Free
            </a>
            <Link href="/blog" className="inline-flex items-center justify-center px-10 py-4 text-white/90 font-semibold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-colors">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

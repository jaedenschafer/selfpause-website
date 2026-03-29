import Link from 'next/link';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    title: 'Record Your Own Affirmations',
    description: 'Create unlimited personalized affirmations in your own voice. Hearing yourself speak positive words is one of the most powerful ways to rewire your mindset.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    title: 'Guided Affirmation Sessions',
    description: 'Listen to thousands of professionally recorded affirmations across every category — confidence, wealth, health, relationships, and more. Switch between voices and accents.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
      </svg>
    ),
    title: 'AI Life Coach',
    description: 'Problem-solve, set goals, and overcome limiting beliefs with an AI life coach that harnesses the power of affirmations and meditation. Available 24/7, completely private.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
    title: 'Ambient Sounds & Music',
    description: 'Layer your affirmations with a full library of HD nature sounds and meditation music. Create the perfect atmosphere for deep relaxation and focused intention.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
    title: 'Smart Daily Reminders',
    description: 'Receive uplifting affirmation notifications designed to arrive at the right moment — carefully crafted to encourage positive thinking throughout your day.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Available in 5 Languages',
    description: 'Access affirmations and features in English, Spanish, French, German, and Portuguese. Transform your mindset in the language that speaks to your heart.',
  },
];

const testimonials = [
  {
    text: "Selfpause changed my morning routine completely. Recording my own affirmations and hearing them back hits different than any pre-recorded app.",
    name: "Sarah M.",
    role: "Teacher",
    rating: 5,
  },
  {
    text: "The AI coach helped me work through some serious imposter syndrome. Having something available at 3am when my anxiety peaks is invaluable.",
    name: "James K.",
    role: "Software Engineer",
    rating: 5,
  },
  {
    text: "I've tried every affirmation app out there. Selfpause is the only one where I actually stuck with it. The ambient sounds make it feel like a real meditation.",
    name: "Priya L.",
    role: "Yoga Instructor",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Rated 4.8 on the App Store
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              Your mind deserves{' '}
              <span className="gradient-text">a daily reset</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Selfpause is your AI life coach in your pocket. Record personalized affirmations, meditate with ambient sounds, and transform your mindset — anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.app.selfpause"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-10 py-4"
              >
                Get it on Android
              </a>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-3xl mx-auto">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
                  alt="Person meditating peacefully at sunrise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-200/30 rounded-full blur-3xl -z-10"/>
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-calm-200/30 rounded-full blur-3xl -z-10"/>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-gray-900">100K+</div>
              <div className="text-sm text-gray-500 mt-1">Downloads</div>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden lg:block"/>
            <div>
              <div className="text-3xl font-display font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-500 mt-1">App Store Rating</div>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden lg:block"/>
            <div>
              <div className="text-3xl font-display font-bold text-gray-900">1,000+</div>
              <div className="text-sm text-gray-500 mt-1">Guided Affirmations</div>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden lg:block"/>
            <div>
              <div className="text-3xl font-display font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-500 mt-1">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Everything you need for a{' '}
              <span className="gradient-text">better mindset</span>
            </h2>
            <p className="text-lg text-gray-500">
              Selfpause combines AI coaching, personalized affirmations, and meditation into one powerful app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-gray-100 border border-transparent hover:border-gray-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Three steps to a calmer you
            </h2>
            <p className="text-lg text-gray-500">
              Getting started with Selfpause takes less than a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: '01', title: 'Download the app', desc: 'Available free on iOS and Android. Create your account in seconds.' },
              { step: '02', title: 'Take the mindset quiz', desc: 'Answer a few questions so we can personalize your affirmation experience.' },
              { step: '03', title: 'Start your practice', desc: 'Listen to guided sessions, record your own affirmations, and chat with your AI coach.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm text-brand-600 font-display font-bold text-xl mb-5">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Loved by thousands
            </h2>
            <p className="text-lg text-gray-500">
              Real people, real transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-600 via-brand-700 to-calm-700 text-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to transform your mindset?
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Join over 100,000 people who start their day with Selfpause. Free to download. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-700 font-semibold rounded-full text-lg hover:bg-gray-50 transition-colors shadow-lg"
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

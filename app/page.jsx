import Link from 'next/link';

const features = [
  {
    title: 'AI Life Coach Chat',
    description: 'An AI life coach in your pocket, anonymous, secure and available 24/7.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    title: 'Self-Recorded Affirmations',
    description: 'Record unlimited personalized affirmations that are backed up to the cloud.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    title: 'Guided Affirmations',
    description: "Listen to 1,000's of affirmations in our guided affirmation sessions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
  },
  {
    title: 'Ambient Sounds & Music',
    description: 'Get the full library of ambient sounds and music to layer with your affirmations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
];

const sessions = [
  { title: 'Millionaire Mindset', image: 'https://images.unsplash.com/photo-1553729459-uj4a56c6dc0b?w=400&q=80' },
  { title: 'Manifesting Success', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
  { title: 'Athletic Mindset', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&q=80' },
  { title: "Children's Confidence", image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80' },
];

const steps = [
  {
    title: 'Write',
    description: 'Create and write your own personal affirmations',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    title: 'Record',
    description: 'Record your affirmations in your own voice',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    title: 'Layer',
    description: 'Layer ambient sounds and music in the background',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: 'Visualize',
    description: 'Listen to and visualize your affirmations in action',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO — AI Life Coach
          ============================================================ */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-hero-nature" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-cream-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Empower Yourself with an{' '}
                <span className="brand-gradient-text">AI Life Coach</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Problem-solve, set goals and overcome limiting beliefs with an AI Life Coach that harnesses the power of affirmations and meditation.
              </p>
              <a
                href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start your affirmation journey
              </a>
            </div>

            {/* Right — Phone */}
            <div className="flex justify-center">
              <img
                src="/images/selfpause-phone.png"
                alt="Selfpause app showing morning affirmations, ambient sounds, and meditation music"
                className="w-72 lg:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURES — 4 cards
          ============================================================ */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-2xl hover:bg-cream-100 transition-colors">
                <div className="w-14 h-14 rounded-xl brand-gradient text-white flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {f.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SESSIONS — Browse affirmation categories
          ============================================================ */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Listen to new affirmation sessions for every area of your life
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((s) => (
              <div key={s.title} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md mb-4">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-center font-semibold text-navy-800 group-hover:text-teal-500 transition-colors">
                  {s.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          TROY POLAMALU TESTIMONIAL
          ============================================================ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-ocean" />
        <div className="absolute inset-0 bg-navy-900/60" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Troy image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/images/troy-removebg.png"
                  alt="Troy Polamalu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="text-center lg:text-left">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" opacity="0.3" className="mb-4 mx-auto lg:mx-0">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                I&apos;m so glad I discovered Selfpause. I&apos;m always working to help athletes elevate their game&hellip; these affirmations help.
              </blockquote>
              <div>
                <div className="text-white font-bold text-lg">Troy Polamalu</div>
                <div className="text-white/60">2020 Pro Football Hall of Fame</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — Write, Record, Layer, Visualize
          ============================================================ */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Create and record your own personalized affirmations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl brand-gradient text-white flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {step.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SOCIAL PROOF — Rating + "Hear how Selfpause is changing lives"
          ============================================================ */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          {/* Star rating */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, j) => (
              <svg key={j} width="28" height="28" viewBox="0 0 24 24" fill="#f59e0b">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p className="text-navy-500 font-medium mb-10">Rated 5 out of 5</p>

          <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Hear how Selfpause is changing lives
          </h2>
          <p className="text-lg text-navy-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Join over 100,000 people who are building confidence, reducing anxiety, and transforming their mindset with Selfpause.
          </p>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA — Unlock Premium
          ============================================================ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Unlock Selfpause Premium
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Get unlimited access to AI coaching, all guided sessions, self-recording tools, and the full ambient sound library.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-600 font-semibold rounded-full text-lg hover:bg-cream-100 transition-colors shadow-lg"
            >
              Get Started Free
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white/90 font-semibold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-colors"
            >
              Get it on Android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

const categories = [
  { label: 'Build confidence', href: '/affirmations' },
  { label: 'Reduce stress or anxiety', href: '/affirmations' },
  { label: 'Better sleep', href: '/affirmations' },
  { label: 'Record your own affirmations', href: '/affirmations' },
  { label: 'Something else', href: '/affirmations' },
];

const appScreens = [
  {
    title: 'Record',
    description: 'Create personalized affirmations in your own voice',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80',
    bg: 'bg-navy-900',
    textColor: 'text-white',
  },
  {
    title: 'Listen',
    description: 'Browse thousands of guided affirmation sessions',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
    bg: 'bg-white',
    textColor: 'text-navy-900',
  },
  {
    title: 'Meditate',
    description: 'Layer with ambient sounds and meditation music',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bg: 'bg-navy-900',
    textColor: 'text-white',
  },
];

const features = [
  {
    title: 'AI Life Coach',
    description: 'Problem-solve, set goals, and overcome limiting beliefs with an AI coach available 24/7.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  },
  {
    title: 'Guided Affirmations',
    description: 'Over 1,000 professionally recorded affirmation sessions across every category.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  },
  {
    title: 'Ambient Sounds',
    description: 'Full library of HD nature sounds and meditation music for deep relaxation.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80',
  },
  {
    title: 'Smart Reminders',
    description: 'Uplifting notifications designed to arrive at the right moment throughout your day.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
  },
  {
    title: 'Mindset Quiz',
    description: 'Personalized affirmation recommendations based on your goals and mindset profile.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&q=80',
  },
  {
    title: '5 Languages',
    description: 'Access affirmations in English, Spanish, French, German, and Portuguese.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
  },
];

const testimonials = [
  {
    text: "Selfpause changed my morning routine completely. Recording my own affirmations and hearing them back hits different than any pre-recorded app.",
    name: "Sarah M.",
    role: "Teacher",
  },
  {
    text: "The AI coach helped me work through serious imposter syndrome. Having something available at 3am when my anxiety peaks is invaluable.",
    name: "James K.",
    role: "Software Engineer",
  },
  {
    text: "I've tried every affirmation app out there. Selfpause is the only one where I actually stuck with it. The ambient sounds make it feel like real meditation.",
    name: "Priya L.",
    role: "Yoga Instructor",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO SECTION — Nature background with glassmorphism card
          ============================================================ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Nature background */}
        <div className="absolute inset-0 bg-hero-nature" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-cream-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20 lg:pb-32">
          {/* Glass card */}
          <div className="glass-card rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Phone mockup */}
              <div className="flex justify-center">
                <div className="relative w-64 h-[520px] rounded-[2.5rem] bg-navy-900 shadow-2xl overflow-hidden border-4 border-navy-700">
                  {/* Phone screen */}
                  <div className="absolute inset-2 rounded-[2rem] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1500534623283-312aade9b3b9?w=400&q=80"
                      alt="Selfpause app - sunrise meditation"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay content on phone */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center">
                      <div className="text-5xl font-light tracking-wider">12:30</div>
                    </div>
                    <div className="absolute bottom-8 left-6 right-6 text-white">
                      <p className="text-sm font-medium">Morning Affirmations</p>
                      <p className="text-xs text-white/60">Your Voice</p>
                      {/* Progress bar */}
                      <div className="mt-3 h-0.5 bg-white/20 rounded-full">
                        <div className="h-full w-1/3 bg-teal-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category selection */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  How can we help?
                </h1>

                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      className="category-card group"
                    >
                      <span className="text-lg font-medium text-navy-800 group-hover:text-navy-900">
                        {cat.label}
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-navy-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          AFFIRMATIONS SECTION — 3 phone mockups
          ============================================================ */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Affirmations
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Record personalized affirmations in your own voice, listen to over 1,000 guided sessions,
              and meditate with ambient sounds — all in one app built for your mindset.
            </p>
          </div>

          {/* 3 Phone mockups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {appScreens.map((screen) => (
              <div key={screen.title} className="flex flex-col items-center">
                <div className={`relative w-56 h-[440px] rounded-[2.5rem] ${screen.bg} shadow-xl overflow-hidden border-4 ${screen.bg === 'bg-white' ? 'border-cream-300' : 'border-navy-700'}`}>
                  <div className="absolute inset-2 rounded-[2rem] overflow-hidden">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-2/3 object-cover"
                    />
                    <div className={`p-4 ${screen.bg === 'bg-white' ? 'bg-white' : 'bg-navy-900'}`}>
                      <h3 className={`text-lg font-bold mb-1 ${screen.textColor}`}>
                        {screen.title}
                      </h3>
                      <p className={`text-sm ${screen.bg === 'bg-white' ? 'text-navy-400' : 'text-white/60'}`}>
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURES GRID — Card-based feature showcase
          ============================================================ */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Everything you need
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Selfpause combines AI coaching, personalized affirmations, and meditation into
              one powerful app designed to transform your daily mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ENGAGEMENT SECTION — Ocean background with stats
          ============================================================ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-ocean" />
        <div className="absolute inset-0 bg-navy-900/40" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            An app you&apos;ll use again and again
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16 leading-relaxed">
            Wellness means different things to different people. With a focus on personalization
            and choice, Selfpause helps you build a practice that actually sticks.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '100K+', label: 'Downloads' },
              { stat: '4.8', label: 'App Store Rating' },
              { stat: '1,000+', label: 'Guided Sessions' },
              { stat: '5', label: 'Languages' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-6">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {item.stat}
                </div>
                <div className="text-sm text-white/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Loved by thousands
            </h2>
            <p className="text-lg text-navy-500">
              Real people, real transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-navy-600 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-navy-900">{t.name}</div>
                  <div className="text-sm text-navy-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Join 100,000+ people today to improve your mindset
          </h2>
          <p className="text-lg text-navy-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Build out your own, personalized and effective affirmation practice
            right here on Selfpause today. For free.
          </p>
          <a
            href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-12 py-4"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

const voices = [
  { name: 'Ella', label: 'Calm & Gentle', image: '/images/voice-ella.webp', sample: '/audio/voice-ella.mp3' },
  { name: 'Troy', label: 'Warm & Confident', image: '/images/voice-troy.webp', sample: '/audio/voice-troy.mp3' },
  { name: 'Leo', label: 'Energetic & Bold', image: '/images/voice-leo.webp', sample: '/audio/voice-leo.mp3' },
  { name: 'Olivia', label: 'Soft & Soothing', image: '/images/voice-olivia.webp', sample: '/audio/voice-olivia.mp3' },
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
    image: '/images/app-create-affirmation.webp',
  },
  {
    title: 'Record',
    description: 'Record your affirmations in your own voice',
    image: '/images/app-recordings-play.webp',
  },
  {
    title: 'Layer',
    description: 'Layer ambient sounds and music in the background',
    image: '/images/app-audio-settings.webp',
  },
  {
    title: 'Visualize',
    description: 'Listen to and visualize your affirmations in action',
    image: '/images/app-my-affirmations.webp',
  },
];

export default function HomePage() {
  return (
    <>
      {/* =============================================================
          HERO — Record & Listen to Personal Affirmations
          ============================================================= */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-hero-nature" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-cream-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-300 mb-4">The #1 Affirmation Recording App</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Record Your Own{' '}
                <span className="brand-gradient-text">Affirmations</span>{' '}
                &amp; Listen Daily
              </h1>
              <p className="text-lg lg:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Write personalized affirmations, record them in your own voice, layer calming ambient sounds &amp; music, then listen on repeat to rewire your mindset.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-10 py-4"
                >
                  Start Recording Free
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.selfpause"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  Also on Android &rarr;
                </a>
              </div>
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

      {/* =============================================================
          HOW IT WORKS — Write, Record, Layer, Visualize
          ============================================================= */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Create and record your own personalized affirmations
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              In just minutes, write what matters to you, record it in your voice, add a custom soundtrack, and start listening.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center group">
                <div className="relative mb-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow">
                    <img
                      src={step.image}
                      alt={`Selfpause app - ${step.title}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full brand-gradient text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-navy-900 mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
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

      {/* =============================================================
          WHY YOUR OWN VOICE — Science-backed
          ============================================================= */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">Why It Works</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Your voice is the most powerful voice you hear
              </h2>
              <p className="text-lg text-navy-500 leading-relaxed mb-6">
                Research shows that hearing affirmations in your own voice creates a deeper neural connection than listening to someone else. Your brain trusts your own voice more — making self-recorded affirmations significantly more effective at building new belief patterns.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full brand-gradient flex-shrink-0 mt-1 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-navy-600">Unlimited personal affirmation recordings backed up to the cloud</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full brand-gradient flex-shrink-0 mt-1 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-navy-600">Layer ambient sounds, music, and brainwave frequencies behind your voice</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full brand-gradient flex-shrink-0 mt-1 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-navy-600">Loop your affirmations and listen while you sleep, commute, or meditate</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/app-recordings-play.webp"
                alt="Selfpause affirmation playback with ambient sounds"
                className="w-64 lg:w-80 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          VOICE SAMPLES — Listen to our guided voices
          ============================================================= */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">Guided Voices</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Or listen to our guided affirmation voices
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Not ready to record your own? Choose from our library of guided affirmation sessions read by professional voices.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {voices.map((v) => (
              <div key={v.name} className="text-center group">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-400 shadow-lg group-hover:border-teal-500 transition-colors">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {v.name}
                </h3>
                <p className="text-navy-400 text-sm mb-3">{v.label}</p>
                {/* Audio player — wired up for MP3 samples */}
                <div className="flex items-center justify-center">
                  <audio controls preload="none" className="w-full max-w-[180px] h-8" style={{ filter: 'sepia(20%) saturate(70%) grayscale(0) brightness(100%)' }}>
                    <source src={v.sample} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          CUSTOM BACKGROUNDS — Sounds & Music
          ============================================================= */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="/images/app-audio-settings.webp"
                alt="Selfpause audio settings with ambient sounds, brainwaves, and music"
                className="w-64 lg:w-80 rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">Custom Backgrounds</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Layer your perfect soundtrack
              </h2>
              <p className="text-lg text-navy-500 leading-relaxed mb-6">
                Customize every listening session with the perfect background. Mix and match ambient sounds, meditation music, and brainwave frequencies — all adjustable to your preference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">🌊</div>
                  <h4 className="font-semibold text-navy-800 text-sm">Ocean Waves</h4>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">🔥</div>
                  <h4 className="font-semibold text-navy-800 text-sm">Fireplace</h4>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">🧠</div>
                  <h4 className="font-semibold text-navy-800 text-sm">Brainwaves</h4>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-2">🎵</div>
                  <h4 className="font-semibold text-navy-800 text-sm">Meditation Music</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          SESSIONS — Browse guided affirmation categories
          ============================================================= */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">Guided Sessions</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Explore 1,000+ guided affirmation sessions
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Not sure where to start? Browse sessions for every area of your life.
            </p>
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
              Browse All Sessions
            </a>
          </div>
        </div>
      </section>

      {/* =============================================================
          TROY POLAMALU TESTIMONIAL
          ============================================================= */}
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

      {/* =============================================================
          SOCIAL PROOF — Rating
          ============================================================= */}
      <section className="section-padding bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
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

      {/* =============================================================
          FINAL CTA — Start Recording
          ============================================================= */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 brand-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Start recording your affirmations today
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Write it, record it in your voice, add your favorite background sounds, and listen on repeat. Your transformation starts now.
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

import Link from 'next/link';

const voices = [
  { name: 'Ella', label: 'Calm & Gentle', image: '/images/voice-ella.webp' },
  { name: 'Troy', label: 'Warm & Confident', image: '/images/voice-troy.webp' },
  { name: 'Leo', label: 'Energetic & Bold', image: '/images/voice-leo.webp' },
  { name: 'Olivia', label: 'Soft & Soothing', image: '/images/voice-olivia.webp' },
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
      {/* ============================================================
          HERO — Record & Listen to Personal Affirmations
          ============================================================ */}
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
                  className="inline-flex items-center justify-center px-10 py-4 text-white font-semibold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-colors"
                >
                  Get it on Android
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

      {/* ============================================================
          HOW IT WORKS — Write, Record, Layer, Visualize
          ============================================================ */}
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

      {/* ============================================================
          WHY YOUR OWN VOICE — Science-backed
          ============================================================ */}
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

      {/* ============================================================
          VOICE SAMPLES — Listen to our guided voices
          ============================================================ */}
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
                <p className="text-navy-400 text-sm">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CUSTOM BACKGROUNDS — Sounds & Music
          ============================================================ */}
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

      {/* ============================================================
          SESSIONS — Browse guided affirmation categories
          ============================================================ */}
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
              Start Recording Free
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
          SOCIAL PROOF — Testimonials & Community
          ============================================================ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Teal gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a5e6b 0%, #0088A8 40%, #00C9B7 100%)' }} />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Badge + Heading */}
          <div className="text-center mb-16">
            {/* Voted Best Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-white font-semibold text-sm tracking-wide uppercase">Voted Best Affirmation App</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Loved by 150,000+ people worldwide
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Real reviews from real people whose lives have been transformed through the power of personal affirmations.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 max-w-2xl mx-auto mb-16 gap-4">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">4.6</div>
              <div className="flex items-center justify-center gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? '#fbbf24' : 'none'} stroke={i < 4 ? 'none' : '#fbbf24'} strokeWidth={i < 4 ? 0 : 2}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div className="text-white/60 text-sm">App Store Rating</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">150K+</div>
              <div className="text-white/60 text-sm mt-3">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">84%</div>
              <div className="text-white/60 text-sm mt-3">5-Star Reviews</div>
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {/* Review 1 — Aubmaej */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">&ldquo;HANDS DOWN the Best Affirmation App&rdquo;</h3>
              <p className="text-white/75 leading-relaxed text-sm mb-5">
                Using this app has become such a crucial part of my routine. The app itself is beautifully designed and makes it easy for me to select affirmations based on what I&apos;m wanting to focus on. The voices are both soothing and encouraging, and I love the ability to record my own affirmations. Seriously so grateful for this app!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">A</div>
                <div>
                  <div className="text-white font-semibold text-sm">Aubmaej</div>
                  <div className="text-white/50 text-xs">Verified App Store Review</div>
                </div>
              </div>
            </div>

            {/* Review 2 — camrylbc */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">&ldquo;Pleasant Peace &amp; Meditation&rdquo;</h3>
              <p className="text-white/75 leading-relaxed text-sm mb-5">
                Listening to these affirmations is SO AWESOME! It&apos;s amazing how quickly I can feel myself calm down amidst high stress. I shared the app with 4 of my closest family members within one day of using it! The soothing soundscapes are all good quality, and the app itself is well-designed and intuitive.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">C</div>
                <div>
                  <div className="text-white font-semibold text-sm">camrylbc</div>
                  <div className="text-white/50 text-xs">Verified App Store Review</div>
                </div>
              </div>
            </div>

            {/* Review 3 — BF */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">&ldquo;Love this app!&rdquo;</h3>
              <p className="text-white/75 leading-relaxed text-sm mb-5">
                I&apos;m enjoying this app a lot. I can record my affirmations and have a good selection of sounds to pair with them. It&apos;s become a key part of my daily routine for building a positive mindset and staying focused on my goals throughout the day.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">B</div>
                <div>
                  <div className="text-white font-semibold text-sm">BF</div>
                  <div className="text-white/50 text-xs">Verified App Store Review</div>
                </div>
              </div>
            </div>

            {/* Review 4 — DuhSosanator */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">&ldquo;Absolutely perfect for what it does&rdquo;</h3>
              <p className="text-white/75 leading-relaxed text-sm mb-5">
                This thing is absolutely perfect for what it does, especially with the new additions to the affirmation recordings. A must-have for anyone serious about building a daily affirmation practice and improving their mindset.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">D</div>
                <div>
                  <div className="text-white font-semibold text-sm">DuhSosanator</div>
                  <div className="text-white/50 text-xs">Verified App Store Review</div>
                </div>
              </div>
            </div>

            {/* Review 5 — Loren-Li */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">&ldquo;Amazing customer service&rdquo;</h3>
              <p className="text-white/75 leading-relaxed text-sm mb-5">
                The CEO personally reached out and resolved my issue within days. They even offered me a lifetime membership. Customer service is outstanding and I now have access to all the features the app offers. You can tell this team truly cares.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">L</div>
                <div>
                  <div className="text-white font-semibold text-sm">Loren-Li</div>
                  <div className="text-white/50 text-xs">Verified App Store Review</div>
                </div>
              </div>
            </div>

            {/* Community CTA card */}
            <div className="bg-white/20 backdrop-blur-sm border border-white/25 rounded-2xl p-7 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">Join 150K+</div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Be part of our growing community of people transforming their lives, one affirmation at a time.
              </p>
              <a
                href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold rounded-full px-6 py-3 text-sm hover:bg-cream-100 transition-colors"
              >
                Download Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

          </div>

          {/* App Store link */}
          <div className="text-center">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              Read all reviews on the App Store
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================
          FINAL CTA — Start Recording
          ============================================================ */}
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
              Start Recording Free
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

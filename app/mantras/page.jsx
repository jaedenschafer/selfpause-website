import Link from 'next/link';

export const metadata = {
  title: 'Mantras: Ancient Sound Practices for Modern Life | Selfpause',
  description: 'Explore the power of mantras — from Vedic chanting to mindfulness meditation. Learn different types of mantras, how to practice, and the science behind why they work.',
};

const guides = [
  {
    slug: 'how-to-chant-a-mantra-for-good-health',
    title: 'How to Chant a Mantra for Good Health',
    description: 'Learn the Maha Mrityunjaya Mantra, proper chanting technique, and the science behind how mantra vibrations promote healing.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: 'which-mantra-is-powerful-for-money',
    title: 'Which Mantra Is Powerful for Money?',
    description: 'Discover Lakshmi, Kubera, and Ganesh mantras for attracting wealth and removing financial obstacles.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

const mantraTypes = [
  {
    name: 'Bija (Seed) Mantras',
    description: 'Single-syllable sounds like "Om," "Shreem," and "Hreem" that carry concentrated vibrational energy. Each bija mantra corresponds to a specific chakra or deity.',
    color: 'bg-purple-50 text-purple-600',
    iconBg: 'bg-purple-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    name: 'Vedic Mantras',
    description: 'Ancient Sanskrit hymns from the Vedas, including the Gayatri Mantra and Maha Mrityunjaya Mantra. Traditionally chanted with precise pronunciation for spiritual and healing purposes.',
    color: 'bg-amber-50 text-amber-600',
    iconBg: 'bg-amber-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
    ),
  },
  {
    name: 'Buddhist Mantras',
    description: '"Om Mani Padme Hum" and "Nam Myoho Renge Kyo" are among the most widely practiced. Buddhist mantras cultivate compassion, mindfulness, and liberation from suffering.',
    color: 'bg-teal-50 text-teal-600',
    iconBg: 'bg-teal-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: 'Affirmation Mantras',
    description: 'Modern mantras using positive statements in your native language, such as "I am enough" or "I choose peace." These combine the repetitive power of mantra with the clarity of affirmations.',
    color: 'bg-pink-50 text-pink-600',
    iconBg: 'bg-pink-100',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
];

export default function MantrasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide mx-auto section-padding pt-24 lg:pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Mantras:{' '}
              <span className="gradient-text">ancient sound, modern science</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Mantras are sacred sounds, syllables, or phrases repeated during meditation to focus the mind, calm the nervous system, and create deep internal transformation. Used for over 3,000 years across Hindu, Buddhist, and Jain traditions, mantras are now backed by neuroscience research showing measurable effects on brain activity, stress hormones, and cardiovascular health.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Your Mantra Practice
              </a>
              <Link href="/affirmations" className="btn-secondary text-lg px-10 py-4">
                Explore Affirmations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Mantras Work */}
      <section className="py-16 border-b border-gray-100 bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              How mantras work
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              The power of a mantra lies in the combination of sound vibration, rhythmic repetition, and focused intention. Here is what happens when you chant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                ),
                title: 'Vibration',
                desc: 'Vocal vibrations from chanting stimulate the vagus nerve, activating the parasympathetic nervous system and shifting your body into a state of deep calm and repair.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"/>
                    <polyline points="1 20 1 14 7 14"/>
                    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                  </svg>
                ),
                title: 'Repetition',
                desc: 'Repeating a mantra 108 times (one mala cycle) creates a meditative rhythm that quiets the default mode network — the part of your brain responsible for mind-wandering and rumination.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                ),
                title: 'Intention',
                desc: 'Each mantra carries a specific sankalpa (intention). Whether it is healing, abundance, or inner peace, the intention directs the mind\'s focus and shapes neural pathway formation.',
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

      {/* Types of Mantras */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Types of mantras
            </h2>
            <p className="text-lg text-gray-500">
              From ancient Sanskrit hymns to modern affirmation mantras, there is a practice for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mantraTypes.map((type) => (
              <div key={type.name} className="card overflow-hidden">
                <div className={`p-6 ${type.color}`}>
                  <div className={`w-14 h-14 rounded-xl ${type.iconBg} flex items-center justify-center mb-4`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
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
              In-depth mantra guides
            </h2>
            <p className="text-lg text-gray-500">
              Deep dives into specific mantras, their origins, and how to practice them effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/mantras/${guide.slug}`}
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
            Start your mantra practice today
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
            Record mantras in your own voice. Layer with ambient sounds. Build a daily practice that transforms your mind and body.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-700 font-semibold rounded-full text-lg hover:bg-cream-100 transition-colors shadow-lg"
            >
              Download Free
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

import Link from 'next/link';

export const metadata = {
  title: 'How to Meditate: A Complete Beginner\'s Guide | Selfpause',
  description: 'Learn how to meditate with this step-by-step guide for beginners. Discover different meditation techniques, tips for building a consistent practice, and how ambient sounds enhance your experience.',
};

export default function HowToMeditatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream-100 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Meditation Guide
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            How to Meditate: A Complete Beginner&apos;s Guide
          </h1>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Meditation is one of the most powerful tools for reducing stress, improving focus, and cultivating inner peace. This guide will walk you through everything you need to know to start — and maintain — a meditation practice.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              What Is Meditation?
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              Meditation is the practice of training your attention and awareness to achieve a mentally clear and emotionally calm state. It is not about emptying your mind or stopping thoughts — it is about observing your thoughts without judgment and gently returning your focus to a chosen anchor, such as your breath. Meditation has been practiced for thousands of years across cultures, and modern science has confirmed its benefits for stress reduction, emotional regulation, focus, and even physical health. A meta-analysis published in JAMA Internal Medicine found that meditation programs showed moderate evidence of improving anxiety, depression, and pain.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              How to Meditate: Step by Step
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              Start by finding a quiet, comfortable place where you will not be disturbed. Sit in a position that feels relaxed but alert — this can be on a chair with your feet flat on the floor, cross-legged on a cushion, or even lying down. Close your eyes or soften your gaze. Take three slow, deep breaths to settle in. Begin focusing on the natural rhythm of your breathing — the sensation of air entering and leaving your nostrils, or the rise and fall of your chest. When your mind wanders (and it will), simply notice the thought without judgment and gently guide your attention back to your breath. Start with just 5 minutes per day. As the practice becomes more comfortable, gradually increase to 10, 15, or 20 minutes.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Types of Meditation
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              There are many approaches to meditation, each with its own focus and benefits. Mindfulness meditation involves paying attention to the present moment without judgment — noticing thoughts, sounds, and sensations as they arise. Focused attention meditation uses a single point of focus, such as your breath, a mantra, or a candle flame. Loving-kindness meditation (Metta) involves silently repeating phrases of goodwill toward yourself and others. Body scan meditation guides your attention through each part of your body, releasing tension as you go. Transcendental meditation uses a personalized mantra repeated silently. Guided meditation follows a teacher or recording through a structured experience. Experiment with different types to find what resonates with you.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Common Challenges and How to Overcome Them
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              The most common challenge beginners face is a racing mind. Remember — a busy mind does not mean you are meditating wrong. Every time you notice your mind has wandered and bring it back, you are strengthening your attention muscle. That IS the practice. Physical discomfort is another common hurdle. If sitting cross-legged is uncomfortable, use a chair or lie down. Meditation should never hurt. Falling asleep is normal, especially when meditating lying down or in the evening. Try sitting upright or meditating earlier in the day. Impatience is perhaps the biggest obstacle. The benefits of meditation are cumulative — most research shows significant changes after 8 weeks of consistent practice, so give yourself time.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              How Ambient Sounds Enhance Meditation
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              Research from the Proceedings of the National Academy of Sciences found that natural sounds promote relaxation and outward-focused attention, while artificial sounds promote inward-focused (anxious) attention. This is why meditating with ambient nature sounds — rain, ocean waves, forest birds, wind — can deepen your practice. The Selfpause app offers a full library of HD ambient soundscapes designed specifically for meditation. Layer these with your recorded affirmations for a practice that combines focused attention, positive self-talk, and environmental calm. Many users find that ambient sounds make it easier to sustain focus and create a ritual that feels immersive rather than effortful.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Combining Meditation with Affirmations
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              One of the most powerful combinations is meditation followed by affirmations. Start with 5 to 10 minutes of breath-focused meditation to calm your mind and enter a receptive state. Then, listen to your recorded affirmations in the Selfpause app. Because meditation activates alpha brain waves — the same state associated with heightened suggestibility and learning — affirmations practiced after meditation are absorbed more deeply by your subconscious. This combined approach is the foundation of the Selfpause experience and what makes it uniquely effective for mindset transformation.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Start meditating with Selfpause
          </h2>
          <p className="text-navy-600 mb-8">
            Guided meditations, ambient soundscapes, and personalized affirmations — all in one app.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/selfpause-daily-affirmations/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors shadow-lg"
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-navy-800 font-semibold rounded-full border-2 border-navy-300 hover:border-navy-500 transition-colors"
            >
              Get it on Android
            </a>
          </div>
          <div className="mt-8">
            <Link href="/" className="text-teal-600 hover:text-teal-700 font-medium">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

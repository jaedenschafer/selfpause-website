'use client';

import { useState, useRef, useCallback } from 'react';
import { CATEGORIES, getAffirmations, getAffirmationsByCategory } from '../../lib/affirmation-generator-data';
import Link from 'next/link';

// SEO metadata must be in a layout or separate file for client components
// We handle this via the layout.jsx or a metadata export from a server wrapper

function SparkleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}

function CopyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function RefreshIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  );
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function PositiveAffirmationGenerator() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const resultsRef = useRef(null);

  const generate = useCallback((searchQuery, categoryId = null) => {
    setIsGenerating(true);

    // Small delay for visual feedback
    setTimeout(() => {
      let data;
      if (categoryId) {
        data = getAffirmationsByCategory(categoryId);
        setActiveCategory(categoryId);
        setQuery(CATEGORIES.find(c => c.id === categoryId)?.label || '');
      } else {
        data = getAffirmations(searchQuery);
        setActiveCategory(null);
      }
      setResults(data);
      setIsGenerating(false);
      setCopiedAll(false);
      setCopiedIndex(null);

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 300);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      generate(query.trim());
    }
  };

  const handleCategoryClick = (categoryId) => {
    generate('', categoryId);
  };

  const handleRegenerate = () => {
    if (activeCategory) {
      generate('', activeCategory);
    } else if (query.trim()) {
      generate(query.trim());
    }
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const copyAll = async () => {
    if (!results?.affirmations) return;
    const allText = results.affirmations.map((a, i) => `${i + 1}. ${a.text}`).join('\n');
    try {
      await navigator.clipboard.writeText(allText);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 3000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = allText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 3000);
    }
  };

  const displayTopic = activeCategory
    ? CATEGORIES.find(c => c.id === activeCategory)?.label
    : query;

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Positive Affirmation Generator',
            url: 'https://selfpause.com/positive-affirmation-generator',
            description: 'Generate 25 personalized positive affirmations for any area of your life. Free tool by Selfpause.',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'All',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            creator: { '@type': 'Organization', name: 'Selfpause', url: 'https://selfpause.com' },
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 brand-gradient opacity-[0.07]" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-cyan-200 opacity-20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-teal-200 opacity-20 blur-3xl" />

        <div className="relative section-padding">
          <div className="container-narrow text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
              <SparkleIcon className="w-4 h-4" />
              Free Tool — No Sign-Up Required
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Positive Affirmation{' '}
              <span className="brand-gradient-text">Generator</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us what area of your life needs a boost, and we&apos;ll generate 25 powerful,
              personalized affirmations to help you shift your mindset and transform your day.
            </p>

            {/* ── INPUT FORM ── */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., confidence, money, anxiety, self-love..."
                  className="flex-1 px-6 py-4 rounded-full bg-white border border-cream-300 text-navy-800
                           text-lg placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-300
                           focus:border-teal-400 shadow-sm transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isGenerating}
                  className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed
                           disabled:hover:translate-y-0 disabled:hover:shadow-lg whitespace-nowrap"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <SparkleIcon className="w-5 h-5" />
                      Generate Affirmations
                    </span>
                  )}
                </button>
              </div>
            </form>

            {/* ── CATEGORY PILLS ── */}
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-navy-400 mb-4 font-medium">Or choose a category:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                             transition-all duration-200 border
                             ${activeCategory === cat.id
                               ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                               : 'bg-white text-navy-600 border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 hover:shadow-sm'
                             }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      {results && (
        <section ref={resultsRef} className="section-padding bg-white scroll-mt-20">
          <div className="container-narrow">
            {/* Results Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
                Your 25 Affirmations for{' '}
                <span className="brand-gradient-text">{displayTopic}</span>
              </h2>
              {results.matchedCategories?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {results.matchedCategories.map((cat) => (
                    <span key={cat.id} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium">
                      {cat.icon} {cat.label}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={handleRegenerate}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-navy-600
                         border border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50
                         font-medium text-sm transition-all duration-200 hover:shadow-sm"
              >
                <RefreshIcon className="w-4 h-4" />
                Regenerate
              </button>
              <button
                onClick={copyAll}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm
                         transition-all duration-200 ${
                           copiedAll
                             ? 'bg-green-50 text-green-700 border border-green-200'
                             : 'bg-white text-navy-600 border border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 hover:shadow-sm'
                         }`}
              >
                {copiedAll ? (
                  <>
                    <CheckIcon className="w-4 h-4" />
                    Copied All!
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4" />
                    Copy All 25
                  </>
                )}
              </button>
            </div>

            {/* Affirmation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.affirmations.map((affirmation, index) => (
                <div
                  key={index}
                  className="group relative bg-cream-50 rounded-xl p-5 border-l-4 border-teal-400
                           hover:bg-white hover:shadow-md transition-all duration-300
                           animate-fade-in-up"
                  style={{ animationDelay: `${Math.min(index * 30, 500)}ms`, opacity: 0 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-navy-700 leading-relaxed font-medium text-[15px] flex-1">
                      &ldquo;{affirmation.text}&rdquo;
                    </p>
                    <button
                      onClick={() => copyToClipboard(affirmation.text, index)}
                      className="flex-shrink-0 p-2 rounded-lg text-navy-300 hover:text-teal-600 hover:bg-teal-50
                               transition-all duration-200 opacity-0 group-hover:opacity-100"
                      title="Copy affirmation"
                    >
                      {copiedIndex === index ? (
                        <CheckIcon className="w-4 h-4 text-green-600" />
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <span className="text-xs text-navy-300 mt-2 block font-medium">
                    #{index + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Regenerate CTA */}
            <div className="text-center mt-10">
              <button
                onClick={handleRegenerate}
                className="btn-primary text-base"
              >
                <span className="flex items-center gap-2">
                  <RefreshIcon className="w-5 h-5" />
                  Generate 25 More
                </span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA — DOWNLOAD APP ── */}
      <section className="section-padding bg-gradient-calm">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-8 sm:p-12 lg:p-16 text-center text-white">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-5 translate-y-1/3 -translate-x-1/4" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Take Your Affirmations Further
              </h2>
              <p className="text-lg text-teal-100 max-w-xl mx-auto mb-8 leading-relaxed">
                Record these affirmations in your own voice, layer them with ambient sounds,
                and listen daily for deeper transformation. Selfpause makes it effortless.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://onelink.to/selfpause"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold
                           rounded-full hover:bg-cream-50 transition-all duration-200 shadow-lg
                           hover:shadow-xl hover:-translate-y-0.5 text-lg"
                >
                  <DownloadIcon className="w-5 h-5" />
                  Download Selfpause Free
                </a>
              </div>
              <p className="text-sm text-teal-200 mt-4">
                Available on iOS & Android — 4.8 stars from 2,000+ reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              How the Affirmation Generator Works
            </h2>
            <p className="text-lg text-navy-500 max-w-2xl mx-auto">
              Our generator draws from a library of over 2,000 carefully crafted affirmations,
              intelligently matched to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Focus',
                description: 'Type a topic like "confidence," "anxiety," or "career success" — or pick from 30 curated categories.',
              },
              {
                step: '2',
                title: 'Get Personalized Results',
                description: 'Our smart matching system finds the 25 most relevant affirmations from our library, tailored to your needs.',
              },
              {
                step: '3',
                title: 'Use Daily for Best Results',
                description: 'Read your affirmations each morning, write them in a journal, or record them in your own voice with the Selfpause app.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl brand-gradient text-white flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AFFIRMATIONS WORK — SEO CONTENT ── */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 text-center">
              Why Positive Affirmations Work
            </h2>

            <div className="space-y-6 text-lg text-navy-600 leading-relaxed">
              <p>
                Positive affirmations are short, powerful statements that help you challenge and overcome
                self-sabotaging thoughts. When practiced consistently, they can rewire neural pathways
                in your brain through a process neuroscientists call <strong className="text-navy-900">self-affirmation theory</strong>.
              </p>

              <p>
                Research published in <em>Social Cognitive and Affective Neuroscience</em> has shown
                that self-affirmation activates the brain&apos;s reward centers — the same areas associated
                with pleasure and positive valuation. This means repeating affirmations literally
                trains your brain to believe positive statements about yourself.
              </p>

              <h3 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
                Tips for Getting the Most from Your Affirmations
              </h3>

              <ul className="space-y-3">
                {[
                  'Say them out loud, ideally in front of a mirror',
                  'Repeat them first thing in the morning and before bed',
                  'Write them in a journal for deeper internalization',
                  'Record them in your own voice using the Selfpause app',
                  'Choose affirmations that resonate emotionally, not just logically',
                  'Be consistent — daily practice creates lasting change',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full brand-gradient flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
                Categories We Cover
              </h3>

              <p>
                Our positive affirmation generator covers 30 life areas including self-love, confidence,
                anxiety and stress relief, health and healing, wealth and abundance, career success,
                relationships, gratitude, morning motivation, evening relaxation, body image, inner peace,
                creativity, focus, sleep, energy, self-worth, courage, patience, mindfulness,
                personal growth, forgiveness, letting go, trust, joy, purpose, and communication.
              </p>

              <p>
                Whether you&apos;re looking for affirmations for a specific challenge or general daily
                positivity, our tool matches you with the most relevant affirmations from our
                curated library of over 2,000 unique statements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — SEO ── */}
      <section className="section-padding bg-cream-50">
        <div className="container-narrow">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do positive affirmations work?',
                a: 'Positive affirmations work by leveraging neuroplasticity — your brain\'s ability to form new neural connections. When you repeat a positive statement consistently, your brain begins to treat it as a belief rather than just words, gradually shifting your thought patterns and behavior.',
              },
              {
                q: 'How many affirmations should I practice daily?',
                a: 'We recommend focusing on 3-5 affirmations that deeply resonate with you. Quality matters more than quantity. Choose affirmations that feel challenging but believable — they should stretch your comfort zone while still feeling achievable.',
              },
              {
                q: 'When is the best time to say affirmations?',
                a: 'The most effective times are right after waking up and just before sleep, when your mind is most receptive. However, any consistent practice time works — many people also use affirmations during commutes, workouts, or meditation sessions.',
              },
              {
                q: 'Can I use this generator for free?',
                a: 'Yes! This positive affirmation generator is completely free with no sign-up required. You can generate as many sets of 25 affirmations as you like across all 30 categories.',
              },
              {
                q: 'How can I make affirmations more effective?',
                a: 'The most powerful way to practice affirmations is to hear them in your own voice. The Selfpause app lets you record your affirmations, layer them with calming ambient sounds, and listen daily — creating a deeply personal and immersive experience.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-cream-300">
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

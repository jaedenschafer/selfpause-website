'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { CATEGORIES, AFFIRMATIONS, getAffirmations, getAffirmationsByCategory } from '../../lib/affirmation-generator-data';

// ── Category color map for themed cards ──
const CATEGORY_COLORS = {
  'self-love':    { bg: 'bg-pink-50',     border: 'border-pink-300',    accent: 'text-pink-600',    pill: 'bg-pink-100 text-pink-700' },
  'confidence':   { bg: 'bg-amber-50',    border: 'border-amber-300',   accent: 'text-amber-600',   pill: 'bg-amber-100 text-amber-700' },
  'anxiety':      { bg: 'bg-sky-50',      border: 'border-sky-300',     accent: 'text-sky-600',     pill: 'bg-sky-100 text-sky-700' },
  'health':       { bg: 'bg-emerald-50',  border: 'border-emerald-300', accent: 'text-emerald-600', pill: 'bg-emerald-100 text-emerald-700' },
  'wealth':       { bg: 'bg-yellow-50',   border: 'border-yellow-300',  accent: 'text-yellow-600',  pill: 'bg-yellow-100 text-yellow-700' },
  'career':       { bg: 'bg-indigo-50',   border: 'border-indigo-300',  accent: 'text-indigo-600',  pill: 'bg-indigo-100 text-indigo-700' },
  'family':        { bg: 'bg-orange-50',    border: 'border-orange-300',  accent: 'text-orange-600',  pill: 'bg-orange-100 text-orange-700' },
  'relationships':{ bg: 'bg-rose-50',     border: 'border-rose-300',    accent: 'text-rose-600',    pill: 'bg-rose-100 text-rose-700' },
  'gratitude':    { bg: 'bg-orange-50',   border: 'border-orange-300',  accent: 'text-orange-600',  pill: 'bg-orange-100 text-orange-700' },
  'morning':      { bg: 'bg-amber-50',    border: 'border-amber-300',   accent: 'text-amber-600',   pill: 'bg-amber-100 text-amber-700' },
  'evening':      { bg: 'bg-violet-50',   border: 'border-violet-300',  accent: 'text-violet-600',  pill: 'bg-violet-100 text-violet-700' },
  'motivation':   { bg: 'bg-red-50',      border: 'border-red-300',     accent: 'text-red-600',     pill: 'bg-red-100 text-red-700' },
  'happiness':    { bg: 'bg-yellow-50',   border: 'border-yellow-300',  accent: 'text-yellow-600',  pill: 'bg-yellow-100 text-yellow-700' },
  'forgiveness':  { bg: 'bg-slate-50',    border: 'border-slate-300',   accent: 'text-slate-600',   pill: 'bg-slate-100 text-slate-700' },
  'body-image':   { bg: 'bg-fuchsia-50',  border: 'border-fuchsia-300', accent: 'text-fuchsia-600', pill: 'bg-fuchsia-100 text-fuchsia-700' },
  'inner-peace':  { bg: 'bg-cyan-50',     border: 'border-cyan-300',    accent: 'text-cyan-600',    pill: 'bg-cyan-100 text-cyan-700' },
  'strength':     { bg: 'bg-stone-50',    border: 'border-stone-300',   accent: 'text-stone-600',   pill: 'bg-stone-100 text-stone-700' },
  'creativity':   { bg: 'bg-purple-50',   border: 'border-purple-300',  accent: 'text-purple-600',  pill: 'bg-purple-100 text-purple-700' },
  'focus':        { bg: 'bg-blue-50',     border: 'border-blue-300',    accent: 'text-blue-600',    pill: 'bg-blue-100 text-blue-700' },
  'sleep':        { bg: 'bg-indigo-50',   border: 'border-indigo-300',  accent: 'text-indigo-600',  pill: 'bg-indigo-100 text-indigo-700' },
  'energy':       { bg: 'bg-lime-50',     border: 'border-lime-300',    accent: 'text-lime-600',    pill: 'bg-lime-100 text-lime-700' },
  'self-worth':   { bg: 'bg-amber-50',    border: 'border-amber-300',   accent: 'text-amber-600',   pill: 'bg-amber-100 text-amber-700' },
  'courage':      { bg: 'bg-orange-50',   border: 'border-orange-300',  accent: 'text-orange-600',  pill: 'bg-orange-100 text-orange-700' },
  'patience':     { bg: 'bg-green-50',    border: 'border-green-300',   accent: 'text-green-600',   pill: 'bg-green-100 text-green-700' },
  'mindfulness':  { bg: 'bg-teal-50',     border: 'border-teal-300',    accent: 'text-teal-600',    pill: 'bg-teal-100 text-teal-700' },
  'growth':       { bg: 'bg-emerald-50',  border: 'border-emerald-300', accent: 'text-emerald-600', pill: 'bg-emerald-100 text-emerald-700' },
  'letting-go':   { bg: 'bg-sky-50',      border: 'border-sky-300',     accent: 'text-sky-600',     pill: 'bg-sky-100 text-sky-700' },
  'trust':        { bg: 'bg-violet-50',   border: 'border-violet-300',  accent: 'text-violet-600',  pill: 'bg-violet-100 text-violet-700' },
  'joy':          { bg: 'bg-yellow-50',   border: 'border-yellow-300',  accent: 'text-yellow-600',  pill: 'bg-yellow-100 text-yellow-700' },
  'purpose':      { bg: 'bg-indigo-50',   border: 'border-indigo-300',  accent: 'text-indigo-600',  pill: 'bg-indigo-100 text-indigo-700' },
  'communication':{ bg: 'bg-blue-50',     border: 'border-blue-300',    accent: 'text-blue-600',    pill: 'bg-blue-100 text-blue-700' },
};

const DEFAULT_COLORS = { bg: 'bg-cream-50', border: 'border-teal-300', accent: 'text-teal-600', pill: 'bg-teal-100 text-teal-700' };

function getCardColors(tags) {
  return CATEGORY_COLORS[tags?.[0]] || DEFAULT_COLORS;
}

// ── SVG Icon Components ──
function SparkleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}
function CopyIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>);
}
function CheckIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>);
}
function RefreshIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>);
}
function DownloadIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>);
}
function HeartIcon({ className, filled }) {
  return filled
    ? <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
    : <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
}
function PlayIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
}
function PauseIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>);
}
function ShareIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>);
}
function BookmarkIcon({ className, filled }) {
  return filled
    ? <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
    : <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>;
}
function XIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
}
function PrintIcon({ className }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>);
}

// ── Daily Affirmation (deterministic per day) ──
function getDailyAffirmation() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % AFFIRMATIONS.length;
  return AFFIRMATIONS[index];
}

// ── Favorites helper ──
function loadFavorites() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('selfpause_favorites') || '[]');
  } catch { return []; }
}
function saveFavorites(favs) {
  try { localStorage.setItem('selfpause_favorites', JSON.stringify(favs)); } catch {}
}

// ── Text-to-Speech helper ──
function speak(text, onEnd) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;
  // Try to use a nice voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Natural'));
  if (preferred) utterance.voice = preferred;
  utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
  return utterance;
}

// ── Share as Image via Canvas API ──
async function shareAsImage(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
  gradient.addColorStop(0, '#0088A8');
  gradient.addColorStop(1, '#00C9B7');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);

  // Decorative circles
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(200, 200, 300, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(880, 880, 250, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // Quote marks
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.font = 'bold 200px Georgia';
  ctx.fillText('\u201C', 60, 250);

  // Affirmation text
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 48px "Playfair Display", Georgia, serif';
  ctx.textAlign = 'center';

  // Word wrap
  const words = text.split(' ');
  let lines = [];
  let currentLine = '';
  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > 880) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);

  const lineHeight = 68;
  const totalHeight = lines.length * lineHeight;
  const startY = (1080 - totalHeight) / 2 + 30;

  lines.forEach((line, i) => {
    ctx.fillText(line, 540, startY + i * lineHeight);
  });

  // Branding
  ctx.font = '500 28px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('selfpause.com', 540, 1020);

  // Convert and share/download
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  if (navigator.share && navigator.canShare?.({ files: [new File([blob], 'affirmation.png', { type: 'image/png' })] })) {
    try {
      await navigator.share({
        title: 'My Affirmation — Selfpause',
        text: text,
        files: [new File([blob], 'affirmation.png', { type: 'image/png' })],
      });
      return;
    } catch {}
  }
  // Fallback: download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'selfpause-affirmation.png';
  a.click();
  URL.revokeObjectURL(url);
}

export default function PositiveAffirmationGenerator() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [affirmationCount, setAffirmationCount] = useState(25);
  const [dailyAffirmation, setDailyAffirmation] = useState(null);
  const [showShareToast, setShowShareToast] = useState(false);
  const resultsRef = useRef(null);

  // Load favorites and daily affirmation on mount
  useEffect(() => {
    setFavorites(loadFavorites());
    setDailyAffirmation(getDailyAffirmation());
    // Load voices for TTS
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const isFavorited = useCallback((text) => favorites.some(f => f.text === text), [favorites]);

  const toggleFavorite = useCallback((affirmation) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.text === affirmation.text);
      const next = exists ? prev.filter(f => f.text !== affirmation.text) : [...prev, affirmation];
      saveFavorites(next);
      return next;
    });
  }, []);

  const generate = useCallback((searchQuery, categoryId = null) => {
    setIsGenerating(true);
    setTimeout(() => {
      let data;
      if (categoryId) {
        data = getAffirmationsByCategory(categoryId, affirmationCount);
        setActiveCategory(categoryId);
        setQuery(CATEGORIES.find(c => c.id === categoryId)?.label || '');
      } else {
        data = getAffirmations(searchQuery, affirmationCount);
        setActiveCategory(null);
      }
      setResults(data);
      setIsGenerating(false);
      setCopiedAll(false);
      setCopiedIndex(null);
      setSpeakingIndex(null);
      if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 400);
  }, [affirmationCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) generate(query.trim());
  };

  const handleCategoryClick = (categoryId) => generate('', categoryId);

  const handleRegenerate = () => {
    if (activeCategory) generate('', activeCategory);
    else if (query.trim()) generate(query.trim());
  };

  const copyToClipboard = async (text, index) => {
    try { await navigator.clipboard.writeText(text); } catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    }
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAll = async () => {
    if (!results?.affirmations) return;
    const allText = results.affirmations.map((a, i) => `${i + 1}. ${a.text}`).join('\n');
    try { await navigator.clipboard.writeText(allText); } catch {
      const ta = document.createElement('textarea'); ta.value = allText; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    }
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 3000);
  };

  const handleSpeak = (text, index) => {
    if (speakingIndex === index) {
      window.speechSynthesis?.cancel();
      setSpeakingIndex(null);
      return;
    }
    setSpeakingIndex(index);
    speak(text, () => setSpeakingIndex(null));
  };

  const handleShare = async (text) => {
    await shareAsImage(text);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const displayTopic = activeCategory
    ? CATEGORIES.find(c => c.id === activeCategory)?.label
    : query;

  const countOptions = [5, 10, 25, 50];

  return (
    <>
      {/* JSON-LD: WebApplication + FAQPage + BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebApplication',
            name: 'Positive Affirmation Generator',
            url: 'https://selfpause.com/positive-affirmation-generator',
            description: 'Generate personalized positive affirmations for any area of your life. Choose from 31 categories covering self-love, confidence, anxiety, family, career, and more. Completely free with no sign-up required.',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'All',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            creator: { '@type': 'Organization', name: 'Selfpause', url: 'https://selfpause.com' },
            featureList: 'Generate personalized affirmations, Save favorites, Text-to-speech, Share as images, Print-friendly, 31 life categories, 2000+ affirmations',
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How do positive affirmations work?', acceptedAnswer: { '@type': 'Answer', text: 'Positive affirmations work by leveraging neuroplasticity — your brain\'s ability to form new neural connections. When you repeat a positive statement consistently, your brain begins to treat it as a belief rather than just words, gradually shifting your thought patterns and behavior.' }},
              { '@type': 'Question', name: 'How many affirmations should I practice daily?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend focusing on 3-5 affirmations that deeply resonate with you. Quality matters more than quantity. Choose affirmations that feel challenging but believable.' }},
              { '@type': 'Question', name: 'When is the best time to say affirmations?', acceptedAnswer: { '@type': 'Answer', text: 'The most effective times are right after waking up and just before sleep, when your mind is most receptive. However, any consistent practice time works.' }},
              { '@type': 'Question', name: 'Can I use this generator for free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! This positive affirmation generator is completely free with no sign-up required. You can generate as many sets of affirmations as you like across all 31 categories, save your favorites, listen with text-to-speech, and share as beautiful images.' }},
              { '@type': 'Question', name: 'How can I make affirmations more effective?', acceptedAnswer: { '@type': 'Answer', text: 'The most powerful way to practice affirmations is to hear them in your own voice. The Selfpause app lets you record your affirmations, layer them with calming ambient sounds, and listen daily — creating a deeply personal and immersive experience.' }},
              { '@type': 'Question', name: 'Can I save my favorite affirmations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Tap the heart icon on any affirmation to save it to your personal collection. Your saved affirmations persist between visits so you can build a curated list.' }},
            ],
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://selfpause.com' },
              { '@type': 'ListItem', position: 2, name: 'Positive Affirmation Generator', item: 'https://selfpause.com/positive-affirmation-generator' },
            ],
          },
        ],
      })}} />

      {/* Print styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          header, footer, .no-print { display: none !important; }
          .print-only { display: block !important; }
          .print-card { break-inside: avoid; border: 1px solid #ddd; padding: 12px; margin-bottom: 8px; border-radius: 8px; }
        }
        .print-only { display: none; }
      `}} />

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-navy-800 text-white rounded-full shadow-xl animate-fade-in-up text-sm font-medium">
          Image saved! Share it anywhere.
        </div>
      )}

      {/* ── FAVORITES DRAWER ── */}
      {showFavorites && (
        <div className="fixed inset-0 z-50 no-print">
          <div className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm" onClick={() => setShowFavorites(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-cream-300 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h3 className="text-xl font-bold text-navy-900">Saved Affirmations</h3>
                <p className="text-sm text-navy-400">{favorites.length} saved</p>
              </div>
              <button onClick={() => setShowFavorites(false)} className="p-2 rounded-lg hover:bg-cream-100 text-navy-400 hover:text-navy-600 transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              {favorites.length === 0 ? (
                <div className="text-center py-12">
                  <HeartIcon className="w-12 h-12 text-cream-300 mx-auto mb-4" filled={false} />
                  <p className="text-navy-400 text-lg">No saved affirmations yet</p>
                  <p className="text-navy-300 text-sm mt-1">Tap the heart on any affirmation to save it here</p>
                </div>
              ) : (
                favorites.map((fav, i) => {
                  const colors = getCardColors(fav.tags);
                  return (
                    <div key={i} className={`${colors.bg} rounded-xl p-4 border-l-4 ${colors.border} group`}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-navy-700 text-sm font-medium leading-relaxed flex-1">&ldquo;{fav.text}&rdquo;</p>
                        <button onClick={() => toggleFavorite(fav)} className="flex-shrink-0 p-1.5 rounded-lg text-red-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                          <HeartIcon className="w-4 h-4" filled={true} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
              {favorites.length > 0 && (
                <button
                  onClick={async () => {
                    const text = favorites.map((f, i) => `${i + 1}. ${f.text}`).join('\n');
                    try { await navigator.clipboard.writeText(text); } catch {}
                  }}
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-50 text-teal-700 font-medium text-sm hover:bg-teal-100 transition-colors"
                >
                  <CopyIcon className="w-4 h-4" />
                  Copy All Saved
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── DAILY AFFIRMATION BANNER ── */}
      {dailyAffirmation && !results && (
        <section className="no-print bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
          <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center gap-3 text-center">
            <SparkleIcon className="w-5 h-5 flex-shrink-0 opacity-80" />
            <p className="text-sm sm:text-base font-medium">
              <span className="opacity-80">Today&apos;s affirmation:</span>{' '}
              <span className="font-semibold">&ldquo;{dailyAffirmation.text}&rdquo;</span>
            </p>
          </div>
        </section>
      )}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden no-print" aria-label="Affirmation generator tool">
        <div className="absolute inset-0 brand-gradient opacity-[0.05]" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cyan-200 opacity-15 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-teal-200 opacity-15 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 opacity-10 blur-3xl" />

        <div className="relative section-padding pb-12 lg:pb-16">
          <div className="container-narrow text-center">
            {/* Badge + Favorites Button */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
                <SparkleIcon className="w-4 h-4" />
                Free Tool — No Sign-Up Required
              </div>
              {favorites.length > 0 && (
                <button
                  onClick={() => setShowFavorites(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
                >
                  <HeartIcon className="w-4 h-4" filled={true} />
                  {favorites.length} Saved
                </button>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Positive Affirmation{' '}
              <span className="brand-gradient-text">Generator</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us what area of your life needs a boost, and we&apos;ll generate powerful,
              personalized affirmations to help you shift your mindset and transform your day.
            </p>

            {/* ── INPUT FORM ── */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
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
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
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

            {/* ── COUNT SELECTOR ── */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-sm text-navy-400 font-medium">How many:</span>
              {countOptions.map(n => (
                <button
                  key={n}
                  onClick={() => setAffirmationCount(n)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    affirmationCount === n
                      ? 'brand-gradient text-white shadow-md'
                      : 'bg-white text-navy-500 border border-cream-300 hover:border-teal-300 hover:text-teal-600'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            {/* ── CATEGORY PILLS ── */}
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-navy-400 mb-4 font-medium">Or choose a category:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium
                             transition-all duration-200 border
                             ${activeCategory === cat.id
                               ? 'bg-teal-600 text-white border-teal-600 shadow-md scale-105'
                               : 'bg-white text-navy-600 border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 hover:shadow-sm hover:scale-[1.02]'
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
        <section ref={resultsRef} className="section-padding bg-white scroll-mt-20" aria-label="Generated affirmations results">
          <div className="container-narrow">
            {/* Results Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">
                Your {results.affirmations.length} Affirmations for{' '}
                <span className="brand-gradient-text">{displayTopic}</span>
              </h2>
              {results.matchedCategories?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {results.matchedCategories.map((cat) => {
                    const colors = CATEGORY_COLORS[cat.id] || DEFAULT_COLORS;
                    return (
                      <span key={cat.id} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${colors.pill}`}>
                        {cat.icon} {cat.label}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── SPOTLIGHT CARD — first affirmation featured ── */}
            {results.affirmations.length > 0 && (
              <div className="mb-8 no-print">
                <div className="relative overflow-hidden rounded-2xl brand-gradient p-8 sm:p-10 text-center text-white shadow-xl">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white opacity-5 -translate-y-1/3 translate-x-1/3" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white opacity-5 translate-y-1/3 -translate-x-1/3" />
                  <div className="relative">
                    <div className="text-5xl mb-4 opacity-30">&ldquo;</div>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed max-w-3xl mx-auto -mt-6">
                      {results.affirmations[0].text}
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-6">
                      <button
                        onClick={() => handleSpeak(results.affirmations[0].text, 'spotlight')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-all"
                      >
                        {speakingIndex === 'spotlight' ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                        {speakingIndex === 'spotlight' ? 'Pause' : 'Listen'}
                      </button>
                      <button
                        onClick={() => toggleFavorite(results.affirmations[0])}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-all"
                      >
                        <HeartIcon className="w-4 h-4" filled={isFavorited(results.affirmations[0].text)} />
                        {isFavorited(results.affirmations[0].text) ? 'Saved' : 'Save'}
                      </button>
                      <button
                        onClick={() => handleShare(results.affirmations[0].text)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-all"
                      >
                        <ShareIcon className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 no-print">
              <button onClick={handleRegenerate} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-navy-600 border border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 font-medium text-sm transition-all duration-200 hover:shadow-sm">
                <RefreshIcon className="w-4 h-4" /> Regenerate
              </button>
              <button onClick={copyAll} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${copiedAll ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-white text-navy-600 border border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 hover:shadow-sm'}`}>
                {copiedAll ? <><CheckIcon className="w-4 h-4" /> Copied!</> : <><CopyIcon className="w-4 h-4" /> Copy All</>}
              </button>
              <button onClick={handlePrint} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-navy-600 border border-cream-300 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 font-medium text-sm transition-all duration-200 hover:shadow-sm">
                <PrintIcon className="w-4 h-4" /> Print
              </button>
              <button onClick={() => setShowFavorites(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-navy-600 border border-cream-300 hover:border-red-200 hover:text-red-600 hover:bg-red-50 font-medium text-sm transition-all duration-200 hover:shadow-sm">
                <HeartIcon className="w-4 h-4" filled={favorites.length > 0} /> {favorites.length} Saved
              </button>
            </div>

            {/* Print Header */}
            <div className="print-only text-center mb-6">
              <h1 className="text-2xl font-bold">My Affirmations for {displayTopic}</h1>
              <p className="text-sm text-gray-500">Generated by Selfpause — selfpause.com</p>
            </div>

            {/* Affirmation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.affirmations.map((affirmation, index) => {
                const colors = getCardColors(affirmation.tags);
                const catEmoji = CATEGORIES.find(c => c.id === affirmation.tags[0])?.icon || '';
                return (
                  <article
                    key={`${affirmation.text}-${index}`}
                    className={`group relative ${colors.bg} rounded-xl p-4 sm:p-5 border-l-4 ${colors.border}
                             hover:shadow-lg hover:scale-[1.01] transition-all duration-300
                             animate-fade-in-up print-card`}
                    style={{ animationDelay: `${Math.min(index * 40, 600)}ms`, opacity: 0 }}
                    itemScope itemType="https://schema.org/Quotation"
                  >
                    <p className="text-navy-700 leading-relaxed font-medium text-[15px]" itemProp="text">
                      &ldquo;{affirmation.text}&rdquo;
                    </p>
                    {/* Action bar — horizontal row, always visible on mobile, hover on desktop */}
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-navy-300 font-medium">#{index + 1} {catEmoji}</span>
                      <div className="flex items-center gap-0.5 sm:gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 no-print">
                        <button onClick={() => toggleFavorite(affirmation)} className={`p-1.5 rounded-lg transition-colors ${isFavorited(affirmation.text) ? 'text-red-500 bg-red-50' : 'text-navy-300 hover:text-red-500 hover:bg-red-50'}`} aria-label={isFavorited(affirmation.text) ? 'Remove from saved' : 'Save affirmation'}>
                          <HeartIcon className="w-4 h-4" filled={isFavorited(affirmation.text)} />
                        </button>
                        <button onClick={() => copyToClipboard(affirmation.text, index)} className="p-1.5 rounded-lg text-navy-300 hover:text-teal-600 hover:bg-teal-50 transition-colors" aria-label="Copy affirmation">
                          {copiedIndex === index ? <CheckIcon className="w-4 h-4 text-green-600" /> : <CopyIcon className="w-4 h-4" />}
                        </button>
                        <button onClick={() => handleSpeak(affirmation.text, index)} className={`p-1.5 rounded-lg transition-colors ${speakingIndex === index ? 'text-teal-600 bg-teal-50' : 'text-navy-300 hover:text-teal-600 hover:bg-teal-50'}`} aria-label={speakingIndex === index ? 'Stop listening' : 'Listen aloud'}>
                          {speakingIndex === index ? <PauseIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5" />}
                        </button>
                        <button onClick={() => handleShare(affirmation.text)} className="p-1.5 rounded-lg text-navy-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors" aria-label="Share as image">
                          <ShareIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10 no-print">
              <button onClick={handleRegenerate} className="btn-primary text-base">
                <span className="flex items-center gap-2"><RefreshIcon className="w-5 h-5" /> Generate {affirmationCount} More</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA — DOWNLOAD APP ── */}
      <section className="section-padding bg-gradient-calm no-print">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl brand-gradient p-8 sm:p-12 lg:p-16 text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-5 translate-y-1/3 -translate-x-1/4" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Take Your Affirmations Further</h2>
              <p className="text-lg text-teal-100 max-w-xl mx-auto mb-8 leading-relaxed">
                Record these affirmations in your own voice, layer them with ambient sounds,
                and listen daily for deeper transformation. Selfpause makes it effortless.
              </p>
              <a href="https://onelink.to/selfpause" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold rounded-full hover:bg-cream-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                <DownloadIcon className="w-5 h-5" /> Download Selfpause Free
              </a>
              <p className="text-sm text-teal-200 mt-4">Available on iOS & Android — 4.8 stars from 2,000+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding no-print">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">How the Affirmation Generator Works</h2>
            <p className="text-lg text-navy-500 max-w-2xl mx-auto">Our generator draws from a library of over 2,300 carefully crafted affirmations across 31 categories, intelligently matched to your specific needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Your Focus', desc: 'Type a topic or pick from 31 curated categories covering every area of life.' },
              { step: '2', title: 'Set Your Count', desc: 'Choose 5, 10, 25, or 50 affirmations depending on how deep you want to go.' },
              { step: '3', title: 'Save Your Favorites', desc: 'Heart the affirmations that resonate most. They are saved to your personal collection.' },
              { step: '4', title: 'Listen, Share & Practice', desc: 'Listen aloud with text-to-speech, share as beautiful images, or print for daily use.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl brand-gradient text-white flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-md">{item.step}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 font-display">{item.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AFFIRMATIONS WORK ── */}
      <section className="section-padding bg-white no-print">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 text-center">Why Positive Affirmations Work</h2>
            <div className="space-y-6 text-lg text-navy-600 leading-relaxed">
              <p>Positive affirmations are short, powerful statements that help you challenge and overcome self-sabotaging thoughts. When practiced consistently, they can rewire neural pathways in your brain through a process neuroscientists call <strong className="text-navy-900">self-affirmation theory</strong>.</p>
              <p>Research published in <em>Social Cognitive and Affective Neuroscience</em> has shown that self-affirmation activates the brain&apos;s reward centers — the same areas associated with pleasure and positive valuation. This means repeating affirmations literally trains your brain to believe positive statements about yourself.</p>

              <h3 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Tips for Getting the Most from Your Affirmations</h3>
              <ul className="space-y-3">
                {['Say them out loud, ideally in front of a mirror', 'Repeat them first thing in the morning and before bed', 'Write them in a journal for deeper internalization', 'Record them in your own voice using the Selfpause app', 'Choose affirmations that resonate emotionally, not just logically', 'Be consistent — daily practice creates lasting change',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full brand-gradient flex items-center justify-center mt-0.5"><CheckIcon className="w-3.5 h-3.5 text-white" /></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-navy-900 mt-10 mb-4">Categories We Cover</h3>
              <p>Our positive affirmation generator covers 31 life areas including self-love, confidence, anxiety and stress relief, health and healing, wealth and abundance, career success, family and parenting, relationships, gratitude, morning motivation, evening relaxation, body image, inner peace, creativity, focus, sleep, energy, self-worth, courage, patience, mindfulness, personal growth, forgiveness, letting go, trust, joy, purpose, and communication.</p>
              <p>Whether you&apos;re looking for affirmations for a specific challenge or general daily positivity, our tool matches you with the most relevant affirmations from our curated library of over 2,300 unique statements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-cream-50 no-print">
        <div className="container-narrow">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'How do positive affirmations work?', a: 'Positive affirmations work by leveraging neuroplasticity — your brain\'s ability to form new neural connections. When you repeat a positive statement consistently, your brain begins to treat it as a belief rather than just words, gradually shifting your thought patterns and behavior.' },
              { q: 'How many affirmations should I practice daily?', a: 'We recommend focusing on 3-5 affirmations that deeply resonate with you. Quality matters more than quantity. Choose affirmations that feel challenging but believable — they should stretch your comfort zone while still feeling achievable.' },
              { q: 'When is the best time to say affirmations?', a: 'The most effective times are right after waking up and just before sleep, when your mind is most receptive. However, any consistent practice time works — many people also use affirmations during commutes, workouts, or meditation sessions.' },
              { q: 'Can I use this generator for free?', a: 'Yes! This positive affirmation generator is completely free with no sign-up required. You can generate as many sets of affirmations as you like across all 30 categories, save your favorites, listen with text-to-speech, and share as beautiful images.' },
              { q: 'How can I make affirmations more effective?', a: 'The most powerful way to practice affirmations is to hear them in your own voice. The Selfpause app lets you record your affirmations, layer them with calming ambient sounds, and listen daily — creating a deeply personal and immersive experience.' },
              { q: 'Can I save my favorite affirmations?', a: 'Yes! Tap the heart icon on any affirmation to save it to your personal collection. Your saved affirmations persist between visits so you can build a curated list of the ones that resonate most with you.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-cream-300">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-navy-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

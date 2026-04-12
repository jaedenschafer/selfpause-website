export const metadata = {
  title: 'Free Positive Affirmation Generator | 2,000+ Affirmations in 31 Categories',
  description: 'Instantly generate personalized positive affirmations for self-love, confidence, anxiety relief, wealth, career, family, relationships, and 24 more life areas. Free tool — no sign-up, no AI chat. Save favorites, listen aloud, share as images, and print.',
  keywords: [
    'positive affirmation generator',
    'affirmation generator',
    'free affirmations',
    'daily affirmations',
    'positive affirmations',
    'affirmations for anxiety',
    'affirmations for confidence',
    'affirmations for self-love',
    'affirmations for kids',
    'affirmations for money',
    'affirmations for women',
    'affirmations for men',
    'morning affirmations',
    'affirmations for success',
    'affirmations for healing',
    'affirmations for sleep',
    'affirmations for motivation',
    'I am affirmations',
    'daily positive affirmations generator',
    'personalized affirmations',
    'custom affirmations',
    'affirmation tool',
    'selfpause',
  ],
  alternates: {
    canonical: '/positive-affirmation-generator',
  },
  openGraph: {
    title: 'Free Positive Affirmation Generator — Selfpause',
    description: 'Generate personalized positive affirmations for any area of your life. 2,000+ affirmations across 31 categories. Save, listen, share, and print — completely free.',
    url: '/positive-affirmation-generator',
    type: 'website',
    images: [{ url: '/images/selfpause-phone-hero.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Positive Affirmation Generator — Selfpause',
    description: 'Generate personalized positive affirmations for any area of your life. 31 categories, 2,000+ affirmations. Completely free.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
};

export default function AffirmationGeneratorLayout({ children }) {
  return children;
}

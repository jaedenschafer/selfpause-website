import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://selfpause.com'),
  title: {
    default: 'Selfpause — AI Life Coach & Positive Affirmations App',
    template: '%s | Selfpause',
  },
  description: 'Your AI life coach in your pocket. Record personalized affirmations, meditate with ambient sounds, and transform your mindset with Selfpause.',
  keywords: ['affirmations', 'meditation', 'mindset', 'AI life coach', 'positive thinking', 'self improvement', 'mental health', 'selfpause', 'daily affirmations', 'positive affirmations app'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://selfpause.com',
    siteName: 'Selfpause',
    title: 'Selfpause — AI Life Coach & Positive Affirmations App',
    description: 'Your AI life coach in your pocket. Record personalized affirmations, meditate with ambient sounds, and transform your mindset.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selfpause — AI Life Coach & Positive Affirmations App',
    description: 'Your AI life coach in your pocket.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://selfpause.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://selfpause.com/#organization',
      name: 'Selfpause',
      url: 'https://selfpause.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://selfpause.com/og-image.jpg',
      },
      sameAs: [
        'https://www.instagram.com/selfpause/',
        'https://twitter.com/selfpause',
        'https://www.facebook.com/selfpause',
        'https://www.youtube.com/@selfpause',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://selfpause.com/#website',
      url: 'https://selfpause.com',
      name: 'Selfpause',
      publisher: { '@id': 'https://selfpause.com/#organization' },
      description: 'Your AI life coach in your pocket. Record personalized affirmations, meditate with ambient sounds, and transform your mindset.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Selfpause',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'HealthApplication',
      description: 'AI life coach and positive affirmations app. Record personalized affirmations in your own voice, meditate with ambient sounds, and transform your mindset.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '2000',
        bestRating: '5',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

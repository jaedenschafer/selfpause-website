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
  keywords: ['affirmations', 'meditation', 'mindset', 'AI life coach', 'positive thinking', 'self improvement', 'mental health'],
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

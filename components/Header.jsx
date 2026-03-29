'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/affirmations', label: 'Affirmations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — real Selfpause wordmark */}
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/images/selfpause-logo.png"
              alt="Selfpause"
              className="h-7 lg:h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-600 hover:text-teal-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Login + Download + Store Badges */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.selfpause.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy-600 hover:text-teal-500 transition-colors"
            >
              Login
            </a>
            <a
              href="https://onelink.to/selfpause"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Download
            </a>
            <a
              href="https://apps.apple.com/us/app/selfpause-your-ai-life-coach/id1518538414"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="/images/badge-app-store.svg"
                alt="Download on the App Store"
                className="h-9 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.selfpause&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="/images/badge-google-play.png"
                alt="Get it on Google Play"
                className="h-9 w-auto"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy-600 hover:text-navy-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-cream-200 mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-navy-700 hover:text-teal-500 hover:bg-cream-100 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://app.selfpause.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-medium text-navy-700 hover:text-teal-500 hover:bg-cream-100 rounded-xl transition-colors"
              >
                Login
              </a>
              <div className="mt-4 px-4 flex flex-col gap-3">
                <a
                  href="https://onelink.to/selfpause"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Download
                </a>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://apps.apple.com/us/app/selfpause-your-ai-life-coach/id1518538414"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/badge-app-store.svg"
                      alt="Download on the App Store"
                      className="h-10 w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.selfpause&hl=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/badge-google-play.png"
                      alt="Get it on Google Play"
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden space-x-4 md:flex">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/projects"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/projects' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t.nav.projects}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === '/projects' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {t.nav.projects}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


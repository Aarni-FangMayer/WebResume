'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-900">
        {t.about.title}
      </h2>
      <p className="leading-relaxed text-gray-700">
        {t.about.content}
      </p>
    </section>
  );
}


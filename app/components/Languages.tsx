'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Languages() {
  const { t } = useLanguage();

  const languages = [
    { name: t.languages.english, level: t.languages.fluent, note: t.languages.professionalTechnical },
    { name: t.languages.finnish, level: t.languages.goodWorkingProficiency },
    { name: t.languages.russian, level: t.languages.native },
  ];

  return (
    <section id="languages" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        {t.languages.title}
      </h2>
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <div className="space-y-4">
          {languages.map((language) => (
            <div
              key={language.name}
              className="flex flex-col border-b border-gray-200 pb-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-semibold text-gray-900">
                {language.name}
              </span>
              <span className="text-gray-600">
                {language.level}{' '}
                {language.note && (
                  <span className="text-sm text-gray-500">
                    {language.note}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


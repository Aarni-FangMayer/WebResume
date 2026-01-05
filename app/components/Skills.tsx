'use client';

import { useLanguage } from '../contexts/LanguageContext';

const skillCategories = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript (ES6+)',
    'React',
    'Vite',
    'PrimeReact',
    'React Router',
  ],
  Backend: ['Node.js', 'Express'],
  Database: ['MongoDB', 'Mongoose', 'Firebase'],
  'Tools & Other': [
    'Git',
    'REST APIs',
    'JWT',
    'bcrypt',
    'dotenv',
    'Render',
    'Vercel',
    'Figma',
  ],
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          {t.skills.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {t.skills.categories[category as keyof typeof t.skills.categories]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


'use client';

import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';

import project1 from './project1.jpg';
import project2 from './project2.jpg';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      name: 'KayakingClub',
      image: project1,
      description: t.projects.kayakingClub.description,
      features: [...t.projects.kayakingClub.features],
      techStack: [
        'React',
        'Vite',
        'PrimeReact',
        'React Router',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'Firebase Storage',
        'JWT',
        'bcrypt',
        'dotenv',
        'Render',
        'Figma',
      ],
      githubUrl: 'https://github.com/Aarni-FangMayer/kayaking-club',
      liveUrl: 'https://kayaking-club.onrender.com/',
      featured: true,
    },
    {
      name: 'Finn-Veterinary OY — Veterinary Clinic Website',
      image: project2,
      description: t.projects.veterinaryClinic.description,
      features: [...t.projects.veterinaryClinic.features],
      techStack: [
        'HTML',
        'CSS (Grid & Flexbox)',
        'React',
        'Vite',
        'React Context',
        'Vercel',
        'Figma',
      ],
      githubUrl: 'https://github.com/Aarni-FangMayer/Website-for-a-veterinary-clinic-Vet-palvelu-',
      liveUrl: 'https://website-for-a-veterinary-clinic-vet.vercel.app/',
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-4xl font-bold text-gray-900">
          {t.projects.title}
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              image={project.image}
              description={project.description}
              features={project.features}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </main>
  );
}


'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  image: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  name,
  description,
  features,
  techStack,
  image,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article
      className={`overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md ${
        featured ? 'border-2 border-teal-500' : ''
      }`}
    >
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT — CONTENT */}
        <div className="p-6">
          {featured && (
            <div className="mb-3">
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                {t.projects.featuredProject}
              </span>
            </div>
          )}

          <h3 className="mb-3 text-2xl font-bold text-gray-900">{name}</h3>
          <p className="mb-4 text-gray-700">{description}</p>

          <div>
            <h4 className="mb-2 font-semibold text-gray-900">
              {t.projects.keyFeatures}
            </h4>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex items-start justify-end p-4">
          <div className="relative w-full max-w-[520px] aspect-[1062/628] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain rounded-lg"
              priority={featured}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM — TECH STACK + LINKS (FULL WIDTH) */}
      <div className="p-6">
        <h4 className="mb-2 font-semibold text-gray-900">
          {t.projects.techStack}
        </h4>

        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              GitHub
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-12 px-4 py-12 bg-gray-900 text-gray-200">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-300">Projects</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Take a look at some of my recent work and completed projects.
        </p>

        <div className="mt-4">
          <Link
            href="/gallery"
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            View Full Project Gallery →
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {project.galleryImage && (
              <Link href={`/gallery#${project.slug}`} scroll={false}>
                <img
                  src={project.galleryImage}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4 hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                />
              </Link>
            )}

            <h3 className="text-xl font-semibold text-blue-200 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            {/* {project.date && (
              <span className="text-sm text-blue-400 font-medium block mb-2">
                {project.date}
              </span>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
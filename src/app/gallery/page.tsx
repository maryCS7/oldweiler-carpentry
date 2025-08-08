'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/projects';

export default function GalleryPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    let tries = 0;

    const interval = setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearInterval(interval);
      } else {
        tries++;
        if (tries > 20) clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <div className="relative px-4 py-12 bg-gray-900 text-gray-200 text-center space-y-8">
      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Enlarged project"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl transition-transform duration-300"
          />
        </div>
      )}

      {/* Optional: Back to Projects link */}
      {typeof window !== 'undefined' && window.location.hash && (
        <div className="text-left max-w-6xl mx-auto mb-4">
          <a
            href="/projects"
            className="text-blue-400 underline hover:text-blue-300 transition text-sm"
          >
            ← Back to Projects
          </a>
        </div>
      )}

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-blue-300">Project Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A visual showcase of recent carpentry & home improvement projects. Click any image to enlarge.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            id={project.slug}
            key={index}
            className="scroll-mt-24 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => setLightboxImg(project.galleryImage)}
              className="w-full h-64 focus:outline-none"
            >
              <img
                src={project.galleryImage}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>

            <div className="p-3 text-left">
              <h3 className="text-md font-semibold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

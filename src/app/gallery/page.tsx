'use client';

import { useState } from 'react';

export default function GalleryPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const images = Array.from({ length: 11 }, (_, i) => ({
    src: `/gallery/project${i + 1}.jpg`,
    alt: `Project ${i + 1}`,
  }));

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
            alt=""
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl transition-transform duration-300"
          />
        </div>
      )}

      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-blue-300">Project Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A visual showcase of recent carpentry & home improvement projects. Click any image to enlarge.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => setLightboxImg(img.src)}
              className="w-full h-64 focus:outline-none"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>

            {/* Image caption hidden for now */}
            {/* <p className="p-3 text-sm text-gray-400">{img.alt}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
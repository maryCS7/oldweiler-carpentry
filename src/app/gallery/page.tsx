'use client';

import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Gallery images - using the same structure that works in Projects
  const galleryImages = [
    { src: "/gallery/project1.JPG", alt: "Custom Powder Room Cabinet" },
    { src: "/gallery/project2.JPG", alt: "Custom Wood Sink Countertop" },
    { src: "/gallery/project3.JPG", alt: "Rolling Storage Box" },
    { src: "/gallery/project4.JPG", alt: "Kitchen Pull-Out Pantry Drawers" },
    { src: "/gallery/project5.jpg", alt: "Modern Nightstands" },
    { src: "/gallery/project6.JPG", alt: "Shaker Style Kitchen Cabinets" },
    { src: "/gallery/project7.JPG", alt: "Interior Cabinet Shelving" },
    { src: "/gallery/project8.JPG", alt: "Barn Exterior Restoration" },
    { src: "/gallery/project9.JPG", alt: "Pergola Framing" },
    { src: "/gallery/project10.JPG", alt: "Exterior Staircase Build" },
    { src: "/gallery/project11.JPG", alt: "Custom Woodworking" },
    { src: "/gallery/project12.JPG", alt: "Custom Project" }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <div className="bg-gray-950 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-blue-300 mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Browse through a collection of finished carpentry projects. Each image showcases the quality and craftsmanship of my work.
            </p>
          </div>
        </div>
        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🏗️</div>
                      <p className="text-sm">Loading...</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-blue-200">{image.alt}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <div className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-blue-300 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Browse through a collection of finished carpentry projects. Each image showcases the quality and craftsmanship of my work.
          </p>
        </div>
      </div>

      {/* Simple Grid Layout */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                
                {/* Image Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-blue-200">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

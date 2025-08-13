'use client';

import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

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
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback for broken images */}
                <div className="hidden w-full h-64 bg-gray-700 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm">Image not available</p>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-blue-200">{image.alt}</h3>
                  <p className="text-xs text-gray-400 mt-1">Click to enlarge</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-12"
          onClick={closeModal}
        >
          <div className="relative max-w-2xl max-h-[75vh]">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-24 right-0 text-white bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 z-10 border-2 border-white hover:border-gray-300 hover:scale-110"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image title */}
            <div className="absolute -bottom-24 left-0 text-white text-center w-full">
              <h3 className="text-lg font-medium bg-black bg-opacity-70 px-4 py-2 rounded-lg">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

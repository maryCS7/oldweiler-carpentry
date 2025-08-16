'use client';

import { useState, useEffect } from 'react';
import { projects, Project } from '@/data/projects';
import Link from 'next/link';

// Type for gallery images that includes project data
type GalleryImage = {
  src: string;
  alt: string;
  project: Project;
};

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use projects data directly from projects.ts
  const galleryImages: GalleryImage[] = projects.map(project => ({
    src: project.galleryImage || '',
    alt: project.title,
    project: project // Keep reference to full project data
  }));

  const openModal = (image: GalleryImage) => {
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
      {/* Header with Logo and Navigation */}
      <header className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <img 
                src="/oldweiler-logo.png" 
                alt="Oldweiler Custom Carpentry Logo" 
                className="h-20 w-auto"
              />
              <span className="text-2xl font-semibold text-blue-300">
                Oldweiler Custom Carpentry
              </span>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
              <Link href="/projects" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</Link>
              <Link href="/gallery" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">Gallery</Link>
              <Link href="/contact" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col items-center space-y-3 pt-4">
                <Link 
                  href="/" 
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/projects" 
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/gallery" 
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Page Header */}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 md:p-8 lg:p-12"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-2xl lg:max-w-4xl max-h-[80vh] md:max-h-[85vh]">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 md:-top-16 right-0 text-white bg-black bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 md:p-3 transition-all duration-200 z-10 border-2 border-white hover:border-gray-300 hover:scale-110"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image title and description */}
            <div className="absolute -bottom-12 md:-bottom-16 left-0 right-0 text-white text-center px-4">
              <h3 className="text-base md:text-lg font-medium bg-black bg-opacity-80 px-4 py-2 rounded-lg mb-2 inline-block">
                {selectedImage.alt}
              </h3>
              {selectedImage.project?.description && (
                <p className="text-sm md:text-base bg-black bg-opacity-80 px-4 py-2 rounded-lg max-w-xl mx-auto leading-relaxed">
                  {selectedImage.project.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Company Info */}
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img 
                src="/oldweiler-logo.png" 
                alt="Oldweiler Custom Carpentry Logo" 
                className="h-12 w-auto opacity-80"
              />
              <div>
                <p className="text-sm text-gray-400">Bennington, NY</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link>
              <Link href="/gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Oldweiler Custom Carpentry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

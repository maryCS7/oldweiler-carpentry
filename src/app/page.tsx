'use client';

import { useState, useEffect } from 'react';
import { projects, Project } from '@/data/projects';

export default function HomePage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Use projects data directly from projects.ts
  const featuredProjects = projects.map(project => ({
    image: project.galleryImage || '',
    title: project.title,
    description: project.description
  }));

  // Auto-rotate projects every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Preload first image for better UX
  useEffect(() => {
    const img = new window.Image();
    img.src = featuredProjects[0].image;
    img.onload = () => setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative text-center md:text-left md:w-1/2 space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-400 leading-tight animate-fadeInUp">
              Oldweiler Custom Carpentry
            </h1>
            <p className="text-xl text-gray-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Precision. Craft. Care. Built local.
            </p>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <a 
              href="/projects" 
              className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center">
                <span className="mr-2">View Projects</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <a 
              href="/contact" 
              className="group border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 transform hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center">
                <span className="mr-2">Get Quote</span>
                {/* <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg> */}
              </span>
            </a>
          </div>
        </div>
        
        <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          {/* Project Carousel */}
          <div className="relative w-full max-w-md md:max-w-lg">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Project Images */}
              <div className="relative h-80 bg-gray-800">
                {/* Loading State */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-3">🏗️</div>
                      <p className="text-sm">Loading project...</p>
                    </div>
                  </div>
                )}
                
                {/* Project Image */}
                <img
                  src={featuredProjects[currentProject].image}
                  alt={featuredProjects[currentProject].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  onLoad={handleImageLoad}
                  onError={(e) => {
                    // Replace broken image with fallback
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    // Create fallback element
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 text-center p-4';
                    fallback.innerHTML = `<div><div class="text-4xl mb-2">🏗️</div><p class="text-sm">${featuredProjects[currentProject].title}</p></div>`;
                    target.parentNode?.appendChild(fallback);
                  }}
                />
                
                {/* Project Info Overlay - Cleaner */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {featuredProjects[currentProject].title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {featuredProjects[currentProject].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-20 blur-xl transition-all duration-500"></div>
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-blue-400 rounded-xl opacity-5 blur-md transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">About</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong>Oldweiler Custom Carpentry</strong> is a family-owned and operated business based in Bennington, NY, built on over 20 years of professional experience and a craft passed down through generations. With a background in engineering, I bring a unique blend of technical precision and hands-on skill to every project. Each piece is the result of careful planning, thoughtful design, and a deep commitment to quality—custom work that&apos;s as functional as it is beautiful.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-300 mb-4">Projects & Services</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              From custom kitchens and built-ins to outdoor decks and storage solutions, I specialize in bringing your vision to life with precision craftsmanship. Every project is built with care, attention to detail, and the quality that lasts generations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 cursor-pointer">
              <div className="text-blue-400 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">🏠</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2 transition-colors duration-300 group-hover:text-blue-200">Custom Woodworking</h3>
              <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Built-ins, cabinets, furniture, and custom pieces tailored to your space and style.</p>
            </div>
            <div className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 cursor-pointer">
              <div className="text-blue-400 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">🔨</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2 transition-colors duration-300 group-hover:text-blue-200">Home Renovations</h3>
              <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Kitchens, bathrooms, and interior remodeling with attention to detail and quality.</p>
            </div>
            <div className="group bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 cursor-pointer">
              <div className="text-blue-400 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">🌳</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2 transition-colors duration-300 group-hover:text-blue-200">Outdoor Projects</h3>
              <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Decks, pergolas, outdoor structures, and exterior woodworking solutions.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
            >
              Explore My Work
            </a>
            <p className="text-sm text-gray-400">
              Curious what others are saying?{' '}
              <a
                href="/reviews"
                className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
              >
                Read customer reviews
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">Gallery</h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full mb-8"></div>
          
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 mb-8">
            <div className="text-blue-400 text-6xl mb-4">📸</div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Explore a curated gallery of finished work—from initial framing to final finishes, each project showcases my commitment to craftsmanship, attention to detail, and the quality that makes every piece a lasting investment in your home.
            </p>
            <a
              href="/gallery"
              className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">Get in Touch</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-gray-300 mb-6 text-lg">
            Ready to transform your space with custom carpentry? Let&apos;s discuss your project and bring your vision to life with the quality and craftsmanship your home deserves.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
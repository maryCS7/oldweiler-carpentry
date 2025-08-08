'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center gap-8 text-blue-300 font-medium">
          <a href="/projects" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Projects</a>
          <a href="/gallery" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Gallery</a>
          <a href="/reviews" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Reviews</a>
          <a href="/contact" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a>
        </nav>
      </header>

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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get Quote
            </a>
          </div>
        </div>
        
        <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="relative">
            <img
              src="/hero1.jpg"
              alt="Custom carpentry workbench and tools"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
            />
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">About</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong>Oldweiler Custom Carpentry</strong> is a family-owned and operated business based in Bennington, NY, built on over 20 years of professional experience and a craft passed down through generations. With a background in engineering, the owner brings a unique blend of technical precision and hands-on skill to every project. Each piece is the result of careful planning, thoughtful design, and a deep commitment to quality—custom work that’s as functional as it is beautiful.
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
              Specializing in custom woodworking and home renovations—from kitchens and built-ins to decks and storage solutions. Whether indoor or outdoor, every build is crafted with care and built to last.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Custom Woodworking</h3>
              <p className="text-gray-300">Built-ins, cabinets, furniture, and custom pieces tailored to your space and style.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-3xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Home Renovations</h3>
              <p className="text-gray-300">Kitchens, bathrooms, and interior remodeling with attention to detail and quality.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-3xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Outdoor Projects</h3>
              <p className="text-gray-300">Decks, pergolas, outdoor structures, and exterior woodworking solutions.</p>
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
              Explore a curated gallery of finished work—from framing to final finishes, these projects reflect my commitment to craftsmanship and detail.
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
            Ready to bring your vision to life? I’d love to hear more about your project.
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
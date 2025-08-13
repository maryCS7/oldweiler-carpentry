'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get unique categories from project tags
  const categories = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags || []);
    const uniqueTags = [...new Set(allTags)];
    return ['all', ...uniqueTags];
  }, []);

  // Filter projects based on category
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || 
        (project.tags && project.tags.includes(selectedCategory));
      return matchesCategory;
    });
  }, [selectedCategory]);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <div className="bg-gray-950 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-blue-300 mb-4">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore a collection of custom carpentry projects, each crafted with precision and attention to detail. 
              From built-ins to outdoor structures, see how I bring visions to life.
            </p>
          </div>
        </div>
        <div className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
                >
                  {project.galleryImage && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.galleryImage}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-200 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
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
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <div className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-blue-300 mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore a collection of custom carpentry projects, each crafted with precision and attention to detail. 
            From built-ins to outdoor structures, see how I bring visions to life.
          </p>
          
          <div className="mt-6">
            <Link
              href="/gallery"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              <span>View Full Project Gallery</span>
              <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Filters */}
      <div className="bg-gray-900 border-b border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid - Simple Layout */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/gallery#${project.slug}`}
                  scroll={false}
                  className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg block"
                >
                  {/* Project Image */}
                  {project.galleryImage && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.galleryImage}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Replace broken image with fallback
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          // Create fallback element
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400 text-sm';
                          fallback.innerHTML = `🏗️ ${project.title}`;
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-200 mb-2 group-hover:text-blue-100 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* Tiny Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 bg-gray-700 text-gray-300 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Logo/Brand */}
          <div className="mb-4 sm:mb-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
              aria-label="Oldweiler Custom Carpentry - Home"
            >
              Oldweiler Custom Carpentry
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-6 text-blue-300 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded px-3 py-2 transition-all duration-300 ${
                  pathname === item.href 
                    ? 'text-blue-200 bg-blue-900 bg-opacity-30 shadow-lg' 
                    : 'hover:bg-gray-800 hover:bg-opacity-50'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
                {/* Active indicator line */}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 text-blue-300 hover:text-blue-200 hover:bg-gray-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-blue-300 hover:text-blue-200 hover:bg-gray-800 transition-all duration-200 border-b border-gray-700 last:border-b-0 ${
                  pathname === item.href 
                    ? 'text-blue-200 bg-blue-900 bg-opacity-30 border-l-4 border-l-blue-400' 
                    : ''
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

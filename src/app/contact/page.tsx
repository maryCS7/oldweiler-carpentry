'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // Add company field for honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const res = await fetch('https://oldweiler-api-production.up.railway.app/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', company: '' });
        setFeedback('Message sent successfully!');
      } else {
        const data = await res.json();
        setStatus('error');
        setFeedback(data.detail || data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setFeedback('Network error. Please try again.');
    }
  };

  // Auto-hide feedback after 5s
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback('');
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <div className="space-y-12 px-4 py-12 bg-gray-900 text-gray-200">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-300">Contact Me</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a carpentry project in mind? I&apos;d love to hear about it! With over 20 years of experience serving Bennington, NY and surrounding areas, I specialize in custom work that brings your vision to life. Whether you have a clear idea or just want to explore possibilities, let&apos;s chat about what we could create together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-200">Location & Service Area</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-blue-400 text-xl">📍</span>
              <p>
                <strong>Location:</strong> Based in Bennington, NY — serving the surrounding areas
              </p>
            </div>
          </div>

          {/* Enhanced Map with Service Area */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Service Area</h3>
            <p className="text-gray-300 text-sm mb-4">
              I travel to your location for projects within approximately one hour driving distance.
            </p>
            
            {/* Google Maps */}
            <div className="relative mb-4">
              <iframe
                title="Oldweiler Custom Carpentry Location - Bennington, NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.045914775607!2d-78.39392848458716!3d42.87700717915578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d2ace5b3ea5e77%3A0x16c9d5a7ce122e17!2sBennington%2C%20NY%2014040!5e0!3m2!1sen!2sus!4v1723125399999!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              />
              
              {/* Service Area Overlay Info */}
              <div className="absolute top-2 right-2 bg-blue-900 bg-opacity-90 text-white p-2 rounded text-xs">
                <div className="font-semibold">Service Radius</div>
                <div>~1 Hour Drive</div>
                <div>From Bennington</div>
              </div>
            </div>
            
            {/* Interactive Map Actions */}
            <div className="mt-4">
              <a
                href="https://maps.google.com/?q=Bennington,NY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium inline-block"
              >
                📍 Open in Google Maps
              </a>
            </div>
            
            {/* Service Area Details */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-blue-200 mb-3">Coverage Areas</h4>
              
              {/* Quick Service Area Reference */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="text-blue-200 font-medium text-sm">Primary:</div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Bennington, NY</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Attica, NY</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Batavia, NY</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">East Aurora, NY</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-blue-200 font-medium text-sm">Extended:</div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Lancaster, NY</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Depew, NY</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Buffalo Area</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-blue-900 hover:bg-opacity-30 hover:scale-[1.02]">
                      <span className="text-green-400">●</span>
                      <span className="text-gray-300">Rochester, NY</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-900 bg-opacity-30 rounded-lg border border-blue-700">
                <p className="text-blue-200 text-sm">
                  <strong>💡 Note:</strong> For projects outside this area, contact me to discuss travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Info + Form */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-200 mb-4">Contact Information</h2>
            <p className="text-gray-300">
              I&apos;m happy to chat about your ideas and answer any questions. As a local craftsman, I understand the unique needs of Western New York homes and can provide personalized solutions for your space.
            </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-xl">📞</span>
                <p><strong>Call or Text:</strong> (585) 734-5068</p>
              </div>
              {/* <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-xl">✉️</span>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:aaronoldweile@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    aaronoldweile@gmail.com
                  </a>
                </p>
              </div> */}
            </div>
            
            {/* Additional spacing to balance left and right columns */}
            <div className="mt-6 space-y-4">
              <div className="text-center">
                <div className="text-blue-400 text-2xl mb-2">🏗️</div>
                <p className="text-gray-400 text-sm">
                  Ready to discuss your project? Fill out the form to get started.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-200">Get In Touch</h2>
            
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-focus-within:text-blue-400">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:bg-gray-600 transform hover:scale-[1.02]"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-focus-within:text-blue-400">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:bg-gray-600 transform hover:scale-[1.02]"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message Field with Character Count */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-200 group-focus-within:text-blue-400">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-500 focus:bg-gray-600 transform hover:scale-[1.02] resize-none"
                placeholder="Tell me about your project idea: What are you thinking about building or renovating? What's your timeline? Any specific materials or style preferences? Don't worry if you're not sure about all the details - I'll get back to you within 48 hours to chat about your vision."
                value={formData.message}
                onChange={handleChange}
              />
              <div className="flex justify-between items-center mt-2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-gray-400">
                  Minimum 10 characters required
                </span>
                <span className={`text-xs transition-colors duration-200 ${formData.message.length > 1800 ? 'text-red-400' : 'text-gray-400'}`}>
                  {formData.message.length}/2000 characters
                </span>
              </div>
            </div>

            {/* Hidden Honeypot Field */}
            <input
              type="text"
              name="company"
              className="hidden"
              value={formData.company}
              onChange={handleChange}
            />

            {/* Submit Button with Enhanced States */}
            <button
              type="submit"
              disabled={status === 'loading' || formData.message.length < 10}
              className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                status === 'loading'
                  ? 'bg-blue-600 cursor-not-allowed opacity-75'
                  : status === 'success'
                  ? 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-green-500/25'
                  : status === 'error'
                  ? 'bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/25'
                  : 'bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25'
              }`}
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </span>
              ) : status === 'success' ? (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Message Sent!
                </span>
              ) : status === 'error' ? (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Try Again
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-900 bg-opacity-30 border border-green-700 rounded-lg animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-200 font-medium">Message sent successfully!</p>
                </div>
                <p className="text-green-300 text-sm mt-1">
                  I&apos;ll get back to you within 48 hours to discuss your project.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded-lg animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-200 font-medium">Something went wrong</p>
                </div>
                <p className="text-red-300 text-sm mt-1">
                  Please try again or contact me directly at (716) 400-1234.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
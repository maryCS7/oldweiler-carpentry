'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('[ContactPage] Server response:', data);

      if (res.ok) {
        setStatus('success');
        setFeedback('Your message has been sent. Thank you!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong.');
      }
    } catch (error: any) {
      console.error('[ContactPage] Error submitting form:', error);
      setStatus('error');
      setFeedback(error.message || 'Something went wrong. Please try again.');
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
          Have a question or ready to start your next project?
          Let's talk about how I can bring your vision to life. I'm here to help with your carpentry & home improvement needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-200">Get in Touch</h2>
          <p className="text-gray-300">
            I'm happy to chat about your ideas and answer any questions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-blue-400 text-xl">📞</span>
              <p><strong>Call or Text:</strong> (585) 734-5068</p>
            </div>
            <div className="flex items-center space-x-3">
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
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-400 text-xl">📍</span>
              <p>
                <strong>Location:</strong> Based in Attica, NY — serving the surrounding areas
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6">
            <iframe
              title="Attica NY Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11675.314661052455!2d-78.28005578787795!3d42.864865872969896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d2ac0f26b74e07%3A0xa927bbf607b93527!2sAttica%2C%20NY%2014044!5e0!3m2!1sen!2sus!4v1691508319430!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-blue-200">Send a Message</h3>

          {['name', 'email'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium mb-2">
                {field === 'name' ? 'Name' : 'Email'}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field as 'name' | 'email']}
                onChange={handleChange}
                required
                placeholder={`Your ${field}`}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {feedback && (
            <p
              className={`text-sm mt-2 text-center transition-opacity duration-500 ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
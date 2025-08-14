'use client';

import { useEffect, useState } from 'react';

interface Review {
  id: number;
  name: string;
  text: string;
  rating?: number;
  created_at: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    rating: 5
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('https://oldweiler-api-production.up.railway.app/reviews/');
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMsg('Name is required');
      setStatus('error');
      return;
    }
    
    if (!formData.text.trim() || formData.text.trim().length < 10) {
      setErrorMsg('Review must be at least 10 characters long');
      setStatus('error');
      return;
    }
    
    if (!formData.rating) {
      setErrorMsg('Please select a star rating');
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    try {
      const res = await fetch('https://oldweiler-api-production.up.railway.app/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          text: formData.text.trim(),
          rating: formData.rating
        }),
      });

      if (res.ok) {
        const newReview = await res.json();
        setReviews([newReview, ...reviews]);
        setFormData({ name: '', text: '', rating: 5 });
        setStatus('success');
        setErrorMsg('');
      } else {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'Failed to submit review');
      }
    } catch (error: unknown) {
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  // Filter reviews by rating
  const filteredReviews = selectedRating === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === selectedRating);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⭐</div>
          <p className="text-gray-400 text-lg">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <div className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold text-blue-300 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See what my clients have to say about their experience working with me. 
            Each review represents a satisfied customer and a completed project.
          </p>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Rating Filter */}
          <div className="text-center">
            <div className="inline-flex flex-wrap gap-2 justify-center bg-gray-800 p-2 rounded-full">
              <button
                onClick={() => setSelectedRating('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedRating === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                All ({reviews.length})
              </button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedRating === rating
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {rating}⭐
                </button>
              ))}
            </div>
          </div>

          {/* Reviews - New Layout */}
          {filteredReviews.length > 0 ? (
            <div className="space-y-8">
              {filteredReviews.map((review, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-6 items-center`}
                >
                  {/* Rating Side */}
                  <div className="flex-shrink-0">
                    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-center min-w-[120px]">
                      <div className="text-4xl mb-2">⭐</div>
                      <div className="text-2xl font-bold text-yellow-400 mb-1">
                        {review.rating || 5}
                      </div>
                      <div className="text-sm text-gray-400">out of 5</div>
                      <div className="flex justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-400 text-xs">
                            {star <= (review.rating || 5) ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                    <blockquote className="text-gray-300 text-lg leading-relaxed italic mb-4">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-200 font-semibold text-lg">– {review.name}</p>
                      <div className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded-full">
                        Review #{i + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">📝</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-3">
                {selectedRating === 'all' 
                  ? 'No reviews yet' 
                  : `No ${selectedRating}-star reviews yet`
                }
              </h3>
              <p className="text-gray-400 text-lg">
                {selectedRating === 'all' 
                  ? 'Be the first to share your experience!' 
                  : 'Check other ratings or be the first to leave a review!'
                }
              </p>
            </div>
          )}

          {/* Add Review Form - New Design */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-semibold text-blue-200 mb-2">Share Your Experience</h3>
              <p className="text-gray-300">
                Help others by sharing your thoughts about our work together
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 text-center">
                  Rate Your Experience <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-3 justify-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating })}
                      className={`w-14 h-14 rounded-xl text-xl transition-all duration-200 ${
                        formData.rating === rating
                          ? 'bg-yellow-500 text-white scale-110 shadow-lg'
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:scale-105'
                      }`}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-400 mt-3">
                  Selected: <span className="text-yellow-400 font-semibold">{formData.rating}</span> out of 5 stars
                </p>
                {!formData.rating && (
                  <p className="text-center text-sm text-red-400 mt-2">
                    Please select a star rating
                  </p>
                )}
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  required
                />
              </div>

              {/* Review Text */}
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Review <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="text"
                  name="text"
                  placeholder="Tell us about your experience working together..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  required
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    Minimum 10 characters required
                  </p>
                  <p className={`text-xs ${formData.text.length < 10 ? 'text-red-400' : 'text-gray-500'}`}>
                    {formData.text.length}/500 characters
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Review...
                  </span>
                ) : (
                  'Submit Review'
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-900 bg-opacity-30 border border-green-700 rounded-xl">
                  <div className="flex items-center text-green-200">
                    <span className="text-2xl mr-2">✅</span>
                    <p className="font-medium">Thank you! Your review has been added.</p>
                  </div>
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded-xl">
                  <div className="flex items-center text-red-200">
                    <span className="text-2xl mr-2">❌</span>
                    <p className="font-medium">Error: {errorMsg}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
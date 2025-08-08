'use client';
import { useEffect, useState } from 'react';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<{ name: string; text: string }[]>([]);
  const [formData, setFormData] = useState({ name: '', text: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('http://localhost:8000/reviews');
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:8000/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const newReview = await res.json();
        setReviews([newReview, ...reviews]);
        setFormData({ name: '', text: '' });
        setStatus('success');
      } else {
        throw new Error('Failed to submit review');
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMsg(error.message || 'Something went wrong');
    }
  };

  return (
    <div className="space-y-12 px-4 py-12 bg-gray-900 text-gray-200">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-300">Reviews</h1>
        <p className="text-lg max-w-2xl mx-auto">
          See what my clients have to say about their experience working with me.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
      {Array.isArray(reviews) && reviews.length > 0 ? (
        reviews.map((review, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-2 text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-300 mb-2 text-sm">"{review.text}"</p>
            <p className="text-xs text-gray-400 font-medium">– {review.name}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-m">No reviews yet — be the first to leave one!</p>
      )}
      </div>

      <div className="bg-blue-900 p-6 rounded-lg border-2 border-dashed border-blue-500 max-w-xl mx-auto">
        <h3 className="text-lg font-semibold text-blue-200 mb-2">Add Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <textarea
            name="text"
            placeholder="Your Review"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Submit Review'}
          </button>
          {status === 'success' && <p className="text-green-400">Thanks! Your review has been added.</p>}
          {status === 'error' && <p className="text-red-400">Error: {errorMsg}</p>}
        </form>
      </div>
    </div>
  );
}
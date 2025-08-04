export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-500">Reviews</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          See what my clients have to say about their experience working with me.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">5.0</span>
          </div>
          <p className="text-gray-700 mb-2 text-sm">
            "Excellent work on our kitchen remodel! Professional, timely, and the quality exceeded our expectations. Highly recommend!"
          </p>
          <p className="text-xs text-gray-600 font-medium">- Sarah & Mike Johnson</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">5.0</span>
          </div>
          <p className="text-gray-700 mb-2 text-sm">
            "Built us a beautiful deck that's become our favorite outdoor space. Attention to detail and craftsmanship is outstanding."
          </p>
          <p className="text-xs text-gray-600 font-medium">- David</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <span className="ml-2 text-sm text-gray-600">5.0</span>
          </div>
          <p className="text-gray-700 mb-2 text-sm">
            "Amazing attention to detail. Our custom bookshelves are exactly what we envisioned. Professional and punctual."
          </p>
          <p className="text-xs text-gray-600 font-medium">- Tom & Emily</p>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg border-2 border-dashed border-blue-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Your Review</h3>
        <p className="text-gray-600 mb-4">
          Had a great experience? Share your feedback to help others find quality craftsmanship.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  );
}
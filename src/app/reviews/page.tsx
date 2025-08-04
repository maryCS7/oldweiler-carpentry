export default function ReviewsPage() {
    return (
      <div className="space-y-12 px-4 py-12 bg-gray-900 text-gray-200">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-300">Reviews</h1>
          <p className="text-lg max-w-2xl mx-auto">
            See what my clients have to say about their experience working with me.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              text: "Excellent work on our kitchen remodel! Professional, timely, and the quality exceeded our expectations. Highly recommend!",
              name: "Sarah & Mike Johnson",
            },
            {
              text: "Built us a beautiful deck that's become our favorite outdoor space. Attention to detail and craftsmanship is outstanding.",
              name: "David",
            },
            {
              text: "Amazing attention to detail. Our custom bookshelves are exactly what we envisioned. Professional and punctual.",
              name: "Tom & Emily",
            },
          ].map((review, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-2 text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-2 text-sm">"{review.text}"</p>
              <p className="text-xs text-gray-400 font-medium">– {review.name}</p>
            </div>
          ))}
        </div>
  
        <div className="bg-blue-900 p-6 rounded-lg border-2 border-dashed border-blue-500">
          <h3 className="text-lg font-semibold text-blue-200 mb-2">Add Your Review</h3>
          <p className="text-gray-300 mb-4">
            Had a great experience? Share your feedback to help others find quality craftsmanship.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    );
  }
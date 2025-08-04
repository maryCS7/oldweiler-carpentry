export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-500">Contact Me</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Ready to start your next project? Let's discuss how I can help bring your vision to life.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm here to help with all your carpentry and home improvement needs. No project is too big or too small.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">📞</span>
              </div>
              <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">✉️</span>
              </div>
              <p className="text-gray-700"><strong>Email:</strong> contact@oldweiler-carpentry.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">📍</span>
              </div>
              <p className="text-gray-700"><strong>Location:</strong> Local to the greater area</p>
            </div>
          </div>
        </div>
        
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Send a Message</h3>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

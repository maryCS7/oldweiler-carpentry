'use client';

export default function FloatingButtons() {
  return (
    <>
      {/* AI Chat Button - top right with tooltip */}
      <button
        onClick={() => alert("Chat coming soon!")}
        className="group fixed top-6 right-6 bg-blue-400 text-white p-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-110 z-50"
        title="Chat with AI Assistant"
        aria-label="Chat with AI Assistant"
      >
        {/* Chat icon: speech bubble with dots */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a9 9 0 00-9 9v4a5 5 0 005 5h8a5 5 0 005-5v-4a9 9 0 00-9-9zM8 13h.01M16 13h.01M9 18h6" />
        </svg>

        {/* Tooltip */}
        <span className="absolute top-1/2 right-full mr-4 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity z-10">
          AI Chat
        </span>
      </button>

      {/* Home Button - bottom right */}
      <a
        href="/"
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-2.5 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-200 hover:scale-110 z-50"
        title="Back to Home"
        aria-label="Back to Home"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </>
  );
}
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center gap-8 text-blue-300 font-medium">
          <a href="/projects" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Projects</a>
          <a href="/gallery" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Gallery</a>
          <a href="/reviews" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Reviews</a>
          <a href="/contact" className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a>
        </nav>
      </header>

             {/* Hero Section with Image */}
       <section className="relative bg-gray-800 flex flex-col-reverse md:flex-row items-center justify-center min-h-[60vh] px-4">
         {/* Text */}
         <div className="md:w-1/2 py-10 text-center">
           <h1 className="text-5xl font-bold text-blue-400 mb-4">Oldweiler Custom Carpentry</h1>
           <p className="text-xl text-gray-300 max-w-md leading-relaxed mx-auto">
             Precision. Craft. Care. Built local.
           </p>
         </div>

         {/* Image */}
         <div className="md:w-1/2 flex justify-center">
           <img
             src="/hero1.jpg"
             alt="Custom carpentry project example"
             className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-lg"
           />
         </div>
       </section>

      {/* Services Section */}
<section className="py-12 px-4 bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-semibold text-blue-300 mb-6">Projects & Services</h2>
    <p className="text-gray-300 mb-6">
    I specialize in custom woodwork and home renovations, from built-ins and kitchens to decks and outdoor spaces. Every project is handcrafted with care and built to last.
    </p>
    <a
      href="/projects"
      className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md mb-4"
    >
      What I Do
    </a>
    <p className="text-sm text-gray-400">
      Curious what others are saying?{" "}
      <a
        href="/reviews"
        className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
      >
        Read customer reviews
      </a>
      .
    </p>
  </div>
</section>

{/* Gallery Section */}
<section className="py-12 px-4 bg-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-semibold text-blue-300 mb-6">Gallery</h2>
    <p className="text-gray-300 mb-4">
      I take pride in every detail, from framing to finish work. My gallery is coming soon with fresh project photos.
    </p>
    <a
      href="/gallery"
      className="inline-block text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
    >
      Check back for updates
    </a>
  </div>
</section>

{/* Contact Section */}
<section className="py-12 px-4 bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-semibold text-blue-300 mb-6">Get in Touch</h2>
    <p className="text-gray-300 mb-6">
      Ready to bring your vision to life? I’d love to hear more about your project.
    </p>
    <a
      href="/contact"
      className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md"
    >
      Contact Me
    </a>
  </div>
</section>
    </main>
  );
}
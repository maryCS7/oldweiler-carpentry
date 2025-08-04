export default function HomePage() {
  return (
    <div className="space-y-12 text-center mt-30">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-gray-500">Oldweiler Custom Carpentry</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Quality craftsmanship for your home improvement projects—built with care, precision, and pride.
        </p>
      </div>
      
      <div className="flex justify-center gap-6">
        <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg">
          Projects
        </a>
        <a href="./reviews" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg">
          Reviews
        </a>
        <a href="./contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg">
          Contact Me
        </a>
      </div>
    </div>
  );
}
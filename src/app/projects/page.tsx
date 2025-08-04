export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-500">Projects</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Take a look at some of my recent work and completed projects.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Kitchen Remodel</h3>
          <p className="text-gray-600 mb-4">Complete kitchen renovation with custom cabinets and countertops.</p>
          <span className="text-sm text-blue-600 font-medium">Completed 2024</span>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Deck Construction</h3>
          <p className="text-gray-600 mb-4">Custom outdoor deck with built-in seating and railings.</p>
          <span className="text-sm text-blue-600 font-medium">Completed 2024</span>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Bathroom Update</h3>
          <p className="text-gray-600 mb-4">Modern bathroom renovation with custom vanity and tile work.</p>
          <span className="text-sm text-blue-600 font-medium">Completed 2023</span>
        </div>
      </div>
    </div>
  );
}
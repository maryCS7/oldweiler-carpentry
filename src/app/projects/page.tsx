export default function ProjectsPage() {
    return (
      <div className="space-y-12 px-4 py-12 bg-gray-900 text-gray-200">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-300">Projects</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Take a look at some of my recent work and completed projects.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Kitchen Remodel",
              desc: "Complete kitchen renovation with custom cabinets and countertops.",
              date: "Completed 2024",
            },
            {
              title: "Deck Construction",
              desc: "Custom outdoor deck with built-in seating and railings.",
              date: "Completed 2024",
            },
            {
              title: "Bathroom Update",
              desc: "Modern bathroom renovation with custom vanity and tile work.",
              date: "Completed 2023",
            },
          ].map((project, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <span className="text-sm text-blue-400 font-medium">{project.date}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
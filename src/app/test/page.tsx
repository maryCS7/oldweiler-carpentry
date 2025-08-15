import { projects } from '@/data/projects';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
      <h1 className="text-4xl font-bold text-blue-300 mb-8">Test Page - Projects Data</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((project, index) => (
          <div key={project.slug} className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
            <p className="text-xs text-gray-400 mt-2">Slug: {project.slug}</p>
            <p className="text-xs text-gray-400">Index: {index}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-300 mb-4">Raw Data Check</h2>
        <div className="bg-gray-800 rounded-lg p-4">
          <pre className="text-xs text-gray-300 overflow-auto">
            {JSON.stringify(projects.slice(0, 3), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

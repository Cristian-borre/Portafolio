import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  // Datos de ejemplo (puedes reemplazarlos con los tuyos)
  const projects = [];

  // Agrupar proyectos por categoría
  const categories = [];

  const filteredCategories = categories.filter(category => 
    projects.some(project => project.category === category)
  );

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mostrar solo si hay al menos una categoría */}
        {filteredCategories.length > 0 ? (
          <>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
            
            {filteredCategories.map((category, index) => {
              const categoryProjects = projects.filter(project => project.category === category);

              // Mostrar categoría solo si tiene más de un proyecto
              return categoryProjects.length > 0 ? (
                <div key={index} className="mt-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4">{category}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              ) : null;
            })}
          </>
        ) : (
          // Mostrar un mensaje si no hay categorías o proyectos
          <p className="text-center text-lg text-gray-700">No hay proyectos disponibles por ahora.</p>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;

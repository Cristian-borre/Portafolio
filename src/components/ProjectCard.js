import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      {/* Imagen del proyecto */}
      <img src={project.imageUrl} alt={project.name} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"/>

      {/* Contenido del proyecto */}
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">{project.description}</p>

        {/* Tecnologías utilizadas */}
        <div className="mt-4">
          <span className="font-semibold text-gray-800">Tecnologías:</span>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <li key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Enlaces a demo y repositorio */}
        <div className="mt-4 flex justify-between items-center text-sm sm:text-base">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Ver Demo
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
            Ver Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

const Services = () => {

    return (
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Servicios</h2>
  
          {/* Descripción de Servicios */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 px-8 lg:p-0">¿Qué ofrezco?</h3>
            <p className="text-lg sm:text-xl text-gray-700 px-8 lg:p-0">
              Ofrezco servicios de desarrollo personalizados para cubrir tus necesidades tecnológicas. Ya sea que necesites una aplicación web,
              una app móvil o una aplicación de escritorio, tengo la experiencia y las herramientas necesarias para crear soluciones eficientes y
              funcionales. Aquí te enumero los tipos de proyectos que puedo desarrollar para ti:
            </p>
            <ul className="mt-6 list-disc text-lg sm:text-xl text-gray-700 px-8 lg:pl-6">
              <li>Desarrollo de aplicaciones web (React, Node.js, etc.)</li>
              <li>Aplicaciones móviles (Flutter, React Native, etc.)</li>
              <li>Desarrollo de aplicaciones de escritorio (Electron, etc.)</li>
              <li>Soluciones personalizadas y sistemas a medida</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  
import React from 'react';

const AboutMe = () => {

  const habilities = ['HTML', 'CSS', 'Javascript', 'React', 'Angular', 'Vue', 'Node', 'Python', 'PHP', 'Electron', 'C#', 'Java', 'SQL', 'Postgresql', 'Mysql']

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Sobre mí</h2>

        {/* Historia */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 px-8 lg:p-0">Mi Historia</h3>
            <p className="text-lg text-gray-700 px-8 lg:p-0">
              Soy un apasionado por la tecnología, especialmente por el desarrollo de aplicaciones web, móviles y de escritorio.
              Comencé a programar desde joven, y mi interés por la tecnología ha crecido a medida que he aprendido nuevas herramientas y frameworks.
              Lo que más me motiva a programar es la posibilidad de resolver problemas reales y crear soluciones que mejoren la vida de las personas.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center">
            <img
              src="/images/hero.jpg" // Asegúrate de poner tu foto en la carpeta 'public/images'
              alt="Foto de perfil"
              className="rounded-full w-48 h-48 mx-auto object-cover"
            />
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 px-8 lg:p-0">Habilidades Técnicas</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {habilities.map(item=>(
              <li className="bg-gray-200 text-gray-700 p-2 rounded-full text-center">{item}</li>
            ))}
            {/* Agrega más habilidades según sea necesario */}
          </ul>
        </div>

        {/* Logros o Certificaciones (comentado por ahora) */}
        {/* <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Logros y Certificaciones</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Certificación en Desarrollo Web Full Stack (Coursera, 2023)</li>
            <li>Premio al Mejor Proyecto de Innovación en Hackathon de Tecnología (2022)</li>
            <li>Certificación en Flutter y Dart (Udemy, 2023)</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default AboutMe;

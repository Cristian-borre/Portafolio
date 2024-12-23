import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-gray-100" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Filtro oscuro sobre la imagen */}
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-6 sm:px-10 md:px-14 lg:px-20">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Hola, soy Cristian José Borré Gonzalez
          </h2>
          <p className="mt-4 px-8 text-lg sm:text-xl md:text-2xl text-white">
            Desarrollador con experiencia en creación y mantenimiento de WebApps, DesktopApps y
            MobileApps en diversos lenguajes de programación.
            Conocimientos en bases de datos, sistema de control de versiones, linux, máquinas virtuales, metodologías ágiles como scrum, y manejo de datos geoespaciales.
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Ver mis proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

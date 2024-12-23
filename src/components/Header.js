import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para cambiar el estado del menú (abrir/cerrar)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white py-4 md:p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <h1 className="text-3xl font-bold ml-4">Mi Portafolio</h1>
        
        {/* Menú de navegación */}
        <nav>
          {/* Menú en dispositivos grandes (pantallas medianas o más grandes) */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#about" className="hover:underline">Sobre mí</a></li>
            <li><a href="#services" className="hover:underline">Servicios</a></li>
            <li><a href="#projects" className="hover:underline">Proyectos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>

          {/* Menú de hamburguesa en dispositivos pequeños */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú desplegable para pantallas pequeñas */}
          {menuOpen && (
            <ul className="absolute top-12 left-0 w-full bg-black text-white p-4 space-y-4 md:hidden z-50">
              <li><a href="#about" className="hover:underline">Sobre mí</a></li>
              <li><a href="#services" className="hover:underline">Servicios</a></li>
              <li><a href="#projects" className="hover:underline">Proyectos</a></li>
              <li><a href="#contact" className="hover:underline">Contacto</a></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;

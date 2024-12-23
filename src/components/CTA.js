import React from 'react';

const CTA = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-4 text-center">
      <h3 className="text-2xl sm:text-3xl font-semibold">¿Estás listo para trabajar juntos?</h3>
      <p className="mt-2 text-lg sm:text-xl">¡Puedo ayudarte a llevar tus proyectos al siguiente nivel!</p>
      <a
        href="#contact"
        className="mt-6 inline-block bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-400 transition"
      >
        Contáctame
      </a>
    </div>
  );
}

export default CTA;

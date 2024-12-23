import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario (p. ej. con un servicio de correo)
    console.log('Formulario enviado', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>

        {/* Formulario de contacto */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Envíame un mensaje</h3>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Sígueme en redes sociales</h3>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-github text-3xl sm:text-4xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/cristian-borre" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-linkedin text-3xl sm:text-4xl"></i>
            </a>
            <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-twitter text-3xl sm:text-4xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui você pode colocar sua lógica de envio do formulário
    console.log("Formulário Enviado! Nome:", name, "Email:", email, "Mensagem:", message);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
       <div className="flex justify-center items-center">
            <h2 class="text-3xl font-bold mb-12 text-center text-gray-600">Fale com a gente</h2>      
        </div>
        
        <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Nome
        </label>
        <input 
          className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input 
          className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
          Mensagem
        </label>
        <textarea
          className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full"
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className="bg-indigo-500 text-white rounded-lg py-2 px-4 hover:bg-indigo-600">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
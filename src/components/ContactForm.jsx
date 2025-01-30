import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-gray-800 font-semibold mb-4">Szybki Kontakt</h3>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Imię i nazwisko"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <textarea
            placeholder="Krótki opis sprawy"
            rows="4"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        <button type="submit" className="w-full btn btn-primary">
          Wyślij
        </button>
      </form>
    </div>
  );
}

import React from 'react';
import { FaPhone } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="pt-24 min-h-screen bg-gradient-radial from-secondary via-secondary-dark to-secondary">
      <div className="container flex flex-col md:flex-row items-center gap-12 py-16">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Profesjonalna Pomoc Prawna
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-accent">
            Sprawy spadkowe • Wypadki • Kredyty frankowe • Rozwody • Sprawy karne
          </h2>
          <div className="space-y-4">
            <a href="tel:609798775" 
               className="inline-flex items-center gap-2 btn btn-primary">
              <FaPhone />
              Zadzwoń teraz: 609 798 775
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-primary">Szybki Kontakt</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="input-field"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Telefon"
                className="input-field"
              />
            </div>
            <div>
              <textarea
                placeholder="Krótki opis sprawy"
                rows="4"
                className="input-field"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

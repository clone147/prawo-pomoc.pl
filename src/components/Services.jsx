import React from 'react';
import { FaBalanceScale, FaHome, FaCar, FaHandshake, FaGavel, FaHeart } from 'react-icons/fa';

const services = [
  {
    icon: <FaBalanceScale className="text-4xl" />,
    title: 'Sprawy Spadkowe',
    description: 'Kompleksowa pomoc w sprawach spadkowych, testamentach i dziedziczeniu.'
  },
  {
    icon: <FaCar className="text-4xl" />,
    title: 'Wypadki',
    description: 'Odszkodowania i zadośćuczynienia za wypadki komunikacyjne.'
  },
  {
    icon: <FaHandshake className="text-4xl" />,
    title: 'Kredyty Frankowe',
    description: 'Pomoc w sprawach związanych z kredytami we frankach szwajcarskich.'
  },
  {
    icon: <FaHeart className="text-4xl" />,
    title: 'Sprawy Rozwodowe',
    description: 'Prowadzenie spraw rozwodowych i podziału majątku.'
  },
  {
    icon: <FaGavel className="text-4xl" />,
    title: 'Sprawy Karne',
    description: 'Obrona w sprawach karnych i reprezentacja przed sądem.'
  },
  {
    icon: <FaHome className="text-4xl" />,
    title: 'Sprawy Majątkowe',
    description: 'Pomoc w sprawach podziału majątku i nieruchomości.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Zakres Spraw</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary/50 p-8 rounded-lg hover:bg-secondary transition-colors">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-accent">{service.description}</p>
              <button className="mt-4 text-primary-light hover:text-primary">
                Dowiedz się więcej
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

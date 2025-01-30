import React from 'react';
import { FaClock, FaUserTie, FaBalanceScale } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaClock className="text-4xl" />,
    title: 'Szybka Reakcja',
    description: 'Natychmiastowa odpowiedź na Twoje potrzeby prawne'
  },
  {
    icon: <FaUserTie className="text-4xl" />,
    title: 'Doświadczenie',
    description: 'Ponad 18 lat doświadczenia w branży prawniczej'
  },
  {
    icon: <FaBalanceScale className="text-4xl" />,
    title: 'Profesjonalizm',
    description: 'Indywidualne podejście do każdej sprawy'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego My?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

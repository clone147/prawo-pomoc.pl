import React from 'react';

const cases = [
  {
    type: 'Odszkodowanie',
    result: '250 000 zł',
    description: 'Uzyskane odszkodowanie w sprawie wypadku komunikacyjnego'
  },
  {
    type: 'Kredyt Frankowy',
    result: 'Unieważnienie umowy',
    description: 'Skuteczne unieważnienie umowy kredytu frankowego'
  },
  {
    type: 'Sprawa Spadkowa',
    result: 'Korzystny podział',
    description: 'Pomyślne przeprowadzenie postępowania spadkowego'
  }
];

export default function CaseResults() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Przykładowe Sprawy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-primary font-semibold mb-2">{case_.type}</div>
              <div className="text-2xl font-bold mb-2">{case_.result}</div>
              <p className="text-gray-600">{case_.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

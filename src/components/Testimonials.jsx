import React from 'react';

const testimonials = [
  {
    text: "Profesjonalna obsługa i skuteczna pomoc w trudnej sprawie spadkowej.",
    client: "Jan Kowalski",
    type: "Klient indywidualny"
  },
  {
    text: "Bardzo dobra współpraca. Polecam szczególnie w sprawach odszkodowawczych.",
    client: "Anna Nowak",
    type: "Klient indywidualny"
  },
  {
    text: "Skuteczni i profesjonalni prawnicy. Pomogli nam w skomplikowanej sprawie.",
    client: "PROMAX",
    type: "Klient biznesowy"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Opinie Klientów</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="italic mb-4">{testimonial.text}</p>
              <div className="font-semibold">{testimonial.client}</div>
              <div className="text-sm text-gray-600">{testimonial.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

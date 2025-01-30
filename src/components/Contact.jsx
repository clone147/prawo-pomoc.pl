import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Dane kontaktowe</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <div>
                  <div>Radca prawny: 609 798 775</div>
                  <div>Adwokat: 693 629 490</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <div>
                  <div>agata.cichosz@gmail.com</div>
                  <div>szymon.kanclerski@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <div>ul. Toruńska 2A lok. 13, 97-300 Piotrków Tryb.</div>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-primary" />
                <div>Pon-Pt: 9:00 - 17:00</div>
              </div>
            </div>
          </div>
          <div>
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
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Treść wiadomości"
                  rows="4"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

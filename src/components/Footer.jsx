import React from 'react';
import { Link } from 'react-scroll';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">O nas</h3>
            <p className="text-gray-400">
              Profesjonalna pomoc prawna w sprawach cywilnych i karnych. Ponad 18 lat doświadczenia.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Szybki kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>609 798 775</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>agata.cichosz@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Toruńska 2A lok. 13, Piotrków Tryb.</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="services" smooth={true} className="text-gray-400 hover:text-white cursor-pointer">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} className="text-gray-400 hover:text-white cursor-pointer">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} className="text-gray-400 hover:text-white cursor-pointer">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Godziny otwarcia</h3>
            <div className="text-gray-400">
              <p>Poniedziałek - Piątek</p>
              <p>9:00 - 17:00</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 Kancelaria Radcy Prawnego i Adwokata Cichosz-Nalepa Kanclerski. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

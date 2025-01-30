import React from 'react';
import { FaPhone, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa';

export default function FloatingElements() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 space-y-4">
        <a
          href="tel:609798775"
          className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90"
        >
          <FaPhone />
        </a>
        <button
          className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700"
        >
          <FaExclamationTriangle />
        </button>
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900"
        >
          <FaArrowUp />
        </button>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaPhone } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed w-full bg-secondary/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">
          Kancelaria Cichosz-Nalepa Kanclerski
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="services" smooth={true} className="text-primary hover:text-primary-light cursor-pointer">
            Usługi
          </Link>
          <Link to="about" smooth={true} className="text-primary hover:text-primary-light cursor-pointer">
            O nas
          </Link>
          <Link to="contact" smooth={true} className="text-primary hover:text-primary-light cursor-pointer">
            Kontakt
          </Link>
          
          <a href="tel:609798775" className="btn btn-primary flex items-center gap-2">
            <FaPhone />
            609 798 775
          </a>
          
          <button className="btn btn-emergency">
            Pilny kontakt
          </button>
          
          <div className="flex gap-2">
            <button className="px-2 text-primary hover:text-primary-light">PL</button>
            <button className="px-2 text-primary hover:text-primary-light">EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

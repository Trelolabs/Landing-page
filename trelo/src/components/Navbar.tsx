import React from 'react';

const Navbar: React.FC = () => (
  <header className="flex justify-between items-center px-6 md:px-20 py-6">
    <div className="text-2xl font-bold">Trelo Labs</div>

    <nav className="hidden md:flex items-center space-x-6">
      <a href="#services" className="hover:text-gray-300">Services</a>
      <a href="#work" className="hover:text-gray-300">Work</a>
      <a href="#results" className="hover:text-gray-300">Results</a>
      <a href="#about" className="hover:text-gray-300">About</a>
      <a href="#contact" className="hover:text-gray-300">Contact</a>

      <button className="bg-green-500 text-black px-4 py-2 rounded-md ml-4">
        Get A Free Consultation
      </button>
    </nav>
  </header>
);

export default Navbar;

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'projects', 'about', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 px-6 md:px-20 py-4 transition-all duration-300">
      <div className="flex justify-between items-center">
        <div 
          className="text-2xl font-bold cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          Trelo Labs
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                activeSection === item.id 
                ? 'text-green-500' 
                : 'text-white hover:text-green-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-300" />
              )}
            </button>
          ))}
          <a 
            href="https://calendly.com/shyambalanagu724/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-6 py-2 rounded-md hover:bg-green-400 transition-colors duration-300"
          >
            Book a Call
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className={`md:hidden transition-all duration-300 ${
        isMenuOpen 
        ? 'max-h-screen opacity-100 visible' 
        : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="flex flex-col space-y-4 py-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-left transition-colors duration-300 ${
                activeSection === item.id 
                ? 'text-green-500 bg-gray-800' 
                : 'text-white hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-400 transition-colors duration-300 mx-4"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

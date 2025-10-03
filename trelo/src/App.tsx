// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Contact />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <About />
      <Footer />
    </div>

  );
};


export default App;
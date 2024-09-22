import React from 'react';
import './App.css';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  const toggleSubmenu = (event) => {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <>
    <Header toggleSubmenu={toggleSubmenu} />
      <HeroSection />
      <ServiceSection />
      <Reviews />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
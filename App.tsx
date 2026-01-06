import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Agency } from './components/Agency';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Global scroll observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Delay slightly to ensure DOM is ready
    const timer = setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }, 100);
    
    return () => {
        observer.disconnect();
        clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Agency />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
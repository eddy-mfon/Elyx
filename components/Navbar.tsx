import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowDownRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Check if it's an anchor link
    if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1));
        if (element) {
            const offset = 80; // Height of the fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    } else {
        // Handle external links or routes if any
        window.location.href = href;
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
          scrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-md py-4 border-gray-100' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#" 
            className="relative z-50 text-2xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity"
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
            }}
          >
            Ellis.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              Let's Talk
              <ArrowDownRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 -mr-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden flex flex-col pt-32 px-6 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-5xl font-black tracking-tighter uppercase hover:text-gray-500 transition-colors border-b border-gray-100 pb-6"
              onClick={(e) => scrollToSection(e, link.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto pb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Get in touch</p>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-2xl font-bold border-b-2 border-black pb-1 inline-block">
                Start a Project
            </a>
            <div className="mt-8 flex gap-4 text-sm font-medium text-gray-500">
                <a href="https://www.tiktok.com/@justelyx?_r=1&_t=ZM-92pbikPfJ7o" target="_blank" rel="noopener noreferrer">TikTok</a>
                <a href="https://youtube.com/@kubemedia1?si=OhsT6BIww7lXhBey" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
        </div>
      </div>
    </>
  );
};
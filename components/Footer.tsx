import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10 relative overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                
                {/* Brand / Tagline */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-[12vw] md:text-8xl font-black tracking-tighter leading-none mb-6 text-white">
                            Ellis.
                        </h2>
                        <p className="text-gray-400 text-lg font-medium max-w-sm leading-relaxed">
                            Merging mathematical precision with artistic flow to create timeless visuals.
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-7 flex flex-wrap gap-16 md:justify-end">
                    
                    {/* SITEMAP */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sitemap</span>
                        {['Work', 'Services', 'About', 'Contact'].map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                className="text-xl font-bold hover:text-gray-400 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* SOCIALS */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Socials</span>
                        <a href="https://www.instagram.com/kubemediaproductions?igsh=MXh0ejh4dXo4ajVjeg==" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-gray-400 transition-colors">Instagram</a>
                        <a href="https://www.tiktok.com/@justelyx?_r=1&_t=ZM-92pbikPfJ7o" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-gray-400 transition-colors">TikTok</a>
                        <a href="https://youtube.com/@kubemedia1?si=OhsT6BIww7lXhBey" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-gray-400 transition-colors">YouTube</a>
                    </div>

                    {/* CONTACT */}
                    <div className="flex flex-col gap-6">
                         <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Inquiries</span>
                         <a href="mailto:Igeneeellis@gmail.com" className="text-xl font-bold hover:text-gray-400 transition-colors">Igeneeellis@gmail.com</a>
                         <a href="mailto:kubemedia00@gmail.com" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Agency: kubemedia00@gmail.com</a>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10 gap-6">
                
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Based in Ogun State, Nigeria
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                         © {currentYear} Ellis Productions. All rights reserved.
                    </span>
                </div>

                <button 
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                >
                    Back to Top
                    <span className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                        <ArrowUp size={14} />
                    </span>
                </button>

            </div>

        </div>
    </footer>
  );
};
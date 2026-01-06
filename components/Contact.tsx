import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-black text-white min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        
        <div className="fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 md:mb-12 backdrop-blur-sm">
                Project Inquiry
            </span>
        </div>

        <h2 className="text-2xl md:text-5xl font-medium tracking-tight mb-12 md:mb-20 text-gray-500 fade-in-up" style={{ transitionDelay: '0.1s' }}>
           Ready to create something<br/>
           <span className="text-white font-bold">unforgettable?</span>
        </h2>

        <a 
           href="mailto:Igeneeellis@gmail.com" 
           className="group relative inline-flex items-center gap-2 md:gap-6 text-[8vw] md:text-[6vw] font-black tracking-tighter leading-none text-white hover:text-gray-300 transition-colors duration-300 fade-in-up pb-2"
           style={{ transitionDelay: '0.2s' }}
        >
           Igeneeellis@gmail.com
           <ArrowUpRight className="w-[6vw] h-[6vw] opacity-50 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500 ease-out" />
        </a>

        <div className="mt-20 md:mt-32 flex flex-wrap justify-center gap-8 md:gap-20 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-600 fade-in-up" style={{ transitionDelay: '0.3s' }}>
           <a href="https://www.tiktok.com/@justelyx?_r=1&_t=ZM-92pbikPfJ7o" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
           <a href="https://youtube.com/@kubemedia1?si=OhsT6BIww7lXhBey" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
        </div>
        
        <div className="mt-12 md:mt-16 text-gray-800 text-[10px] md:text-xs font-bold uppercase tracking-widest fade-in-up" style={{ transitionDelay: '0.4s' }}>
            Based in Ogun, Nigeria • Available Worldwide
        </div>

      </div>
    </section>
  );
};
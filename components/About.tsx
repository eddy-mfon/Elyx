import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        <div className="relative fade-in-up">
             <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
                <img src="https://picsum.photos/600/800?random=10" alt="Ellis working" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-black text-white flex items-center justify-center rounded-full shadow-2xl z-10">
                <span className="font-black text-xl md:text-3xl text-center leading-none">Est.<br/>2020</span>
             </div>
        </div>

        <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.9]">
                From Calculations<br/>to Cinematography.
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                <p>
                    My path wasn't linear. It started in the lecture halls of <span className="text-black font-bold">Covenant University</span>, solving complex equations and studying patterns.
                </p>
                <p>
                    But the numbers eventually turned into frames. Logic turned into rhythm. Based in <span className="text-black font-bold">Ogun State</span>, I found that the discipline of mathematics was the perfect foundation for the chaos of creativity.
                </p>
                <p>
                    Now, I apply that same analytical rigor to filmmaking. Every shot is calculated, every edit is precise, ensuring that the final output isn't just a video—it's an experience.
                </p>
            </div>
            
            <div className="mt-10 md:mt-12 flex flex-wrap gap-8 md:gap-12 border-t border-gray-100 pt-8">
                <div>
                    <span className="block text-3xl md:text-4xl font-black text-black">5+</span>
                    <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Years Exp</span>
                </div>
                <div>
                    <span className="block text-3xl md:text-4xl font-black text-black">25+</span>
                    <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Projects</span>
                </div>
                <div>
                    <span className="block text-3xl md:text-4xl font-black text-black">10M+</span>
                    <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Views</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
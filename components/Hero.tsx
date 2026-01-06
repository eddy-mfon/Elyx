import React from 'react';
import { ArrowRight, MapPin, Award } from 'lucide-react';
import { CLIENT_LOGOS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-white pt-32 md:pt-40 px-6">
      
      {/* Main Content Container */}
      <div className="flex-grow flex flex-col justify-center w-full max-w-[1400px] mx-auto">
        
        {/* 1. Availability Badge */}
        <div className="mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-200 bg-gray-50 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for Remote Work
            </span>
        </div>

        {/* 2. Massive Name (The Anchor) */}
        <div className="border-b-2 border-black pb-4 mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-[20vw] md:text-[18vw] leading-[0.7] md:leading-[0.75] font-black tracking-tighter text-black uppercase -ml-[1vw]">
                Ellis.
            </h1>
        </div>

        {/* 3. Textual Design Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Left Column: Headline & Services */}
            <div className="md:col-span-7 flex flex-col justify-between">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8">
                        SCULPTING<br/>
                        <span className="text-transparent text-outline">TIME</span> & <span className="text-transparent text-outline">LIGHT.</span>
                    </h2>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {['Direction', 'Editing', 'Color Grading', 'Sound Design', 'VFX'].map((skill) => (
                            <span key={skill} className="px-3 py-1.5 md:px-4 md:py-2 border border-gray-200 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Bio, Stats & CTA */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 md:pl-8 border-l-0 md:border-l border-gray-100">
                
                <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-800">
                    Merging the precision of mathematics with the fluidity of art. 
                    <span className="text-gray-400 block mt-2 text-base md:text-lg">
                        Based in Ogun State, crafting high-impact visuals for brands across Nigeria and beyond.
                    </span>
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-0.5 md:mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Base</span>
                            <span className="font-bold text-sm md:text-base">Ogun, Nigeria</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Award size={18} className="mt-0.5 md:mt-1 flex-shrink-0" />
                        <div>
                            <span className="block text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Education</span>
                            <span className="font-bold text-sm md:text-base">B.Sc Mathematics</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-4">
                    <a href="#work" className="group inline-flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold uppercase tracking-wider hover:gap-6 transition-all">
                        Selected Works <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </a>
                </div>
            </div>

        </div>

      </div>

      {/* Footer / Logos */}
      <div className="w-full max-w-[1400px] mx-auto py-12 border-t border-gray-100 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center md:text-left whitespace-nowrap">
                Trusted by industry leaders
             </p>
             <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-6 md:gap-16 grayscale opacity-40 hover:opacity-100 transition-opacity w-full">
                 {CLIENT_LOGOS.map(client => (
                     <span key={client} className="font-bold text-lg md:text-2xl tracking-tighter text-gray-900">{client}</span>
                 ))}
             </div>
        </div>
      </div>

    </section>
  );
};
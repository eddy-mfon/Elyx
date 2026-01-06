import React from 'react';
import { Clapperboard, Film, Palette, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Clapperboard,
    title: "Production",
    description: "Full-service production for music videos, commercials, and brand films. From concept development to the final shot, I handle the logistics and creative direction.",
    tags: ["Direction", "Cinematography", "Lighting"]
  },
  {
    icon: Film,
    title: "Post-Production",
    description: "Crafting the narrative in the edit suite. Rhythm, pacing, and flow are meticulously calculated to maximize emotional impact and viewer retention.",
    tags: ["Editing", "Sound Design", "VFX"]
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Elevating footage with professional color grading. Creating distinct visual palettes that enhance the mood and style of the film.",
    tags: ["Color Correction", "Look Development", "Finishing"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16 md:flex justify-between items-end fade-in-up">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">What I Do</h2>
          </div>
          <p className="md:w-1/3 text-gray-500 mt-6 md:mt-0 font-medium leading-relaxed">
            Bridging the gap between technical precision and creative expression to deliver high-end visual content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group border border-gray-200 p-8 rounded-2xl hover:border-black transition-all duration-300 relative overflow-hidden fade-in-up hover:shadow-xl bg-white"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight size={24} />
              </div>
              
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 rounded-full group-hover:bg-gray-100 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
          <h2 className="text-[20vw] font-black leading-none text-center whitespace-nowrap">
            FEEDBACK
          </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 fade-in-up">
          <span className="inline-block px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            Client Reviews
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Trusted by the Best.
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 font-medium text-lg">
            Real stories from directors, brand managers, and artists about the collaborative process.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={t.id} 
              className="group p-8 md:p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col fade-in-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-black opacity-40 group-hover:opacity-100 transition-opacity">
                 {[1,2,3,4,5].map(n => <Star key={n} size={14} fill="currentColor" />)}
              </div>

              <Quote className="text-gray-300 w-10 h-10 mb-6 group-hover:text-black group-hover:scale-110 transition-all duration-500" />
              
              <p className="text-base md:text-xl font-medium leading-relaxed text-gray-700 mb-8 flex-grow">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                <div className="w-12 h-12 bg-gray-200 text-gray-500 group-hover:bg-black group-hover:text-white transition-colors duration-500 flex items-center justify-center rounded-full font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black uppercase tracking-wider text-xs md:text-sm">{t.author}</h4>
                  <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-gray-600 transition-colors">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12 fade-in-up">
            {[
                { label: "Repeat Clients", value: "85%" },
                { label: "Projects Completed", value: "150+" },
                { label: "Years Active", value: "5+" },
                { label: "Client Satisfaction", value: "100%" }
            ].map((stat, idx) => (
                <div key={idx} className="text-center">
                    <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
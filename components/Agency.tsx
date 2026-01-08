import React from 'react';
import { Layers, Zap, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AGENCY_CLIENTS } from '../constants';

export const Agency: React.FC = () => {
  return (
    <section className="bg-zinc-950 text-white py-24 md:py-32 px-6 relative overflow-hidden border-t border-white/10">
      {/* Background Elements - Schematic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.05)_0%,transparent_70%)]"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-b border-white/10 pb-12 fade-in-up">
              <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-6">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-[#38b6ff]"></div>
                        <div className="w-1 h-1 bg-[#38b6ff] opacity-50"></div>
                        <div className="w-1 h-1 bg-[#38b6ff] opacity-25"></div>
                      </div>
                      <span className="text-[#38b6ff] font-mono font-bold tracking-[0.2em] uppercase text-xs">
                          Editing Partner
                      </span>
                  </div>

                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85]">
                      KUBE<span className="text-gray-700">MEDIA</span>
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed">
                      Your dedicated video editing team. We turn raw footage into high-performing content, so you can focus on creating.
                  </p>
              </div>
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
                  <div className="text-right hidden lg:block">
                      <div className="text-xs text-gray-500 font-mono mb-1">CAPACITY STATUS</div>
                      <div className="flex items-center gap-2 text-[#38b6ff] font-bold text-sm uppercase tracking-widest">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38b6ff] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38b6ff]"></span>
                          </span>
                          Open for Partners
                      </div>
                  </div>
              </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden fade-in-up" style={{ transitionDelay: '0.1s' }}>
              
              {/* Feature 1 */}
              <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                  <div className="mb-6 flex justify-between items-start">
                      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-[#38b6ff]">
                          <Zap size={24} />
                      </div>
                      <span className="font-mono text-[10px] text-gray-600">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#38b6ff] transition-colors">Fast Turnaround</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      Get your edits back in 48 hours. We stick to your schedule so you never miss a upload day.
                  </p>
                  <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-[#38b6ff] w-3/4"></div>
                  </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                  <div className="mb-6 flex justify-between items-start">
                      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-[#38b6ff]">
                          <Activity size={24} />
                      </div>
                      <span className="font-mono text-[10px] text-gray-600">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#38b6ff] transition-colors">Viewer Retention</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      We edit to keep eyes on the screen. Pacing, hooks, and sound design that boosts watch time.
                  </p>
                  <div className="flex gap-1 mt-auto">
                    {[1,2,3,4,5].map(i => <div key={i} className={`h-1 w-full rounded-full ${i > 1 ? 'bg-[#38b6ff]' : 'bg-zinc-800'}`}></div>)}
                  </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                  <div className="mb-6 flex justify-between items-start">
                      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-[#38b6ff]">
                          <Layers size={24} />
                      </div>
                      <span className="font-mono text-[10px] text-gray-600">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#38b6ff] transition-colors">Scalable Growth</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      Whether you need 4 videos a month or 30, our team expands with your channel's needs.
                  </p>
                  <div className="grid grid-cols-4 gap-1">
                     {Array.from({length: 8}).map((_, i) => <div key={i} className="w-full h-1 bg-zinc-800 rounded-full group-hover:bg-[#38b6ff] transition-colors" style={{ transitionDelay: `${i * 50}ms`}}></div>)}
                  </div>
              </div>

              {/* Metric 1 */}
              <div className="bg-zinc-950 p-10 flex flex-col justify-center items-center text-center border-t border-white/10 md:border-t-0">
                  <div className="text-5xl font-black text-white mb-2">48<span className="text-[#38b6ff] text-2xl">h</span></div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Delivery</div>
              </div>

              {/* Metric 2 */}
              <div className="bg-zinc-950 p-10 flex flex-col justify-center items-center text-center border-t border-white/10 md:border-t-0">
                  <div className="text-5xl font-black text-white mb-2">40<span className="text-[#38b6ff] text-2xl">%</span></div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Growth</div>
              </div>

              {/* Metric 3 */}
              <div className="bg-zinc-950 p-10 flex flex-col justify-center items-center text-center border-t border-white/10 md:border-t-0">
                  <div className="text-5xl font-black text-white mb-2">100<span className="text-[#38b6ff] text-2xl">+</span></div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Videos / Month</div>
              </div>
          </div>

          {/* Logos Section */}
          <div className="mt-20 md:mt-24 pt-12 border-t border-white/10 text-center fade-in-up">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-10">Powering Top Creators</p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12">
                  {AGENCY_CLIENTS.map((client, index) => (
                      <div key={index} className="group relative">
                          <img 
                              src={client.url} 
                              alt={client.name} 
                              className="h-8 md:h-12 w-auto object-contain opacity-40 group-hover:opacity-100 transition-all duration-300" 
                          />
                      </div>
                  ))}
              </div>
          </div>

          {/* Prominent CTA */}
          <div className="mt-20 md:mt-24 relative rounded-2xl overflow-hidden fade-in-up">
              <div className="absolute inset-0 bg-[#38b6ff] opacity-10"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center border border-[#38b6ff]/20 rounded-2xl bg-zinc-950/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#38b6ff] rounded-full flex items-center justify-center mb-6 text-black shadow-[0_0_20px_rgba(56,182,255,0.4)]">
                      <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                      Ready to Scale Your Content?
                  </h3>
                  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                      Stop spending hours in the edit suite. Let us handle the technical side so you can focus on being creative.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <a 
                          href="https://kubemedia.vercel.app/" 
                          className="bg-[#38b6ff] text-black px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-sm flex items-center justify-center gap-2"
                      >
                          Get Started <ArrowUpRight size={16} />
                      </a>
                      <a 
                          href="https://kubemedia.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="border border-white/20 text-white px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center gap-2"
                      >
                          See Our Work
                      </a>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
};
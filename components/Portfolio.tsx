import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Play, Filter, Maximize2, ArrowUpRight, RotateCcw } from 'lucide-react';
import { Project } from '../types';
import { Modal } from './Modal';

const CATEGORIES = ["All", "Music Video", "Commercial", "Documentary", "Brand Campaign"];

export const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Dynamically get years from projects
  const availableYears = ["All", ...Array.from(new Set(PROJECTS.map(p => p.year))).sort().reverse()];

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = categoryFilter === "All" ? true : p.category === categoryFilter;
    const matchesYear = yearFilter === "All" ? true : p.year === yearFilter;
    return matchesCategory && matchesYear;
  });

  // Simulate API fetching
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [categoryFilter, yearFilter]);

  useEffect(() => {
    if (isLoading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleProjects((prev) => Array.from(new Set([...prev, id])));
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects, isLoading]);

  const resetFilters = () => {
      setCategoryFilter("All");
      setYearFilter("All");
  };

  return (
    <>
      <section id="work" className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Portfolio</span>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
                      VISUAL<br/>ANTHOLOGY.
                  </h2>
                  <p className="text-lg text-gray-500 font-medium max-w-lg">
                      A collection of works defined by precision, rhythm, and narrative depth.
                  </p>
              </div>
              
              {/* Controls */}
              <div className="flex flex-col items-end gap-6 w-full lg:w-auto">
                  
                  {/* Category Buttons - Accessible Tablist */}
                  <div role="tablist" aria-label="Project Categories" className="flex flex-wrap justify-end gap-3">
                    {CATEGORIES.map(cat => (
                        <button 
                            key={cat}
                            role="tab"
                            aria-selected={categoryFilter === cat}
                            aria-controls="projects-grid"
                            onClick={() => setCategoryFilter(cat)}
                            className={`px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full transition-all border focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                                categoryFilter === cat 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                  </div>
                  
                  {/* Year Filter & Reset */}
                  <div className="flex flex-wrap items-center justify-end gap-6 w-full">
                      <div className="flex items-center gap-4" role="group" aria-label="Filter by Year">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Filter by Year:</span>
                          <div className="flex gap-2">
                            {availableYears.map(year => (
                                <button
                                    key={year}
                                    aria-pressed={yearFilter === year}
                                    onClick={() => setYearFilter(year)}
                                    className={`text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:text-black ${yearFilter === year ? 'text-black border-b border-black' : 'text-gray-400 hover:text-black'}`}
                                >
                                    {year}
                                </button>
                            ))}
                          </div>
                      </div>

                      {(categoryFilter !== "All" || yearFilter !== "All") && (
                          <button 
                            onClick={resetFilters}
                            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
                          >
                              <RotateCcw size={12} /> Reset Filters
                          </button>
                      )}
                  </div>
              </div>
          </div>

          {/* Grid */}
          <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoading ? (
                // Skeleton Loader
                Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-[16/10] bg-gray-100 rounded-sm overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                    </div>
                ))
            ) : filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                <div 
                    key={project.id} 
                    data-id={project.id}
                    ref={el => { projectRefs.current[index] = el }}
                    onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
                    className={`group relative aspect-[16/10] overflow-hidden cursor-pointer rounded-sm fade-in-up ${visibleProjects.includes(project.id) ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    role="button"
                    aria-label={`View project: ${project.title}`}
                >
                    {/* Image */}
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                        
                        {/* Top Right Icon */}
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm">
                            <Maximize2 size={20} />
                        </div>

                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                            <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span className="px-2 py-1 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-sm">{project.year}</span>
                                <span className="px-2 py-1 border border-white/40 text-white text-[9px] font-bold uppercase tracking-widest rounded-sm">{project.category}</span>
                                {project.videoUrl && (
                                    <span className="w-5 h-5 flex items-center justify-center bg-red-600 rounded-full">
                                        <Play size={8} fill="white" />
                                    </span>
                                )}
                            </div>
                            
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 leading-none">
                                {project.title}
                            </h3>
                            
                            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                {project.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="text-[10px] text-gray-300 font-medium uppercase tracking-wider">• {tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                ))
            ) : (
                <div className="col-span-full w-full text-center py-32 border border-dashed border-gray-200 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-gray-400">No projects match your criteria.</p>
                    <button 
                        onClick={resetFilters}
                        className="mt-4 px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Reset Filters
                    </button>
                </div>
            )}
          </div>

          {!isLoading && filteredProjects.length > 0 && (
              <div className="mt-24 flex justify-center">
                <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:gap-5 transition-all">
                    View All Archives <ArrowUpRight size={16} />
                </button>
              </div>
          )}

        </div>
        
        {/* CSS for Shimmer Animation */}
        <style>{`
            @keyframes shimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
            .animate-shimmer {
                animation: shimmer 2s infinite linear;
            }
        `}</style>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </>
  );
};
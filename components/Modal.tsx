import React, { useEffect, useState, useRef } from 'react';
import { X, Calendar, Tag, Play, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Handle Visibility and Focus Management
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      
      // Save current focus
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Move focus to modal after render
      setTimeout(() => {
        if (modalRef.current) {
          // Try to focus the close button first, or the container
          const closeBtn = modalRef.current.querySelector('button');
          if (closeBtn) {
            closeBtn.focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);

    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      document.body.style.overflow = 'unset';
      
      // Restore focus
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Keyboard Interactions (Escape & Tab Trap)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus Trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isVisible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className={`relative bg-white w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
            isOpen 
            ? 'translate-y-0 scale-100 opacity-100' 
            : 'translate-y-24 scale-95 opacity-0'
        }`}
        tabIndex={-1}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 backdrop-blur-md p-2 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {project && (
          <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:h-[650px] overflow-y-auto md:overflow-hidden">
            {/* Media Side */}
            <div className="w-full md:w-2/3 bg-black flex items-center justify-center overflow-hidden relative group shrink-0 aspect-video md:aspect-auto">
               {project.videoUrl ? (
                 <iframe 
                    src={project.videoUrl} 
                    title={project.title}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                 ></iframe>
               ) : (
                 <>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Simulated Play Button for Image-only */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:w-2/3 mx-auto">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/40">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                 </>
               )}
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/3 p-6 md:p-12 flex flex-col md:overflow-y-auto bg-white shrink-0">
              <div>
                {/* Category Pill */}
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        {project.category}
                    </span>
                </div>

                <h2 id="modal-title" className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-[0.85]">{project.title}</h2>
                
                {/* Tags displayed as pills below title */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="inline-block px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest mb-8 border-b border-gray-100 pb-6">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {project.year}</span>
                  <span className="flex items-center gap-2"><Tag size={14} /> Client Work</span>
                </div>
                
                <p id="modal-desc" className="text-gray-600 leading-relaxed text-sm md:text-base font-medium mb-8">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-8 md:pt-0">
                {project.videoUrl ? (
                    <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                    >
                        <Play size={14} className="fill-white" /> Watch Full Project
                    </a>
                ) : (
                    <div className="w-full bg-gray-100 text-gray-400 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 rounded-sm cursor-not-allowed">
                        <ArrowUpRight size={14} /> Project Link Unavailable
                    </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
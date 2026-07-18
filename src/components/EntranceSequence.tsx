import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface EntranceSequenceProps {
  onComplete: () => void;
}

gsap.registerPlugin(useGSAP);

export const EntranceSequence: React.FC<EntranceSequenceProps> = ({ onComplete }) => {
  const container = useRef<HTMLDivElement>(null);
  const [canEnter, setCanEnter] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Draw ethereal lines across the screen immediately
    tl.to('.ethereal-line', {
      strokeDashoffset: 0,
      duration: 2.5,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // 2. Lines slowly fade away as typography emerges
    tl.to('.ethereal-line', {
      opacity: 0,
      duration: 2,
      ease: 'power1.inOut'
    }, "-=1.5");

    tl.to('.brand-text', {
      opacity: 1,
      duration: 2.5,
      ease: 'power2.out'
    }, "-=2");

    // 3. Hold the brand text for a shorter duration to accelerate the load
    tl.to('.brand-text', {
      opacity: 1,
      duration: 0.8,
    });

    // 4. Fade out brand text
    tl.to('.brand-text', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    });

    // 5. Fade in subtitle
    tl.to('.brand-subtitle', {
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out'
    }, "-=0.2");

    // 6. Fade in enter button
    tl.to('.enter-button', {
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
      onComplete: () => setCanEnter(true)
    }, "-=0.5");

  }, { scope: container });

  const handleEnter = () => {
    if (!canEnter) return;
    
    const tl = gsap.timeline({ onComplete });
    
    tl.to(['.brand-subtitle', '.enter-button'], {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut'
    });

    tl.to('.background-veil', {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut'
    });
  };

  // Abstract, intersecting organic curves
  const paths = [
    "M-100,600 C300,400 500,800 1200,200",
    "M0,100 C400,300 700,50 1100,600",
    "M-50,800 C400,500 800,200 1200,-50",
    "M200,-100 C100,400 900,600 1000,900",
    "M800,-100 C600,400 200,700 100,1000"
  ];

  return (
    <div ref={container} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1016]">
      {/* Base dark veil */}
      <div className="background-veil absolute inset-0 bg-[#0b1016]" />
      
      {/* Ethereal Vectors */}
      <svg className="absolute inset-0 w-full h-full z-10 opacity-70 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 800">
        {paths.map((d, i) => (
          <path
            key={i}
            className="ethereal-line"
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
            strokeDasharray="2500"
            strokeDashoffset="2500"
          />
        ))}
      </svg>

      {/* Center Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="brand-text absolute opacity-0 font-serif text-3xl md:text-5xl lg:text-6xl tracking-widest text-slate-100 uppercase text-center">
          Rare Structure
        </div>
        
        <div className="brand-subtitle absolute opacity-0 font-mono text-xs md:text-sm tracking-widest text-slate-400 uppercase text-center leading-relaxed px-6 w-full max-w-4xl">
          Rare Structure incubates and acquires technology businesses anchored by a structural data engineering advantage. Our properties provide foundational utility across massive, fragmented industries, allowing us to aggregate demand and route commercial volume to specialized providers who elevate the entire ecosystem.
        </div>
        
        <button 
           onClick={handleEnter}
           disabled={!canEnter}
           className="enter-button absolute bottom-16 md:bottom-24 opacity-0 p-4 rounded-full border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-500 transition-colors cursor-pointer disabled:cursor-default"
           aria-label="Enter Matrix"
         >
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
             <line x1="12" y1="5" x2="12" y2="19"></line>
             <polyline points="19 12 12 19 5 12"></polyline>
           </svg>
         </button>
      </div>
    </div>
  );
};

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface EntranceSequenceProps {
  onComplete: () => void;
}

export const EntranceSequence: React.FC<EntranceSequenceProps> = ({ onComplete }) => {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.to('.horizon-line', {
      scaleX: 1,
      duration: 1.5,
      ease: 'power3.inOut'
    })
    .to('.vertical-node', {
      scaleY: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out'
    }, "-=0.5")
    .to({}, { duration: 0.5 }) // Pause
    .to('.vertical-node', {
      scaleY: 0,
      duration: 0.6,
      ease: 'power3.in'
    })
    .to('.horizon-line', {
      scaleX: 0,
      duration: 0.6,
      ease: 'power3.in'
    }, "<")
    .to('.background-veil', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1,
      ease: 'expo.inOut'
    });

  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="background-veil absolute inset-0 bg-[#0b1016]" />
      
      <div className="relative w-full max-w-4xl h-64 flex items-center justify-between px-12 z-10">
        <div className="horizon-line absolute top-1/2 left-0 w-full h-px bg-slate-500 scale-x-0 origin-center" />
        
        {[...Array(7)].map((_, i) => (
          <div key={i} className="relative flex flex-col items-center">
            <div className="w-1 h-1 bg-slate-400 rounded-full z-10" />
            <div 
              className={`vertical-node absolute bg-slate-700/50 w-px scale-y-0 ${i % 2 === 0 ? 'top-1/2 h-16 origin-top' : 'bottom-1/2 h-24 origin-bottom'}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

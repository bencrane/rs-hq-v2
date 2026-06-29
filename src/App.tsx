import React, { useState, useEffect } from 'react';

const ASSETS = [
  {
    id: 'RS-A01',
    insight: 'Federal procurement networks remain fragmented. Localized prime and subcontractor ecosystems create visibility voids.',
    name: 'Government Contracted',
    description: 'Federal Contracting Infrastructure'
  },
  {
    id: 'RS-A02',
    insight: 'Over 90% of U.S. freight routes through fleets of six trucks or fewer, generating uncaptured compliance and routing telemetry.',
    name: 'Licensed to Haul',
    description: 'Logistics & Carrier Compliance'
  },
  {
    id: 'RS-A03',
    insight: 'Underutilized heavy machinery across decentralized regional hubs limits infrastructure deployment velocity and capital efficiency.',
    name: 'Equipment Work',
    description: 'Heavy Machinery & Asset Infrastructure'
  },
  {
    id: 'RS-A04',
    insight: 'Asymmetrical labor shortages in skilled industrial trades necessitate hyper-localized, on-demand operator deployment models.',
    name: 'Active Operators',
    description: 'Labor-Matching & Deployment'
  },
  {
    id: 'RS-A05',
    insight: 'Traditional credit models fail to capture real-time telemetry, widening the gap between risk-adjusted yield and deployment.',
    name: 'CapitalAsk',
    description: 'Direct Interface for Capital Allocation'
  }
];

const RareStructureSite = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % ASSETS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-[#0b1016] text-slate-200 font-sans selection:bg-slate-300 selection:text-slate-900 flex flex-col">
      {/* HEADER */}
      <header className="border-b border-slate-800/60 p-6 md:px-12 flex justify-between items-center bg-[#0b1016] z-50">
        <div className="font-serif text-lg tracking-wide text-slate-100">Rare Structure</div>
        <div className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Entity ID: RS-001</div>
      </header>

      {/* DYNAMIC HERO / PORTFOLIO PAIR */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr_auto_1fr] border-t-0 border-slate-800/60 relative">
        
        {/* DESKTOP TOP SPACERS */}
        <div className="hidden lg:block border-r border-slate-800/60"></div>
        <div className="hidden lg:block"></div>

        {/* LEFT: INSIGHT */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col bg-[#0b1016] relative border-b lg:border-b-0 lg:border-r border-slate-800/60 min-h-[50vh] lg:min-h-0">
          <p className="text-slate-500 mb-8 lg:mb-12 font-mono text-[10px] tracking-widest uppercase shrink-0">
            Market Telemetry
          </p>
          <div className="max-w-2xl w-full my-auto">
            <div key={`insight-${activeIndex}`} className="animate-fade-in">
              <p className="text-3xl md:text-5xl font-serif leading-tight text-slate-200 italic">
                "{ASSETS[activeIndex].insight}"
              </p>
            </div>
          </div>
          
          {/* Mobile progress indicator */}
          <div className="lg:hidden absolute bottom-8 md:bottom-12 left-8 md:left-16 flex gap-2 z-20 items-center">
            {ASSETS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="py-2 cursor-pointer group"
                aria-label={`View asset ${idx + 1}`}
              >
                <div className={`h-px transition-all duration-500 group-hover:bg-slate-400 ${idx === activeIndex ? 'w-8 bg-slate-300' : 'w-2 bg-slate-700'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: ASSET CARD */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col bg-[#0b1016] relative min-h-[50vh] lg:min-h-0">
          <p className="text-slate-500 mb-8 lg:mb-12 font-mono text-[10px] tracking-widest uppercase shrink-0">
            Operational Asset
          </p>
          <div className="max-w-2xl w-full">
            <div key={`asset-${activeIndex}`} className="animate-fade-in border border-slate-800/60 p-8 md:p-16 bg-[#0b1016]/50 relative group transition-colors hover:border-slate-600">
              <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-12 flex justify-between items-center">
                <span>{ASSETS[activeIndex].id}</span>
                <span>[ {String(activeIndex + 1).padStart(2, '0')} / {String(ASSETS.length).padStart(2, '0')} ]</span>
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl font-serif font-normal mb-6 text-slate-100 leading-tight">
                {ASSETS[activeIndex].name}
              </h3>
              <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-widest">
                {ASSETS[activeIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP BOTTOM SPACERS */}
        <div className="hidden lg:block border-r border-slate-800/60"></div>
        <div className="hidden lg:block"></div>

        {/* Desktop progress indicator (Positioned relative to main) */}
        <div className="hidden lg:flex absolute bottom-8 md:bottom-12 left-8 md:left-16 lg:left-24 gap-2 z-20 items-center">
          {ASSETS.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="py-2 cursor-pointer group"
              aria-label={`View asset ${idx + 1}`}
            >
              <div className={`h-px transition-all duration-500 group-hover:bg-slate-400 ${idx === activeIndex ? 'w-8 bg-slate-300' : 'w-2 bg-slate-700'}`} />
            </button>
          ))}
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 p-6 md:px-12 flex justify-center items-center bg-[#0b1016] z-50">
        <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} RARE STRUCTURE
        </p>
      </footer>
    </div>
  );
};

export default RareStructureSite;

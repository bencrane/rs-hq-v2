import React, { useState, useEffect } from 'react';

const ASSETS = [
  {
    id: 'RS-A01',
    insight: 'Federal procurement networks remain highly fragmented. Localized prime and subcontractor ecosystems create structural visibility voids.',
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
    insight: 'Traditional credit models fail to capture real-time operational telemetry, widening the gap between risk-adjusted yield and deployment.',
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
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black flex flex-col">
      {/* HEADER */}
      <header className="border-b border-zinc-800 p-6 md:px-12 flex justify-between items-center bg-black z-50">
        <div className="font-mono text-sm tracking-widest uppercase font-bold text-white">Rare Structure</div>
        <div className="font-mono text-xs tracking-widest text-zinc-500 uppercase">Entity ID: RS-001</div>
      </header>

      {/* DYNAMIC HERO / PORTFOLIO PAIR */}
      <main className="flex-grow flex items-stretch">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:divide-x border-t-0 border-zinc-800">
          
          {/* LEFT: INSIGHT */}
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-black relative border-b lg:border-b-0 border-zinc-800">
            <div className="max-w-2xl w-full">
              <p className="text-zinc-500 mb-8 font-mono text-xs tracking-widest uppercase">
                Market Telemetry
              </p>
              <div key={`insight-${activeIndex}`} className="animate-fade-in">
                <p className="text-3xl md:text-5xl font-medium leading-tight text-zinc-300">
                  {ASSETS[activeIndex].insight}
                </p>
              </div>
            </div>
            {/* Progress indicator */}
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-16 lg:left-24 flex gap-2">
              {ASSETS.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 transition-all duration-500 ${idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: ASSET CARD */}
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-black">
            <div className="max-w-2xl w-full">
              <p className="text-zinc-500 mb-8 font-mono text-xs tracking-widest uppercase">
                Operational Asset
              </p>
              <div key={`asset-${activeIndex}`} className="animate-fade-in border border-zinc-800 p-8 md:p-16 bg-black relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-12 flex justify-between items-center">
                  <span>{ASSETS[activeIndex].id}</span>
                  <span>{String(activeIndex + 1).padStart(2, '0')} / {String(ASSETS.length).padStart(2, '0')}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase mb-6 text-white leading-none tracking-tight">
                  {ASSETS[activeIndex].name}
                </h3>
                <p className="text-zinc-400 font-mono text-sm md:text-base uppercase tracking-wide">
                  {ASSETS[activeIndex].description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 p-6 md:px-12 flex justify-center items-center bg-black z-50">
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          © {new Date().getFullYear()} RARE STRUCTURE
        </p>
      </footer>
    </div>
  );
};

export default RareStructureSite;

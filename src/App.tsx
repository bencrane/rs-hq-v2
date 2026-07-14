import { useState, useEffect } from 'react';
import { EntranceSequence } from './components/EntranceSequence';

const ASSETS = [
  {
    id: 'RS-A01',
    insight: 'Federal procurement networks remain fragmented. Localized prime and subcontractor ecosystems create visibility voids.',
    name: 'Government Contracted',
    description: 'Federal Contracting Infrastructure',
    url: 'https://GovernmentContracted.com',
    details: 'The federal contracting ecosystem operates through an intensely fragmented network of prime contractors and localized subcontractors. This fragmentation introduces massive latency in capital allocation and operational deployment.\n\nBy aggregating and normalizing procurement telemetry, we establish a continuous feedback loop between federal capital allocation and on-the-ground execution. This structural advantage permits surgical capital deployment into high-yield, low-visibility regional nodes that traditional prime contractors cannot effectively service or underwrite.'
  },
  {
    id: 'RS-A02',
    insight: 'Over 90% of U.S. freight routes through fleets of six trucks or fewer, generating uncaptured compliance and routing telemetry.',
    name: 'Licensed to Haul',
    description: 'Logistics & Carrier Compliance',
    url: 'https://LicensedToHaul.com',
    details: 'The backbone of domestic logistics is sustained by micro-fleets. Despite moving the majority of physical goods, these operators lack enterprise-grade compliance and routing infrastructure, resulting in profound inefficiencies.\n\nDeploying a centralized, low-latency compliance engine directly into these localized networks captures routing telemetry at the source. This enables predictive load balancing and capital deployment against verifiable, high-frequency transit data, fundamentally altering the risk profile of logistics underwriting.'
  },
  {
    id: 'RS-A03',
    insight: 'Underutilized heavy machinery across decentralized regional hubs limits infrastructure deployment velocity and capital efficiency.',
    name: 'Equipment Work',
    description: 'Heavy Machinery & Asset Infrastructure',
    url: 'https://EquipmentWork.com',
    details: 'Heavy machinery deployment is historically characterized by high capital expenditure and severe localization constraints. Equipment sits idle in decentralized hubs while regional demand spikes go unmet.\n\nWe abstract the physical asset layer by treating heavy machinery as distributed computational nodes. By injecting telemetry into the deployment cycle, we dynamically route hardware to areas of maximum yield. This converts static industrial assets into fluid, high-velocity operational capital.'
  },
  {
    id: 'RS-A04',
    insight: 'Asymmetrical labor shortages in skilled industrial trades necessitate hyper-localized, on-demand operator deployment models.',
    name: 'Active Operators',
    description: 'Labor-Matching & Deployment',
    url: 'https://ActiveOperators.com',
    details: 'Skilled industrial labor is an inherently constrained asset, exacerbated by asymmetrical geographic demand. Traditional deployment models rely on slow-moving union halls or localized networks.\n\nOur architecture treats skilled operators as highly liquid human capital. By establishing a hyper-localized deployment matrix, we eliminate friction between industrial demand and operator availability. This ensures that complex physical infrastructure projects execute with the precision and speed of software deployment.'
  },
  {
    id: 'RS-A05',
    insight: 'Legacy credit models rely on trailing data, creating a structural lag between risk-adjusted yield and capital deployment.',
    name: 'Capital Expansion',
    description: 'Direct Interface for Capital Allocation',
    url: 'https://CapitalExpansion.org',
    details: 'Legacy underwriting models rely on trailing, low-resolution financial data. This structural delay inherently limits capital efficiency when deployed into fast-moving industrial and logistics vectors.\n\nCapital Expansion operates as the central routing engine. By ingesting real-time telemetry across our entire portfolio of operational assets, we dynamically adjust risk parameters. Capital flows instantly to nodes exhibiting the highest verifiable yield, bypassing traditional institutional latency.'
  }
];

type Asset = typeof ASSETS[0];

const RareStructureSite = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  useEffect(() => {
    if (selectedAsset) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % ASSETS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [activeIndex, selectedAsset]);

  // Ensure scroll is top when toggling views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedAsset]);

  return (
    <div className="min-h-screen bg-[#0b1016] text-slate-200 font-sans selection:bg-slate-300 selection:text-slate-900 flex flex-col relative overflow-hidden">
      
      {/* HEADER */}
      <header className="border-b border-slate-800/60 p-6 md:px-12 flex justify-between items-center bg-[#0b1016] z-50 relative shrink-0">
        <div className="font-serif text-lg tracking-wide text-slate-100">Rare Structure</div>
        <div className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Entity ID: RS-001</div>
      </header>

      {/* MAIN GRID */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr_auto_1fr] border-t-0 border-slate-800/60 relative">
        
        {/* DESKTOP TOP SPACERS */}
        <div className="hidden lg:block border-r border-slate-800/60 relative"></div>
        <div className="hidden lg:block"></div>

        {/* LEFT COLUMN (Detail View) */}
        <div className="p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 flex flex-col bg-[#0b1016] relative border-b lg:border-b-0 lg:border-r border-slate-800/60 min-h-[50vh] lg:min-h-0 overflow-y-auto">
          {selectedAsset ? (
            // DETAIL VIEW: Asset Context & Abstract BG
            <>
              {/* Abstract Background */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.3)_0%,transparent_70%)] opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b44_1px,transparent_1px),linear-gradient(to_bottom,#1e293b44_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]" />
              </div>

              <div className="flex justify-between items-center shrink-0 mb-8 lg:mb-12 z-10 animate-fade-in">
                 <button 
                  onClick={() => setSelectedAsset(null)}
                  className="text-slate-400 hover:text-slate-200 font-mono text-[10px] tracking-widest uppercase transition-colors"
                 >
                   Return to Matrix
                 </button>
              </div>

              <div className="max-w-2xl w-full my-auto z-10 animate-fade-in">
                <div className="border border-slate-700/80 p-8 lg:p-12 bg-[#0b1016]/80 backdrop-blur-sm relative">
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-12 flex justify-between items-center">
                    <span>{selectedAsset.id}</span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                  </div>
                  <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-normal mb-6 text-slate-100 leading-tight whitespace-nowrap">
                    {selectedAsset.name}
                  </h3>
                  <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-12">
                    {selectedAsset.description}
                  </p>

                  {selectedAsset.url && (
                    <a 
                      href={selectedAsset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-slate-200 uppercase hover:text-white transition-colors group border border-slate-700/50 hover:border-slate-500 py-3 px-6 rounded-sm bg-slate-900/50"
                    >
                      Access Platform
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity -rotate-45">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </>
          ) : (
            // HERO VIEW: Insight Text
            <>
              <p className="text-slate-500 mb-8 lg:mb-12 font-mono text-[10px] tracking-widest uppercase shrink-0">
                Market Telemetry
              </p>
              <div className="max-w-2xl w-full my-auto pl-4 md:pl-6">
                <div key={`insight-${activeIndex}`} className="animate-fade-in">
                  <p 
                    className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif leading-tight text-slate-200 italic"
                    style={{ textIndent: '-0.5em' }}
                  >
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
            </>
          )}
        </div>

        {/* RIGHT COLUMN (Detail View) */}
        <div className="p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 flex flex-col bg-[#0b1016] relative min-h-[50vh] lg:min-h-0 overflow-y-auto">
          {selectedAsset ? (
            // DETAIL VIEW: Operational Thesis
            <>
              <p className="text-slate-500 mb-8 lg:mb-12 font-mono text-[10px] tracking-widest uppercase shrink-0 animate-fade-in">
                Operational Thesis
              </p>
              
              <div className="max-w-2xl w-full my-auto">
                 <div className="space-y-8 animate-fade-in">
                   {selectedAsset.details.split('\n\n').map((paragraph, i) => (
                     <p key={i} className="text-lg md:text-xl font-serif leading-relaxed text-slate-300">
                       {paragraph}
                     </p>
                   ))}
                 </div>
              </div>
            </>
          ) : (
            // HERO VIEW: Asset Card
            <>
              <p className="text-slate-500 mb-8 lg:mb-12 font-mono text-[10px] tracking-widest uppercase shrink-0">
                Operational Asset
              </p>
              <div className="max-w-2xl w-full my-auto">
                <div 
                  key={`asset-${activeIndex}`} 
                  onClick={() => setSelectedAsset(ASSETS[activeIndex])}
                  className="animate-fade-in border border-slate-800/60 p-8 lg:p-12 bg-[#0b1016]/50 relative group transition-colors hover:border-slate-600 cursor-pointer"
                >
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-12 flex justify-between items-center">
                    <span>{ASSETS[activeIndex].id}</span>
                    <span>[ {String(activeIndex + 1).padStart(2, '0')} / {String(ASSETS.length).padStart(2, '0')} ]</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-serif font-normal mb-6 text-slate-100 leading-tight whitespace-nowrap">
                    {ASSETS[activeIndex].name}
                  </h3>
                  <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-widest">
                    {ASSETS[activeIndex].description}
                  </p>
                  
                  {/* Interaction Hint */}
                  <div className="absolute right-8 bottom-8 md:right-16 md:bottom-16 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="font-mono text-xs text-slate-500">→</span >
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* DESKTOP BOTTOM SPACERS */}
        <div className="hidden lg:block border-r border-slate-800/60"></div>
        <div className="hidden lg:block"></div>

        {/* Desktop progress indicator (Only show in Hero View) */}
        {!selectedAsset && (
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
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 p-6 md:px-12 flex justify-center items-center bg-[#0b1016] z-50 relative shrink-0">
        <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} RARE STRUCTURE
        </p>
      </footer>
    </div>
  );
};

export default function AppOrchestrator() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <>
      {isBooting && <EntranceSequence onComplete={() => setIsBooting(false)} />}
      <RareStructureSite />
    </>
  );
}

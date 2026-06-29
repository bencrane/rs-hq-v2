import React from 'react';

const RareStructureSite = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">
      {/* HEADER */}
      <header className="border-b-2 border-zinc-800 p-6 flex justify-between items-center bg-black sticky top-0 z-50">
        <div className="font-mono text-sm tracking-widest uppercase font-bold text-white">Rare Structure</div>
        <div className="font-mono text-xs tracking-widest text-zinc-500">ID: RS-001</div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* HERO */}
        <section className="px-6 py-24 md:py-40 border-b-2 border-zinc-800">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            The Apex<br />Holding<br />Company
          </h1>
          <p className="max-w-3xl text-xl md:text-3xl text-zinc-400 font-medium leading-snug">
            Incubation firm and merchant bank operating a Vertically Integrated Market Network powered by an asymmetrical data advantage and proprietary distribution.
          </p>
        </section>

        {/* THESIS / MECHANICS */}
        <section className="px-6 py-24 border-b-2 border-zinc-800 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-white">The IAC Model</h2>
            <div className="w-16 h-2 bg-white mb-12"></div>
            <p className="text-white mb-4 font-mono text-sm tracking-widest uppercase bg-zinc-900 inline-block px-3 py-1">
              Phase 1: Operational Utility
            </p>
            <p className="text-xl leading-relaxed mb-12 text-zinc-300">
              Core mechanics rely on front-end operational properties that provide immense, standalone utility to high-value, fragmented B2B audiences. By solving localized friction, these properties earn the right to capture behavioral and financial telemetry.
            </p>
          </div>
          <div className="lg:mt-32">
            <p className="text-white mb-4 font-mono text-sm tracking-widest uppercase bg-zinc-900 inline-block px-3 py-1">
              Phase 2: Proprietary Intelligence
            </p>
            <p className="text-xl leading-relaxed text-zinc-300">
              Rare Structure acts as the centralized data routing engine. We utilize this proprietary intelligence to manufacture pristine deal flow and route corporate inflection points directly to aligned capital partners.
            </p>
          </div>
        </section>

        {/* THE PORTFOLIO */}
        <section className="px-6 py-24 border-b-2 border-zinc-800">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-16 text-white">Portfolio Taxonomy</h2>
          
          <div className="grid grid-cols-1 border-t-2 border-zinc-800">
            {/* ASSET 1 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 hover:bg-zinc-900 border-b border-zinc-800 cursor-default">
              <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest md:col-span-1">Asset_01</div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold uppercase mb-3 text-white">Government Contracted</h3>
                <p className="text-zinc-400 font-mono text-base uppercase tracking-wide">Federal contracting / Prime & Sub ecosystems</p>
              </div>
            </div>

            {/* ASSET 2 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 hover:bg-zinc-900 border-b border-zinc-800 cursor-default">
              <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest md:col-span-1">Asset_02</div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold uppercase mb-3 text-white">Licensed to Haul</h3>
                <p className="text-zinc-400 font-mono text-base uppercase tracking-wide">Logistics / Supply-chain / Carrier compliance</p>
              </div>
            </div>

            {/* ASSET 3 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 hover:bg-zinc-900 border-b border-zinc-800 cursor-default">
              <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest md:col-span-1">Asset_03</div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold uppercase mb-3 text-white">Equipment Work</h3>
                <p className="text-zinc-400 font-mono text-base uppercase tracking-wide">Heavy machinery / Asset-heavy infrastructure</p>
              </div>
            </div>

            {/* ASSET 4 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 hover:bg-zinc-900 border-b border-zinc-800 cursor-default">
              <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest md:col-span-1">Asset_04</div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold uppercase mb-3 text-white">Active Operators</h3>
                <p className="text-zinc-400 font-mono text-base uppercase tracking-wide">Labor-matching / Operator deployment</p>
              </div>
            </div>

            {/* ASSET 5 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8 hover:bg-zinc-900 border-b border-zinc-800 cursor-default">
              <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest md:col-span-1">Asset_05</div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold uppercase mb-3 text-white">CapitalAsk</h3>
                <p className="text-zinc-400 font-mono text-base uppercase tracking-wide">Direct interface for capital deployment & credit</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer className="px-6 py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6 text-white">Escalation Protocol</h2>
          <p className="text-zinc-400 max-w-md mb-10 text-lg">
            Routing logic restricted to verified institutional capital and strategic acquisition entities. 
          </p>
          <a href="mailto:routing@rarestructure.com" className="inline-block bg-white text-black font-black uppercase tracking-widest px-10 py-5 text-sm hover:bg-zinc-300 w-full md:w-auto text-center border-2 border-white hover:border-zinc-300">
            Initialize Contact
          </a>
        </div>
        <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest flex flex-col justify-end lg:items-end">
          <p className="mb-2">Entity: Rare Structure</p>
          <p className="mb-2">Classification: Merchant Bank</p>
          <p>© {new Date().getFullYear()} — SYSTEM V.1.0.0</p>
        </div>
      </footer>
    </div>
  );
};

export default RareStructureSite;

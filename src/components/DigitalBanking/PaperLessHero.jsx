import React from "react";

const PaperlessHero = () => {
  return (
    <div className="w-full min-h-[500px]flex items-center justify-center p-4 md:p-8 selection:bg-blue-600/30">
      {/* Main Glassmorphic Wrapper Card */}
      <div className="relative w-full max-w-6xl rounded-[32px] bg-gradient-to-b from-[#0a1220] to-[#030712] border border-slate-900/80 px-8 py-16 md:px-14 md:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden shadow-2xl gap-8">
        {/* BACKGROUND EFFECT: "CB7" Outline Text Border */}
        <div
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold text-[28rem] md:text-[34rem] lg:text-[42rem] tracking-tighter text-transparent leading-none opacity-25 z-0 transition-all"
          style={{
            WebkitTextStroke:
              "1.5px #1e3a8a" /* Deep Indigo/Blue sharp border outline */,
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}>
          N7
        </div>

        {/* Content Section (Left) */}
        <div className="z-10 max-w-2xl flex flex-col gap-5">
          <h1 className="text-3xl md:text-5xl lg:text-[2.85rem] font-medium tracking-tight text-white leading-[1.2]">
            Take the full advantage of <br className="hidden sm:inline" />
            going paper-less now.
          </h1>

          <p className="text-xs md:text-sm text-slate-400 font-normal max-w-md leading-relaxed tracking-wide opacity-80">
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* CTA Button Actions Section (Right) */}
        <div className="z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
          {/* Contact Us Outline Button */}
          <button className="w-full sm:w-40 h-11 rounded-lg border border-slate-700 bg-transparent text-[11px] font-semibold tracking-widest text-slate-200 hover:text-white hover:border-slate-400 transition-all duration-200 uppercase">
            Contact Us
          </button>

          {/* Request Demo Gradient Button */}
          <button className="w-full sm:w-44 h-11 rounded-lg bg-gradient-to-r from-[#006bf8] via-[#0056e0] to-[#0040c7] text-[11px] font-bold tracking-widest text-white shadow-lg shadow-blue-700/20 hover:brightness-110 active:scale-[0.99] transition-all duration-200 uppercase">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperlessHero;

import React from "react";

const PaperlessHero = () => {
  return (
    /* Outer light gradient container to give that sleek embedded device look on the page layout */
    <div className="w-full bg-gradient-to-b from-transparent to-[#F4F9FC] py-12 px-4 md:px-8 flex items-center justify-center selection:bg-blue-600/30">
      {/* Main Container: Applied your custom linear gradient spec directly via style object */}
      <div
        className="relative w-full max-w-6xl rounded-[32px] border border-slate-900/60 px-8 py-14 md:px-16 md:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden shadow-2xl gap-8"
        style={{
          background:
            "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
        }}>
        {/* BACKGROUND LAYER: "N7" Giant vector outline tracking exactly behind buttons */}
        <div
          className="absolute right-[-4%] md:right-[-2%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-black text-[24rem] md:text-[32rem] lg:text-[42rem] tracking-tighter text-transparent leading-none opacity-[0.06] z-0 transition-all"
          style={{
            WebkitTextStroke: "1.5px #0062ff", // Retained your custom bright blue trace stroke color
            fontFamily: "'Archivo', system-ui, sans-serif",
          }}>
          N7
        </div>

        {/* Left Content Column */}
        <div className="z-10 max-w-xl flex flex-col gap-4">
          {/* Header Title Match */}
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.2] text-left">
            Take the full advantage of <br />
            going paper-less now.
          </h1>

          {/* Subtext Paragraph with exact "N7" context match */}
          <p className="text-left text-[14px] text-slate-400 font-normal max-w-md leading-relaxed opacity-75">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right CTA Actions Column: Aligned perfectly to match layout dimensions */}
        <div className="z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 mt-2 lg:mt-0 lg:pr-4">
          {/* Contact Us Outline Button */}
          <button className="w-full sm:w-36 h-11 rounded-lg border border-slate-700 bg-transparent text-[11px] font-bold tracking-widest text-white hover:border-slate-500 transition-all duration-200 uppercase">
            Contact Us
          </button>

          {/* Request Demo Premium Gradient Solid Button */}
          <button className="w-full sm:w-44 h-11 rounded-lg bg-gradient-to-r from-[#0076FF] to-[#004BE5] text-[11px] font-bold tracking-widest text-white shadow-lg shadow-blue-600/20 hover:brightness-110 active:scale-[0.99] transition-all duration-200 uppercase">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperlessHero;

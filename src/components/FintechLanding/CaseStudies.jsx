import React from "react";
import { motion } from "framer-motion";

const CaseStudies = () => {
  // SVG Graphic Asset Component for the unique 4x starburst pattern
  const BrandGraphicPattern = () => (
    <svg
      className="w-full h-full"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {[
        { x: 10, y: 10 },
        { x: 120, y: 10 },
        { x: 10, y: 120 },
        { x: 120, y: 120 },
      ].map((pos, idx) => (
        <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
          <path
            d="M 45 15 C 45 30 30 45 15 45 C 30 45 45 60 45 75 C 45 60 60 45 75 45 C 60 45 45 30 45 15 Z"
            fill="none"
            stroke="#00CFFD"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );

  return (
    <section className="w-full py-20 bg-[#000A0F] font-sans text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-center text-[#E2E8F0] mb-16">
          Our Case Studies
        </h2>

        {/* Carousel Visual Frame Container */}
        <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[440px] px-2 sm:px-4 mb-8">
          {/* Back left card offset visual */}
          <div className="absolute left-0 lg:left-12 w-[85%] md:w-[75%] h-[80%] bg-[#02131C]/60 rounded-2xl border border-white/[0.02] transform -translate-x-12 scale-90 blur-[1px] opacity-40 pointer-events-none hidden sm:block" />

          {/* Back right card offset visual */}
          <div className="absolute right-0 lg:right-12 w-[85%] md:w-[75%] h-[80%] bg-[#02131C]/60 rounded-2xl border border-white/[0.02] transform translate-x-12 scale-90 blur-[1px] opacity-40 pointer-events-none hidden sm:block" />

          {/* Core Interactive Active Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-[840px] bg-[#021017] rounded-2xl p-5 sm:p-8 lg:p-10 border border-white/[0.05] shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center gap-6 lg:gap-12">
            {/* Visual Branding Display Box */}
            <div className="w-full md:w-[320px] aspect-square md:h-[280px] bg-[#04121E] rounded-xl flex items-center justify-center p-8 shrink-0 border border-white/[0.03]">
              <BrandGraphicPattern />
            </div>

            {/* Content Meta Stack */}
            <div className="text-left flex flex-col justify-between h-full w-full py-1">
              <div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.18em] text-[#00CFFD]/80 font-semibold uppercase">
                  Getting Started
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.25] text-white mt-3 mb-6 max-w-md">
                  How we help brand reach out to more people
                </h3>
              </div>

              <div className="space-y-6">
                {/* Brand Identifier (Zoomerr) */}
                <div className="flex items-center gap-2.5 text-gray-300 font-medium text-sm lg:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#334155] flex items-center justify-center p-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-white">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="tracking-wide text-slate-300">Zoomerr</span>
                </div>

                {/* Styled Thin Border Action Button */}
                <button className="w-full h-11 rounded-lg border border-[#1E2E38] hover:border-[#384F5E] bg-transparent text-[#94A3B8] hover:text-white font-medium text-[10px] sm:text-[11px] tracking-[0.16em] uppercase transition-all text-center">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Control Interface Panel */}
        <div className="w-full max-w-[840px] flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 px-2">
          {/* Left Spacer to align center cleanly on big viewports */}
          <div className="hidden sm:block w-24" />

          {/* Navigation Controls Block (Arrows + Indicators) */}
          <div className="flex items-center gap-6">
            {/* Previous slide control */}
            <button className="w-11 h-11 rounded-full border border-[#00CFFD]/30 flex items-center justify-center text-[#00CFFD] hover:bg-[#00CFFD]/5 transition-colors group">
              <span className="transform group-hover:-translate-x-0.5 transition-transform text-lg">
                ←
              </span>
            </button>

            {/* Pagination Sequence Dots */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full border border-[#1E2E38]" />
              <span className="w-7 h-2 rounded-full bg-[#00CFFD]" />
              <span className="w-2 h-2 rounded-full border border-[#1E2E38]" />
              <span className="w-2 h-2 rounded-full border border-[#1E2E38]" />
            </div>

            {/* Next slide control */}
            <button className="w-11 h-11 rounded-full border border-[#00CFFD]/30 flex items-center justify-center text-[#00CFFD] hover:bg-[#00CFFD]/5 transition-colors group">
              <span className="transform group-hover:translate-x-0.5 transition-transform text-lg">
                →
              </span>
            </button>
          </div>

          {/* Right Anchor: External Index Hyperlink */}
          <a
            href="#all-case-studies"
            className="text-[11px] font-medium tracking-[0.14em] text-[#00CFFD] hover:text-[#38DFFF] uppercase transition-colors flex items-center gap-1.5 border-b border-[#00CFFD]/20 pb-0.5">
            View All <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

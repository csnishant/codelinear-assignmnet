import React from "react";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-transparent to-[#010C12]">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-normal tracking-wide">
          Our Case Studies
        </h2>

        {/* Carousel View Container */}
        <div className="relative flex items-center justify-center min-h-[400px] px-4">
          {/* Background Card Effect (Stacked behind) */}
          <div className="absolute w-[85%] h-[85%] bg-[#01161F] opacity-40 rounded-3xl -translate-x-12 scale-95 border border-white/5 pointer-events-none" />

          {/* Active Centered Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative z-10 w-full max-w-3xl bg-[#031E2A] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
            {/* Visual Branding Box */}
            <div className="w-48 h-48 bg-[#00141D] rounded-2xl flex items-center justify-center p-6 shrink-0 border border-white/5">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="border-2 border-dashed border-[#00CFFD] rounded-md opacity-60"
                  />
                ))}
              </div>
            </div>

            {/* Typography Details */}
            <div className="text-left space-y-4 w-full">
              <span className="text-xs tracking-widest text-[#00CFFD] font-semibold">
                GETTING STARTED
              </span>
              <h3 className="text-2xl md:text-3xl font-normal leading-snug">
                How we help brand reach out to more people
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="inline-block w-4 h-4 rounded-full bg-gray-700" />
                <span>Zoomerr</span>
              </div>
              <button className="w-full md:w-auto px-8 py-2.5 mt-4 text-xs border border-gray-700 rounded-xl hover:bg-white/5 transition-all text-center">
                Read More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Controller Pagination & Indicators */}
        <div className="flex items-center justify-between max-w-3xl mx-auto pt-6 px-4">
          {/* Left Arrow */}
          <button className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-gray-500 transition-colors">
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            <span className="w-6 h-1.5 rounded-full bg-[#00CFFD]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
          </div>

          {/* Right Arrow */}
          <button className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-gray-500 transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

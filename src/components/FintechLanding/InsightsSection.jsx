import React from "react";
import { motion } from "framer-motion";

const InsightsSection = () => {
  // SVG Vector Component replicating the 4x cyan brand starburst icons exactly
  const CyberStarburstMatrix = () => (
    <svg
      className="w-full h-full"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {[
        { x: 12, y: 12 },
        { x: 118, y: 12 },
        { x: 12, y: 118 },
        { x: 118, y: 118 },
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

  const regularCards = [
    {
      id: 2,
      type: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
    {
      id: 3,
      type: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
  ];

  return (
    <section className="w-full bg-[#000A0F] font-sans text-white py-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
        {/* ================= LEFT SIDE: FIXED TRACK INFRASTRUCTURE ================= */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-normal tracking-tight leading-[1.2] text-[#F1F5F9] max-w-sm">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <div>
            <button className="h-10 px-8 rounded-lg border border-[#263742] hover:border-[#3E5666] bg-[#021119]/40 text-xs text-[#E2E8F0] tracking-[0.16em] uppercase transition-colors">
              Insights
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE: HIERARCHICAL CARD CONTENT CONTAINER ================= */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          {/* TOP SPOTLIGHT FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#021119] rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/[0.04] shadow-xl flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
            {/* Embedded Accent Decorative Graphic Frame */}
            <div className="w-full sm:w-[240px] aspect-square bg-[#041624] rounded-xl flex items-center justify-center p-6 shrink-0 border border-white/[0.02]">
              <CyberStarburstMatrix />
            </div>

            {/* Information Grid */}
            <div className="flex flex-col justify-between h-full w-full text-left py-1">
              <div>
                <span className="text-[10px] tracking-[0.16em] text-[#00CFFD] font-semibold uppercase">
                  GETTING STARTED
                </span>
                <h3 className="text-xl sm:text-2xl font-normal leading-[1.3] text-white mt-2.5 mb-4 max-w-md">
                  How to transition from a traditional to a digital bank
                </h3>
              </div>

              <div className="space-y-5">
                <p className="text-[12px] text-[#516976] font-medium tracking-wide">
                  {regularCards[0].author} &nbsp;&nbsp; {regularCards[0].date}
                </p>
                <button className="w-full h-10 rounded-lg border border-[#1B2D38] hover:border-[#334B5C] bg-transparent text-[#94A3B8] hover:text-white font-medium text-[10px] tracking-[0.14em] uppercase transition-all">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>

          {/* LOWER SUBSIDIARY GRID SYSTEM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {regularCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.id * 0.08 }}
                className="bg-[#021119] rounded-2xl p-6 lg:p-7 border border-white/[0.04] flex flex-col justify-between min-h-[250px] w-full text-left">
                <div>
                  <span className="text-[10px] tracking-[0.16em] text-[#00CFFD] font-semibold uppercase">
                    {card.type}
                  </span>
                  <h3 className="text-[18px] sm:text-[19px] font-normal leading-[1.35] text-white mt-3">
                    {card.title}
                  </h3>
                </div>

                <div className="space-y-4 pt-6">
                  <p className="text-[12px] text-[#516976] font-medium tracking-wide">
                    {card.author} &nbsp;&nbsp; {card.date}
                  </p>
                  <button className="w-full h-10 rounded-lg border border-[#1B2D38] hover:border-[#334B5C] bg-transparent text-[#94A3B8] hover:text-white font-medium text-[10px] tracking-[0.14em] uppercase transition-all">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM ALIGNED ARCHIVE NAVIGATION */}
          <div className="w-full flex justify-end pt-4 pr-1">
            <a
              href="#insights"
              className="text-[11px] font-medium tracking-[0.15em] text-[#00CFFD] hover:text-[#3BE1FF] uppercase transition-colors flex items-center gap-1.5 border-b border-[#00CFFD]/20 pb-0.5">
              Read All Insights <span className="text-xs">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

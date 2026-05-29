import React from "react";
import { motion } from "framer-motion";

const InsightsSection = () => {
  const cards = [
    {
      id: 1,
      type: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      date: "David Smith • 17/08/24",
      hasIcon: true,
    },
    {
      id: 2,
      type: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      date: "David Smith • 17/08/24",
      hasIcon: false,
    },
    {
      id: 3,
      type: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      date: "David Smith • 17/08/24",
      hasIcon: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      {/* Left Static Header */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight max-w-xs">
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
        <button className="px-6 py-2.5 border border-gray-700 rounded-full text-xs uppercase tracking-widest text-gray-300 hover:bg-white/5 transition-all">
          Insights
        </button>
      </div>

      {/* Right 2-Column Content Layout */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Highlighted Row Card */}
        <div className="md:col-span-2 bg-[#02131A] rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center border border-white/5">
          <div className="w-32 h-32 bg-[#001D26] rounded-xl flex items-center justify-center p-4 shrink-0">
            {/* Geometric Pattern Representation */}
            <div className="grid grid-cols-2 gap-2 w-full h-full opacity-80">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="border-2 border-[#00CFFD] rounded-sm transform rotate-45 m-1"></div>
              ))}
            </div>
          </div>
          <div className="space-y-3 w-full">
            <span className="text-[10px] tracking-widest text-[#00CFFD] font-medium">
              {cards[0].type}
            </span>
            <h3 className="text-xl font-normal leading-snug">
              {cards[0].title}
            </h3>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-gray-500">{cards[0].date}</span>
              <button className="text-xs border border-gray-800 px-4 py-1.5 rounded-full hover:border-gray-600 transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Regular Grid Items */}
        {cards.slice(1).map((card) => (
          <div
            key={card.id}
            className="bg-[#02131A] rounded-2xl p-6 border border-white/5 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-3">
              <span className="text-[10px] tracking-widest text-gray-500 font-medium">
                {card.type}
              </span>
              <h3 className="text-lg font-normal leading-snug text-gray-200">
                {card.title}
              </h3>
            </div>
            <div className="pt-6">
              <span className="text-xs text-gray-600 block mb-3">
                {card.date}
              </span>
              <button className="w-full text-center text-xs border border-gray-800/80 py-2 rounded-xl hover:border-gray-700 transition-all">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;

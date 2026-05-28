import React from "react";
import { Bell, ArrowUpRight, CircleDollarSign, LayoutGrid } from "lucide-react";

const BalanceCard = () => {
  return (
    // BalanceCard ke main outer div ki classes me yeh change karein:
    <div
      className="absolute top-[8%] -right-15 md:-right-15 w-[45%] h-[58%] 
             bg-white/40 border border-white/30 rounded-2xl 
             shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] overflow-hidden box-border"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
      {/* Main Container */}
      <div className="w-full h-full p-4 flex flex-col justify-between text-black font-sans select-none box-border">
        {/* 1. Profile & Notification Header */}
        <div className="flex justify-between items-center">
          {/* Profile Details */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/40 overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
                alt="Toni Kross"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex flex-col">
              <h4 className="text-[10px] md:text-xs font-bold leading-tight truncate">
                Toni Kross
              </h4>
              <p className="text-[7.5px] md:text-[9px] text-black/50 leading-none truncate">
                Good Morning
              </p>
            </div>
          </div>

          {/* Notification Button */}
          <button className="w-6 h-6 md:w-7 md:h-7 bg-white/40 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/60 transition-colors flex-shrink-0">
            <Bell className="w-3.5 h-3.5 text-black/70" />
          </button>
        </div>

        {/* 2. Total Balance Section */}
        <div className="my-auto py-2">
          <p className="text-[7.5px] md:text-[9px] text-black/50 uppercase tracking-wider font-semibold mb-0.5">
            Total balance
          </p>
          <p className="text-sm md:text-lg font-bold text-[#0D3578] tracking-tight whitespace-nowrap">
            $42,295.00{" "}
            <span className="text-[10px] md:text-xs font-semibold text-[#0D3578]">
              USD
            </span>
          </p>
        </div>

        {/* 3. Quick Actions Grid */}
        <div className="grid grid-cols-3 gap-2 text-center mt-auto">
          {/* Fund Transfer */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-white/50 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors shadow-sm mb-1.5">
              <ArrowUpRight className="w-3.5 h-3.5 text-black/80" />
            </div>
            <span className="text-[7px] md:text-[8px] font-bold text-black/80 tracking-tight whitespace-nowrap">
              Fund Transfer
            </span>
          </div>

          {/* Add Money */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-white/50 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors shadow-sm mb-1.5">
              <CircleDollarSign className="w-3.5 h-3.5 text-black/80" />
            </div>
            <span className="text-[7px] md:text-[8px] font-bold text-black/80 tracking-tight whitespace-nowrap">
              Add Money
            </span>
          </div>

          {/* More */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-white/50 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors shadow-sm mb-1.5">
              <LayoutGrid className="w-3.5 h-3.5 text-black/80" />
            </div>
            <span className="text-[7px] md:text-[8px] font-bold text-black/80 tracking-tight whitespace-nowrap">
              More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;

import React from "react";
import { ArrowUpRight } from "lucide-react";

const ActivityCard = () => {
  return (
    <div
      className="absolute bottom-[16%] left-[-14%] w-[54%] aspect-[198/95] 
                 bg-white/60 border border-white/40 rounded-xl 
                 shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}>
      {/* Main Container */}
      <div className="w-full h-full p-2 flex flex-col justify-between text-black font-sans box-border">
        {/* 1. Header */}
        <h5 className="text-[9px] md:text-xs font-bold leading-none">
          Recent activity
        </h5>

        {/* 2. Tabs Navigation */}
        <div className="flex items-center justify-between gap-0.5 my-1 text-[6.5px] md:text-[8px] font-medium">
          <span className="px-1.5 py-0.5 bg-white text-black rounded-full shadow-sm cursor-pointer whitespace-nowrap">
            This Day
          </span>
          <span className="px-1.5 py-0.5 bg-[#082163] text-white rounded-full cursor-pointer whitespace-nowrap">
            This Week
          </span>
          <span className="px-1.5 py-0.5 bg-white/50 text-black rounded-full cursor-pointer whitespace-nowrap">
            This Month
          </span>
          <span className="px-1.5 py-0.5 bg-white/50 text-black rounded-full cursor-pointer whitespace-nowrap">
            6 Month
          </span>
        </div>

        {/* 3. Transaction Info Row */}
        <div className="flex items-center justify-between">
          {/* Left Side: Icon + Texts */}
          {/* YAHAN CHANGE KIYA: items-start kiya taaki sab starting se shuru ho */}
          <div className="flex items-start gap-1.5 min-w-0">
            {/* Purple Icon Wrapper */}
            <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center bg-purple-500/60 text-white rounded-md flex-shrink-0 mt-[1px]">
              <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3 stroke-[2.5]" />
            </div>

            {/* Name and Date Container */}
            {/* YAHAN BHI CHANGE KIYA: items-start aur spacing fix ki */}
            <div className="flex flex-col items-start gap-0.5 min-w-0">
              <p className="text-[8.5px] md:text-xs font-bold flex items-center gap-1 leading-none text-left">
                <span>To Jin</span>
                <span className="text-black/30 font-normal select-none">•</span>
                <span className="text-black/50 font-normal truncate">Work</span>
              </p>
              {/* text-left lagane se yeh bilkul left se chipak kar aayega */}
              <p className="text-[6.5px] md:text-[8px] text-black/45 font-medium leading-none text-left m-0 p-0">
                12 jun 2022
              </p>
            </div>
          </div>

          {/* Right Side: Price */}
          <span className="text-[9px] md:text-xs font-bold text-right flex-shrink-0 global-amount">
            -$59
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

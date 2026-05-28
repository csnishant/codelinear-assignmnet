import React from "react";

const ActivityCard = () => {
  return (
    <div
      className="absolute bg-white/40 border border-white/20 rounded-[10px] p-2.5 flex flex-col justify-between text-black select-none shadow-lg transition-all hover:scale-105 duration-300"
      style={{
        width: "198.25px",
        height: "91.5px",
        top: "162.96px",
        left: "0px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
      <h5 className="text-[9px] font-bold tracking-tight">Recent activity</h5>

      {/* Small Time Tabs */}
      <div className="flex gap-1 text-[6px] font-semibold">
        <span className="px-1.5 py-0.5 bg-white rounded-full shadow-sm cursor-pointer">
          This Day
        </span>
        <span className="px-1.5 py-0.5 bg-[#0D3578] text-white rounded-full cursor-pointer">
          This Week
        </span>
        <span className="px-1.5 py-0.5 bg-white/60 rounded-full cursor-pointer hover:bg-white/80">
          This Month
        </span>
        <span className="px-1.5 py-0.5 bg-white/60 rounded-full cursor-pointer hover:bg-white/80">
          6 Month
        </span>
      </div>

      {/* Transaction Row */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-700">
            <svg
              className="w-3 h-3 transform rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          <div>
            <p className="text-[8px] font-bold leading-none">
              To Jin -{" "}
              <span className="text-[7px] font-normal text-black/60">Work</span>
            </p>
            <p className="text-[6px] text-black/50 mt-0.5">12 Jun 2022</p>
          </div>
        </div>
        <span className="text-[8px] font-bold text-black">-$59</span>
      </div>
    </div>
  );
};

export default ActivityCard;

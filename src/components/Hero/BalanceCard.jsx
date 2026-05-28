import React from "react";

const BalanceCard = () => {
  return (
    <div
      className="absolute bg-white/40 border border-white/20 rounded-[9px] p-4 flex flex-col justify-between text-black select-none shadow-[0px_0px_27.57px_8.92px_rgba(0,0,0,0.25)] transition-all hover:scale-105 duration-300"
      style={{
        width: "210px",
        height: "187px",
        top: "18px",
        right: "0px",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
      {/* Profile & Notification */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border border-white/40">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" // Placeholder avatar image
              alt="Toni Kross"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-[11px] font-bold leading-tight">Toni Kross</h4>
            <p className="text-[8px] text-black/60">Good Morning</p>
          </div>
        </div>
        <div className="p-1.5 bg-white/40 rounded-full cursor-pointer hover:bg-white/60 transition-colors">
          <svg
            className="w-3 h-3 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
      </div>

      {/* Balance */}
      <div className="my-2">
        <p className="text-[9px] text-black/60 uppercase tracking-wider font-medium">
          Total balance
        </p>
        <p className="text-base font-bold text-[#0D3578]">
          $42,295.00 <span className="text-xs font-semibold">USD</span>
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-1 text-center">
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="p-1.5 bg-white/50 rounded-md mb-1 group-hover:bg-white transition-colors">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <span className="text-[7px] font-semibold tracking-tight">
            Fund Transfer
          </span>
        </div>

        <div className="flex flex-col items-center cursor-pointer group">
          <div className="p-1.5 bg-white/50 rounded-md mb-1 group-hover:bg-white transition-colors">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <span className="text-[7px] font-semibold tracking-tight">
            Add Money
          </span>
        </div>

        <div className="flex flex-col items-center cursor-pointer group">
          <div className="p-1.5 bg-white/50 rounded-md mb-1 group-hover:bg-white transition-colors">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"
              />
            </svg>
          </div>
          <span className="text-[7px] font-semibold tracking-tight">More</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;

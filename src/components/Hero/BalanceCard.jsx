import React from "react";
import { Bell, ArrowUpRight, CircleDollarSign, LayoutGrid } from "lucide-react";

const BalanceCard = () => {
  return (
    <div
      className="absolute top-[8%] right-0 w-[45%] h-[58%] bg-white/40 border border-white/20 rounded-[4%]"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}>
      <div className="w-full h-full p-[6%] flex flex-col justify-between text-black select-none shadow-[0px_0px_27.57px_8.92px_rgba(0,0,0,0.25)] transition-all hover:scale-[1.03] duration-300">
        {/* Profile & Notification */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-[6%] w-[75%]">
            <div className="w-[28%] aspect-square rounded-full bg-gray-300 overflow-hidden border border-white/40 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
                alt="Toni Kross"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="truncate">
              <h4 className="text-[min(2.5vw,11px)] font-bold leading-tight truncate">
                Toni Kross
              </h4>
              <p className="text-[min(1.8vw,8px)] text-black/60 truncate">
                Good Morning
              </p>
            </div>
          </div>
          <button className="p-[4%] bg-white/40 rounded-full cursor-pointer hover:bg-white/60 transition-colors flex items-center justify-center">
            <Bell className="w-[min(2.8vw,14px)] h-[min(2.8vw,14px)] text-black/80" />
          </button>
        </div>

        {/* Balance */}
        <div className="my-[2%]">
          <p className="text-[min(2vw,9px)] text-black/60 uppercase tracking-wider font-medium">
            Total balance
          </p>
          <p className="text-[min(3.8vw,17px)] font-bold text-[#0D3578] whitespace-nowrap">
            $42,295.00{" "}
            <span className="text-[min(2.5vw,11px)] font-semibold">USD</span>
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-[4%] text-center">
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="p-[14%] bg-white/50 rounded-md mb-[8%] group-hover:bg-white transition-colors flex items-center justify-center aspect-square w-full max-w-[28px]">
              <ArrowUpRight className="w-full h-full text-black" />
            </div>
            <span className="text-[min(1.6vw,7px)] font-bold tracking-tight text-black/80 block line-clamp-2">
              Fund Transfer
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer group">
            <div className="p-[14%] bg-white/50 rounded-md mb-[8%] group-hover:bg-white transition-colors flex items-center justify-center aspect-square w-full max-w-[28px]">
              <CircleDollarSign className="w-full h-full text-black" />
            </div>
            <span className="text-[min(1.6vw,7px)] font-bold tracking-tight text-black/80 block line-clamp-2">
              Add Money
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer group">
            <div className="p-[14%] bg-white/50 rounded-md mb-[8%] group-hover:bg-white transition-colors flex items-center justify-center aspect-square w-full max-w-[28px]">
              <LayoutGrid className="w-full h-full text-black" />
            </div>
            <span className="text-[min(1.6vw,7px)] font-bold tracking-tight text-black/80 block line-clamp-2">
              More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;

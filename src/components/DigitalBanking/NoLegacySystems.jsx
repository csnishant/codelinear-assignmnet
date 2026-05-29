import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import MobileMockup from "./MobileMockup";
import transactionScreen from "../../assets/transactionScreen.png";

export default function NoLegacySystems() {
  const listItems = [
    "Adaptive & Intelligent API monetization",
    "Ambient User Experience",
    "Cloud-native With lower TCO",
  ];

  return (
    <div className="w-full bg-[#ffffff] text-slate-800 overflow-hidden font-sans relative py-24 min-h-screen flex items-center">
      <div className="absolute left-0 bottom-0 top-0 w-[45%] opacity-[0.08] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 500 800"
          className="w-full h-full object-contain object-left"
          fill="none"
          stroke="#2563eb">
          <circle cx="-100" cy="400" r="450" strokeWidth="2.5" />
          <circle
            cx="-100"
            cy="400"
            r="360"
            strokeWidth="1.5"
            strokeDasharray="12 12"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10 w-full">
        <div className="hidden lg:block lg:col-span-4" />

        <div className="col-span-1 lg:col-span-4 flex flex-col justify-center space-y-6 z-10">
          <div className="space-y-4">
            <h2 className="tracking-tight text-left font-bold text-[#000D12] text-[16px] uppercase">
              No legacy IT systems
            </h2>
            <p className="text-left text-[#000D12] text-[16px] font-normal opacity-80 max-w-[270px] leading-[1.3]">
              Our Digital Banking solution and multilayered approach help
              financial institutions take advantage of digital transformation by
              ensuring customer trust.
            </p>
          </div>

          <ul className="space-y-4 pt-1">
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 group text-left text-[#000D12] text-[16px] font-normal leading-[1.3]">
                <CheckCircle2
                  size={20}
                  className="text-blue-600 fill-blue-50 shrink-0 transform group-hover:scale-105 transition-transform"
                />
                <span className="tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end items-center relative z-10">
          <div className="absolute w-56 h-56 bg-blue-400/10 blur-[90px] rounded-full -z-10" />
          <MobileMockup screenImage={transactionScreen} />
        </div>
      </div>
    </div>
  );
}

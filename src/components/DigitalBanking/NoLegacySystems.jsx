import React from "react";
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
    <div className="w-full bg-white text-[#000D12] overflow-hidden font-sans relative py-12 flex items-center">
      {/* Curved Blue Line SVG Graphics matching the page flow */}
      <div className="absolute left-0 bottom-0 top-0 w-[50%] opacity-[0.12] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 500 800"
          className="w-full h-full object-contain object-left"
          fill="none"
          stroke="#2563eb">
          <circle cx="-100" cy="400" r="450" strokeWidth="2" />
          <circle
            cx="-100"
            cy="400"
            r="370"
            strokeWidth="1"
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10 w-full">
        <div className="hidden lg:block lg:col-span-4" />

        {/* Text Content Block */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-center space-y-5 z-10">
          <div className="space-y-3">
            <h2
              style={{
                color: "#000D12",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "130%", // Fixed: Changed from line-height to camelCase
                letterSpacing: "0%",
                opacity: 1,
              }}
              className="text-left font-bold tracking-normal block relative z-30">
              No legacy IT systems
            </h2>
            <p className="text-left text-[#000D12]/80 text-[14px] md:text-[15px] font-normal max-w-[340px] leading-[1.4]">
              Our Digital Banking solution and multilayered approach help
              financial institutions take advantage of digital transformation by
              ensuring customer trust and regulatory compliance.
            </p>
          </div>

          <ul className="space-y-3.5 pt-1">
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 group text-left text-[#000D12] text-[14px] font-medium leading-[1.3]">
                <CheckCircle2
                  size={18}
                  className="text-blue-600 fill-blue-50 shrink-0"
                />
                <span className="tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Phone Mockup Block */}
        <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end items-center relative z-10">
          <div className="absolute w-56 h-56 bg-blue-400/5 blur-[80px] rounded-full -z-10" />
          <MobileMockup screenImage={transactionScreen} />
        </div>
      </div>
    </div>
  );
}

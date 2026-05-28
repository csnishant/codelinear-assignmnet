import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function EfficientBanking() {
  const column1Features = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ];

  const column2Features = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];

  return (
    /* Section Container matched to image_ba924b.png dark aesthetic */
    <section className="relative w-full max-w-[1440px] min-h-[650px] py-20 lg:py-0 flex items-center justify-between px-6 sm:px-12 lg:px-20 mx-auto bg-[#000D12] overflow-hidden select-none">
      {/* Google Font Link Injection */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&display=swap');`}
      </style>

      {/* Grid Layout Mirroring image_ba924b.png */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Laptop Frame with Bleeding Right-Sided Stand */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:col-span-5 flex justify-end items-center relative -translate-x-12 sm:-translate-x-24 lg:-translate-x-32 xl:-translate-x-40">
          {/* Subtle Ambient Back-Glow */}
          <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-3xl pointer-events-none z-0" />

          {/* Device Base Box */}
          <div className="relative w-[140%] sm:w-[110%] lg:w-[780px] pb-[14px] z-10">
            {/* Laptop Screen Body Frame - Highlighted with precise top/right cyan glow borders */}
            <div className="relative w-full aspect-[16/10] bg-[#111C24] rounded-tr-xl border-t-2 border-r-2 border-b border-sky-400/80 shadow-2xl overflow-hidden flex flex-col justify-start z-10">
              {/* Internal Mockup Content representing KYC Dashboard interface from image_ba924b.png */}
              <div className="w-full h-full bg-[#E5E9EC] text-gray-800 p-4 flex flex-col space-y-3 text-[10px] font-sans overflow-hidden">
                {/* Header Navbar strip */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-500 font-medium pl-2 text-[8px]">
                      KYC Dashboard
                    </span>
                  </div>
                  <div className="w-24 h-3 bg-white rounded-sm border border-gray-200" />
                </div>

                {/* Stat row with colored outline blocks */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white p-2 border-t-2 border-blue-500 rounded shadow-sm flex flex-col">
                    <span className="font-bold text-blue-600 text-xs">115</span>
                    <span className="text-[6px] text-gray-400">Customer</span>
                  </div>
                  <div className="bg-white p-2 border-t-2 border-amber-500 rounded shadow-sm flex flex-col">
                    <span className="font-bold text-amber-500 text-xs">
                      940
                    </span>
                    <span className="text-[6px] text-gray-400">
                      In Progress
                    </span>
                  </div>
                  <div className="bg-white p-2 border-t-2 border-emerald-500 rounded shadow-sm flex flex-col">
                    <span className="font-bold text-emerald-600 text-xs">
                      1053
                    </span>
                    <span className="text-[6px] text-gray-400">Completed</span>
                  </div>
                  <div className="bg-white p-2 border-t-2 border-rose-500 rounded shadow-sm flex flex-col">
                    <span className="font-bold text-rose-500 text-xs">42</span>
                    <span className="text-[6px] text-gray-400">Failed</span>
                  </div>
                </div>

                {/* Center Content Splits */}
                <div className="grid grid-cols-12 gap-3 flex-1 overflow-hidden">
                  <div className="col-span-5 bg-white p-2 rounded border border-gray-200 shadow-sm flex flex-col gap-1.5">
                    <div className="w-full h-2 bg-gray-100 rounded" />
                    <div className="w-4/5 h-2 bg-gray-100 rounded" />
                    <div className="w-full h-12 bg-gray-50 rounded border border-dashed border-gray-200" />
                  </div>

                  {/* Floating Action Modal on the right half mirroring image_ba924b.png overlay */}
                  <div className="col-span-7 bg-white rounded border border-blue-200 shadow-lg flex flex-col text-[8px] transform translate-y-1">
                    <div className="bg-gray-50 p-1.5 border-b border-gray-100 flex justify-between items-center font-bold text-gray-700">
                      <span>Failed Records</span>
                      <span className="bg-rose-500 text-white rounded-full px-1 text-[6px]">
                        22
                      </span>
                    </div>
                    <div className="p-2 space-y-1.5 flex-1 overflow-hidden">
                      <div className="bg-rose-50/50 p-1.5 rounded border border-rose-100 text-rose-700">
                        <p className="font-bold">
                          1. Aadhar Number not matching
                        </p>
                        <p className="text-gray-400 text-[6px]">
                          2. IFSC Mix missing
                        </p>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded" />
                      <div className="h-2 w-5/6 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ADJUSTED LAPTOP BASE TRACK - Extended seamlessly to the right side */}
            <div className="absolute bottom-0 right-[-60px] w-[calc(100%+60px)] h-[14px] z-20 pointer-events-none">
              <div className="w-full h-full bg-[#000D12] rounded-r-xl rounded-l-none border-r-2 border-b-2 border-t border-sky-400/90 shadow-[0_4px_25px_rgba(56,189,248,0.2)] flex items-center justify-end pr-4">
                {/* Thin sleek internal accent glow bar */}
                <div className="w-[95%] h-[2px] bg-sky-900/40 rounded-full opacity-40" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Feature Matrix Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:col-span-7 flex flex-col space-y-8 lg:pl-4">
          {/* Main Context Title Statement */}
          <h2
            className="text-2xl sm:text-3xl md:text-[38px] text-[#E5E9EC] max-w-2xl font-light leading-[1.25] tracking-wide"
            style={{ fontFamily: "'Archivo', sans-serif" }}>
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </h2>

          {/* GREEN OUTLINED TICKET BADGE: "What you will get:" */}
          <div className="self-start">
            <div className="  bg-transparent rounded-sm">
              <span
                className="text-white text-sm md:text-base font-medium tracking-wide"
                style={{ fontFamily: "'Archivo', sans-serif" }}>
                What you will get:
              </span>
            </div>
          </div>

          {/* TWO COLUMN CHECKLIST LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-start w-full">
            {/* Column 1 Features list */}
            <div className="space-y-4">
              {column1Features.map((feat, index) => (
                <div key={index} className="flex items-start space-x-3.5 group">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span
                    className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm md:text-[15px] font-light leading-snug"
                    style={{ fontFamily: "'Archivo', sans-serif" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 Features list */}
            <div className="space-y-4">
              {column2Features.map((feat, index) => (
                <div key={index} className="flex items-start space-x-3.5 group">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span
                    className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm md:text-[15px] font-light leading-snug"
                    style={{ fontFamily: "'Archivo', sans-serif" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

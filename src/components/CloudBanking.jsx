import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CloudBanking() {
  return (
    /* Section Container: Background updated to #E9F4F9, text alignment and container specs mapped */
    <section className="relative w-full max-w-[1440px] min-h-[619px] py-24 lg:py-0 flex items-center justify-between px-6 sm:px-12 lg:px-20 mx-auto  overflow-hidden select-none">
      {/* Google Font Link for Archivo - Dynamic Injection */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap');`}
      </style>

      {/* 1. Giant Outline Background Text ("CB7") - Adjusted opacity for light background contrast */}
      <div
        className="absolute left-10 lg:left-40 top-1/2 -translate-y-1/2 text-[180px] sm:text-[300px] md:text-[450px] lg:text-[540px] font-bold tracking-tight uppercase select-none pointer-events-none z-0 text-transparent"
        style={{
          WebkitTextStroke: "1px rgba(0, 13, 18, 0.03)",
          fontFamily: "'Archivo', sans-serif",
        }}>
        CB7
      </div>

      {/* Main Grid Wrapper */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
          {/* Main Title Frame with exact typography specs */}
          <h2
            className="text-3xl sm:text-4xl md:text-[53px] text-[#000D12] max-w-lg"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
            }}>
            A complete cloud-based
            <br />
            core banking.
          </h2>

          {/* Subtext Paragraph updated for clear readability on light background */}
          <p
            className="text-sm sm:text-base text-gray-600 max-w-sm leading-relaxed"
            style={{ fontFamily: "'Archivo', sans-serif" }}>
            Faster time to market with our cloud-based core banking services.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap gap-5 pt-2 items-center justify-center lg:justify-start w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-[48px] px-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-xs font-bold tracking-widest hover:brightness-110 transition-all uppercase shadow-[0_4px_25px_rgba(37,99,235,0.15)] text-white whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "'Archivo', sans-serif" }}>
              Request Demo
            </motion.button>

            {/* Split Underline Action Trigger */}
            <div className="h-[21px] flex items-center">
              <a
                href="#"
                className="relative flex items-center gap-[3px] text-xs font-bold tracking-widest text-[#00A3FF] uppercase transition-colors group opacity-100"
                style={{ fontFamily: "'Archivo', sans-serif" }}>
                <span className="relative pb-[4px]">LEARN</span>
                <span className="pl-[2px] pb-[4px]">MORE</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform stroke-[2.5] mb-[4px]" />
                <span className="absolute bottom-0 left-0 w-[44px] h-[2px] bg-[#00A3FF] rounded-full" />
              </a>
            </div>
          </div>

          {/* Feature pills */}
          <div
            className="space-y-2 text-gray-400 text-xs tracking-wider uppercase font-semibold pt-4 text-left w-full hidden sm:block"
            style={{ fontFamily: "'Archivo', sans-serif" }}>
            <div className="hover:text-gray-700 transition-colors cursor-pointer">
              ▪ Core Banking CB7
            </div>
            <div className="hover:text-gray-700 transition-colors cursor-pointer">
              ▪ Digital Banking N7
            </div>
            <div className="hover:text-gray-700 transition-colors cursor-pointer">
              ▪ Open Banking
            </div>
            <div className="hover:text-gray-700 transition-colors cursor-pointer">
              ▪ Loan Origination System
            </div>
            <div className="hover:text-gray-700 transition-colors cursor-pointer">
              ▪ Loan Management
            </div>
          </div>
        </motion.div>

        {/* Right Content Column - Laptop Bleeding Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full lg:col-span-7 flex justify-center lg:justify-start items-center relative translate-x-12 sm:translate-x-24 lg:translate-x-32 xl:translate-x-40">
          {/* Ambient Glow for Light Theme Profile */}
          <div className="absolute -inset-4 bg-blue-400/5 blur-3xl rounded-3xl pointer-events-none z-0" />

          {/* Laptop Device Main Frame Container */}
          <div className="relative w-[140%] sm:w-[110%] lg:w-[780px] pb-[14px] z-10">
            {/* Laptop Screen Body Frame */}
            <div className="relative w-full aspect-[16/10] bg-[#081521] rounded-tl-xl border-t-2 border-l-2 border-b border-sky-400/80 shadow-2xl overflow-hidden flex flex-col justify-start z-10">
              {/* AML Dashboard Layout */}
              <div className="w-full h-full bg-[#EBF1F6] text-gray-800 p-4 flex flex-col space-y-4 text-[11px] font-sans overflow-hidden">
                {/* Browser Top Header */}
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="font-bold text-gray-900 text-xs sm:text-sm tracking-wide">
                    AML Dashboard
                  </div>
                  <div className="w-12" />
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      val: "450",
                      label: "Total STR Reports",
                      color: "text-rose-500",
                    },
                    {
                      val: "127",
                      label: "Pending Processing",
                      color: "text-amber-500",
                    },
                    {
                      val: "3",
                      label: "Days Target Limit",
                      color: "text-blue-600",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-md border border-gray-200/60 flex flex-col shadow-sm relative overflow-hidden">
                      <span
                        className={`text-lg sm:text-xl font-bold leading-none ${stat.color}`}>
                        {stat.val}
                      </span>
                      <span className="text-[8px] text-gray-500 mt-1.5 leading-tight font-medium">
                        {stat.label}
                      </span>
                      {i === 0 && (
                        <div className="absolute right-2 bottom-2 w-2 h-2 rounded-full bg-red-500" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Donut Chart and Bars Visualization */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md border border-gray-100 flex items-center justify-center h-32 shadow-sm">
                    <div className="relative w-20 h-20">
                      <svg
                        viewBox="0 0 36 36"
                        className="w-full h-full -rotate-90">
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#EBF1F6"
                          strokeWidth="5"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#F43F5E"
                          strokeWidth="5"
                          strokeDasharray="40 100"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="5"
                          strokeDasharray="25 100"
                          strokeDashoffset="-40"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="5"
                          strokeDasharray="20 100"
                          strokeDashoffset="-65"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-[8px] font-bold text-gray-600 leading-none">
                        <span>450</span>
                        <span className="text-[6px] text-gray-400 mt-0.5">
                          STR
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-md border border-gray-100 h-32 flex items-end gap-1.5 shadow-sm">
                    {[40, 65, 35, 85, 55, 75, 45, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-sky-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Data Feed Sheet */}
                <div className="bg-white rounded-md border border-gray-100 flex-1 flex flex-col overflow-hidden text-[7px] shadow-sm">
                  <div className="bg-blue-900 text-white p-2 grid grid-cols-4 font-bold tracking-wide uppercase text-[6px]">
                    <span>AML Case ID</span>
                    <span>Identified Date</span>
                    <span>Mode</span>
                    <span>Amount</span>
                  </div>
                  <div className="p-2 grid grid-cols-4 border-b border-gray-100 text-gray-600 font-medium">
                    <span>#229-X</span>
                    <span>02-01-2026</span>
                    <span className="text-emerald-600 font-bold">FT</span>
                    <span>$70,000</span>
                  </div>
                  <div className="p-2 grid grid-cols-4 text-gray-600 font-medium">
                    <span>#180-Y</span>
                    <span>03-01-2026</span>
                    <span className="text-blue-600 font-bold">CS</span>
                    <span>$150,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Keyboard Deck Bottom Tray Stand */}
            <div className="absolute bottom-0 left-[-60px] w-[calc(100%+60px)] h-[14px] z-20 pointer-events-none">
              <div className="w-full h-full bg-[#000D12] rounded-l-xl rounded-r-none border-l-2 border-b-2 border-t border-sky-400/90 shadow-[0_4px_25px_rgba(56,189,248,0.15)] flex items-center pl-4">
                <div className="w-[95%] h-[2px] bg-sky-900/40 rounded-full opacity-40" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

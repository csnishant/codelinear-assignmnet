import React from "react";
import { motion } from "framer-motion";

const PaperlessBanner = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-[#F4F9FC] flex items-center justify-center overflow-hidden p-6 font-sans">
      {/* Outside Gradient Design/Aura (As specified in your prompt) */}
      <div
        className="absolute pointer-events-none rounded-full blur-[120px]"
        style={{
          background:
            "linear-gradient(100.92deg, #00CFFD 35.49%, #0015CE 82.38%)",
          width: "778.74px",
          height: "778.74px",
          opacity: 0.1,
          top: "10%",
          left: "-20%",
          transform: "rotate(0deg)",
        }}
      />

      {/* Inside Main Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[1200px] min-h-[380px] rounded-[32px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-2xl select-none"
        style={{
          background:
            "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
        }}>
        {/* SVG Vector Background Shapes ("N7" outline simulation) */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Outline 'N' */}
            <path
              d="M520 450V-50L750 450V-50"
              stroke="#00CFFD"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            {/* Outline '7' */}
            <path
              d="M780 40H910L820 450"
              stroke="#0015CE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            {/* Top thin aesthetic line */}
            <line
              x1="800"
              y1="-100"
              x2="950"
              y2="300"
              stroke="#00CFFD"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Left Content Side */}
        <div className="z-10 max-w-xl text-left space-y-5">
          <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-[1.15]">
            Take the full advantage of <br />
            <span className="font-normal">going paper-less now.</span>
          </h2>
          <p className="text-[#7A8E99] text-sm md:text-base font-normal max-w-md leading-relaxed">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right Action Buttons Side */}
        <div className="z-10 flex flex-col sm:flex-row gap-5 mt-8 md:mt-0 w-full md:w-auto items-center">
          {/* Contact Us Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-gray-600 bg-transparent text-white font-medium text-xs tracking-widest uppercase transition-colors">
            Contact Us
          </motion.button>

          {/* Request Demo Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 20px rgba(0, 207, 253, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-medium text-xs tracking-widest uppercase shadow-lg transition-all"
            style={{
              background:
                "linear-gradient(100.92deg, #00CFFD 35.49%, #0015CE 82.38%)",
            }}>
            Request Demo
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaperlessBanner;

import React from "react";
import { motion } from "framer-motion";

const PaperlessBanner = () => {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden py-10 font-sans">
      {/* 2. Inside Content Container Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-7xl rounded-[28px] px-8 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden border border-white/[0.04] shadow-2xl"
        style={{
          background:
            "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
        }}>
        {/* 3. Deep-Tech Ambient Wireframe (Right Align "N7" Overlay Graphic) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none mix-blend-screen hidden md:block">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Structural Graphic Accent lines */}
            <path
              d="M680 480V-80L940 480V-80"
              stroke="#00CFFD"
              strokeWidth="1.2"
              strokeMiterlimit="10"
            />
            <path
              d="M980 60H1140L1020 480"
              stroke="#0015CE"
              strokeWidth="1.2"
              strokeMiterlimit="10"
            />
            <line
              x1="1000"
              y1="-120"
              x2="1180"
              y2="350"
              stroke="#00CFFD"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* 4. Left Column: Text Stack */}
        <div className="z-10 max-w-2xl text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-tight leading-[1.2]">
            Take the full advantage of <br />
            <span className="text-white">going paper-less now.</span>
          </h2>
          <p className="text-[#687C87] text-xs sm:text-sm font-normal max-w-md leading-relaxed pt-2">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* 5. Right Column: Call to Action Interface Buttons */}
        <div className="z-10 flex flex-col sm:flex-row gap-4 mt-8 lg:mt-0 w-full lg:w-auto items-center">
          {/* Transparent Outline Action Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[150px] px-7 py-3 rounded-xl border border-[#2A3E47] bg-transparent text-white font-medium text-[11px] tracking-widest uppercase transition-colors">
            Contact Us
          </motion.button>

          {/* Solid Gradient Action Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 25px rgba(0, 207, 253, 0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto min-w-[160px] px-7 py-3 rounded-xl text-white font-semibold text-[11px] tracking-widest uppercase shadow-md transition-all"
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
// 

export default PaperlessBanner;

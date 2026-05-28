// DigitalBanking.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
// image_be3c41.png representation panel
import homeScreen from "../assets/homeScreen.png"; // Ensure this path is correct
import MobileMockup from "./DigitalBanking/MobileMockup";

export default function DigitalBanking() {
  const complianceFeatures = [
    "Pre-integrated Security System",
    "Fully Compliant With Regulatory Requirement",
    "Digitally Connected Core",
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-[#f3f8fc] to-white text-slate-800 overflow-hidden font-sans relative pb-20">
      {/* Top Banner / Marquee Ticker */}
      <div className="w-full bg-white border-y border-purple-200/60 py-3 flex items-center overflow-hidden whitespace-nowrap shadow-sm">
        <motion.div
          className="flex items-center gap-12 text-sm md:text-base font-bold text-slate-900 tracking-wide uppercase"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}>
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2 text-blue-600">
                <Sparkles size={18} className="text-blue-500 animate-pulse" />{" "}
                N7
              </span>
              <span>Say 👋 to the new way of banking</span>
              <span className="flex items-center gap-2 text-blue-600">
                <Sparkles size={18} className="text-blue-500 animate-pulse" />{" "}
                CB7
              </span>
              <span>Say 👋 to the new way of banking</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Main Content Hero Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center pt-16 relative z-10">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0 overflow-hidden">
          <span className="text-[40rem] font-black tracking-tighter text-blue-900">
            N7
          </span>
        </div>

        {/* Left Grid Section: Marketing Copy */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Digital banking <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              out-of-the-box
            </span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-medium">
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider">
              Request Demo
            </button>
            <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors py-2 uppercase tracking-wide group">
              Learn More
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Center Grid Section: Isolated Mobile Screen Component */}
        <div className="lg:col-span-4 flex justify-center items-center z-10 relative">
          <div className="absolute w-72 h-72 bg-blue-400/10 blur-[80px] rounded-full -z-10" />
          {/* Sending First Screen via Prop */}
          <MobileMockup screenImage={homeScreen} />
        </div>

        {/* Right Grid Section: Regulatory Framework */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10 lg:pl-4">
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
              Fully compliant with regulatory requirement
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
              The governance of risk management with regulations is achieved by
              our risk management framework that is fully integrated to work
              with digital bank's operational-risk protocols and procedures.
            </p>
          </div>

          <ul className="space-y-3.5 pt-2">
            {complianceFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-800 group">
                <CheckCircle2
                  size={18}
                  className="text-blue-600 fill-blue-50 shrink-0 group-hover:scale-110 transition-transform"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

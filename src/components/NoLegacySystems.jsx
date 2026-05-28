// NoLegacySystems.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import MobileMockup from "./DigitalBanking/MobileMockup";
import transactionScreen from "../assets/transactionScreen.png";

export default function NoLegacySystems() {
  const listItems = [
    "Adaptive & Intelligent API monetization",
    "Ambient User Experience",
    "Cloud-native With lower TCO",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-[#ffffff] text-slate-800 overflow-hidden font-sans relative py-24 min-h-screen flex items-center">
      {/* Left side abstract geometric background outline design vector */}
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

      {/* Main Grid Wrapper - Perfectly Aligned 12-Column Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10 w-full">
        {/* Left Space/Shift Column to match original design structure */}
        <div className="hidden lg:block lg:col-span-4" />

        {/* Center/Right Text Column: Marketing and Compliance Matrix */}
        <motion.div
          className="col-span-1 lg:col-span-4 flex flex-col justify-center space-y-6 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          style={{ fontFamily: "'Archivo', sans-serif" }}>
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Heading Element */}
            <h2
              className="tracking-tight text-left font-bold"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#000D12",
              }}>
              No legacy IT systems
            </h2>

            {/* Description Paragraph Block */}
            <p
              className="text-left"
              style={{
                width: "269px", // As per Figma spec '269 Fill x 21 Hug' width rule
                fontSize: "16px",
                fontWeight: 400, // Regular style mapping from spec
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#000D12",
                opacity: 0.8, // Smooth readability contrast matching screenshot
              }}>
              Our Digital Banking solution and multilayered approach help
              financial institutions take advantage of digital transformation by
              ensuring customer trust and regulatory compliance.
            </p>
          </motion.div>

          {/* Core Feature Dynamic Matrix List */}
          <motion.ul variants={containerVariants} className="space-y-4 pt-1">
            {listItems.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 group text-left"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  color: "#000D12",
                }}>
                <CheckCircle2
                  size={20} // Adjusted to match the visual balance next to 16px font
                  className="text-blue-600 fill-blue-50 shrink-0 transform group-hover:scale-105 transition-transform"
                />
                <span className="tracking-tight">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Rightmost Column: Shifted to right corner to match exactly 100% */}
        <motion.div
          className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end items-center relative z-10"
          initial={{ opacity: 0, scale: 0.94, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}>
          {/* Ambient Subtle Radial Glow behind Mockup */}
          <div className="absolute w-56 h-56 bg-blue-400/10 blur-[90px] rounded-full -z-10" />

          {/* Corrected Prop Name to screenImage to prevent black screen issue */}
          <MobileMockup screenImage={transactionScreen} />
        </motion.div>
      </div>
    </div>
  );
}

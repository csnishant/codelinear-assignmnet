// NoTraditionalBranches.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import MobileMockup from "./MobileMockup";

// Profile screen ki screenshot image ko import karein
import profileScreen from "../../assets/profileScreen.png"; // Path check kar lijiye

export default function NoTraditionalBranches() {
  const listItems = [
    "Branchless & Paperless Banking",
    "Digital Transformation Capability",
    "Optimized, Adoptable and Scalable",
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
    // Pehle: <div className="w-full bg-white ...">
    // Ab isko badal kar ye karein:
    <div className="w-full bg-[#F4F9FC] text-[#000D12] overflow-hidden font-sans relative py-24 min-h-screen flex items-center">
      {/* Subtle Right-side background design trace if needed to replicate layout theme */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-[0.05] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 400 800"
          className="w-full h-full object-contain object-right"
          fill="none"
          stroke="#2563eb">
          <circle cx="450" cy="400" r="350" strokeWidth="2" />
        </svg>
      </div>

      {/* Main 12-Column Layout Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Spacing (Empty block to keep mockup pushed slightly towards center-left) */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Center Section: Mobile Mockup Container */}
        <motion.div
          className="col-span-1 lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}>
          {/* Ambient Glow Backplate */}
          <div className="absolute w-60 h-60 bg-blue-400/5 blur-[80px] rounded-full -z-10" />

          {/* Profile screen component rendering dynamically via screenImage prop */}
          <MobileMockup screenImage={profileScreen} />
        </motion.div>

        {/* Right Section: Core Marketing Content Panel */}
        <motion.div
          className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          style={{ fontFamily: "'Archivo', sans-serif" }}>
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Header Element */}
            <h2
              className="tracking-tight text-left font-bold"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#000D12",
              }}>
              No traditional branches
            </h2>

            {/* Description Text matching your figma specs */}
            <p
              className="text-left"
              style={{
                maxWidth: "360px", // Adjusted container width to match image aspect ratio
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#000D12",
                opacity: 0.8,
              }}>
              Our Digital Banking out-of-the-box helps you to accelerate
              innovation while reducing risks and optimising operational costs
              for a seamless branchless experience.'
            </p>
          </motion.div>

          {/* Core Feature Dynamic Matrix Checklist */}
          <motion.ul variants={containerVariants} className="space-y-4 pt-1">
            {listItems.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3.5 group text-left"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "130%",
                  letterSpacing: "0%",
                  color: "#000D12",
                }}>
                <CheckCircle2
                  size={20}
                  className="text-blue-600 fill-blue-50 shrink-0 transform group-hover:scale-105 transition-transform"
                />
                <span className="tracking-tight">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right End Spacer */}
        <div className="hidden lg:block lg:col-span-1" />
      </div>
    </div>
  );
}

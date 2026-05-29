import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000D12] border-t border-white/[0.04] pt-20 lg:pt-32 pb-10 px-6 sm:px-12 lg:px-16 font-sans text-white relative overflow-hidden">
      {/* Main Grid Wrapper Layout */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative z-10">
        {/* ================= LEFT SIDE: DYNAMIC OVERSIZED LOGO PILLAR ================= */}
        <div className="lg:col-span-4 flex items-start justify-start relative select-none">
          <h1
            className="font-black tracking-tighter leading-none text-transparent bg-clip-text lg:absolute lg:-top-16 lg:-left-4 select-none"
            style={{
              fontFamily: "'Archivo', system-ui, sans-serif",
              fontSize: "clamp(100px, 20vw, 290px)",
              /* Exactly matching the shared image: Pure Electric Cyan transitioning to rich Royal Blue */
              background:
                "linear-gradient(110deg, #00C3FF 15%, #0077FF 50%, #003FE6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            N7
          </h1>
          {/* Layout structural block preservation for large screens */}
          <div className="hidden lg:block h-[260px]" />
        </div>

        {/* ================= RIGHT SIDE: TEXT LAYOUT CONTAINER ================= */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 w-full lg:ml-auto">
          {/* COLUMN 1: London & Solutions Matrix */}
          <div className="flex flex-col gap-10 w-full max-w-[270px]">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                London
              </h4>
              <p className="text-[#687C87] text-xs sm:text-[13px] leading-[1.5] font-medium">
                Linktia Infosystems Ltd – CB7,
                <br />
                26 Main Road Sundridge, TN14 6EP,
                <br />
                England, United Kingdom.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
                Solutions
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-[13px] text-[#687C87] font-medium">
                {[
                  "Core Banking CB7",
                  "Digital Banking N7",
                  "Open Banking",
                  "Loan Origination System",
                  "Loan Management System",
                  "Digital Transformation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between hover:text-[#01B4FD] transition-colors cursor-pointer group">
                    <span>{item}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-[#01B4FD] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 2: Dubai & Corporate Architecture */}
          <div className="flex flex-col gap-10 w-full max-w-[270px]">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                Dubai
              </h4>
              <p className="text-[#687C87] text-xs sm:text-[13px] leading-[1.5] font-medium">
                Linktia Infosystems Ltd –
                <br />
                CB7, Jumeirah Business, Center 5
                <br />
                Cluster W, Jumeirah Lakes Towers,
                <br />
                Dubai, United Arab Emirates.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
                N7 Banking
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-[13px] text-[#687C87] font-medium">
                {[
                  "About Us",
                  "Solutions",
                  "Contact",
                  "Company",
                  "Careers",
                  "Insights",
                  "Core Team",
                  "Brand Center",
                ].map((link) => (
                  <li
                    key={link}
                    className="flex items-center justify-between hover:text-[#01B4FD] transition-colors cursor-pointer group">
                    <span>{link}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-[#01B4FD] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 3: India & Social Network Links */}
          <div className="flex flex-col gap-10 w-full max-w-[270px] sm:col-span-2 md:col-span-1">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                India
              </h4>
              <p className="text-[#687C87] text-xs sm:text-[13px] leading-[1.5] font-medium">
                Linktia Infosystems Ltd –
                <br />
                CB7, Nirmal, Anand Nagar,
                <br />
                Suncity Road, Pune,
                <br />
                Maharashtra, 411041, India.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase border-b border-white/5 pb-2">
                Our Socials
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-[13px] text-[#687C87] font-medium">
                {["LinkedIn", "X"].map((social) => (
                  <li
                    key={social}
                    className="flex items-center justify-between hover:text-[#01B4FD] transition-colors cursor-pointer group">
                    <span>{social}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-[#01B4FD] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LOWER COPYRIGHT STRIP ================= */}
      <div className="max-w-[1400px] mx-auto border-t border-white/[0.04] mt-20 lg:mt-24 pt-8 flex flex-col md:flex-row justify-between items-start text-[11px] text-[#42545E] gap-4 relative z-10">
        <p className="leading-relaxed text-left max-w-4xl">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}

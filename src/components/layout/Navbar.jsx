import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-[716px] h-[47px] px-[10px] py-[9px] rounded-[12px] bg-[#2F2F2F]/70 backdrop-blur-[15px] border border-white/10"
      style={{ top: "31px" }}>
      {/* Logo Section */}
      <div className="flex items-center text-white font-bold text-xl px-2 select-none">
        N7
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-white text-xs font-medium tracking-wide">
        <a
          href="#solutions"
          className="flex items-center gap-1 hover:text-gray-300 transition-colors">
          SOLUTIONS
          <svg
            className="w-3 h-3 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <a
          href="#resources"
          className="flex items-center gap-1 hover:text-gray-300 transition-colors">
          RESOURCES
          <svg
            className="w-3 h-3 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <a href="#about" className="hover:text-gray-300 transition-colors">
          ABOUT US
        </a>
      </div>

      {/* Action Button (Desktop) */}
      <div className="hidden md:block">
        <button className="h-[29px] px-4 text-[11px] font-semibold text-white tracking-wider uppercase border border-white/40 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
          Request Demo
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none p-1">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[55px] left-0 w-full bg-[#2F2F2F] rounded-xl p-4 flex flex-col gap-4 text-white text-sm md:hidden border border-white/10 shadow-lg">
          <a href="#solutions" onClick={() => setIsOpen(false)}>
            Solutions
          </a>
          <a href="#resources" onClick={() => setIsOpen(false)}>
            Resources
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About Us
          </a>
          <button className="w-full py-2 text-xs font-semibold uppercase border border-white/40 rounded-lg">
            Request Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

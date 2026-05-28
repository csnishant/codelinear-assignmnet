import React from "react";
import heroImage from "../assets/hero.jpg";
import BalanceCard from "./Hero/BalanceCard";
import ActivityCard from "./Hero/ActivityCard";
import {
  Shield,
  Compass,
  Activity,
  Layers,
  Terminal,
  Waves,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-32 md:pt-40 pb-16 flex flex-col justify-between px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto text-white font-sans bg-[#030a16] overflow-x-hidden">
      {/* Main Grid: Mobile me flex-col (centered), Desktop me grid (left-right spread) */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full my-auto z-10">
        {/* Left Column (Text Content) */}
        {/* Mobile par text-center aur items-center, Desktop par text-left aur items-start */}
        <div className="w-full lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[56px] font-medium tracking-tight leading-[1.15] md:leading-[1.1] text-white">
            The new foundation <br />
            of modern banking
          </h1>

          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md sm:max-w-xl leading-relaxed">
            We drive innovation and growth, provide seamless{" "}
            <br className="hidden md:inline" />
            customer experience and operational excellence
          </p>

          {/* Action Buttons: Mobile me perfectly centered aur fluid wrapper */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            <button className="h-[48px] md:h-[50px] px-6 sm:px-8 rounded-lg bg-blue-600 text-[11px] md:text-xs font-bold tracking-widest hover:bg-blue-700 transition-all uppercase border border-transparent shadow-[0_4px_20px_rgba(37,99,235,0.3)] whitespace-nowrap cursor-pointer">
              Request Demo
            </button>
            <button className="h-[48px] md:h-[50px] px-6 sm:px-8 rounded-lg border border-gray-700 text-[11px] md:text-xs font-bold tracking-widest hover:bg-white/5 transition-all uppercase text-gray-300 whitespace-nowrap cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Column (Visual Image & Floating Cards) */}
        {/* Is container ka layout har screen size ke liye bound kiya hai taaki overflow na ho */}
        <div className="w-full lg:col-span-5 relative flex justify-center items-center min-h-[350px] sm:min-h-[400px] md:min-h-[450px]">
          {/* Soft Radial Glow background behind container */}
          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-blue-500/25 rounded-full filter blur-[80px] md:blur-[100px] pointer-events-none z-0" />

          {/* Wrapper bounding box matching ratios across screen sizes */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] aspect-[4/3] z-10 flex items-center justify-center">
            {/* Center Base Image */}
            <div className="w-[68%] h-[82%] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
              <img
                src={heroImage}
                alt="User experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 1. Toni Kross Balance Card */}
            <BalanceCard />

            {/* 2. Recent Activity Card */}
            <ActivityCard />
          </div>
        </div>
      </div>

      {/* Footer / Trusted By Section */}
      <div className="w-full pt-10 border-t border-white/10 mt-12 lg:mt-16 z-10">
        <p className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-widest mb-6 uppercase text-center sm:text-left">
          Trusted By:
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 md:gap-x-10 gap-y-5 opacity-40 text-[11px] md:text-xs font-bold tracking-widest text-gray-400">
          {/* SHELLS */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <Shield className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>SHELLS</span>
          </div>

          {/* SmartFinder */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <Compass className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>SmartFinder</span>
          </div>

          {/* Zoomerr */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <Activity className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Zoomerr</span>
          </div>

          {/* ArtVenue */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <Layers className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>ArtVenue</span>
          </div>

          {/* kontrastr */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <Terminal className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>kontrastr</span>
          </div>

          {/* WAVESMARATHON */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <Waves className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>WAVESMARATHON</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

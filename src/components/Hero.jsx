import React from "react";
import heroImage from "../assets/hero.jpg"; // Ensure you have this image in the specified path
import BalanceCard from "./Hero/BalanceCard";
import ActivityCard from "./Hero/ActivityCard";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-36 pb-16 flex flex-col justify-between px-6 md:px-12 max-w-7xl mx-auto text-white">
      {/* Main Grid: Left Text & Right Media */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full my-auto">
        {/* Left Column (Text Content) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-none">
            The new foundation <br />
            of modern banking
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
            We drive innovation and growth, provide seamless{" "}
            <br className="hidden md:inline" />
            customer experience and operational excellence
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="h-[48px] px-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-sm font-medium tracking-wide shadow-lg shadow-blue-600/20 hover:brightness-110 transition-all">
              REQUEST DEMO
            </button>
            <button className="h-[48px] px-8 rounded-lg border border-gray-600 text-sm font-medium tracking-wide hover:bg-white/5 transition-all">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Right Column (Visual/Image Component) */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[400px] w-full">
          {/* Soft Glow Background Behind Image */}
          <div className="absolute w-[320px] h-[320px] bg-blue-500/20 rounded-full filter blur-[90px] pointer-events-none z-0" />

          {/* Main Container with Position Relative */}
          <div className="relative w-full max-w-[450px] aspect-[4/3] z-10">
            {/* Base Image (Woman with Laptop) */}
            <div className="absolute inset-0 w-[85%] h-[85%] left-[5%] top-[10%] rounded-[32px] overflow-hidden">
              <img
                src={heroImage}
                alt="User experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 1. Toni Kross Balance Card (Top Right) */}
            {/* 1. Toni Kross Balance Card */}
            <BalanceCard />

            {/* 2. Recent Activity Card */}
            <ActivityCard />
          </div>
        </div>
      </div>

      {/* Footer / Trusted By Section */}
      <div className="w-full pt-12 border-t border-white/5 mt-auto">
        <p className="text-gray-500 text-xs font-medium tracking-wider mb-4 uppercase">
          Trusted By:
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-50 text-sm font-semibold tracking-wide">
          <span>SHELLS</span>
          <span>SmartFinder</span>
          <span>Zoomerr</span>
          <span>ArtVenue</span>
          <span>kontrastr</span>
          <span>WAVESMARATHON</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

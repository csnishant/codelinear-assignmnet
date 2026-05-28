import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import { CloudDownload } from "lucide-react";
import CloudBanking from "../components/CloudBanking";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#000D12] relative overflow-x-hidden">
      {/* 1. Top Global Floating Navbar */}
      <Navbar />

      {/* 2. Hero Presentation (Image & Overlay Glass Cards) */}
      <Hero />

      {/* 3. Tailor-made Solutions Feature Grid */}
      <Solutions />

      <CloudBanking />

      {/* Hero Section / Main Content Example */}
      <main className="pt-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl leading-tight">
          Next-Gen Solutions with <span className="text-blue-500">N7</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-md">
          Experience the seamless overlay navbar design built with pixel-perfect
          specifications.
        </p>
      </main>
    </div>
  );
};

export default Home;

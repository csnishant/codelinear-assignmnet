import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B111E] relative overflow-x-hidden">
      {/* Navbar Component */}
      <Navbar />
      <Hero />

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

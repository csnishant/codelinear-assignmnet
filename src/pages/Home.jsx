import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import { CloudDownload } from "lucide-react";
import CloudBanking from "../components/CloudBanking";
import EfficientBanking from "../components/EfficientBanking";
import PaperlessHero from "../components/PaperLessHero";
import DigitalBanking from "../components/DigitalBanking";
import NoLegacySystems from "../components/NoLegacySystems";
import NoTraditionalBranches from "../components/NoTraditionalBranches";
import PaperLessCTA from "../components/PaperLessCTA";
import FintechLanding from "../components/FintechLanding/FintechLanding";

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

      <EfficientBanking />

      <PaperlessHero />
      <DigitalBanking />
      <NoLegacySystems />
      <NoTraditionalBranches />
      <PaperLessCTA />
      <FintechLanding />

    </div>
  );
};

export default Home;

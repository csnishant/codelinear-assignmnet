import React from "react";
import DigitalBankingHero from "./DigitalBankingHero";
import NoLegacySystems from "./NoLegacySystems";
import NoTraditionalBranches from "./NoTraditionalBranches";
import PaperlessHero from "./PaperLessHero";

export default function DigitalBankingIndex() {
  return (
    <div className="w-full bg-white selection:bg-blue-500/20">
      {/* 1. First Section: Hero with top ticker */}
      <DigitalBankingHero />

      {/* 2. Second Section: Middle Row Left-to-Right content */}
      <NoLegacySystems />

      {/* 3. Third Section: Alternate Row Right-to-Left content */}
      <NoTraditionalBranches />

      {/* 4. Bottom Footer Banner Wrapper */}
      <div className="w-full bg-gradient-to-b from-white to-[#f4f8fc] pt-8 pb-16">
        <PaperlessHero />
      </div>
    </div>
  );
}

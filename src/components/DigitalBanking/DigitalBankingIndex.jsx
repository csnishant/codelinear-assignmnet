import React from "react";
import DigitalBankingHero from "./DigitalBankingHero";
import NoLegacySystems from "./NoLegacySystems";
import NoTraditionalBranches from "./NoTraditionalBranches";
import PaperlessBanner from "./PaperlessBanner";

export default function DigitalBankingIndex() {
  return (
    <div className="w-full bg-white">
      <DigitalBankingHero />
      <NoLegacySystems />
      <NoTraditionalBranches />

      {/* 
        Yahan solid background ki jagah gradient use kiya hai:
        from-white (pichle section se match karega) 
        to-[#F4F9FC] (banner ke background me perfectly merge ho jayega)
      */}
      <div className="w-full bg-gradient-to-b from-white via-[#F4F9FC]/50 to-[#F4F9FC] py-16">
        <PaperlessBanner />
      </div>
    </div>
  );
}

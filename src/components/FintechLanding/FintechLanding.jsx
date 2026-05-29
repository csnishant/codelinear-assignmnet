import React from "react";
import InsightsSection from "./InsightsSection";
import CaseStudies from "./CaseStudies";
import PaperlessBanner from "./PaperlessBanner";
import Footer from "./Footer";

const FintechLanding = () => {
  return (
    <div className="w-full min-h-screen bg-[#00090D] text-white selection:bg-[#00CFFD] selection:text-[#00090D] overflow-x-hidden">
      {/* 1. Insights & Blog Grid Section */}
      <InsightsSection />

      {/* 2. Slider/Carousel Case Studies Section */}
      <CaseStudies />

      {/* 3. High-Conversion Paperless CTA Banner */}
      <div className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <PaperlessBanner />
      </div>

      {/* 4. Deep Tech 4-Column Footer */}
      <Footer />
    </div>
  );
};

export default FintechLanding;

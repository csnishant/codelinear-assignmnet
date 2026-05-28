import React from "react";

import { Cpu, Network, Globe, Landmark, Coins } from "lucide-react";
import SolutionsHeader from "./Solutions/SolutionsHeader";
import SolutionCard from "./Solutions/SolutionCard";

const Solutions = () => {
  const dataset = [
    {
      icon: <Cpu className="w-8 h-8 stroke-[1.2]" />,
      title: "Core Banking CB7",
      desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },
    {
      icon: <Network className="w-8 h-8 stroke-[1.2]" />,
      title: "Digital Banking N7",
      desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
    {
      icon: <Globe className="w-8 h-8 stroke-[1.2]" />,
      title: "Open Banking",
      desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },
    {
      icon: <Landmark className="w-8 h-8 stroke-[1.2]" />,
      title: "Loan Origination System",
      badge: "NBFC",
      desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
    {
      icon: <Coins className="w-8 h-8 stroke-[1.2]" />,
      title: "Loan Management System",
      badge: "NBFC",
      desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    },
  ];

  return (
    <section className="w-full py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto bg-[#0B111E]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Isolated Component for Left Sticky Core Context */}
        <div className="lg:col-span-5">
          <SolutionsHeader
            title="All of our solutions are tailor-made to your needs"
            buttonText="Request Demo"
          />
        </div>

        {/* Dynamic Multi-Column Grid Mapping SolutionCards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
          {dataset.map((feature, index) => (
            <SolutionCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              badge={feature.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

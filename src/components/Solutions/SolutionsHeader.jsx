import React from "react";

const SolutionsHeader = ({ title, buttonText }) => {
  return (
    <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 lg:sticky lg:top-36 h-fit">
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight leading-[1.2] text-white max-w-sm">
        {title}
      </h2>
      <button className="h-[48px] px-7 rounded-md border border-gray-800 text-[11px] font-bold tracking-widest hover:bg-white/5 hover:border-gray-600 transition-all uppercase text-gray-300 whitespace-nowrap cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
};

export default SolutionsHeader;

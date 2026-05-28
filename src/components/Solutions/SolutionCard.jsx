import React from "react";
import { ArrowRight } from "lucide-react";

const SolutionCard = ({ icon, title, desc, badge }) => {
  return (
    /* Card Layout Dimensions based on tokens (width: 268.5px, min-height: 327px, gap: 26px) */
    <div className="w-full max-w-[268.5px] min-h-[327px] flex flex-col justify-between items-start space-y-[26px] opacity-100 bg-transparent">
      {/* Top Group Panel */}
      <div className="flex flex-col items-start w-full space-y-5">
        {/* Raw Logo/Icon Component Wrapper (width: 47px, height: 49px, opacity: 1) */}
        <div className="w-[47px] h-[49px] flex items-center justify-start text-white opacity-100">
          {icon}
        </div>

        {/* Feature Title Row with Badge Context */}
        <div className="flex items-center justify-between w-full pt-1">
          <h3 className="text-2xl font-normal text-white tracking-wide leading-tight text-left">
            {title}
          </h3>
          {badge && (
            <span className="text-[9px] font-bold tracking-widest text-gray-500 bg-white/5 px-1.5 py-0.5 border border-white/10 rounded">
              {badge}
            </span>
          )}
        </div>

        {/* Paragraph Text Layout block - Explicit text-left applied here */}
        <p className="w-full max-w-[268.5px] max-h-[147px] text-[15px] leading-relaxed font-normal text-gray-400 opacity-70 overflow-hidden text-ellipsis line-clamp-6 text-left">
          {desc}
        </p>
      </div>

      {/* Learn More Action Footer Layout (height: 21px, gap: 3px, opacity: 1) */}
      <div className="h-[21px] flex items-center pt-2">
        <a
          href="#"
          className="relative flex items-center gap-[3px] text-xs font-bold tracking-widest text-[#00A3FF] uppercase transition-colors group opacity-100">
          {/* 1st Span: Target text jiske niche underline chahiye */}
          <span className="relative pb-[4px]">LEARN</span>

          {/* 2nd Span: Plain text wrapper */}
          <span className="pl-[2px] pb-[4px]">MORE</span>

          {/* Arrow Icon */}
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform stroke-[2.5] mb-[4px]" />

          {/* 3rd Dedicated Span: Sirf Underline Draw karne ke liye */}
          {/* Iski width exact 'LEARN' text block (approx 44px) par match karke setup kari hai */}
          <span className="absolute bottom-0 left-0 w-[44px] h-[2px] bg-[#00A3FF] rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default SolutionCard;

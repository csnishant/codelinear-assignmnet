import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000609] border-t border-white/5 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
        {/* Massive Brand Identity Pillar */}
        <div className="lg:col-span-1 flex items-start">
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-[#00CFFD] to-[#0015CE] bg-clip-text text-transparent select-none">
            N7
          </h1>
        </div>

        {/* Dynamic Offices / Location Grid */}
        <div className="space-y-4 text-xs">
          <h4 className="text-gray-400 font-medium tracking-widest uppercase">
            London
          </h4>
          <p className="text-gray-500 leading-relaxed">
            Lukka Infosystems Ltd - CRT
            <br />
            26 Main Road Gamlidge, TM14 8CF,
            <br />
            England, United Kingdom.
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <h4 className="text-gray-400 font-medium tracking-widest uppercase">
            Dubai
          </h4>
          <p className="text-gray-500 leading-relaxed">
            Lukka Infosystems Ltd -<br />
            GD7, Jumeirah Business, Center 5,
            <br />
            Cluster W, Jumeirah Lakes Towers,
            <br />
            Dubai, United Arab Emirates.
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <h4 className="text-gray-400 font-medium tracking-widest uppercase">
            London
          </h4>
          <p className="text-gray-500 leading-relaxed">
            Lukka Infosystems Ltd -<br />
            GD7 Nirmal, Anand Nagar,
            <br />
            Ganesh Road, Pune,
            <br />
            Maharashtra, 411041, India.
          </p>
        </div>

        {/* Navigation Map Links */}
        <div className="grid grid-cols-2 gap-8 lg:col-span-1 text-xs">
          <div className="space-y-3">
            <h4 className="text-gray-400 font-medium tracking-widest uppercase">
              Solutions
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-[#00CFFD] cursor-pointer">
                Core Banking
              </li>
              <li className="hover:text-[#00CFFD] cursor-pointer">
                Digital Banking
              </li>
              <li className="hover:text-[#00CFFD] cursor-pointer">
                Open Banking
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-gray-400 font-medium tracking-widest uppercase">
              N7 Banking
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-[#00CFFD] cursor-pointer">About Us</li>
              <li className="hover:text-[#00CFFD] cursor-pointer">Solutions</li>
              <li className="hover:text-[#00CFFD] cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Copyright Strip */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-600 gap-4">
        <p>© Copyright 2026 Lukka Infosystems Limited — All Rights Reserved.</p>
        <p>Registration number: 123456789</p>
      </div>
    </footer>
  );
};

export default Footer;

// MobileMockup.jsx
import React from "react";
import iphone13pro from "../../assets/iphone13pro.png";

// Hum dono props accept kar rahe hain takiya typo hone par bhi black screen na aaye
export default function MobileMockup({ screenImage, screenshot }) {
  // Jo bhi prop available hoga, use priority milegi
  const currentScreen = screenImage || screenshot;

  return (
    <div
      className="relative select-none pointer-events-none overflow-hidden"
      style={{
        width: "268.31182861328125px",
        height: "542.9000244140625px",
        opacity: 1,
        backgroundImage: `url(${iphone13pro})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {/* 1. Inner App UI Screenshot Layer */}
      {currentScreen && (
        <div
          className="absolute shadow-inner"
          style={{
            /* Fixed: Padding create karne ke liye bounds ko 2.2% aur 4.3% se badha kar safely compact kiya */
            top: "3.2%",
            left: "5.5%",
            right: "5.5%",
            bottom: "3.2%",
            /* Inner card borders perfectly match edge scaling curves */
            borderRadius: "26px",
            backgroundColor: "#ffffff",
            backgroundImage: `url(${currentScreen})`,
            /* backgroundSize ko contain/cover metrics balance diya taaki elements text cut-off na karein */
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            zIndex: 10,
          }}
        />
      )}

      {/* 2. Dynamic Top Notch Overlay */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center z-30"
        style={{
          /* Notch position slightly adjusted to scale nicely with new inner spacing */
          top: "3.2%",
          width: "102px",
          height: "16px",
        }}>
        <div
          className="w-full h-full bg-black relative"
          style={{
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}>
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-zinc-800 rounded-full" />
          <div className="absolute top-[3px] right-[20px] w-2 h-2 bg-[#0d1326] border border-zinc-900 rounded-full flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-blue-900/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Global Scrollbar Reset */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        div::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `,
        }}
      />
    </div>
  );
}

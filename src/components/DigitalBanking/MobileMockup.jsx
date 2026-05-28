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
          className="absolute"
          style={{
            top: "2.2%",
            left: "4.3%",
            right: "4.3%",
            bottom: "1.2%",
            borderRadius: "32px",
            backgroundColor: "#fff",
            backgroundImage: `url(${currentScreen})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            zIndex: 10,
          }}
        />
      )}

      {/* 2. Dynamic Top Notch Overlay */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex justify-center z-30"
        style={{
          top: "2.2%",
          width: "110px",
          height: "18px",
        }}>
        <div
          className="w-full h-full bg-black relative"
          style={{
            borderBottomLeftRadius: "14px",
            borderBottomRightRadius: "14px",
          }}>
          <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-10 h-[2px] bg-zinc-800 rounded-full" />
          <div className="absolute top-[4px] right-[24px] w-2.5 h-2.5 bg-[#0d1326] border border-zinc-900 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-900/40 rounded-full" />
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

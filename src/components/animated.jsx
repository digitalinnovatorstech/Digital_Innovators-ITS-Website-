import React from "react";
import { useEffect, useState } from "react";

export default function VerticalTextMarquee() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (prev >= 600) return 0;
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const marqueeStyle = {
    transform: `translateY(-${scrollPosition}px)`,
    transition: "transform 0.5s linear",
  };

  return (
    <div className="h-full overflow-hidden relative">
      <div className="absolute" style={marqueeStyle}>
        <div className="flex flex-col items-center py-40">
          <div className="text-6xl font-light tracking-widest rotate-90 flex flex-col items-center">
            <span className="mb-6">D</span>
            <span className="mb-6">e</span>
            <span className="mb-6">s</span>
            <span className="mb-6">i</span>
            <span className="mb-6">g</span>
            <span className="mb-6">n</span>
          </div>
          <div className="my-12 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border border-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col items-center py-40">
          <div className="text-6xl font-light tracking-widest rotate-90 flex flex-col items-center">
            <span className="mb-6">B</span>
            <span className="mb-6">u</span>
            <span className="mb-6">i</span>
            <span className="mb-6">l</span>
            <span className="mb-6">d</span>
          </div>
          <div className="my-12 w-12 h-12 flex items-center justify-center">
            <div className="w-10 h-10 border border-gray-300 relative">
              <div className="absolute w-8 h-8 border border-gray-300 top-1 left-1"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-40">
          <div className="text-6xl font-light tracking-widest rotate-90 flex flex-col items-center">
            <span className="mb-6">D</span>
            <span className="mb-6">i</span>
            <span className="mb-6">g</span>
            <span className="mb-6">i</span>
            <span className="mb-6">t</span>
            <span className="mb-6">a</span>
            <span className="mb-6">l</span>
          </div>
          <div className="my-12">
            <div className="w-12 h-12 relative">
              <div className="absolute w-10 h-1 bg-gray-300 top-6 left-1 transform rotate-45"></div>
              <div className="absolute w-10 h-1 bg-gray-300 top-6 left-1 transform -rotate-45"></div>
              <div className="absolute w-10 h-1 bg-gray-300 top-6 left-1 transform rotate-0"></div>
              <div className="absolute w-10 h-1 bg-gray-300 top-6 left-1 transform rotate-90"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

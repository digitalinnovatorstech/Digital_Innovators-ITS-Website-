"use client";
import "@/app/services/styles/services.css";

export default function ServiceHeroSection() {
  return (
    <div className="h-screen relative flex justify-center items-center overflow-hidden">

      <svg
        className="absolute top-0 -left-40 w-72 h-72 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <path
          id="topLeftPath"
          d="M100,10 A90,90 0 0,1 100,190"
          fill="none"
          stroke="orange"
          strokeWidth="2"
          strokeDasharray="6,6"
        />
        <circle r="10" fill="orange">
          <animateMotion repeatCount="indefinite" dur="5s">
            <mpath href="#topLeftPath" />
          </animateMotion>
        </circle>
      </svg>


      <svg
        className="absolute bottom-20 -right-40 w-72 h-72 pointer-events-none"
        viewBox="0 0 200 200"
      >
        <path
          id="bottomRightPath"
          d="M100,190 A90,90 0 0,1 100,10"
          fill="none"
          stroke="orange"
          strokeWidth="2"
          strokeDasharray="6,6"
        />
        <circle r="10" fill="orange">
          <animateMotion repeatCount="indefinite" dur="5s">
            <mpath href="#bottomRightPath" />
          </animateMotion>
        </circle>
      </svg>

      {/* Hero Text */}
      <div className="text-center space-y-4">
        <h1 className="text-black font leading-snug text-4xl xl:text-7xl font-bold">
          Turning bold <span className="text-primary">ideas</span> into
          <br /> reality great <span className="text-primary">Products...</span>
        </h1>
        <p className="xl:text-2xl md:text-xl text-black">
          "Fueled by ideas, passion, expertise,
          <br /> technology, and a generous dose of coffee"
        </p>
      </div>
    </div>
  );
}

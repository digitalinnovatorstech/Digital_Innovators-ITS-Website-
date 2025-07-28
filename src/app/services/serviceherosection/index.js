"use client";
import { useEffect, useRef } from "react";
import "@/app/services/styles/services.css";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import Video from "../../../../public/assets/Untitled(10).mp4"

export default function ServiceHeroSection() {
  const topLeftDotRef = useRef(null);
  const bottomRightDotRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(topLeftDotRef.current, {
      duration: 5,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: "#topLeftPath",
        align: "#topLeftPath",
        alignOrigin: [ 0.5, 0.5 ],
        autoRotate: false,
      },
    });

    gsap.to(bottomRightDotRef.current, {
      duration: 5,
      repeat: -1,
      ease: "none",
      motionPath: {
        path: "#bottomRightPath",
        align: "#bottomRightPath",
        alignOrigin: [ 0.5, 0.5 ],
        autoRotate: false,
      },
    });
  }, []);

  return (
    <>
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
          <circle ref={topLeftDotRef} cx="100" cy="10" r="10" fill="orange" />
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
          <circle
            ref={bottomRightDotRef}
            cx="100"
            cy="190"
            r="10"
            fill="orange"
          />
        </svg>

        <div className="text-center space-y-4">
          <h1 className="text-black font leading-snug text-4xl xl:text-7xl font-bold">
            Turning bold <span className="text-primary">ideas</span> into
            <br /> reality great{" "}
            <span className="text-primary">Products...</span>
          </h1>
          <p className="xl:text-2xl md:text-xl text-black">
            "Fueled by ideas, passion, expertise,
            <br /> technology, and a generous dose of coffee"
          </p>
        </div>
      </div>

      <div className=" h-screen">
        <video
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



    </>
  );
}

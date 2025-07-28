"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "../styles/about.css"; // Assuming you have a CSS file for styles
import Lineimage from "../../../../public/assets/about/lineimage.svg";
import Mission from "../../../../public/assets/about/mission.svg";
import Target from "../../../../public/assets/about/target.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HeroImage from "../../../../public/assets/about/heroimage.svg";
import OurPassion from "../ourpassion/page";

export default function HeroSection() {
  const targetRef = useRef(null);
  const missionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initialize the mobile state
      setIsMobile(window.innerWidth < 768);

      // Add resize listener to update the mobile state
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Scroll handler to check if section is in view
      const handleScroll = () => {
        if (missionSectionRef.current) {
          const rect = missionSectionRef.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

          // Check if we've scrolled past the middle of the section
          const hasPassed = rect.top < window.innerHeight * 0.4;

          setIsInView(isVisible);
          setHasScrolledPast(hasPassed);
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      // Trigger initial check
      handleScroll();

      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const InfoBlock = ({ title, content }) => (
    <div className="info-block">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="xl:text-lg text-xs leading-[1.5] my-5 text-center text-secondary">
        {content}
      </p>
    </div>
  );

  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center justify-center md:min-h-screen w-full px-4 py-20 md:py-0">
          <div className="flex">
            <h1 className="font text-5xl 2xl:text-7xl text-center md:-mt-20 leading-[1.2]">
              <div className="flex justify-center items-center">
                <span className="text-secondary mr-2">We </span>
                <span className="text-primary relative">
                  Design
                  <DotLottieReact
                    src="/assets/flyingbird.lottie"
                    loop
                    autoplay
                    className="flying_bird absolute md:top-[-35px] md:right-[-110px] top-[-70px] right-[-80px]"
                  />
                </span>
                <span className="text-secondary">,</span>
              </div>
              <span className="text-primary">Build</span>
              <span className="text-secondary"> and </span>
              <span className="text-primary">Scale</span>
              <span className="text-secondary"> your</span>
              <br />
              <span className="text-secondary">Digital Tools</span>
            </h1>
          </div>
          <p className="text-secondary xl:text-sm 2xl:text-xl text-center xl:mb-15 xl:mt-5 2xl:mt-8">
            "Fueled by ideas, passion, expertise,
            <br />
            technology, and a generous dose of coffee."
          </p>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="w-full h-full md:-mt-48 xl:-mt-55 xl:mb-20 2xl:mb-0 2xl:-mt-[210px] object-cover"
          priority
        />
      </div>
      <OurPassion />
      <div className="relative w-full overflow-hidden" ref={missionSectionRef}>
        <div className="container mx-auto">
          <div className="md:h-screen flex flex-col items-center justify-center py-16">
            <div className="flex justify-center mt-20 relative">
              <div ref={missionRef} style={{ position: "relative", zIndex: 1 }}>
                <Image
                  src={Mission}
                  alt="Mission Target"
                  className="w-auto h-auto"
                  priority
                />
              </div>
              <div
                className={`target-element ${
                  isInView ? "animate-target" : ""
                } ${hasScrolledPast ? "target-final-position" : ""}`}
                ref={targetRef}
              >
                <Image
                  src={Target}
                  alt="Target Arrow"
                  width={isMobile ? 60 : 80}
                  height={isMobile ? 60 : 80}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between my-16 gap-8 w-full">
              <InfoBlock
                title="OUR MISSION"
                content="To empower brands by delivering innovative, tailored solutions that seamlessly blend design, digital strategy, and cutting-edge technology, transforming ideas into impactful experiences."
                className="w-full"
              />
              <InfoBlock
                title="OUR VISION"
                content="To be the leading creative agency that redefines the boundaries of innovation and design, inspiring brands to reach their full potential in a constantly evolving digital world."
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full hidden md:block">
          <Image
            src={Lineimage}
            alt="Mission Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <style jsx global>{`
        .target-element {
          position: absolute;
          z-index: 5;
          opacity: 0;
          transform: translate(800px, -80px) rotate(30deg) scale(1.5);
          transition: transform 0.1s ease, opacity 0.1s ease;
        }

        @media (max-width: 767px) {
          .target-element {
            transform: translate(400px, -40px) rotate(30deg) scale(1.2);
          }
        }

        .animate-target {
          animation: targetFlyIn 2.5s forwards;
          opacity: 1;
        }

        .target-final-position {
          animation: none !important;
          transform: translate(15px, 95px) rotate(0deg) scale(1) !important;
          opacity: 1 !important;
        }

        @media (max-width: 767px) {
          .target-final-position {
            transform: translate(0px, 75px) rotate(0deg) scale(1) !important;
          }
        }

        @keyframes targetFlyIn {
          0% {
            opacity: 0;
            transform: translate(800px, -80px) rotate(30deg) scale(1.5);
          }
          30% {
            opacity: 1;
            transform: translate(300px, -50px) rotate(20deg) scale(1.3);
          }
          60% {
            transform: translate(150px, 25px) rotate(10deg) scale(1.2);
          }
          100% {
            transform: translate(15px, 95px) rotate(0deg) scale(1);
          }
        }

        @media (max-width: 767px) {
          @keyframes targetFlyIn {
            0% {
              opacity: 0;
              transform: translate(400px, -40px) rotate(30deg) scale(1.2);
            }
            30% {
              opacity: 1;
              transform: translate(150px, -30px) rotate(20deg) scale(1.1);
            }
            60% {
              transform: translate(75px, 30px) rotate(10deg) scale(1.05);
            }
            100% {
              transform: translate(0px, 75px) rotate(0deg) scale(1);
            }
          }
        }
      `}</style>
    </>
  );
}

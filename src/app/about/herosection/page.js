"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "@/app/about/styles/about.css";

import Lineimage from "../../../../public/assets/about/lineimage.svg";
import Mission from "../../../../public/assets/about/mission.svg";
import Target from "../../../../public/assets/about/target.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HeroImage from "../../../../public/assets/about/heroimage.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import OurPassion from "../ourpassion/page";
import AnimatedLineDots from "./animateddits";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const targetRef = useRef(null);
  const missionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initialize the mobile state
      setIsMobile(window.innerWidth < 768);

      // Add resize listener to update the mobile state
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener('resize', handleResize);

      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && targetRef.current && missionRef.current) {
      // Responsive positioning based on screen width
      // Moving the target lower on mobile (increased Y value)
      const centerOffsetY = isMobile ? 75 : 95; // Adjusted to be lower on mobile
      const centerOffsetX = isMobile ? 0 : 15;  // Centered horizontally on mobile

      // Reset the initial animation state
      gsap.set(targetRef.current, {
        x: isMobile ? 400 : 800, // Start closer on mobile
        y: isMobile ? -40 : -80,
        rotation: 30,
        opacity: 0,
        scale: isMobile ? 1.2 : 1.5, // Smaller initial scale on mobile
        zIndex: 10
      });

      // Clear any existing ScrollTriggers to prevent duplicates
      ScrollTrigger.getAll().forEach(st => st.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: isMobile ? "top 60%" : "top center", // Adjust trigger point for mobile
          end: "+=300",
          scrub: 0.5,
          markers: false,
          toggleActions: "play none none none",
          onLeave: () => {
            gsap.to(targetRef.current, {
              x: centerOffsetX,
              y: centerOffsetY,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 0.1
            });
          }
        }
      });

      // Animation timeline with adjusted values for mobile
      tl.to(targetRef.current, {
        x: isMobile ? 150 : 300,
        y: isMobile ? -30 : -50,
        opacity: 1,
        rotation: 20,
        scale: isMobile ? 1.1 : 1.3,
        duration: 0.3,
        ease: "power1.in"
      })
        .to(targetRef.current, {
          x: isMobile ? 75 : 150,
          y: isMobile ? 30 : 25, // Moved lower in the intermediate position
          rotation: 10,
          scale: isMobile ? 1.05 : 1.2,
          duration: 0.2,
          ease: "power1.inOut"
        })
        .to(targetRef.current, {
          x: centerOffsetX,
          y: centerOffsetY,
          rotation: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.2)"
        });

      ScrollTrigger.create({
        trigger: missionSectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(targetRef.current, {
            x: centerOffsetX,
            y: centerOffsetY,
            rotation: 0,
            scale: 1,
            opacity: 1
          });
        },
        onUpdate: (self) => {
          if (self.progress > 0.4) {
            gsap.set(targetRef.current, {
              x: centerOffsetX,
              y: centerOffsetY,
              rotation: 0,
              scale: 1,
              opacity: 1
            });
          }
        }
      });
    }
  }, [ isMobile ]); // Re-run when isMobile state changes

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
        <div className="flex flex-col items-center justify-center md:min-h-screen w-full px-4 py-10 md:py-0">
          <div className="flex">
            <h1 className="font text-3xl xl:text-7xl text-center leading-[1.2]">
              <div className="flex justify-center items-center">
                <span className="text-secondary mr-2">We </span>
                <span className="text-primary relative">
                  Design
                  <DotLottieReact
                    src="/assets/flyingbird.lottie"
                    loop
                    autoplay
                    className="flying_bird absolute top-[-35px] right-[-110px]"
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
          <p className="text-secondary md:text-lg xl:text-xl text-center mt-8">
            "Fueled by ideas, passion, expertise,
            <br />
            technology, and a generous dose of coffee."
          </p>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="w-full h-full md:-mt-48 xl:-mt-68 2xl:-mt-[210px] object-cover"
          priority
        />
      </div>
      <OurPassion />
      <div className="relative w-full overflow-hidden" ref={missionSectionRef}>
        <div className="container mx-auto">
          <div className="md:h-screen flex flex-col items-center justify-center py-16">
            <div className="flex justify-center mt-20 relative">
              <div ref={missionRef} style={{ position: 'relative', zIndex: 1 }}>
                <Image
                  src={Mission}
                  alt="Mission Target"
                  className="w-auto h-auto"
                  priority
                />
              </div>

              <div
                className="absolute"
                ref={targetRef}
                style={{ zIndex: 5 }}
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
                content="To provide innovative and sustainable digital solutions that empower our partners to achieve their digital dreams. We strive to create positive impact through our expertise and client-centric approach."
                className="w-full"
              />
              <InfoBlock
                title="OUR VISION"
                content="To be the preferred digital transformation partner for businesses of all sizes and niches, creating lasting impact through digital innovation and fostering long-term relationships."
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full hidden md:block">
          <Image src={Lineimage} alt="Mission Image" className="w-full h-full object-cover" />
        </div>
      </div>
      <style jsx global>{`
        .target-animation {
          position: relative;
          z-index: 10;
        }
        
        /* Additional mobile styles to position target lower */
        @media (max-width: 767px) {
          .target-animation {
            top: 10px; /* Changed from -15px to move target down */
          }
        }
      `}</style>
    </>
  );
}
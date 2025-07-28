"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Image1 from "../../../public/assets/home/aiml/image1.svg";
import Image2 from "../../../public/assets/home/aiml/image2.svg";
import Image3 from "../../../public/assets/home/aiml/image3.svg";
import Image4 from "../../../public/assets/home/aiml/image4.svg";
import Image5 from "../../../public/assets/home/aiml/image5.svg";
import Image6 from "../../../public/assets/home/aiml/image6.svg";
import Image7 from "../../../public/assets/home/aiml/image7.svg";
import Image8 from "../../../public/assets/home/aiml/image8.svg";
import Image9 from "../../../public/assets/home/aiml/image9.svg";
import '../home/styles/aiml.css'; // Import custom CSS file

const AIMLServices = () => {
  const [ isVisible, setIsVisible ] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [ entry ] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Service card data
  const services = [
    { image: Image1, title: [ "Natural Language", "Processing" ] },
    { image: Image1, title: [ "Predictive", "Analytics" ] },
    { image: Image2, title: [ "Computer", "Vision" ] },
    { image: Image3, title: [ "Generative AI", "Solutions" ] },
    { image: Image4, title: [ "Open AI Codex", "Integration" ] },
    { image: Image5, title: [ "AI Product", "Development" ] },
    { image: Image6, title: [ "Deep Learning", "Solutions" ] },
    { image: Image7, title: [ "AI Chat bot &", "Smart Assistants" ] },
    { image: Image8, title: [ "AI Security &", "Data Science" ] },
    { image: Image9, title: [ "Recommendation", "Engines" ] },
  ];

  // Get animation style based on index for variety
  const getAnimationClass = (index) => {
    switch (index % 5) {
      case 0: return "fade-up";
      case 1: return "fade-left";
      case 2: return "fade-right";
      case 3: return "scale-in";
      case 4: return "fade-in";
      default: return "fade-in";
    }
  };

  return (
    <div ref={containerRef} className={`min-h-screen container mt-20 flex flex-col justify-center section ${isVisible ? 'visible' : ''}`}>
      <div className="title-container">
        <h1 className="font xl:text-6xl md:text-5xl text-3xl">
          <span className="inline-block">
            <span className="line1">Services offer for <span className="text-primary">AI & ML</span></span>
          </span>
          <br />
          <span className="inline-block text-primary">
            <span className="line2">Development</span>
          </span>
        </h1>
      </div>

      {/* Mobile view (2 cards per row) */}
      <div className="flex flex-wrap justify-center py-20 md:hidden">
        <div className="w-full flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3 card ${getAnimationClass(index)}`}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title[ 0 ]}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <div className="text-center flex flex-col">
                <p className="text-xs font-normal">{service.title[ 0 ]}</p>
                <p className="text-xs font-normal">{service.title[ 1 ]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view (original layout) */}
      <div className="hidden md:flex md:flex-wrap md:justify-center py-20">
        {/* First row */}
        <div className="w-full flex justify-center xl:gap-x-10 md:gap-x-5">
          {services.slice(0, 5).map((service, index) => {
            const isAlternate = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 ${isAlternate ? 'translate-y-[-30px]' : ''} card ${getAnimationClass(index)}`}
                style={{ animationDelay: `${100 + index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title[ 0 ]}
                    width={20}
                    height={20}
                    className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                    sm:w-5 sm:h-5
                    md:w-6 md:h-6
                    lg:w-10 lg:h-10
                    xl:w-12 xl:h-12"
                  />
                </div>
                <div className="text-center flex flex-col">
                  <p className="text-xs font-normal">{service.title[ 0 ]}</p>
                  <p className="text-xs font-normal">{service.title[ 1 ]}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row */}
        <div className="w-full flex justify-center mt-8 xl:gap-x-10 md:gap-x-5">
          {services.slice(5, 10).map((service, index) => {
            const actualIndex = index + 5;
            const isAlternate = index % 2 !== 0;
            return (
              <div
                key={actualIndex}
                className={`group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 ${isAlternate ? 'translate-y-[-30px]' : ''} card ${getAnimationClass(actualIndex)}`}
                style={{ animationDelay: `${100 + actualIndex * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title[ 0 ]}
                    width={20}
                    height={20}
                    className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                    sm:w-5 sm:h-5
                    md:w-6 md:h-6
                    lg:w-10 lg:h-10
                    xl:w-12 xl:h-12"
                  />
                </div>
                <div className="text-center flex flex-col">
                  <p className="text-xs font-normal">{service.title[ 0 ]}</p>
                  <p className="text-xs font-normal">{service.title[ 1 ]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIMLServices;
"use client";
import React, { useEffect, useRef } from "react";
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

const AIMLServices = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const loadGsap = async () => {
      const gsapModule = await import('gsap');
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const words1 = titleLine1Ref.current.innerText.split(' ');
      titleLine1Ref.current.innerHTML = '';
      words1.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block overflow-hidden mx-1';
        const innerSpan = document.createElement('span');
        innerSpan.className = 'inline-block transform';
        innerSpan.textContent = word;
        wordSpan.appendChild(innerSpan);
        titleLine1Ref.current.appendChild(wordSpan);
      });

      // Create text animation for the second line
      const words2 = titleLine2Ref.current.innerText.split(' ');
      titleLine2Ref.current.innerHTML = '';
      words2.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block overflow-hidden mx-1';
        const innerSpan = document.createElement('span');
        innerSpan.className = 'inline-block transform';
        innerSpan.textContent = word;
        wordSpan.appendChild(innerSpan);
        titleLine2Ref.current.appendChild(wordSpan);
      });

      gsap.fromTo(
        titleLine1Ref.current.querySelectorAll('span > span'),
        {
          y: '100%',
          opacity: 0
        },
        {
          y: '0%',
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      // Animate second line with delay
      gsap.fromTo(
        titleLine2Ref.current.querySelectorAll('span > span'),
        {
          y: '100%',
          opacity: 0
        },
        {
          y: '0%',
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      // Cards animations with different fade effects
      cardsRef.current.forEach((card, index) => {
        // Different animation for each card
        const delay = 0.1 + (index * 0.1);
        // Choose different animation based on index
        switch (index % 5) {
          case 0: // Fade in from bottom
            gsap.fromTo(
              card,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: delay,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 70%"
                }
              }
            );
            break;
          case 1:
            gsap.fromTo(
              card,
              { opacity: 0, x: -40 },
              {
                opacity: 1,
                x: 0,
                duration: 0.7,
                delay: delay,
                ease: "power1.out",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 70%"
                }
              }
            );
            break;
          case 2:
            gsap.fromTo(
              card,
              { opacity: 0, x: 40 },
              {
                opacity: 1,
                x: 0,
                duration: 0.7,
                delay: delay,
                ease: "back.out(1.2)",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 70%"
                }
              }
            );
            break;
          case 3:
            gsap.fromTo(
              card,
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 70%"
                }
              }
            );
            break;
          case 4:
            gsap.fromTo(
              card,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.7,
                delay: delay,
                ease: "sine.out",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 70%"
                }
              }
            );
            break;
        }
      });
    };

    loadGsap();
  }, []);

  // Function to add cards to the refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen container mt-20 flex flex-col justify-center">
      <div ref={titleRef}>
        <h1 className="font xl:text-6xl md:text-5xl text-3xl">
          <span ref={titleLine1Ref} className="inline-block">
            Services offer for <span className="text-primary">AI & ML</span>{" "}
          </span>
          <br />
          <span ref={titleLine2Ref} className="inline-block text-primary">
            Development
          </span>
        </h1>
      </div>{" "}

      {/* Mobile view (2 cards per row) */}
      <div className="flex flex-wrap justify-center py-20 md:hidden">
        <div className="w-full flex flex-wrap justify-center gap-4">
          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image1}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Natural Language</p>
              <p className="text-xs font-normal">Processing</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image1}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Predictive</p>
              <p className="text-xs font-normal">Analytics</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image2}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Computer</p>
              <p className="text-xs font-normal">Vision</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image3}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Generative AI</p>
              <p className="text-xs font-normal">Solutions</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image4}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Open AI Codex</p>
              <p className="text-xs font-normal">Integration</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image5}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">AI Product</p>
              <p className="text-xs font-normal">Development</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image6}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Deep Learning</p>
              <p className="text-xs font-normal">Solutions</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image7}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">AI Chat bot &</p>
              <p className="text-xs font-normal">Smart Assistants</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image8}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">AI Security &</p>
              <p className="text-xs font-normal">Data Science</p>
            </div>
          </div>

          <div
            ref={addToRefs}
            className="group mb-8 w-[45%] gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 p-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={Image9}
                alt="NLP"
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Recommendation</p>
              <p className="text-xs font-normal">Engines</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view (original layout) */}
      <div className="hidden md:flex md:flex-wrap md:justify-center py-20">
        <div className="w-full flex justify-center xl:gap-x-10 md:gap-x-5">
          <div
            ref={addToRefs}
            className="group mb-8 w-45 gap-y-5 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={Image1}
                alt="NLP"
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
              <p className="text-xs font-normal">Natural Language</p>
              <p className="text-xs font-normal">Processing</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group translate-y-[-30px] mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <div>
              <Image
                src={Image1}
                alt="NLP"
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
              <p className="text-xs font-normal">Predictive</p>
              <p className="text-xs font-normal">Analytics</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image2}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Computer</p>
              <p className="text-xs font-normal">Vision</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 translate-y-[-30px] mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image3}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Generative AI</p>
              <p className="text-xs font-normal">Solutions</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image4}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Open AI Codex</p>
              <p className="text-xs font-normal">Integration</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8 xl:gap-x-10 md:gap-x-5">
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image5}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">AI Product</p>
              <p className="text-xs font-normal">Development</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 translate-y-[-30px] mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image6}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Deep Learning</p>
              <p className="text-xs font-normal">Solutions</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image7}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">AI Chat bot &</p>
              <p className="text-xs font-normal">Smart Assistants</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 translate-y-[-30px] mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image8}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-12 xl:h-12"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">AI Security &</p>
              <p className="text-xs font-normal">Data Science</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="group mx-4 gap-y-5 mb-8 w-45 h-45 border border-[#C9C9C9] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Image
              src={Image9}
              alt="NLP"
              width={20}
              height={20}
              className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300
                sm:w-5 sm:h-5
                md:w-6 md:h-6
                lg:w-10 lg:h-10
                xl:w-10 xl:h-10"
            />
            <div className="text-center flex flex-col">
              <p className="text-xs font-normal">Recommendation</p>
              <p className="text-xs font-normal">Engines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLServices;


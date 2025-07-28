"use client";
import React, { useEffect, useRef } from "react";
import Flowerpot from "../../../../public/assets/about/flowerpot.svg";
import Image from "next/image";
import '@/app/about/styles/about.css';
import "../styles/stepwedo.css"
import StepsImage from "../../../../public/assets/about/stepimage.svg";
import StepsImage1 from "../../../../public/assets/about/steponeimage.svg";
import StepsImage2 from "../../../../public/assets/about/steptwoimage.svg";
import StepsImage3 from "../../../../public/assets/about/stepthreeimage.svg";

export default function StepsWeDO() {
  const headerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    // Setup Intersection Observer for animations
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the appropriate animation class when element is visible
          if (entry.target === headerRef.current) {
            entry.target.classList.add('animate-header');
          } else if (entry.target === step1Ref.current) {
            entry.target.classList.add('animate-step1');
          } else if (entry.target === step2Ref.current) {
            entry.target.classList.add('animate-step2');
          } else if (entry.target === step3Ref.current) {
            entry.target.classList.add('animate-step3');
          } else if (
            entry.target === icon1Ref.current ||
            entry.target === icon2Ref.current ||
            entry.target === icon3Ref.current
          ) {
            entry.target.classList.add('animate-icon');
          }

          // Once animated, we can unobserve
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all refs
    const elements = [
      headerRef.current,
      step1Ref.current,
      step2Ref.current,
      step3Ref.current,
      icon1Ref.current,
      icon2Ref.current,
      icon3Ref.current
    ];

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const StepCard = ({ image, title, description, items, position, stepRef, iconRef }) => {
    return (
      <div className={`flex flex-col ${position}`} ref={stepRef}>
        <div ref={iconRef}>
          <Image src={image} alt={title} className="md:w-20 xl:w-32 w-12" />
        </div>
        <h3 className="xl:text-3xl md:text-xl text-sm font-bold xl:mb-4 mb-3">{title}</h3>
        <p className="xl:mb-6 mb-3 md:text-sm text-sm">{description}</p>
        <ul className="list-disc space-y-2 pl-4 md:text-xs xl:text-sm text-xs">
          {items.map((item, index) => (
            <li key={index} className="list-item flex items-center">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="main_container md:h-screen md:flex md:items-center md:justify-center py-20 md:py-0">
      <div className="md:max-w-8xl md:w-full md:mx-auto px-4">
        <div className="container" ref={headerRef}>
          <div className="process_head md:flex md:justify-between items-start gap-8 mt-4 mb-16">
            <div className="flex flex-col space-y-2">
              <Image src={StepsImage} alt="Flowerpot" />
              <div className="flex items-baseline gap-4 text-primary">
                <h1 className="xl:text-7xl md:text-6xl text-5xl font">We</h1>
                <h1 className="xl:text-7xl md:text-6xl text-5xl font">Do</h1>
              </div>
            </div>
            <div className="max-w-md mt-6 md:mt-0">
              <h2 className="text-2xl text-white font-bold mb-2 text-sm">WORK PROCESS</h2>
              <p className="md:text-lg font-normal text-xs text-white">
                Offer a wide range of services to help businesses establish and
                enhance their online presence.
              </p>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 md:h-[500px] md:gap-8 my-10 container space-y-10 md:space-y-0 md:space-x-0">
          <StepCard
            image={StepsImage1}
            title="Strategy"
            description="Analyze the client's industry, competitors, and target audience"
            items={[
              "Initial Consultation",
              "Market Research",
              "Strategic Planning",
            ]}
            position="justify-start"
            stepRef={step1Ref}
            iconRef={icon1Ref}
          />

          <StepCard
            image={StepsImage2}
            title="Sketch & Design"
            description="Define the user experience (UX) and user interface (UI) design."
            items={[ "Wireframing", "Design Mockups", "Implementation" ]}
            position="justify-center md:-translate-y-5"
            stepRef={step2Ref}
            iconRef={icon2Ref}
          />

          <StepCard
            image={StepsImage3}
            title="Development"
            description="Implement coding, scripting, and programming as needed."
            items={[
              "Design Implementation",
              "Testing & Fixing",
              "Product Launch",
            ]}
            position="justify-end md:-translate-y-8"
            stepRef={step3Ref}
            iconRef={icon3Ref}
          />
        </div>
      </div>
    </div>
  );
}
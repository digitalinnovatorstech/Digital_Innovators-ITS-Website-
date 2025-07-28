"use client";
import React, { useEffect, useRef } from "react";
import Flowerpot from "../../../../public/assets/about/flowerpot.svg";
import Image from "next/image";
import '@/app/about/styles/about.css';
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
    const loadGsap = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset"
        }
      });

      gsap.from(step1Ref.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step1Ref.current,
          start: "top 80%",
          toggleActions: "restart none none reset"
        }
      });

      gsap.from(step2Ref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step2Ref.current,
          start: "top 80%",
          toggleActions: "restart none none reset"
        }
      });

      gsap.from(step3Ref.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step3Ref.current,
          start: "top 80%",
          toggleActions: "restart none none reset"
        }
      });

      const zoomAnimation = (ref) => {
        gsap.fromTo(
          ref.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "restart none none reset"
            },
            onComplete: () => {
              gsap.to(ref.current, {
                scale: 1.05,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
              });
            }
          }
        );
      };

      zoomAnimation(icon1Ref);
      zoomAnimation(icon2Ref);
      zoomAnimation(icon3Ref);
    };

    loadGsap();

    return () => {
      if (typeof window !== 'undefined') {
        const gsapLoaded = window.gsap;
        if (gsapLoaded && gsapLoaded.ScrollTrigger) {
          gsapLoaded.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      }
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

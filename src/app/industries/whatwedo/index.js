"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon1 from "../../../../public/assets/whatwedo/icon_1.svg";
import Icon2 from "../../../../public/assets/whatwedo/icon_2.svg";
import Icon3 from "../../../../public/assets/whatwedo/icon_3.svg";
import Icon4 from "../../../../public/assets/whatwedo/icon_4.svg";
import Vector1 from "../../../../public/assets/industry/wtwedo/vector1.svg";
import Vector2 from "../../../../public/assets/industry/wtwedo/vector2.svg";
import Vector3 from "../../../../public/assets/industry/wtwedo/vector3.svg";

const services = [
  {
    title: "Branding",
    icon: Icon1,
    items: [ "Logos", "Corporate Identity", "Business Brand", "Packaging" ],
    popUp: false,
  },
  {
    title: "Product Design",
    icon: Icon2,
    items: [
      "UI UX App Design",
      "Websites Design",
      "Business Brand Design",
      "Packaging Design",
    ],
    popUp: true,
  },
  {
    title: "Development",
    icon: Icon3,
    items: [ "Websites", "Mobile Applications", "WordPress", "E-commerce's" ],
    popUp: false,
  },
  {
    title: "Marketing",
    icon: Icon4,
    items: [ "Strategy", "SEO", "Sales Marketing", "Digital Marketing" ],
    popUp: true,
  },
];

const ServiceCard = ({ icon, title, items, popUp }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const cardRef = useRef(null);

  // Set initial popup state immediately on mount
  useEffect(() => {
    if (cardRef.current && popUp) {
      // Immediately set the popup position without animation
      gsap.set(cardRef.current, {
        y: -24,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
      });
    }
  }, [ popUp ]);

  // Handle hover effects separately
  useEffect(() => {
    if (cardRef.current) {
      if (isHovered) {
        // Only change scale and shadow on hover, not position
        gsap.to(cardRef.current, {
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        // Return to normal scale and appropriate shadow
        gsap.to(cardRef.current, {
          scale: 1,
          boxShadow: popUp ? "0 10px 20px rgba(0,0,0,0.2)" : "0 5px 15px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  }, [ isHovered, popUp ]);

  return (
    <div
      ref={cardRef}
      className={`bg-[#575757] p-6 xl:py-10 md:py-5 text-white transition-all duration-300 cursor-pointer relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="xl:mb-6 md:mb-4 mb-3">
        <Image src={icon} alt={`${title} Icon`} />
      </div>
      <h3 className="text-sm xl:text-2xl font-normal xl:mb-8 md:mb-5 mb-3">
        {title}
      </h3>
      <ul className="md:space-y-4 space-y-3 text-xs xl:text-sm font-light">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Optional glow effect on hover */}
      <div className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-5' : ''}`}></div>
    </div>
  );
};


export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const vector1Ref = useRef(null);
  const vector2Ref = useRef(null);
  const vector3Ref = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Set initial states
      gsap.set(vector1Ref.current, {
        x: -50,
        y: -50,
        opacity: 0,
        scale: 0.5
      });

      gsap.set(vector2Ref.current, {
        x: -50,
        y: 50,
        opacity: 0,
        scale: 0.5
      });

      gsap.set(vector3Ref.current, {
        x: 50,
        y: 50,
        opacity: 0,
        scale: 0.5
      });

      gsap.set(titleRef.current, {
        y: 30,
        opacity: 0
      });

      gsap.set(subtitleRef.current, {
        y: 30,
        opacity: 0
      });

      // Create a single master timeline for all animations
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // Start when the top of the section reaches 70% down the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
          markers: false,
          onEnter: () => console.log("Animation started"), // For debugging
        }
      });

      // Text animations
      masterTl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
        .to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6");

      // Vector animations
      masterTl.to(vector1Ref.current, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.4")
        .to(vector2Ref.current, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.8")
        .to(vector3Ref.current, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.8");

      // Enhanced card animations - part of the same timeline
      const cards = document.querySelectorAll(".service-card");

      // Set initial states for each card with different starting positions
      gsap.set(cards[ 0 ], {
        x: -100,
        y: -50,
        opacity: 0,
        rotation: -5,
        scale: 0.8
      });

      gsap.set(cards[ 1 ], {
        x: 100,
        y: -80,
        opacity: 0,
        rotation: 5,
        scale: 0.8
      });

      gsap.set(cards[ 2 ], {
        x: -100,
        y: 50,
        opacity: 0,
        rotation: 5,
        scale: 0.8
      });

      gsap.set(cards[ 3 ], {
        x: 100,
        y: 80,
        opacity: 0,
        rotation: -5,
        scale: 0.8
      });

      // Add card animations to the master timeline
      masterTl.to(cards[ 0 ], {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
        .to(cards[ 1 ], {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        }, "-=0.6")
        .to(cards[ 2 ], {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .to(cards[ 3 ], {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          ease: "bounce.out"
        }, "-=0.6");

      // Add continuous animations for vectors after everything has appeared
      masterTl.add(() => {
        // Vector 1 - floating animation
        gsap.to(vector1Ref.current, {
          y: "-=15",
          x: "+=10",
          rotation: "-=5",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Vector 2 - pulsing animation
        gsap.to(vector2Ref.current, {
          scale: 1.1,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Vector 3 - rotating animation
        gsap.to(vector3Ref.current, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center"
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#353535] h-screen w-full mt-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Vector in top right corner */}
      <div ref={vector1Ref} className="absolute top-10 right-10 md:top-20 md:right-0 w-16 md:w-24 lg:w-80 z-10">
        <Image
          src={Vector1}
          alt="Vector Graphic 1"
          width={500}
          height={130}
          priority
        />
      </div>

      {/* Vector in bottom left corner */}
      <div ref={vector2Ref} className="absolute bottom-8 left-10 md:bottom-10 md:left-0 w-16 md:w-24 lg:w-42 z-10">
        <Image
          src={Vector2}
          alt="Vector Graphic 2"
          width={300}
          height={130}
          priority
        />
      </div>

      {/* Vector in bottom right corner */}
      <div ref={vector3Ref} className="absolute bottom-10 right-10 md:bottom-8 md:right-10 w-16 md:w-24 lg:w-32 z-10">
        <Image
          src={Vector3}
          alt="Vector Graphic 3"
          width={80}
          height={130}
          priority
        />
      </div>

      <div className="container md:py-20 py-10 xl:py-20 z-20">
        <div className="mb-4">
          <p ref={titleRef} className="text-lg tracking-wide text-white">WHAT WE DO</p>
        </div>
        <div className="mb-10 text-white">
          <h2 ref={subtitleRef} className="text-2xl md:text-4xl md:mt-5 font-semibold">
            PROVIDING BRILLIANT IDEAS FOR
            <span className="hidden md:inline-block"> <br /> </span> YOUR BUSINESS
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-2 text-white md:grid-cols-4 gap-4 md:py-10 xl:mt-15">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
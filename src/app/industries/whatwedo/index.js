"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon1 from "../../../../public/assets/whatwedo/icon_1.svg";
import Icon2 from "../../../../public/assets/whatwedo/icon_2.svg";
import Icon3 from "../../../../public/assets/whatwedo/icon_3.svg";
import Icon4 from "../../../../public/assets/whatwedo/icon_4.svg";
import Vector1 from "../../../../public/assets/industry/wtwedo/vector1.svg";
import Vector2 from "../../../../public/assets/industry/wtwedo/vector2.svg";
import Vector3 from "../../../../public/assets/industry/wtwedo/vector3.svg";
import "../styles/industries.css"

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

const ServiceCard = ({ icon, title, items, popUp, index }) => {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <div
      className={`bg-[#575757] p-6 xl:py-10 md:py-5 text-white cursor-pointer relative service-card ${popUp ? "popup-card" : ""
        } ${isHovered ? "hovered" : ""} card-${index}`}
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
      <div className={`absolute inset-0 bg-white opacity-0 hover-glow ${isHovered ? 'opacity-5' : ''}`}></div>
    </div>
  );
};

export default function WhatWeDo() {
  const [ isInView, setIsInView ] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        // When the section comes into view
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-[#353535] h-screen w-full mt-20 flex flex-col items-center justify-center relative overflow-hidden ${isInView ? 'section-in-view' : ''}`}
    >
      {/* Vector in top right corner */}
      <div className="vector vector-1 absolute top-10 right-10 md:top-20 md:right-0 w-16 md:w-24 lg:w-80 z-10">
        <Image
          src={Vector1}
          alt="Vector Graphic 1"
          width={500}
          height={130}
          priority
        />
      </div>
      {/* Vector in bottom left corner */}
      <div className="vector vector-2 absolute bottom-8 left-10 md:bottom-10 md:left-0 w-16 md:w-24 lg:w-42 z-10">
        <Image
          src={Vector2}
          alt="Vector Graphic 2"
          width={300}
          height={130}
          priority
        />
      </div>
      {/* Vector in bottom right corner */}
      <div className="vector vector-3 absolute bottom-10 right-10 md:bottom-8 md:right-10 w-16 md:w-24 lg:w-32 z-10">
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
          <p className="text-lg tracking-wide text-white section-title">WHAT WE DO</p>
        </div>
        <div className="mb-10 text-white">
          <h2 className="text-2xl md:text-4xl md:mt-5 font-semibold section-subtitle">
            PROVIDING BRILLIANT IDEAS FOR
            <span className="hidden md:inline-block"> <br /> </span> YOUR BUSINESS
          </h2>
        </div>
        <div className="grid grid-cols-2 text-white md:grid-cols-4 gap-4 md:py-10 xl:mt-15 cards-container">
          {services.map((service, index) => (
            <div key={index} className={`service-card-wrapper card-${index}`}>
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

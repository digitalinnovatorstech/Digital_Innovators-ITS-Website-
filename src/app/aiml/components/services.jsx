"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Image1 from "../../../../public/assets/home/aiml/internal/services/image1.svg";
import Image2 from "../../../../public/assets/home/aiml/internal/services/image2.svg";
import "../components/styles/aiml.css";

const AIMLServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [secondActiveIndex, setSecondActiveIndex] = useState(0);
  const [thirdActiveIndex, setThirdActiveIndex] = useState(0);

  const itemRefs = {
    first: useRef([]),
    second: useRef([]),
    third: useRef([]),
  };

  const updateOrangeLine = (sectionId, activeIdx) => {
    const itemRefsArray = itemRefs[sectionId].current;
    const sectionElement = document.querySelector(`.${sectionId}-section`);

    if (!sectionElement || !itemRefsArray || itemRefsArray.length === 0) return;

    const orangeLine = sectionElement.querySelector(".orange-line");
    const grayLine = sectionElement.querySelector(".gray-line");

    if (!orangeLine || !grayLine) return;

    grayLine.style.height = `${sectionElement.scrollHeight}px`;

    if (
      activeIdx >= 0 &&
      activeIdx < itemRefsArray.length &&
      itemRefsArray[activeIdx]
    ) {
      const activeItem = itemRefsArray[activeIdx];
      const isLastItem = activeIdx === itemRefsArray.length - 1;

      orangeLine.style.top = `${activeItem.offsetTop}px`;

      if (isLastItem) {
        orangeLine.style.height = `${
          sectionElement.scrollHeight - activeItem.offsetTop
        }px`;
      } else {
        orangeLine.style.height = `${activeItem.offsetHeight}px`;
      }

      orangeLine.style.display = "block";
    }
  };

  useEffect(() => {
    const updateAllLines = () => {
      updateOrangeLine("first", activeIndex);
      updateOrangeLine("second", secondActiveIndex);
      updateOrangeLine("third", thirdActiveIndex);
    };

    updateAllLines();

    window.addEventListener("resize", updateAllLines);
    return () => window.removeEventListener("resize", updateAllLines);
  }, [activeIndex, secondActiveIndex, thirdActiveIndex]);

  const services = [
    {
      number: "01",
      title: "Natural Language Processing",
      description:
        "Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.",
      image: Image1,
      icon: "/assets/home/aiml/image0.svg",
    },
    {
      number: "02",
      title: "AI Product Development",
      description:
        "The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring to optimize performance.",
      image: Image2,
      icon: "/assets/home/aiml/image6.svg",
    },
    {
      number: "03",
      title: "Predictive Analytics",
      description:
        "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
      image: Image1,
      icon: "/assets/home/aiml/image1.svg",
    },
  ];

  const services2 = [
    {
      number: "04",
      icon: "/assets/home/aiml/image7.svg",
      title: "Deep Learning Solutions",
      description:
        "Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.",
      image: Image1,
    },
    {
      number: "05",
      icon: "/assets/home/aiml/image2.svg",
      title: "Computer Vision",
      description:
        "The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring to optimize performance.",
      image: Image2,
    },
    {
      number: "06",
      icon: "/assets/home/aiml/image7.svg",
      title: "AI Chat bot & Smart Assistants",
      description:
        "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
      image: Image1,
    },
    {
      number: "07",
      icon: "/assets/home/aiml/image3.svg",
      title: "Generative AI Solutions",
      description:
        "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
      image: Image2,
    },
  ];

  const services3 = [
    {
      number: "08",
      icon: "/assets/home/aiml/image8.svg",
      title: "AI Security & Data Science",
      description:
        "Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.",
      image: Image1,
    },
    {
      number: "09",
      icon: "/assets/home/aiml/image4.svg",
      title: "Open AI Codex Integration",
      description:
        "The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring to optimize performance.",
      image: Image2,
    },
    {
      number: "10",
      icon: "/assets/home/aiml/image9.svg",
      title: "Recommendation Engines",
      description:
        "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
      image: Image1,
    },
  ];

  return (
    <div className="container flex flex-col justify-center">
      <div className="mb-10">
        <h1 className="font xl:text-6xl md:text-5xl">
          Services offer for <span className="text-primary">AI & ML</span>
          <br /> <span className="text-primary">Development</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full my-20">
        <div className="w-full md:w-1/2 relative first-section">
          <div className="absolute left-15 top-0 w-1 bg-[#E6E6E6] gray-line" />
          <div
            className="absolute left-15 top-0 w-1 bg-primary animate-highlight orange-line"
            style={{ display: "none" }}
          />

          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.first.current[index] = el)}
              className="relative flex mb-10 pl-24 cursor-pointer service-item"
              onMouseEnter={() => {
                setActiveIndex(index);
                setTimeout(() => updateOrangeLine("first", index), 10);
              }}
            >
              <div
                className={`absolute left-0 text-3xl font-medium transition-all duration-600 ${
                  activeIndex === index
                    ? "scale-130 text-black"
                    : "text-[#E6E6E6]"
                }`}
              >
                {service.number}
              </div>
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 mb-2">
                  <Image
                    src={service.icon}
                    alt="Service Icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`text-lg font-medium mb-1 transition-all duration-600 ${
                    activeIndex === index ? "scale-110 text-primary" : ""
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-[#767A85] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden flex items-center justify-center p-8 min-h-[350px]"
          style={{
            backgroundImage:
              "url('/assets/home/aiml/internal/services/bgimage.svg')",
          }}
        >
          <div className="image-container">
            {services.map((service, index) => (
              <div
                key={index}
                className={`image-wrapper ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full my-20">
        <div
          className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden flex items-center justify-center p-8 min-h-[350px]"
          style={{
            backgroundImage:
              "url('/assets/home/aiml/internal/services/bgimage.svg')",
          }}
        >
          <div className="image-container">
            {services2.map((service, index) => (
              <div
                key={index}
                className={`image-wrapper ${
                  secondActiveIndex === index ? "active" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 relative second-section">
          <div className="absolute left-15 top-0 w-1 bg-[#E6E6E6] gray-line" />
          <div
            className="absolute left-15 top-0 w-1 bg-primary animate-highlight orange-line"
            style={{ display: "none" }}
          />

          {services2.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.second.current[index] = el)}
              className="relative flex mb-10 pl-24 cursor-pointer service-item"
              onMouseEnter={() => {
                setSecondActiveIndex(index);
                setTimeout(() => updateOrangeLine("second", index), 10);
              }}
            >
              <div
                className={`absolute left-0 text-3xl font-medium transition-all duration-600 ${
                  secondActiveIndex === index
                    ? "scale-130 text-black"
                    : "text-[#E6E6E6]"
                }`}
              >
                {service.number}
              </div>
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 mb-2">
                  <Image
                    src={service.icon}
                    alt="Service Icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`text-lg font-medium mb-1 transition-all duration-600 ${
                    secondActiveIndex === index ? "scale-110 text-primary" : ""
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-[#767A85] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full my-20">
        <div className="w-full md:w-1/2 relative third-section">
          <div className="absolute left-15 top-0 w-1 bg-[#E6E6E6] gray-line" />
          <div
            className="absolute left-15 top-0 w-1 bg-primary animate-highlight orange-line"
            style={{ display: "none" }}
          />

          {services3.map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.third.current[index] = el)}
              className="relative flex mb-10 pl-24 cursor-pointer service-item"
              onMouseEnter={() => {
                setThirdActiveIndex(index);
                setTimeout(() => updateOrangeLine("third", index), 10);
              }}
            >
              <div
                className={`absolute left-0 text-3xl font-medium transition-all duration-600 ${
                  thirdActiveIndex === index
                    ? "scale-130 text-black"
                    : "text-[#E6E6E6]"
                }`}
              >
                {service.number}
              </div>
              <div className="flex flex-col items-start">
                <div className="w-8 h-8 mb-2">
                  <Image
                    src={service.icon}
                    alt="Service Icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`text-lg font-medium mb-1 transition-all duration-600 ${
                    thirdActiveIndex === index ? "scale-110 text-primary" : ""
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-[#767A85] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden flex items-center justify-center p-8 min-h-[350px]"
          style={{
            backgroundImage:
              "url('/assets/home/aiml/internal/services/bgimage.svg')",
          }}
        >
          <div className="image-container">
            {services3.map((service, index) => (
              <div
                key={index}
                className={`image-wrapper ${
                  thirdActiveIndex === index ? "active" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{``}</style>
    </div>
  );
};

export default AIMLServices;

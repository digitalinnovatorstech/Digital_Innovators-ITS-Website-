"use client";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "./primarybutton";
import Link from "next/link";

const STACK_CATEGORIES = [
  { id: "design", label: "Design" },
  { id: "frontend", label: "Front - End" },
  { id: "backend", label: "Back - End" },
  { id: "database", label: "Data Base" },
  { id: "cloud", label: "Cloud Services" },
];

const TAB_CONTENT = {
  design: {
    heading1: "Tools",
    heading1Suffix: "for",
    heading2: "Modern Creativity",
    description: "The modern design technology stack empowers designers to bridge the gap between concept and implementation."
  },
  frontend: {
    heading1: "Building  ",
    heading1Suffix: "Interactive",
    heading2: "Web Experience",
    description: "User's first impression, combining HTML, CSS, and JavaScript frameworks to create engaging and responsive web interfaces."
  },
  backend: {
    heading1: "Architecting  ",
    heading1Suffix: "Robust",
    heading2: "Web Applications",
    description: "unseen foundation, handling data management, server logic, and API development to power the functionality of web applications."
  },
  database: {
    heading1: "From ",
    heading1Suffix: "Infrastructure",
    heading2: "To Applications",
    description: "Offers scalable infrastructure, platform services, and software solutions, enabling businesses to deploy, manage, and optimize applications."
  },
  cloud: {
    heading1: "From  ",
    heading1Suffix: "Infrastructure",
    heading2: "To Global Reach",
    description: "Cloud platforms that provide flexibility, scalability and security for your business applications."
  }
};

export default function TechnologyStack() {
  const [ activeCategory, setActiveCategory ] = useState(STACK_CATEGORIES[ 0 ].id);

  const ICONS_COUNT = {
    design: 8,
    frontend: 8,
    backend: 8,
    database: 5,
    cloud: 4,
  };

  const TECH_STACK = Array.from(
    { length: ICONS_COUNT[ activeCategory ] || 0 },
    (_, index) => ({
      id: index + 1,
      src: `/assets/technologystack/${activeCategory}/stack_${index + 1}.svg` || "/path/to/fallback/image.svg",
      alt: `Technology ${index + 1}`,
    })
  );

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const activeContent = TAB_CONTENT[ activeCategory ];

  return (
    <div className="flex flex-col items-center justify-center px-4 md:h-screen my-10 md:my-0 w-full">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-center">
          Our Technology Stack
        </h1>
        <p className="text-black text-center md:text-sm xl:text-lg mt-5 md:mt-10 max-w-3xl mx-auto">
          We use the most advanced technologies to create solutions for your business,
          ensuring your product needs are met while we manage the technical intricacies.
        </p>
        <div className="flex justify-center mt-5 md:mt-10">
          <Link href="/technologies"><PrimaryButton text="Explore More" /></Link>
        </div>

        {/* Scrollable tabs container */}
        <div className="w-full mt-8 overflow-x-auto pb-2">
          <div className="flex justify-start md:justify-center min-w-min px-4" style={{ width: 'max-content', margin: '0 auto' }}>
            {STACK_CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleCategoryClick(id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full border border-black transition-all mx-1.5 ${activeCategory === id
                  ? "bg-primary text-white border-primary font-medium"
                  : "text-black"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="md:mt-20 my-10 md:my-0 w-full transition-all duration-300 ease-in-out">
          <div className="flex flex-col min-h-[300px] md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-black md:text-xl xl:text-5xl text-2xl font mb-2">
                {activeContent.heading1}{" "}
                <span className="text-black font-normal md:text-xl xl:text-5xl text-2xl">
                  {activeContent.heading1Suffix}
                </span>
              </h2>
              <h3 className="text-primary md:text-xl xl:text-5xl text-2xl font mb-4">
                {activeContent.heading2}
              </h3>
              <p className="text-black xl:text-xl md:text-sm">
                {activeContent.description}
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-4 md:grid-cols-4 gap-8">
              {TECH_STACK.map(({ id, src, alt }) => (
                <div key={id} className="flex justify-center">
                  <Image src={src} alt={alt} width={100} height={100} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

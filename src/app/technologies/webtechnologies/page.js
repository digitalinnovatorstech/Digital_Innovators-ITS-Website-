"use client";
import Image from "next/image";
import React from "react";
import Bird from "../../../../public/assets/contact/bird.svg";
import '@/app/technologies/styles/technologies.css'
import '@/app/contact/styles/contact.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function WebTechnologies() {
  const frontendTechNames = [
    "HTML",
    "CSS",
    "Java Script",
    "React JS",
    "Angular JS",
    "Vue JS ",
    "Flutter",
    "Bootstrap",
    "React Native",
    "JQuery",
  ];

  const backendTechNames = [
    "PHP",
    "Java",
    ".Net",
    "Python",
    "NOde JS",
    "C++",
    "C#",
    "GoLang",
    "Rails",

  ];
  const webtechnologies = Array.from({ length: 10 }, (_, index) => ({

    src: require(`../../../../public/assets/technologies/frontend/image_${index + 1}.svg`),
    name: frontendTechNames[index],
  }));
  const backendTechnologies = Array.from({ length: 9 }, (_, index) => ({

    src: require(`../../../../public/assets/technologies/backend/image_${index + 1}.svg`),
    name: backendTechNames[index],
  }));
  return (
    <div className="container">
      <div className="bird_header">
        <span className="bird_subheader">Technologies</span>

        <DotLottieReact
          src="/assets/flyingbird.lottie"
          loop
          autoplay
          className="flying_bird"
        />
      </div>
      <h1 className="font text-3xl mt-5 xl:text-7xl md:text-5xl  ">
        <span className="text-primary">Technology</span> as the Pillar of Our{" "}
        <span className="md:hidden">Digital Transformation</span>
        <span className="hidden md:inline">
          <br />
          <span className="text-primary">Digital</span> Transformation
        </span>
      </h1>

      <hr className="mt-5" />
      <p className="text-secondary mt-5 md:text-xl text-sm">
        We empower industries with world-class design solutions, helping
        businesses stay ahead in a competitive market.
      </p>
      <div className="my-8 space-y-10">
        <h1 className="heading">
          Web Technologies
        </h1>
        <p className="sub_heading">
          Front-end Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 mt-5">
          {webtechnologies.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 space-y-10">

        <p className="sub_heading">
          Back-end Technologies
        </p>

        <div className="tech_card">
          {backendTechnologies.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name} width={80} height={80} />
              <p >{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// {/* <div className="relative">

// <div className="absolute top-[-30%] w-[80%] right-[-15%] h-full z-0 opacity-20">
//   <img
//     src="/assets/technologies/flyingbird.svg"
//     alt="Background bird"
//     className="object-contain w-full h-auto"
//   />
// </div>

// {/* Content stays on top of the image */}
// <div className="bird_header relative z-10">
//   <span className="bird_subheader">Technologies</span>
//   <Image src={Bird} alt="Bird Icon" className="image"/>
// </div>

// <h1 className="font text-7xl mt-10 relative z-10">
//   <span className="text-primary">Technology</span> as the Pillar of Our{" "}
//   <br />
//   <span className="text-primary">Digital</span> Transformation
// </h1>
// </div> */}

"use client";
import Image from "next/image";
import React from "react";
import '@/app/technologies/styles/technologies.css'
export default function DesignTesting() {
  const design = [
    "Figma",
    "Sketch",
    "Adobe XD",
    "Illustrator",
    "Photoshop",
    "After Effects",
    "Premiere Pro",
    "Invision",
    "Zeplin"
  ];
  const testing =[
    "Selenium",
    "Apache Jmeter",
    "Postman",
    "TestNG/Junit",
    "Jira",
    "Test"
  ]

  
  const designImages = Array.from({ length: 9 }, (_, index) => ({
 
    src: require(`../../../../public/assets/technologies/design/image_${index + 1}.svg`),
    name: design[index],
  }));
  

  const testingImages = Array.from({ length: 6 }, (_, index) => ({
    src: require(`../../../../public/assets/technologies/testing/image_${index + 1}.svg`),
    name: testing[index],
  }));
  
  return (
    <div className="container">
      <div className="my-8 space-y-10">
      <h1 className="heading">
      Design Technologies
        </h1>
        

        <div className="tech_card">
          {designImages?.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name}  />
              <p className="mt-2 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 space-y-10">
      <h1 className="heading">
      QA Testing
        </h1>
        

        <div className="tech_card">
          {testingImages?.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name}  />
              <p className="mt-2 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import '@/app/technologies/styles/technologies.css'
export default function AIandPlatforms() {
  const aiandml = [
    "TensorFlow",
    "Chat GPT",
    "Pandas",
    " Hadoop",
    "Tableau",
   
    
  ];

  const platforms = [
    "Salesforce",
    "Dynamics 365",
        "Share Point",
    "Servicenow",
    "Adobe Commerce",
    
  ];
  const aiImages = Array.from({ length:5 }, (_, index) => ({
  
    src: require(`../../../../public/assets/technologies/aiml/image_${index + 1}.svg`),
    name: aiandml[index],
  }));
  const platformsImages = Array.from({ length: 5 }, (_, index) => ({
    
    src: require(`../../../../public/assets/technologies/platforms/image_${index + 1}.svg`),
    name: platforms[index],
  }));
  return (
    <div className="container">
      <div className="my-8 space-y-10">
        <h1 className="heading">
        AI & ML
        </h1>
       

        <div className="tech_card">
          {aiImages.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name}  />
              <p >{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 space-y-10">
      <h1 className="heading">
      Platforms
        </h1>

        <div className="tech_card">
          {platformsImages.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name}  />
              <p >{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

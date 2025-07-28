"use client";
import Image from "next/image";
import React from "react";
import '@/app/technologies/styles/technologies.css'

export default function Cloud() {
  const cloud = [
    "AWS",
    "Google Cloud",
    "Azure",
    "Salesforce",
    "Go Daddy",
    "Digital Ocean",
    "Hostinger",
    "API Gateway",
    "Simple Storage Service",
    "Elastic Compute Cloud",
    "Dreamhost"
    
  ];

  
  const cloudImages = Array.from({ length: 11}, (_, index) => ({

    src: require(`../../../../public/assets/technologies/cloud/image_${index + 1}.svg`),
    name: cloud[index],
  }));
  
  return (
    <div className="container">
      <div className="my-8 space-y-10">
      <h1 className="heading">
      Cloud Service Technologies   </h1>
        

        <div className="tech_card">
          {cloudImages.map((tech, index) => (
            <div
              key={index}
              className="image_card"
            >
              <Image src={tech.src} alt={tech.name} />
              <p >{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

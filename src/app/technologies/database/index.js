"use client";
import Image from "next/image";
import React from "react";
import '@/app/technologies/styles/technologies.css'
export default function DataBase() {
  const database = [
    "SQL",
    "My SQL",
    "Mongo DB",
    "Maria DB",
    "Oracle",
    "PostgreSQL",
    "Amazon S3",
    "Hadoop",
    
  ];

  const database1 = [
    "Docker",
    "Kubernetes",
    "Chat GPT",
    "Git Hub",
    "Terraform",
    "Jenkins",
    
  ];
  const databaseImages = Array.from({ length: 8}, (_, index) => ({
  
    src: require(`../../../../public/assets/technologies/database/image_${index + 1}.svg`),
    name: database[index],
  }));
  const databaseImages1 = Array.from({ length: 6 }, (_, index) => ({
    
    src: require(`../../../../public/assets/technologies/database1/image_${index + 1}.svg`),
    name: database1[index],
  }));
  return (
    <div className="container">
      <div className="my-8 space-y-10">
        <h1 className="heading">
        Database Technologies
        </h1>
        <p className="sub_heading">For Android</p>

        <div className="tech_card">
          {databaseImages.map((tech, index) => (
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
        Database Technologies
        </h1>

        <div className="tech_card">
          {databaseImages1.map((tech, index) => (
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

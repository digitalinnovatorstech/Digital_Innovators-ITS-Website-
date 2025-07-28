"use client";
import Image from "next/image";
import React from "react";
import '@/app/technologies/styles/technologies.css'
export default function CMS() {
  const cms = [
    "Word Press",
    "cmsImages",
    "Shopify",
    "Drupal",
    "Woo Commerce",
    "PrestaShop",
    "Opencart",
    "Joomla",
    
  ];

  
  const cmsImages = Array.from({ length: 8 }, (_, index) => ({

    src: require(`../../../../public/assets/technologies/cms/image_${index + 1}.svg`),
    name: cms[index],
  }));
  
  return (
    <div className="container">
      <div className="my-8 space-y-10">
      <h1 className="heading">
      CMS & Ecommerce
        </h1>
        

        <div className="tech_card">
          {cmsImages.map((tech, index) => (
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

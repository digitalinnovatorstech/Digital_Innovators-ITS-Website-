"use client";
import Image from "next/image";
import React from "react";
import '@/app/technologies/styles/technologies.css'
export default function MobileTechnologies() {
  const andriod = [
    "Kotlin",
    "Dart",
    "Java",
    "React Native",
    "Flutter",
    "Ionic",
    "Phonegap",
    "Cordova",
    "Xamarin",
    "Firebase",
    "Android Studio",
  ];

  const ios = [
    "Swift",
    "React Native",
    "Flutter",
    "Ionic",
    "Phonegap",
    "Cordova",
    
    "Material UI",
    "Xcode",
    "UI Kit",
  ];
  const andriodImages = Array.from({ length: 11 }, (_, index) => ({
  
    src: require(`../../../../public/assets/technologies/android/image_${index + 1}.svg`),
    name: andriod[index],
  }));
  const iosImages = Array.from({ length: 9 }, (_, index) => ({
    
    src: require(`../../../../public/assets/technologies/ios/image_${index + 1}.svg`),
    name: ios[index],
  }));
  return (
    <div className="container">
      <div className="my-8 space-y-10">
        <h1 className="heading">
          Mobile Technologies
        </h1>
        <p className="sub_heading">For Android</p>

        <div className="tech_card">
          {andriodImages.map((tech, index) => (
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
        <p className="sub_heading">For iOS</p>

        <div className="tech_card">
          {iosImages.map((tech, index) => (
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

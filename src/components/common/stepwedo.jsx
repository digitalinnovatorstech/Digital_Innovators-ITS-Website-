"use client";
import React, { useState } from "react";
import Image from "next/image";
import StepsImage1 from "../../../public/assets/about/steponeimage.svg";
import StepsImage2 from "../../../public/assets/about/steptwoimage.svg";
import StepsImage3 from "../../../public/assets/about/stepthreeimage.svg";

const WorkProcess = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const iconPaths = {
    planning: "/planning-icon.svg",
    development: "/development-icon.svg",
    deployment: "/deployment-icon.svg",
  };

  return (
    <div className="bg-[#252D30]  h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center ">
          <div className="inline-block px-6 py-2 bg-gray-900 rounded-full ">
            <span className="text-white font-medium">WORK PROCESS</span>
          </div>
          <h2 className="text-4xl font">
            <span className="text-white">03 Steps</span>
            <span className="text-orange-500 ml-4">What We Do</span>
          </h2>
        </div>

        {/* Steps Content */}
        <div className="relative ">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          {/* Step 1 */}
          <div
            className="flex  relative"
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Left Side - Icon */}
            <div className="w-1/2 pr-10 flex justify-end">
              <div
                className={`p-4 border-2 ${
                  hoveredStep === 1 ? "border-orange-500" : "border-gray-600"
                } transition-colors duration-300`}
              >
                <div
                  className="w-20 h-20 relative"
                  style={{
                    filter:
                      hoveredStep === 1
                        ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(0deg) brightness(118%) contrast(119%)"
                        : "none",
                  }}
                >
                  <Image
                    src={iconPaths.planning}
                    alt="Planning Icon"
                    width={20}
                    height={20}
                    className={`${
                      hoveredStep === 1 ? "text-orange-500" : "text-gray-300"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Vertical Line Highlight - Only appears on hover */}
            <div
              className={`absolute left-1/2 top-0 w-0.5 h-full transition-colors duration-300 ${
                hoveredStep === 1 ? "bg-orange-500" : "bg-transparent"
              }`}
            ></div>

            {/* Right Side - Content */}
            <div className="w-1/2 pl-10">
              <div className="mb-4">
                <Image src={StepsImage1} alt="Steps Image 1" className="w-24" />
              </div>
              <h4
                className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  hoveredStep === 1 ? "text-orange-500" : "text-white"
                }`}
              >
                Planning/Design
              </h4>
              <p className="text-gray-300">
                This stage involves defining the project's scope, gathering
                requirements, and creating a blueprint for the software.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="flex mb-24 relative"
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Left Side - Content */}
            <div className="w-1/2 pr-10 text-right flex flex-col items-end">
              {/* Image now positioned above the text */}
              <div className="mb-4">
                <Image src={StepsImage2} alt="Steps Image 1" className="w-24" />
              </div>
              <h4
                className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  hoveredStep === 2 ? "text-orange-500" : "text-white"
                }`}
              >
                Development/Testing
              </h4>
              <p className="text-gray-300">
                This is where the actual coding takes place, followed by
                rigorous testing to ensure the software functions correctly.
              </p>
            </div>

            {/* Vertical Line Highlight - Only appears on hover */}
            <div
              className={`absolute left-1/2 top-0 w-0.5 h-full transition-colors duration-300 ${
                hoveredStep === 2 ? "bg-orange-500" : "bg-transparent"
              }`}
            ></div>

            {/* Right Side - Number & Icon */}
            <div className="w-1/2 pl-10">
              <div
                className={`p-4 border-2 ${
                  hoveredStep === 2 ? "border-orange-500" : "border-gray-600"
                } transition-colors duration-300 inline-block`}
              >
                <div
                  className="w-20 h-20 relative"
                  style={{
                    filter:
                      hoveredStep === 2
                        ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(0deg) brightness(118%) contrast(119%)"
                        : "none",
                  }}
                >
                  <Image
                    src={iconPaths.development}
                    alt="Development Icon"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="flex relative"
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Left Side - Icon */}
            <div className="w-1/2 pr-10 flex justify-end">
              <div
                className={`p-4 border-2 ${
                  hoveredStep === 3 ? "border-orange-500" : "border-gray-600"
                } transition-colors duration-300`}
              >
                <div
                  className="w-20 h-20 relative"
                  style={{
                    filter:
                      hoveredStep === 3
                        ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(0deg) brightness(118%) contrast(119%)"
                        : "none",
                  }}
                >
                  <Image
                    src={iconPaths.deployment}
                    alt="Deployment Icon"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>

            {/* Vertical Line Highlight - Only appears on hover */}
            <div
              className={`absolute left-1/2 top-0 w-0.5 h-full transition-colors duration-300 ${
                hoveredStep === 3 ? "bg-orange-500" : "bg-transparent"
              }`}
            ></div>

            {/* Right Side - Content */}
            <div className="w-1/2 pl-10">
              <div className="mb-4">
                <div className="mb-4">
                  <Image
                    src={StepsImage3}
                    alt="Steps Image 1"
                    className="w-24"
                  />
                </div>
              </div>
              <h4
                className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  hoveredStep === 3 ? "text-orange-500" : "text-white"
                }`}
              >
                Deployment/Maintenance
              </h4>
              <p className="text-gray-300">
                This final stage involves releasing the software to users and
                providing ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import OrangeArrow from "../../../../public/assets/orangearrow.svg";
import BlackArrow from "../../../../public/assets/menu/arrow.svg";
import Wtweserve from "../../../../public/assets/design/wtweserve.svg";

const WhatWeServe = () => {
    const [ hoveredItem, setHoveredItem ] = useState(null);

    const services = [
        { id: 1, name: "Digital Marketing", column: "left" },
        { id: 2, name: "Search engine optimization", column: "right" },
        { id: 3, name: "Blog Writing", column: "left" },
        { id: 4, name: "Social Media Marketing", column: "right" },
        { id: 5, name: "Lead Generation", column: "left" },
        { id: 6, name: "ASO", column: "right" },
        { id: 7, name: "Pay Per Click", column: "left" },
        { id: 8, name: "Email Marketing", column: "right" },
        { id: 9, name: "Content Marketing", column: "left" },
        { id: 10, name: "Video Marketing", column: "right" },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            {/* Content section */}
            <div className="flex flex-col justify-center items-center flex-grow py-12">
                <div className="max-w-5xl container mx-auto w-full">
                    <div className="text-center mb-8">
                        <div className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">
                            WHAT DO WE SERVE
                        </div>
                        <h2 className="text-3xl md:text-5xl font mb-2">
                            Full-Spectrum Digital Marketing
                        </h2>
                        <h2 className="text-3xl md:text-5xl font text-primary">
                            Powering Your Online Presence
                        </h2>
                    </div>
                    <p className="text-center mb-12 text-black">
                        Our approach goes beyond aesthetics—we design brands that tell your story, reflect your values, and
                        resonate with the people who matter most. From distinctive logos to cohesive color palettes and purposeful
                        typography, every detail is crafted to ensure your brand is both unforgettable and aligned with your vision.
                    </p>
                    {/* Services Grid */}
                    <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-42">
                        {/* Left Column */}
                        <div className="space-y-6 w-full max-w-xs">
                            {services
                                .filter((service) => service.column === "left")
                                .map((service) => (
                                    <div
                                        key={service.id}
                                        className="flex items-center cursor-pointer transition-colors duration-200"
                                        onMouseEnter={() => setHoveredItem(service.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <Image
                                            src={hoveredItem === service.id ? OrangeArrow : BlackArrow}
                                            alt="Arrow"
                                            width={20}
                                            height={20}
                                            className="mr-2"
                                        />
                                        <span
                                            className={`font-medium ${hoveredItem === service.id ? "text-primary text-lg" : "text-black text-lg"
                                                }`}
                                        >
                                            {service.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                        {/* Right Column */}
                        <div className="space-y-6 w-full max-w-xs">
                            {services
                                .filter((service) => service.column === "right")
                                .map((service) => (
                                    <div
                                        key={service.id}
                                        className="flex items-center cursor-pointer transition-colors duration-200"
                                        onMouseEnter={() => setHoveredItem(service.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <Image
                                            src={hoveredItem === service.id ? OrangeArrow : BlackArrow}
                                            alt="Arrow"
                                            width={20}
                                            height={20}
                                            className="mr-2"
                                        />
                                        <span
                                            className={`font-medium ${hoveredItem === service.id ? "text-primary text-lg" : "text-black text-lg"
                                                }`}
                                        >
                                            {service.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image at the bottom */}
            <div className="w-full">
                <Image
                    src={Wtweserve}
                    alt="Services Image"
                    className="w-full"
                />
            </div>
        </div>

    );
};

export default WhatWeServe;
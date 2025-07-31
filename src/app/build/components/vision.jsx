"use client";
import React, { useState } from "react";
import Image from "next/image";
import OrangeArrow from "../../../../public/assets/orangearrow.svg";
import BlackArrow from "../../../../public/assets/menu/arrow.svg";
import Wtweserve from "../../../../public/assets/design/wtweserve.svg";

const WhatWeServe = () => {
    const [ hoveredItem, setHoveredItem ] = useState(null);

    const services = [
        { id: 1, name: "Web Applications", column: "left" },
        { id: 2, name: "Cloud Management", column: "right" },
        { id: 3, name: "Mobile Applications", column: "left" },
        { id: 4, name: "Emerging Tech (AI, AR/VR)", column: "right" },
        { id: 5, name: "SAAS Implementation", column: "left" },
        { id: 6, name: "Front-End", column: "right" },
        { id: 7, name: "CRM, ERP Applications", column: "left" },
        { id: 8, name: "Back-End", column: "right" },
        { id: 9, name: "HRMS Applications", column: "left" },
        { id: 10, name: "CMS Integrations", column: "right" },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            {/* Content Section */}
            <div className="flex flex-col justify-center items-center flex-grow py-12">
                <div className="max-w-6xl container mx-auto w-full">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font mb-4">
                            We Power Your Vision with
                        </h2>
                        <h2 className="text-3xl md:text-5xl font text-orange-500 mb-4">
                            High-Performance Development
                        </h2>
                        <p className="text-base md:text-lg text-gray-800 px-4 md:px-24">
                            From sleek websites to robust apps, we transform ideas into powerful digital experiences.
                            Whether you're launching a product, scaling your business, or upgrading your tech—our custom-built
                            solutions are crafted to deliver speed, security, and seamless functionality across every device.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32 mt-12">
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
                                            className={`font-semibold text-lg ${hoveredItem === service.id ? "text-orange-500" : "text-black"
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
                                            className={`font-semibold text-lg ${hoveredItem === service.id ? "text-orange-500" : "text-black"
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

            {/* Image at the Bottom */}
            <div className="w-full">
                <Image src={Wtweserve} alt="Services Image" className="w-full" />
            </div>
        </div>
    );
};

export default WhatWeServe;

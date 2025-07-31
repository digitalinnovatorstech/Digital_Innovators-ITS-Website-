"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OrangeArrow from "../../../../public/assets/orangearrow.svg";
import BlackArrow from "../../../../public/assets/menu/arrow.svg";
import Wtweserve from "../../../../public/assets/design/wtweserve.svg";

const WhatWeServe = () => {
    const [ hoveredItem, setHoveredItem ] = useState(null);
    const [ isVisible, setIsVisible ] = useState({
        header: false,
        description: false,
        leftColumn: false,
        rightColumn: false,
        image: false
    });

    // Refs for the elements we want to animate
    const headerRef = useRef(null);
    const descriptionRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const imageRef = useRef(null);

    // Check if an element is in viewport
    const isInViewport = (element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    };

    // Handle scroll events
    const handleScroll = () => {
        setIsVisible({
            header: isInViewport(headerRef.current),
            description: isInViewport(descriptionRef.current),
            leftColumn: isInViewport(leftColumnRef.current),
            rightColumn: isInViewport(rightColumnRef.current),
            image: isInViewport(imageRef.current)
        });
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const services = [
        { id: 1, name: "Branding", column: "left" },
        { id: 2, name: "Advertisement Design", column: "right" },
        { id: 3, name: "UX Design", column: "left" },
        { id: 4, name: "Brochure Design", column: "right" },
        { id: 5, name: "UI Design", column: "left" },
        { id: 6, name: "Illustrations", column: "right" },
        { id: 7, name: "Design systems", column: "left" },
        { id: 8, name: "Motion Graphics", column: "right" },
        { id: 9, name: "AI Design Solutions", column: "left" },
        { id: 10, name: "Animations", column: "right" },
    ];

    return (
        <div className="w-full md:h-screen flex flex-col justify-between overflow-hidden">
            {/* Content section */}
            <div className="flex flex-col justify-center items-center flex-grow py-12">
                <div className="max-w-5xl container mx-auto w-full">
                    <div
                        ref={headerRef}
                        className={`text-center mb-8 transition-all duration-1000 ${isVisible.header
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform -translate-y-10"
                            }`}
                    >
                        <div className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">
                            WHAT DO WE SERVE
                        </div>
                        <h2 className="text-3xl md:text-5xl font mb-2">
                            We Supercharge Your Brand with
                        </h2>
                        <h2 className="text-3xl md:text-5xl font text-primary">
                            High-Impact Designs
                        </h2>
                    </div>
                    <p
                        ref={descriptionRef}
                        className={`text-center mb-12 text-black transition-all duration-1000 delay-300 ${isVisible.description
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-10"
                            }`}
                    >
                        Our approach goes beyond aesthetics—we design brands that tell your
                        story, reflect your values, and resonate with the people who matter
                        most. From distinctive logos to cohesive color palettes and purposeful
                        typography, every detail is crafted to ensure your brand is both
                        unforgettable and aligned with your vision.
                    </p>
                    {/* Services Grid */}
                    <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-42">
                        {/* Left Column */}
                        <div
                            ref={leftColumnRef}
                            className={`space-y-6 w-full max-w-xs transition-all duration-1000 delay-500 ${isVisible.leftColumn
                                ? "opacity-100 transform translate-x-0"
                                : "opacity-0 transform -translate-x-20"
                                }`}
                        >
                            {services
                                .filter((service) => service.column === "left")
                                .map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`flex items-center cursor-pointer transition-all duration-300 animate-fade-in`}
                                        style={{ animationDelay: `${index * 100}ms` }}
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
                                            className={`font-medium transition-all duration-300 ${hoveredItem === service.id
                                                ? "text-primary text-lg transform translate-x-1"
                                                : "text-black text-lg"
                                                }`}
                                        >
                                            {service.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                        {/* Right Column */}
                        <div
                            ref={rightColumnRef}
                            className={`space-y-6 w-full max-w-xs transition-all duration-1000 delay-700 ${isVisible.rightColumn
                                ? "opacity-100 transform translate-x-0"
                                : "opacity-0 transform translate-x-20"
                                }`}
                        >
                            {services
                                .filter((service) => service.column === "right")
                                .map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`flex items-center cursor-pointer transition-all duration-300 animate-fade-in`}
                                        style={{ animationDelay: `${index * 100 + 500}ms` }}
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
                                            className={`font-medium transition-all duration-300 ${hoveredItem === service.id
                                                ? "text-primary text-lg transform translate-x-1"
                                                : "text-black text-lg"
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
            <div
                ref={imageRef}
                className={`w-full transition-all duration-1000 delay-900 ${isVisible.image
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-20"
                    }`}
            >
                <Image
                    src={Wtweserve}
                    alt="Services Image"
                    className="w-full"
                />
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    opacity: 0;
                    animation: fadeIn 0.5s ease-out forwards;
                }
                
                /* Add float animation for interactive elements */
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
                
                .float-animation:hover {
                    animation: float 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default WhatWeServe;
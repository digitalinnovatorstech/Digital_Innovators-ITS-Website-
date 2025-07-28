"use client";
import React, { useEffect, useRef, useState } from 'react';
import Designimg from "../../../../public/assets/design/designbg.svg";
import LaptopImage from "../../../../public/assets/design/laptop.svg";
import Image from "next/image";
import Icon1 from "../../../../public/assets/design/icon1.svg";
import Icon2 from "../../../../public/assets/design/icon2.svg";
import Icon3 from "../../../../public/assets/design/icon3.svg";
import Icon4 from "../../../../public/assets/design/icon4.svg";
import Icon5 from "../../../../public/assets/design/icon5.svg";
import Icon6 from "../../../../public/assets/design/icon6.svg";

import "../components/styles/section2.css";

const Section2 = () => {
    const sectionRef = useRef(null);
    const laptopRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        // Create an observer that tracks both entering and leaving the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                const [ entry ] = entries;
                // Set isVisible based on whether the element is in the viewport
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
                rootMargin: '-10% 0px' // Slightly adjust when the animation triggers
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative w-full py-24 overflow-hidden h-screen flex items-center justify-center"
        >
            {/* Background with "DESIGN" text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={Designimg}
                    alt="Design Background"
                    width={900}
                    height={400}
                />
            </div>
            {/* Main content container */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center">
                    {/* Laptop in the center with animation */}
                    <div
                        ref={laptopRef}
                        className={`relative w-full max-w-2xl laptop-container ${isVisible ? 'laptop-visible' : ''}`}
                    >
                        <Image
                            src={LaptopImage}
                            alt="Laptop Display"
                            width={600}
                            height={400}
                            className="mx-auto laptop-image"
                            priority
                        />
                        {/* Floating icons with bounce animations */}
                        {/* XD icon */}
                        <div className={`absolute -right-30 top-24 animate-bounce icon-float ${isVisible ? 'icon-visible' : ''}`}
                            style={{ animationDuration: '3.5s', animationDelay: '0.3s' }}>
                            <div className="bg-[#F7F5F0] rounded-full p-8 shadow-lg">
                                <Image src={Icon3} alt="Adobe XD" width={60} height={60} />
                            </div>
                        </div>
                        {/* Photoshop icon */}
                        <div className={`absolute left-0 top-5 animate-bounce icon-float ${isVisible ? 'icon-visible' : ''}`}
                            style={{ animationDuration: '3.7s', animationDelay: '0.9s' }}>
                            <div className="bg-[#F7F5F0] rounded-full p-8 shadow-lg">
                                <Image src={Icon5} alt="Adobe Photoshop" width={60} height={60} />
                            </div>
                        </div>
                        {/* Premiere Pro icon */}
                        <div className={`absolute -left-30 bottom-5 animate-bounce icon-float ${isVisible ? 'icon-visible' : ''}`}
                            style={{ animationDuration: '3.3s', animationDelay: '0.2s' }}>
                            <div className="bg-[#F7F5F0] rounded-full p-8 shadow-lg">
                                <Image src={Icon6} alt="Adobe Premiere Pro" width={60} height={60} />
                            </div>
                        </div>
                        {/* Illustrator icon */}
                        <div className={`absolute left-28 top-85 animate-bounce icon-float ${isVisible ? 'icon-visible' : ''}`}
                            style={{ animationDuration: '4.2s', animationDelay: '0.5s' }}>
                            <div className="bg-[#F7F5F0] rounded-full p-5 shadow-lg">
                                <Image src={Icon4} alt="Adobe Illustrator" width={30} height={30} />
                            </div>
                        </div>
                        {/* Figma icon */}
                        <div className={`absolute bottom-20 right-0 lg:right-0 animate-bounce icon-float ${isVisible ? 'icon-visible' : ''}`}
                            style={{ animationDuration: '3s', animationDelay: '0.1s' }}>
                            <div className="bg-[#F7F5F0] rounded-full p-5 shadow-lg">
                                <Image src={Icon1} alt="Figma" width={30} height={30} />
                            </div>
                        </div>
                        {/* Sketch icon */}
                        <div className={`absolute right-24 top-8 animate-bounce icon-float ${isVisible ? 'icon-visible' : ''}`}
                            style={{ animationDuration: '4s', animationDelay: '0.7s' }}>
                            <div className="bg-[#F7F5F0] rounded-full p-5 shadow-lg">
                                <Image src={Icon2} alt="Sketch" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;

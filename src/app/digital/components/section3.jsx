"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Visionimage from "../../../../public/assets/digital/vision.svg";
import Eyeicon from "../../../../public/assets/digital/eye.svg";
import Target from "../../../../public/assets/digital/target.svg";
import "../components/styles/digital.css";

const Section3 = () => {
    const sectionRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        // Create an Intersection Observer to detect when the section is in view
        const observer = new IntersectionObserver(
            (entries) => {
                const [ entry ] = entries;
                // Set isVisible based on whether element is in viewport
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
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full py-16 px-4 h-screen flex justify-center items-center"
        >
            <div className="text-center">
                <h1
                    className="text-8xl font-bold mb-4 relative inline-block"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                    }}
                >
                    <span className="relative">
                        D
                        <span className="relative inline-block">
                            i
                            {/* First radiating line (top left) */}
                            <div
                                className="absolute h-[2px] w-8 bg-black -top-1 -left-6 transform rotate-45"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'opacity 0.5s ease-out 0.8s'
                                }}
                            ></div>
                            {/* Middle vertical line (center) */}
                            <div
                                className="absolute w-[2px] h-8 bg-black -top-8 left-1/2 transform -translate-x-1/2"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'opacity 0.5s ease-out 1s'
                                }}
                            ></div>
                            {/* Second radiating line (top right) */}
                            <div
                                className="absolute h-[2px] w-8 bg-black -top-1 -right-5 transform -rotate-45"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'opacity 0.5s ease-out 1.2s'
                                }}
                            ></div>
                        </span>
                        gital
                        <Image
                            src={Eyeicon}
                            alt="Eye icon"
                            className="absolute top-14 -right-29"
                            width={38}
                            height={38}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'scale(1)' : 'scale(0)',
                                transition: 'opacity 0.5s ease-out 1.4s, transform 0.5s ease-out 1.4s'
                            }}
                        />
                    </span>{" "}
                    services
                </h1>
                <div
                    className="flex justify-center"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                    }}
                >
                    <h1 className="text-8xl font-bold mb-8">
                        tailored to turn y
                        <span className="relative inline-block mx-1">
                            <span className="opacity-0">o</span>
                            <Image
                                src={Target}
                                alt="Target icon"
                                className="absolute inset-0 m-auto top-5"
                                width={100}
                                height={100}
                                style={{
                                    animation: isVisible ? 'targetPulse 2s ease-in-out infinite' : 'none',
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'opacity 0.5s ease-out 0.6s'
                                }}
                            />
                        </span>
                        ur
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <div
                        className="mr-4"
                        style={{
                            animation: isVisible ? 'visionImageEntrance 1.5s ease-out forwards' : 'none',
                            opacity: 0,
                            transform: 'scale(0.5)'
                        }}
                    >
                        <Image
                            src={Visionimage}
                            alt="Vision illustration"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="inline-block" style={{ overflow: 'hidden' }}>
                        <h1
                            className="text-8xl font-bold text-primary"
                            style={{
                                display: 'inline-block',
                                width: isVisible ? '0' : 'auto',
                                whiteSpace: 'nowrap',
                                animation: isVisible ? 'typing 1.5s steps(17) 1.2s forwards' : 'none'
                            }}
                        >
                            VISION INTO VALUE.
                        </h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Section3;

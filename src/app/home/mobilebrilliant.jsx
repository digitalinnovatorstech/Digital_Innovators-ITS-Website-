import React, { useEffect, useRef } from "react";
import Brandimage from "../../../public/assets/home/section2/brand.svg";
import BirdImage from "../../../public/assets/home/section2/pencil.svg";
import TypingImage from "../../../public/assets/home/section2/typing.svg";
import Projects from "../../../public/assets/home/section2/projects.svg";
import Settings from "../../../public/assets/home/section2/settings.svg";
import Digital from "../../../public/assets/home/section2/digital.svg";
import Team from "../../../public/assets/home/section2/team.svg";
import Years from "../../../public/assets/home/section2/years.svg";
import Image from "next/image";
import "../home/styles/homepage.css";

const MobileBrilliantIdea = () => {
    // Create refs for elements we want to observe and animate
    const sectionRef = useRef(null);
    const pencilRef = useRef(null);
    const animationStarted = useRef(false);

    useEffect(() => {
        // Create an intersection observer to trigger animations when the section becomes visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animationStarted.current) {
                        // Start animations by adding the animation class to the parent section
                        if (sectionRef.current) {
                            sectionRef.current.classList.add('animate-section');
                            animationStarted.current = true;

                            // Add a delay before starting the pencil animation
                            setTimeout(() => {
                                if (pencilRef.current) {
                                    // Start the fall animation
                                    pencilRef.current.classList.add('fall-animation');

                                    // After the fall animation completes, switch to the float animation
                                    setTimeout(() => {
                                        if (pencilRef.current) {
                                            pencilRef.current.classList.remove('fall-animation');
                                            pencilRef.current.classList.add('float-animation');
                                        }
                                    }, 1500); // Duration of fall animation
                                }
                            }, 1200); // Wait for other elements to animate first
                        }
                    }
                });
            },
            { threshold: 0.1 } // Trigger when at least 10% of the element is visible
        );

        // Start observing the section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Immediately trigger animation if the section is already in view when page loads
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
            if (isVisible && !animationStarted.current) {
                sectionRef.current.classList.add('animate-section');
                animationStarted.current = true;

                // Add a delay before starting the pencil animation
                setTimeout(() => {
                    if (pencilRef.current) {
                        // Start the fall animation
                        pencilRef.current.classList.add('fall-animation');

                        // After the fall animation completes, switch to the float animation
                        setTimeout(() => {
                            if (pencilRef.current) {
                                pencilRef.current.classList.remove('fall-animation');
                                pencilRef.current.classList.add('float-animation');
                            }
                        }, 1500); // Duration of fall animation
                    }
                }, 1200); // Wait for other elements to animate first
            }
        }

        // Clean up observer on unmount
        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="px-4 py-12 mobile-brilliant-idea">
            {/* Heading */}
            <div className="mb-6 animate-item heading-text">
                <h2 className="text-xl font-semibold text-[#BBBBBB] uppercase">
                    HAVE A BRILLIANT IDEA?
                </h2>
                <h2 className="text-xl font-semibold text-[#BBBBBB] uppercase mt-2">
                    SUPERCHARGE YOUR <span className="text-primary">GROWTH</span> WITH OUR <br />
                    <span className="text-primary">DEVELOPMENT</span> AGENCY AND <span className="text-black">ELEVATE YOUR BRANDING!</span>
                </h2>
            </div>

            {/* Orange card - 10+ Industries */}
            <div
                className="bg-primary text-white rounded-lg shadow-md p-10 relative mb-4 animate-item orange-card"
            >
                <div className="absolute top-4 right-4">
                    <Image src={Settings} width={40} height={40} alt="Settings icon" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">10+</h2>
                    <p className="text-base mt-1">Industries Empowered</p>
                </div>
            </div>

            {/* Blue card - 06+ Success Years */}
            <div
                className="bg-[#00364B] text-white rounded-lg shadow-md p-10 relative mb-4 animate-item blue-card"
            >
                <div className="absolute top-4 right-4">
                    <Image src={Years} width={40} height={40} alt="Years icon" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">06+</h2>
                    <p className="text-base mt-1">Success Years</p>
                </div>
            </div>

            {/* Team card - 200+ */}
            <div
                className="bg-[#F0F0F0] rounded-lg shadow-md p-10 relative mb-4 animate-item team-card"
            >
                <div className="absolute top-4 right-4">
                    <Image src={Team} width={40} height={40} alt="Team icon" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">200+</h2>
                    <p className="text-base">Dedicated Team</p>
                </div>
            </div>

            {/* Projects card - 360+ */}
            <div
                className="bg-[#F0F0F0] rounded-lg shadow-md p-10 relative mb-4 animate-item projects-card"
            >
                <div className="absolute top-4 right-4">
                    <Image src={Projects} width={40} height={40} alt="Projects icon" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">360+</h2>
                    <p className="text-base">Projects Accomplished</p>
                </div>
            </div>

            {/* Grid of 2x2 image cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Brand image */}
                <div
                    className="rounded-lg overflow-hidden animate-item brand-image"
                >
                    <Image
                        src={Brandimage}
                        alt="Brand diagram"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Animation image with pencil - positioned in grid */}
                <div
                    ref={pencilRef}
                    className="rounded-lg overflow-hidden flex items-center justify-center"
                >
                    <Image
                        src={BirdImage}
                        alt="Pencil illustration"
                        width={160}
                        height={160}
                        className="object-contain"
                    />
                </div>

                {/* Digital card */}
                <div
                    className="rounded-lg overflow-hidden animate-item digital-card"
                >
                    <Image
                        src={Digital}
                        alt="Digital illustration"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Typing image */}
                <div
                    className="rounded-lg overflow-hidden animate-item typing-image"
                >
                    <Image
                        src={TypingImage}
                        alt="Digital marketing concept"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileBrilliantIdea;

import React, { useEffect, useRef } from "react";
// Online SVG illustrations for a modern, premium look
const Brandimage = "https://www.svgrepo.com/show/354202/brand-identity.svg";
const BirdImage = "https://www.svgrepo.com/show/521264/creative-pencil.svg";
const TypingImage = "https://www.svgrepo.com/show/521273/typing-on-laptop.svg";
const Projects = "https://www.svgrepo.com/show/521271/project-management.svg";
const Settings = "https://www.svgrepo.com/show/521272/settings-cog.svg";
const Digital = "https://www.svgrepo.com/show/521270/digital-marketing.svg";
const Team = "https://www.svgrepo.com/show/521269/teamwork.svg";
const Years = "https://www.svgrepo.com/show/521268/years-experience.svg";
// Use standard <img> for SVGs for instant compatibility
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
        <div ref={sectionRef} className="px-4 py-12 mobile-brilliant-idea bg-white">
            {/* Heading */}
            <div className="mb-6 animate-item heading-text">
                <h2 className="text-xl font-semibold text-neutral-400 uppercase tracking-wide">
                    HAVE A BRILLIANT IDEA? 
                </h2>
                <h2 className="text-xl font-semibold text-neutral-400 uppercase mt-2 tracking-wide">
                    SUPERCHARGE YOUR <span className="text-[#ff6b00]">GROWTH</span> WITH OUR <br />
                    <span className="text-[#ff6b00]">DEVELOPMENT</span> AGENCY AND <span className="text-black">ELEVATE YOUR BRANDING!</span>
                </h2>
            </div>

            {/* Orange card - 10+ Industries */}
            <div
                className="bg-white border border-[#ffe9d5] text-[#ff6b00] rounded-xl shadow-md p-10 relative mb-4 animate-item orange-card"
            >
                <div className="absolute top-4 right-4">
                    <img src={Settings} width={40} height={40} alt="Settings and tools illustration" loading="lazy" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">10+</h2>
                    <p className="text-base mt-1 text-neutral-500">Industries Empowered</p>
                </div>
            </div>

            {/* Blue card - 06+ Success Years */}
            <div
                className="bg-white border border-[#e6f0ff] text-[#00364B] rounded-xl shadow-md p-10 relative mb-4 animate-item blue-card"
            >
                <div className="absolute top-4 right-4">
                    <img src={Years} width={40} height={40} alt="Years of experience illustration" loading="lazy" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">06+</h2>
                    <p className="text-base mt-1 text-neutral-500">Success Years</p>
                </div>
            </div>

            {/* Team card - 200+ */}
            <div
                className="bg-white border border-neutral-200 rounded-xl shadow-md p-10 relative mb-4 animate-item team-card"
            >
                <div className="absolute top-4 right-4">
                    <img src={Team} width={40} height={40} alt="Teamwork illustration" loading="lazy" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-black">200+</h2>
                    <p className="text-base text-neutral-500">Dedicated Team</p>
                </div>
            </div>

            {/* Projects card - 360+ */}
            <div
                className="bg-white border border-neutral-200 rounded-xl shadow-md p-10 relative mb-4 animate-item projects-card"
            >
                <div className="absolute top-4 right-4">
                    <img src={Projects} width={40} height={40} alt="Project management illustration" loading="lazy" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-black">360+</h2>
                    <p className="text-base text-neutral-500">Projects Accomplished</p>
                </div>
            </div>

            {/* Grid of 2x2 image cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Brand image */}
                <div
                    className="rounded-xl overflow-hidden animate-item brand-image bg-white border border-neutral-100"
                >
                    <img
                        src={Brandimage}
                        alt="Brand identity illustration"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>

                {/* Animation image with pencil - positioned in grid */}
                <div
                    ref={pencilRef}
                    className="rounded-xl overflow-hidden flex items-center justify-center bg-white border border-neutral-100"
                >
                    <img
                        src={BirdImage}
                        alt="Creative pencil illustration"
                        width={160}
                        height={160}
                        className="object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Digital card */}
                <div
                    className="rounded-xl overflow-hidden animate-item digital-card bg-white border border-neutral-100"
                >
                    <img
                        src={Digital}
                        alt="Digital marketing illustration"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>

                {/* Typing image */}
                <div
                    className="rounded-xl overflow-hidden animate-item typing-image bg-white border border-neutral-100"
                >
                    <img
                        src={TypingImage}
                        alt="Typing on laptop illustration"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileBrilliantIdea;

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const OurServices = () => {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);
    const timelineRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            const sections = sectionsRef.current;
            const container = containerRef.current;

            // Clear any existing ScrollTriggers to prevent conflicts
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

            // Set the container width based on the number of sections
            gsap.set(container, {
                width: sections.length * 100 + "vw",
                display: "flex",
            });

            // Create the horizontal scroll animation with optimized settings
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 0.5, // Increased for smoother scrolling
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        duration: 0.2, // Increased for smoother transitions
                        delay: 0,
                        ease: "power2.inOut", // Changed to inOut for smoother transitions
                    },
                    end: () => "+=" + (container.offsetWidth - window.innerWidth),
                    anticipatePin: 1,
                    fastScrollEnd: true,
                    preventOverlaps: true, // Prevents overlapping animations
                    refreshPriority: 1, // Higher priority for this ScrollTrigger
                },
            });

            // Store timeline reference for navigation functions
            timelineRef.current = tl;

            tl.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                force3D: true, // Force 3D transforms for hardware acceleration
            });

            // Add indicators for each section
            const existingIndicators = document.querySelector(".section-indicators");
            if (existingIndicators) existingIndicators.remove();

            const indicators = document.createElement("div");
            indicators.className = "section-indicators";
            document.body.appendChild(indicators);

            // Add click functionality to indicators
            sections.forEach((section, i) => {
                const dot = document.createElement("div");
                dot.className = "indicator-dot" + (i === 0 ? " active" : "");
                indicators.appendChild(dot);

                // Make dots clickable to jump to sections
                dot.addEventListener("click", () => {
                    scrollToSection(i);
                });

                // Create a ScrollTrigger for each section to update indicators
                ScrollTrigger.create({
                    trigger: section,
                    containerAnimation: tl,
                    start: "left center",
                    end: "right center",
                    onEnter: () => updateIndicators(i),
                    onEnterBack: () => updateIndicators(i),
                    id: `section-${i}`,
                });
            });

            function updateIndicators(index) {
                const dots = document.querySelectorAll(".indicator-dot");
                dots.forEach((dot, i) => {
                    if (i === index) dot.classList.add("active");
                    else dot.classList.remove("active");
                });
            }

            // Add keyboard navigation for faster movement
            const keydownHandler = (e) => {
                const currentIndex = [
                    ...document.querySelectorAll(".indicator-dot"),
                ].findIndex((dot) => dot.classList.contains("active"));

                let targetIndex = currentIndex;

                if (e.key === "ArrowRight" && currentIndex < sections.length - 1) {
                    targetIndex = currentIndex + 1;
                } else if (e.key === "ArrowLeft" && currentIndex > 0) {
                    targetIndex = currentIndex - 1;
                }

                if (targetIndex !== currentIndex) {
                    scrollToSection(targetIndex);
                }
            };

            document.addEventListener("keydown", keydownHandler);

            // Optimize performance
            ScrollTrigger.config({
                limitCallbacks: true,
                ignoreMobileResize: true,
                autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // Limit refresh events
            });

            // Add touch swipe support for mobile
            let touchStartX = 0;
            let touchEndX = 0;

            const handleTouchStart = (e) => {
                touchStartX = e.touches[ 0 ].clientX;
            };

            const handleTouchEnd = (e) => {
                touchEndX = e.changedTouches[ 0 ].clientX;
                handleSwipe();
            };

            const handleSwipe = () => {
                const currentIndex = [
                    ...document.querySelectorAll(".indicator-dot"),
                ].findIndex((dot) => dot.classList.contains("active"));

                let targetIndex = currentIndex;

                // Detect swipe direction
                if (
                    touchEndX < touchStartX - 50 &&
                    currentIndex < sections.length - 1
                ) {
                    // Swipe left
                    targetIndex = currentIndex + 1;
                } else if (touchEndX > touchStartX + 50 && currentIndex > 0) {
                    // Swipe right
                    targetIndex = currentIndex - 1;
                }

                if (targetIndex !== currentIndex) {
                    scrollToSection(targetIndex);
                }
            };

            container.addEventListener("touchstart", handleTouchStart, {
                passive: true,
            });
            container.addEventListener("touchend", handleTouchEnd, { passive: true });

            // Return cleanup function
            return () => {
                // Clean up ScrollTrigger on component unmount
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                const indicators = document.querySelector(".section-indicators");
                if (indicators) indicators.remove();
                document.removeEventListener("keydown", keydownHandler);
                container.removeEventListener("touchstart", handleTouchStart);
                container.removeEventListener("touchend", handleTouchEnd);
            };
        }
    }, []);

    // Function to add sections to the ref array
    const addToSectionsRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    // Navigation function to scroll to specific section
    const scrollToSection = (sectionIndex) => {
        if (!timelineRef.current || !timelineRef.current.scrollTrigger) return;

        const scrollPosition = sectionIndex / (sectionsRef.current.length - 1);
        const scrollTrigger = timelineRef.current.scrollTrigger;
        const scrollTo =
            scrollTrigger.start +
            (scrollTrigger.end - scrollTrigger.start) * scrollPosition;

        window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
        });
    };

    // Handle clicks on the vertical section tabs
    const handleSectionClick = (sectionName) => {
        switch (sectionName) {
            case "Design":
                scrollToSection(1); // Scroll to the Design section (index 1)
                break;
            case "Digital":
                scrollToSection(2); // Scroll to the Digital section (index 2)
                break;
            case "Build":
                scrollToSection(3); // Scroll to the Build section (index 3)
                break;
            default:
                break;
        }
    };

    return (
        <div className="overflow-hidden ">
            <div
                ref={containerRef}
                className="relative h-screen flex will-change-transform"
            >
                {/* Section 1 - herosection */}
                <div
                    ref={addToSectionsRef}
                    className="relative h-screen w-screen flex-shrink-0 overflow-hidden"
                >
                    {/* First vertical section - Build */}
                    <div
                        className="absolute left-0 hidden md:flex top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-end justify-center z-30 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Build")}
                    >
                        <div className="writing-vertical  text-primary font text-4xl pb-30 tracking-wide">
                            Build
                        </div>
                    </div>
                    {/* Second vertical section - Digital */}
                    <div
                        className="absolute left-[6.666%] hidden md:flex -top-6 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Digital")}
                    >
                        <div className="rotate-360 writing-vertical text-primary  font text-4xl tracking-wide">
                            Digital
                        </div>
                    </div>
                    {/* Third vertical section - Design */}
                    <div
                        className="absolute left-[13.332%] hidden md:flex top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/designbg.svg')] bg-cover bg-center flex items-start justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Design")}
                    >
                        <div className="rotate-360 writing-vertical text-primary font text-4xl pt-30 tracking-wide">
                            Design
                        </div>
                    </div>
                    {/* Right content area */}
                    <div className="absolute md:left-[20%] top-0 right-0 bottom-0 text-white bg-[url('/assets/home/services/designbg.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                        <div className="max-w-4xl px-8">
                            <h2 className="md:text-2xl xl:text-4xl mb-6 font-semibold">
                                WHAT WE <span className="text-primary">OFFER</span>
                            </h2>
                            <p className="text-3xl font-light mb-14 leading-relaxed">
                                We're committed to providing the tools and expertise our clients
                                need to accomplish great things.
                            </p>
                            <div className="relative flex justify-center">
                                <div className="relative w-full h-72">
                                    <div className="absolute inset-0 flex justify-center">
                                        <div className="relative w-full max-w-xl mt-10">
                                            <Image
                                                src="/assets/home/services/designimg.svg"
                                                alt="Services Illustration"
                                                layout="fill"
                                                objectFit="contain"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - DESIGN */}
                <div
                    ref={addToSectionsRef}
                    className="relative  h-screen w-screen flex-shrink-0 overflow-hidden"
                >
                    {/* First vertical section - Build */}
                    <div
                        className="absolute hidden md:flex left-0 top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-end justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Build")}
                    >
                        <div className="rotate-360  writing-vertical text-primary font text-4xl pb-30 tracking-wide">
                            Build
                        </div>
                    </div>
                    {/* Second vertical section - Digital */}
                    <div
                        className="absolute hidden md:flex left-[6.666%] -top-6 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Digital")}
                    >
                        <div className="rotate-360 writing-vertical text-primary font text-4xl tracking-wide">
                            Digital
                        </div>
                    </div>
                    <div className="relative h-screen w-full overflow-hidden text-white bg-[#000000A3] bg-cover bg-center">
                        <div className="absolute md:left-[13.332%] top-0 w-[80.668%] h-full flex flex-col justify-center items-center px-6 py-10">
                            {/* Digital Title */}
                            <h2 className="xl:text-8xl md:text-5xl font-bold uppercase text-[#FFFCEE] text-center mb-20">
                                Design
                            </h2>
                            {/* Main Content Wrapper */}
                            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
                                {/* Right Image */}
                                <div className="md:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-md h-80">
                                        <Image
                                            src="/assets/home/services/designimg2.svg"
                                            alt="Digital Illustration"
                                            layout="fill"
                                            objectFit="contain"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 space-y-4">
                                    <h3 className="xl:text-4xl md:text-2xl font text-primary">
                                        We are the architects of your digital growth.
                                    </h3>
                                    <p className="text-sm text-gray-200">
                                        Our Digital team Studio delivers data-driven insights that
                                        reflect the user's perspective while aligning with business
                                        goals.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-white">
                                        <li>DIGITAL MARKETING</li>
                                        <li>BLOG WRITING</li>
                                        <li>LEAD GENERATION</li>
                                        <li>SOCIAL MEDIA MARKETING</li>
                                        <li>SEO</li>
                                        <li>PAY PER CLICK (PPC)</li>
                                        <li>CONTENT MARKETING</li>
                                        <li>EMAIL MARKETING</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 - digital */}
                <div
                    ref={addToSectionsRef}
                    className="relative h-screen w-screen bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex-shrink-0 overflow-hidden text-white"
                >
                    {/* Full-width background to ensure no gaps */}
                    <div className="absolute hidden md:flex inset-0 bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center"></div>
                    {/* Build section on left */}
                    <div
                        className="absolute left-0 hidden md:flex top-0 bottom-0 w-[5.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-end justify-center shadow-2xl z-20 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Build")}
                    >
                        <div className="writing-vertical text-primary font text-4xl pb-30 tracking-wide">
                            Build
                        </div>
                    </div>
                    {/* Design section on right */}
                    <div
                        className="absolute hidden md:flex right-0 -top-4 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-start justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Design")}
                    >
                        <div className="writing-vertical text-white font text-4xl pt-30 tracking-wide">
                            Design
                        </div>
                    </div>
                    {/* Content area */}
                    <div className="absolute md:left-[6.666%] md:right-[6.666%] top-0 bottom-0 flex flex-col justify-center items-center px-6 md:px-12 py-10">
                        <h2 className="xl:text-8xl md:text-5xl font-bold uppercase text-[#FFFCEE] text-center mb-20">
                            Digital
                        </h2>
                        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="xl:text-4xl md:text-2xl font text-primary">
                                    We are the architects of your digital growth.
                                </h3>
                                <p className="text-sm text-gray-200">
                                    Our Digital team Studio delivers data-driven insights that
                                    reflect the user's perspective while aligning with business
                                    goals.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-white">
                                    <li>DIGITAL MARKETING</li>
                                    <li>BLOG WRITING</li>
                                    <li>LEAD GENERATION</li>
                                    <li>SOCIAL MEDIA MARKETING</li>
                                    <li>SEO</li>
                                    <li>PAY PER CLICK (PPC)</li>
                                    <li>CONTENT MARKETING</li>
                                    <li>EMAIL MARKETING</li>
                                </ul>
                            </div>
                            {/* Right Image */}
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md h-80">
                                    <Image
                                        src="/assets/home/services/digitalimg.svg"
                                        alt="Digital Illustration"
                                        layout="fill"
                                        objectFit="contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4 - Build */}
                <div
                    ref={addToSectionsRef}
                    className="relative  h-screen w-screen flex-shrink-0 overflow-hidden will-change-transform"
                >
                    {/* Left content area */}
                    <div className="relative h-screen w-full overflow-hidden text-white bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center">
                        <div className="absolute left-0 top-0 md:w-[80.668%] h-full flex flex-col justify-center items-center px-6 py-10">
                            {/* Build Title */}
                            <h2 className="xl:text-8xl md:text-5xl font-bold uppercase text-[#FFFCEE] text-center mb-20">
                                Build
                            </h2>
                            {/* Main Content Wrapper */}
                            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-20">
                                {/* Right Image */}
                                <div className="md:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-md h-80">
                                        <Image
                                            src="/assets/home/services/buildimg.svg"
                                            alt="Digital Illustration"
                                            layout="fill"
                                            objectFit="contain"
                                            priority
                                        />
                                    </div>
                                </div>
                                {/* Left Content */}
                                <div className="md:w-1/2 space-y-4">
                                    <h3 className="xl:text-4xl md:text-2xl font text-primary">
                                        We build compelling brand stories that connect with your
                                        audience.
                                    </h3>
                                    <p className="text-sm text-gray-200">
                                        We help you turn UI/UX designs into pixel-perfect, flexible,
                                        and scalable digital products that power business growth.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-white uppercase">
                                        <li>Web applications</li>
                                        <li>mobile applications</li>
                                        <li>custom applications</li>
                                        <li>saas implementation</li>
                                        <li>crm, erp, Hrms applications</li>
                                        <li>cms integrations</li>
                                        <li>cloud management</li>
                                        <li>Emerging tech (Ai, AR/VR)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* First vertical section on right - Build */}
                    <div
                        className="absolute hidden md:flex right-0 top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-start pt-20 justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Design")}
                    >
                        <div className="writing-vertical text-white font text-4xl pb-30 tracking-wide">
                            Design
                        </div>
                    </div>

                    {/* Second vertical section on right - Digital */}
                    <div
                        className="absolute hidden md:flex right-[6.666%] -top-6 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.3)" }}
                        onClick={() => handleSectionClick("Digital")}
                    >
                        <div className="writing-vertical text-white font text-4xl tracking-wide">
                            Digital
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        /* Styles for section indicators */
        .section-indicators {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 100;
        }

        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-dot.active {
          background-color: rgba(255, 255, 255, 1);
          transform: scale(1.2);
        }

        /* Optimize scrolling performance */
        html,
        body {
          overscroll-behavior-y: none;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* Prevent content selection during scroll */
        .no-select {
          user-select: none;
        }

        /* Hardware acceleration for smoother animations */
        .relative {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
        </div>
    );
};

export default OurServices;

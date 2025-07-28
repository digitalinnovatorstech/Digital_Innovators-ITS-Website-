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
import { gsap } from "gsap";
// Fix import for ScrollTrigger
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Briiliantidea = () => {
    // Create refs for elements we want to animate
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const orangeCardRef = useRef(null);
    const blueCardRef = useRef(null);
    const brandImageRef = useRef(null);
    const birdImageRef = useRef(null);
    const projectsCardRef = useRef(null);
    const teamCardRef = useRef(null);
    const darkCardRef = useRef(null);
    const typingImageRef = useRef(null);
    const animationPlayed = useRef(false);

    useEffect(() => {
        // Register ScrollTrigger plugin (fix for Next.js)
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Ensure the component is mounted before starting animations
        const sectionElement = sectionRef.current;
        const headingElement = headingRef.current;
        const orangeCardElement = orangeCardRef.current;
        const blueCardElement = blueCardRef.current;
        const brandImageElement = brandImageRef.current;
        const birdImageElement = birdImageRef.current;
        const projectsCardElement = projectsCardRef.current;
        const teamCardElement = teamCardRef.current;
        const darkCardElement = darkCardRef.current;
        const typingImageElement = typingImageRef.current;

        if (!sectionElement || animationPlayed.current) return;

        // Create a timeline for our animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: "top 80%", // Adjust trigger point to start earlier
                end: "bottom center",
                toggleActions: "play none none none",
                once: true,
                onEnter: () => {
                    animationPlayed.current = true;
                },
            },
        });

        // Set initial states to make sure elements are hidden before animation
        gsap.set(
            [
                headingElement,
                orangeCardElement,
                blueCardElement,
                brandImageElement,
                projectsCardElement,
                teamCardElement,
                darkCardElement,
                typingImageElement,
            ],
            {
                opacity: 0,
                scale: 0.95,
            }
        );

        gsap.set(birdImageElement, {
            opacity: 0,
            y: -300,
            rotation: 10,
        });

        // Heading animation
        tl.to(headingElement, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
        });

        // Orange card animation - fade in with slight scale
        tl.to(
            orangeCardElement,
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
            },
            "-=0.4"
        );

        // Blue card animation - fade in with slight scale
        tl.to(
            blueCardElement,
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
            },
            "-=0.3"
        );

        // Brand image animation - fade in with slight scale
        tl.to(
            brandImageElement,
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
            },
            "-=0.4"
        );

        // Projects card animation - fade in with slight scale
        tl.to(
            projectsCardElement,
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
            },
            "-=0.6"
        );

        // Team card, dark card, and typing image animations - fade in with staggered timing
        tl.to(
            [ teamCardElement, darkCardElement, typingImageElement ],
            {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: "power2.out",
            },
            "-=0.5"
        );

        // Bird/Pencil image animation - fall from top with bounce
        tl.to(
            birdImageElement,
            {
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 1.5,
                ease: "bounce.out",
                onComplete: () => {
                    // After the initial fall animation completes, start a continuous gentle bounce
                    gsap.to(birdImageElement, {
                        y: "-=15", // Move up slightly
                        duration: 1.2,
                        ease: "power1.inOut",
                        repeat: -1, // Repeat indefinitely
                        yoyo: true, // Go back and forth
                        repeatDelay: 0.1, // Small delay between repeats for more natural feel
                    });

                    // Add a subtle rotation animation for more liveliness
                    gsap.to(birdImageElement, {
                        rotation: -3, // Rotate slightly
                        duration: 2,
                        ease: "power1.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 0.2,
                    });
                },
            },
            "-=0.2"
        );

        // Add a fallback to trigger animation if already in view when the page loads
        if (typeof window !== "undefined") {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !animationPlayed.current) {
                            animationPlayed.current = true;
                            tl.play(0);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(sectionElement);

            return () => {
                observer.disconnect();
            };
        }

        // Cleanup function
        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            if (birdImageElement) {
                gsap.killTweensOf(birdImageElement);
            }
        };
    }, []);

    return (
        <div>
            {/* Stats and cards section */}
            <div
                ref={sectionRef}
                className="container mx-auto px-4 py-16 min-h-screen flex items-center"
            >
                <div className="flex flex-col md:flex-row w-full gap-6">
                    {/* Left column with colored stat cards */}
                    <div className="w-full md:w-1/4 flex flex-col gap-6">
                        {/* Orange card */}
                        <div
                            ref={orangeCardRef}
                            className="bg-primary text-white rounded-lg shadow-md aspect-square flex flex-col justify-between p-6 relative h-full"
                        >
                            <div className="absolute top-4 right-4">
                                <Image
                                    src={Settings}
                                    width={50}
                                    height={50}
                                    alt="Settings icon"
                                />
                            </div>
                            <div className="mt-auto">
                                <h2 className="text-5xl font-bold">10+</h2>
                                <p className="text-base mt-1">Industries</p>
                                <p className="text-base">Empowered</p>
                            </div>
                        </div>
                        <div
                            ref={blueCardRef}
                            className="bg-[#00364B] text-white rounded-lg shadow-md aspect-square flex flex-col justify-between p-6 relative h-full"
                        >
                            <div className="absolute top-4 right-4">
                                <Image src={Years} width={50} height={50} alt="Years icon" />
                            </div>
                            <div className="mt-auto">
                                <h2 className="text-5xl font-bold">06+</h2>
                                <p className="text-base mt-1">Success Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="mb-8">
                            <div
                                ref={headingRef}
                                className="flex flex-col space-y-2 font-semibold"
                            >
                                <h1 className="text-[#BBBBBB] text-xl md:text-3xl font-semibold">
                                    HAVE A BRILLIANT IDEA?
                                </h1>
                                <h2 className="text-xl md:text-3xl font-semibold text-[#BBBBBB]">
                                    SUPERCHARGE YOUR{" "}
                                    <span className="text-primary font-semibold">GROWTH</span>{" "}
                                    <span className="text-black">WITH OUR </span>
                                    <br className="hidden md:block" />
                                    <span className="text-primary font-semibold">
                                        DEVELOPMENT
                                    </span>{" "}
                                    AGENCY AND{" "}
                                    <span className="font-semibold text-black">
                                        ELEVATE YOUR
                                        <br className="hidden md:block" /> BRANDING!
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div
                                ref={brandImageRef}
                                className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden h-64 md:h-80"
                            >
                                <Image
                                    src={Brandimage}
                                    alt="Brand diagram"
                                    className="object-cover w-full h-full"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4 h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center">
                                <div ref={birdImageRef} className="transform-gpu">
                                    <Image
                                        src={BirdImage}
                                        alt="Pencil illustration"
                                        width={280}
                                        height={280}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div
                                ref={projectsCardRef}
                                className="col-span-12 md:col-span-4 rounded-lg overflow-hidden bg-[#F0F0F0] shadow-md h-64 md:h-80 flex items-end relative"
                            >
                                <div className="absolute top-4 right-4">
                                    <Image
                                        src={Projects}
                                        width={50}
                                        height={50}
                                        alt="Projects icon"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-5xl font-bold">360+</h2>
                                    <p className="text-base">Projects</p>
                                    <p className="text-base">Accomplished</p>
                                </div>
                            </div>
                            <div
                                ref={teamCardRef}
                                className="col-span-6 md:col-span-4 rounded-lg overflow-hidden shadow-md h-32 md:h-40 flex items-center p-4"
                            >
                                <div className="mr-4">
                                    <Image src={Team} width={50} height={50} alt="Team icon" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">200+</h2>
                                    <p className="text-base">Dedicated Team</p>
                                </div>
                            </div>
                            <div
                                ref={darkCardRef}
                                className="col-span-6 md:col-span-4 rounded-lg overflow-hidden shadow-md h-32 md:h-40 relative"
                            >
                                <Image
                                    src={Digital}
                                    alt="Person typing on keyboard"
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div
                                ref={typingImageRef}
                                className="col-span-12 md:col-span-4 rounded-lg overflow-hidden h-32 md:h-40"
                            >
                                <Image
                                    src={TypingImage}
                                    alt="Person typing on keyboard"
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Briiliantidea;

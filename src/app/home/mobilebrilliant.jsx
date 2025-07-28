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
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const MobileBrilliantIdea = () => {
    // Create refs for elements we want to animate
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const orangeCardRef = useRef(null);
    const blueCardRef = useRef(null);
    const teamCardRef = useRef(null);
    const projectsCardRef = useRef(null);
    const brandImageRef = useRef(null);
    const digitalCardRef = useRef(null);
    const typingImageRef = useRef(null);
    const pencilImageRef = useRef(null);
    const animationPlayed = useRef(false);

    useEffect(() => {
        // Register ScrollTrigger plugin (fix for Next.js)
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Ensure the component is mounted before starting animations
        const sectionElement = sectionRef.current;

        if (!sectionElement || animationPlayed.current) return;

        // Create a timeline for animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionElement,
                start: "top 80%",
                end: "bottom center",
                toggleActions: "play none none none",
                once: true,
                onEnter: () => {
                    animationPlayed.current = true;
                },
            },
        });

        // Set initial states
        gsap.set([
            headingRef.current,
            orangeCardRef.current,
            blueCardRef.current,
            teamCardRef.current,
            projectsCardRef.current,
            brandImageRef.current,
            digitalCardRef.current,
            typingImageRef.current
        ], {
            opacity: 0,
            scale: 0.95,
        });

        gsap.set(pencilImageRef.current, {
            opacity: 0,
            y: -50,
            rotation: 10,
        });

        // Animate heading
        tl.to(headingRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
        });

        // Animate cards in sequence
        tl.to([
            orangeCardRef.current,
            blueCardRef.current,
            teamCardRef.current,
            projectsCardRef.current
        ], {
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3");

        // Animate pencil with bounce effect
        tl.to(pencilImageRef.current, {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "bounce.out",
            onComplete: () => {
                // Add subtle continuous animation
                gsap.to(pencilImageRef.current, {
                    y: "-=8",
                    duration: 1.2,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                });

                gsap.to(pencilImageRef.current, {
                    rotation: -3,
                    duration: 2,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                });
            }
        }, "-=0.1");

        // Animate the final image cards
        tl.to([
            brandImageRef.current,
            digitalCardRef.current,
            typingImageRef.current
        ], {
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.7");

        // Cleanup function
        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            gsap.killTweensOf(pencilImageRef.current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="px-4 py-12">
            {/* Heading */}
            <div ref={headingRef} className="mb-6">
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
                ref={orangeCardRef}
                className="bg-primary text-white rounded-lg shadow-md p-10 relative mb-4"
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
                ref={blueCardRef}
                className="bg-[#00364B] text-white rounded-lg shadow-md p-10 relative mb-4"
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
                ref={teamCardRef}
                className="bg-[#F0F0F0] rounded-lg shadow-md p-10 relative mb-4"
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
                ref={projectsCardRef}
                className="bg-[#F0F0F0] rounded-lg shadow-md p-10 relative mb-4"
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
                    ref={brandImageRef}
                    className="rounded-lg overflow-hidden"
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
                    ref={pencilImageRef}
                    className="rounded-lg overflow-hidden  flex items-center justify-center"
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
                    ref={digitalCardRef}
                    className="rounded-lg overflow-hidden "
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
                    ref={typingImageRef}
                    className="rounded-lg overflow-hidden "
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
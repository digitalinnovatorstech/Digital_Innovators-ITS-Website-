import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image1 from "../../../public/assets/home/handimage.svg";
import PrimaryButton from "@/components/common/primarybutton";

const Accelerating = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const highlightRef = useRef(null);
    const subHeadingRef = useRef(null);
    const paragraphRef = useRef(null);
    const imageRef = useRef(null);
    const buttonRef = useRef(null);
    const buttonWrapperRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Initial setup
            gsap.set([
                titleRef.current,
                highlightRef.current,
                subHeadingRef.current,
                paragraphRef.current,
                imageRef.current
            ], {
                y: 150,
                opacity: 0
            });

            gsap.set(buttonWrapperRef.current, {
                x: "-100vw", // Start far left
                opacity: 0
            });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top bottom-=100",
                end: "center center",
                onEnter: () => {
                    gsap.fromTo(
                        sectionRef.current,
                        {
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            backgroundPosition: "center bottom"
                        },
                        {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            backgroundPosition: "center center",
                            duration: 1.2,
                            ease: "power2.out"
                        }
                    );

                    gsap.to(titleRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.1
                    });

                    gsap.to(highlightRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.3
                    });

                    gsap.to(subHeadingRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.4
                    });

                    gsap.to(paragraphRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.6
                    });

                    gsap.to(imageRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out",
                        delay: 0.5
                    });

                    const buttonTl = gsap.timeline({ delay: 1 });

                    buttonTl.to(buttonWrapperRef.current, {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out"
                    });

                    buttonTl.to(buttonRef.current, {
                        scale: 1.1,
                        duration: 0.5,
                        repeat: 1,
                        yoyo: true,
                        ease: "power1.inOut"
                    });

                    gsap.to(buttonRef.current, {
                        y: -8,
                        repeat: -1,
                        yoyo: true,
                        duration: 1.5,
                        ease: "sine.inOut",
                        delay: 2.5
                    });
                },
                onLeaveBack: () => {
                    gsap.to([
                        titleRef.current,
                        highlightRef.current,
                        subHeadingRef.current,
                        paragraphRef.current,
                        imageRef.current
                    ], {
                        y: 150,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.05
                    });

                    gsap.to(buttonWrapperRef.current, {
                        x: "-100vw",
                        opacity: 0,
                        duration: 0.5
                    });
                }
            });

            gsap.to(contentRef.current, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5
                }
            });

            gsap.to(imageRef.current, {
                y: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.8
                }
            });
        });

        return () => ctx.revert(); // Clean up animations
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-[url('/assets/home/aimlbackground.svg')] h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        >
            <div ref={contentRef} className="container py-20">
                <h1 className="font md:text-5xl xl:text-7xl text-3xl text-white text-start">
                    <div ref={titleRef}>
                        Accelerating Success with
                        <br />
                        <span ref={highlightRef} className="text-primary">
                            AI and ML
                        </span> Development
                        <br />
                        Solutions
                    </div>
                </h1>
                <p ref={subHeadingRef} className="text-white pt-10 md:text-sm xl:text-xl">
                    Transforming tomorrow with AI-Powered <br />
                    intelligence to drive innovation
                </p>
            </div>

            {/* Mobile-specific layout */}
            <div className="md:hidden flex flex-col items-center absolute bottom-0 w-full">
                <div ref={imageRef} className="origin-bottom mx-auto mb-20">
                    <Image src={Image1} alt="AI robotics hand" priority />
                </div>

                <div className="text-end  pb-16 max-w-xs">
                    <p ref={paragraphRef} className="text-white text-xs sm:text-sm">
                        Our custom AI/ML development services enable your system to exhibit
                        intelligent thinking, auditory perception, and decision-making
                        capabilities. Leverage advanced algorithms to effectively identify
                        patterns, extract valuable insights, generate predictions, and
                        ultimately facilitate data-driven decision-making processes that
                        propel your organization toward progress.
                    </p>

                    <Link href="/aiml">
                        <div ref={buttonWrapperRef} className="mt-20 flex justify-end item-end relative">
                            <div ref={buttonRef} className="relative">
                                {/* Attention indicator animation */}
                                <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping"></div>
                                <PrimaryButton
                                    text="Explore Our Solutions"
                                    className="!w-52"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Desktop layout (unchanged from original) */}
            <div className="hidden md:flex justify-between items-end absolute bottom-0 w-full">
                <div ref={imageRef} className="origin-bottom">
                    <Image src={Image1} alt="AI robotics hand" priority />
                </div>

                <div className="text-right pr-4 md:pr-20 lg:pr-60 pb-20 max-w-xs md:max-w-lg lg:max-w-2xl">
                    <p ref={paragraphRef} className="text-white md:text-sm lg:text-base xl:text-lg">
                        Our custom AI/ML development services enable your system to exhibit
                        intelligent thinking, auditory perception, and decision-making
                        capabilities. Leverage advanced algorithms to effectively identify
                        patterns, extract valuable insights, generate predictions, and
                        ultimately facilitate data-driven decision-making processes that
                        propel your organization toward progress.
                    </p>

                    <Link href="/aiml">
                        <div ref={buttonWrapperRef} className="mt-10 flex justify-end relative">
                            <div ref={buttonRef} className="relative">
                                {/* Attention indicator animation */}
                                <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping"></div>
                                <PrimaryButton
                                    text="Explore Our Solutions"
                                    className="!w-52"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Accelerating;
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Image1 from "../../../../public/assets/home/aiml/internal/services/image1.svg";
import Image2 from "../../../../public/assets/home/aiml/internal/services/image2.svg";

const AIMLServices = () => {
    // State for all three sections
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ secondActiveIndex, setSecondActiveIndex ] = useState(0);
    const [ thirdActiveIndex, setThirdActiveIndex ] = useState(0);

    // Refs for all three sections
    const imageRef = useRef(null);
    const secondImageRef = useRef(null);
    const thirdImageRef = useRef(null);

    const numberRefs = useRef([]);
    const titleRefs = useRef([]);

    const secondNumberRefs = useRef([]);
    const secondTitleRefs = useRef([]);

    const thirdNumberRefs = useRef([]);
    const thirdTitleRefs = useRef([]);

    const services = [
        {
            number: "01",
            title: "Natural Language Processing",
            description:
                "Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.",
            image: Image1,
            icon: "/assets/home/aiml/image0.svg",
        },
        {
            number: "02",
            title: "AI Product Development",
            description:
                "The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring to optimize performance.",
            image: Image2,
            icon: "/assets/home/aiml/image6.svg",
        },
        {
            number: "03",
            title: "Predictive Analytics",
            description:
                "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
            image: Image1,
            icon: "/assets/home/aiml/image1.svg",
        },
    ];

    const services2 = [
        {
            number: "04",
            icon: "/assets/home/aiml/image7.svg",
            title: "Deep Learning Solutions",
            description:
                "Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.",
            image: Image1, // Using imported Image1 for now
        },
        {
            number: "05",
            icon: "/assets/home/aiml/image2.svg",
            title: "Computer Vision",
            description:
                "The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring to optimize performance.",
            image: Image2, 
        },
        {
            number: "06",
            icon: "/assets/home/aiml/image7.svg",
            title: "AI Chat bot & Smart Assistants",
            description:
                "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
            image: Image1, 
        },
        {
            number: "07",
            icon: "/assets/home/aiml/image3.svg",
            title: "Generative AI Solutions",
            description:
                "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
            image: Image2, 
        },
    ];

    // Third section services
    const services3 = [
        {
            number: "08",
            icon: "/assets/home/aiml/image8.svg",
            title: "AI Security & Data Science",
            description:
                "Our AI systems gather and process data from various sources, ensuring a comprehensive understanding.",
            image: Image1,
        },
        {
            number: "09",
            icon: "/assets/home/aiml/image4.svg",
            title: "Open AI Codex Integration",
            description:
                "The solution is deployed to seamlessly integrate into your existing systems, with ongoing monitoring to optimize performance.",
            image: Image2,
        },
        {
            number: "10",
            icon: "/assets/home/aiml/image9.svg",
            title: "Recommendation Engines",
            description:
                "Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.",
            image: Image1,
        },
    ];

    // Animation for first section
    const handleMouseEnter = (index) => {
        setActiveIndex(index);

        gsap.to(numberRefs.current[ index ], {
            scale: 1.3,
            color: "#000000",
            duration: 0.6,
            ease: "power2.out",
        });

        gsap.to(titleRefs.current[ index ], {
            scale: 1.1,
            color: "#f97316",
            duration: 0.6,
            ease: "power2.out",
        });

        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
            );
        }
    };

    const handleMouseLeave = (index) => {
        gsap.to(numberRefs.current[ index ], {
            scale: 1,
            color: "#6b7280",
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
        });

        gsap.to(titleRefs.current[ index ], {
            scale: 1,
            color: "#000000",
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
        });

        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
            });
        }
    };

    // Animation for second section
    const handleSecondMouseEnter = (index) => {
        setSecondActiveIndex(index);

        gsap.to(secondNumberRefs.current[ index ], {
            scale: 1.3,
            color: "#000000",
            duration: 0.6,
            ease: "power2.out",
        });

        gsap.to(secondTitleRefs.current[ index ], {
            scale: 1.1,
            color: "#f97316",
            duration: 0.6,
            ease: "power2.out",
        });

        if (secondImageRef.current) {
            gsap.fromTo(
                secondImageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
            );
        }
    };

    const handleSecondMouseLeave = (index) => {
        gsap.to(secondNumberRefs.current[ index ], {
            scale: 1,
            color: "#6b7280",
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
        });

        gsap.to(secondTitleRefs.current[ index ], {
            scale: 1,
            color: "#000000",
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
        });

        if (secondImageRef.current) {
            gsap.to(secondImageRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
            });
        }
    };

  
    const handleThirdMouseEnter = (index) => {
        setThirdActiveIndex(index);

        gsap.to(thirdNumberRefs.current[ index ], {
            scale: 1.3,
            color: "#000000",
            duration: 0.6,
            ease: "power2.out",
        });

        gsap.to(thirdTitleRefs.current[ index ], {
            scale: 1.1,
            color: "#f97316",
            duration: 0.6,
            ease: "power2.out",
        });

        if (thirdImageRef.current) {
            gsap.fromTo(
                thirdImageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
            );
        }
    };

    const handleThirdMouseLeave = (index) => {
        gsap.to(thirdNumberRefs.current[ index ], {
            scale: 1,
            color: "#6b7280",
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
        });

        gsap.to(thirdTitleRefs.current[ index ], {
            scale: 1,
            color: "#000000",
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
        });

        if (thirdImageRef.current) {
            gsap.to(thirdImageRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
            });
        }
    };

    return (
        <div className="container flex flex-col justify-center">
            <div className="mb-10">
                <h1 className="font xl:text-6xl md:text-5xl">
                    Services offer for <span className="text-primary">AI & ML</span>
                    <br /> <span className="text-primary">Development</span>
                </h1>
            </div>

           
            <div className="flex flex-col md:flex-row gap-10 w-full my-20 h-full md:min-h-[350px]">
            
                <div className="w-full md:w-1/2 relative flex flex-col justify-between">
           
                    <div className="absolute left-15 top-0 h-full w-1 bg-[#E6E6E6]" />

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative flex mb-10 pl-24 cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                           
                            <div
                                ref={(el) => (numberRefs.current[ index ] = el)}
                                className="absolute left-0 text-3xl font-medium text-[#E6E6E6]"
                            >
                                {service.number}
                            </div>

                           
                            {activeIndex === index && (
                                <div
                                    className="absolute left-15 w-1 bg-primary"
                                    style={{ top: 0, height: "100%" }}
                                />
                            )}

                            <div className="flex flex-col items-start">
                                <div className="w-8 h-8 mb-2">
                                    <Image
                                        src={service.icon}
                                        alt="Service Icon"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3
                                    ref={(el) => (titleRefs.current[ index ] = el)}
                                    className="text-lg font-medium mb-1"
                                >
                                    {service.title}
                                </h3>
                                <p className="text-[#767A85] text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

               
                <div
                    className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden flex items-center justify-center p-8"
                    style={{
                        backgroundImage:
                            "url('/assets/home/aiml/internal/services/bgimage.svg')",
                    }}
                >
                    <div className="w-full" ref={imageRef}>
                        <Image
                            key={activeIndex}
                            src={services[ activeIndex ].image}
                            alt={services[ activeIndex ].title}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

         
            <div className="flex flex-col md:flex-row gap-10 w-full my-20 h-full md:min-h-[350px]">
                
                <div
                    className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden flex items-center justify-center p-8"
                    style={{
                        backgroundImage:
                            "url('/assets/home/aiml/internal/services/bgimage.svg')",
                    }}
                >
                    <div className="w-full" ref={secondImageRef}>
                        <Image
                            key={secondActiveIndex}
                            src={services2[ secondActiveIndex ].image}
                            alt={services2[ secondActiveIndex ].title}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

              
                <div className="w-full md:w-1/2 relative flex flex-col justify-between">
                    {/* Vertical Line */}
                    <div className="absolute left-15 top-0 h-full w-1 bg-[#E6E6E6]" />

                    {services2.map((service, index) => (
                        <div
                            key={index}
                            className="relative flex mb-10 pl-24 cursor-pointer"
                            onMouseEnter={() => handleSecondMouseEnter(index)}
                            onMouseLeave={() => handleSecondMouseLeave(index)}
                        >
                            {/* Number */}
                            <div
                                ref={(el) => (secondNumberRefs.current[ index ] = el)}
                                className="absolute left-0 text-3xl font-medium text-[#E6E6E6]"
                            >
                                {service.number}
                            </div>

                            {/* Highlight */}
                            {secondActiveIndex === index && (
                                <div
                                    className="absolute left-15 w-1 bg-primary"
                                    style={{ top: 0, height: "100%" }}
                                />
                            )}

                            {/* Icon & Text */}
                            <div className="flex flex-col items-start">
                                <div className="w-8 h-8 mb-2">
                                    <Image
                                        src={service.icon}
                                        alt="Service Icon"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3
                                    ref={(el) => (secondTitleRefs.current[ index ] = el)}
                                    className="text-lg font-medium mb-1"
                                >
                                    {service.title}
                                </h3>
                                <p className="text-[#767A85] text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Third Section - Image on Right */}
            <div className="flex flex-col md:flex-row gap-10 w-full my-20 h-full md:min-h-[350px]">
                {/* Left Side - Content */}
                <div className="w-full md:w-1/2 relative flex flex-col justify-between">
                    {/* Vertical Line */}
                    <div className="absolute left-15 top-0 h-full w-1 bg-[#E6E6E6]" />

                    {services3.map((service, index) => (
                        <div
                            key={index}
                            className="relative flex mb-10 pl-24 cursor-pointer"
                            onMouseEnter={() => handleThirdMouseEnter(index)}
                            onMouseLeave={() => handleThirdMouseLeave(index)}
                        >
                            {/* Number */}
                            <div
                                ref={(el) => (thirdNumberRefs.current[ index ] = el)}
                                className="absolute left-0 text-3xl font-medium text-[#E6E6E6]"
                            >
                                {service.number}
                            </div>

                            {/* Highlight */}
                            {thirdActiveIndex === index && (
                                <div
                                    className="absolute left-15 w-1 bg-primary"
                                    style={{ top: 0, height: "100%" }}
                                />
                            )}

                            {/* Icon & Text */}
                            <div className="flex flex-col items-start">
                                <div className="w-8 h-8 mb-2">
                                    <Image
                                        src={service.icon}
                                        alt="Service Icon"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3
                                    ref={(el) => (thirdTitleRefs.current[ index ] = el)}
                                    className="text-lg font-medium mb-1"
                                >
                                    {service.title}
                                </h3>
                                <p className="text-[#767A85] text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side - Image Section */}
                <div
                    className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden flex items-center justify-center p-8"
                    style={{
                        backgroundImage:
                            "url('/assets/home/aiml/internal/services/bgimage.svg')",
                    }}
                >
                    <div className="w-full" ref={thirdImageRef}>
                        <Image
                            key={thirdActiveIndex}
                            src={services3[ thirdActiveIndex ].image}
                            alt={services3[ thirdActiveIndex ].title}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIMLServices;
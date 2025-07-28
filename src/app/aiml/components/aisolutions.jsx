// components/Aisolutions.js
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image1 from "../../../../public/assets/home/aiml/internal/solutions/image1.svg"; // Robot hand
import Image2 from "../../../../public/assets/home/aiml/internal/solutions/image2.svg";
import Image3 from "../../../../public/assets/home/aiml/internal/solutions/image3.svg";
import Image4 from "../../../../public/assets/home/aiml/internal/solutions/image4.svg";
import Image5 from "../../../../public/assets/home/aiml/internal/solutions/image5.svg";

gsap.registerPlugin(ScrollTrigger);

const Aisolutions = () => {
    const imageRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Animate robot image
        gsap.fromTo(
            imageRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",

                },
            }
        );

     
        cardsRef.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                    delay: i * 0.1,
                }
            );
        });
    }, []);


    return (
        <div className="container mx-auto px-4 py-30">
            <h1 className="text-xl max-w-xl lg:text-4xl text-start font-bold capitalize leading-snug mb-10">
                Accelerating Success with AI and ML Development{" "}
                <span className="text-primary">Solutions</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Left - Robot Image */}
                <div className="w-full md:w-[30%]" ref={imageRef}>
                    <Image
                        src={Image1}
                        alt="AI Robot"
                        className="rounded-2xl w-full h-auto"
                    />
                </div>

                {/* Right - Grid of Solutions */}
                <div className="w-full md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-20">
                    {[ Image2, Image3, Image4, Image5 ].map((img, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[ i ] = el)}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
                        >
                            <Image src={img} alt={`Solution ${i}`} width={100} height={100} />
                            <p className="mt-4 font-semibold">
                                {[
                                    "NO-CODE AI",
                                    "ENTERPRISE SAAS",
                                    "BUILT FOR ENGINEERS",
                                    "EXPERT AI CONSULTING",
                                ][ i ]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aisolutions;

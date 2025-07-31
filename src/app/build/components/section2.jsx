"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Hero1 from "../../../../public/assets/build/rocket.svg";
import Hero2 from "../../../../public/assets/build/mobile.svg";
import Hero3 from "../../../../public/assets/build/settings.svg";
import Arrow from "../../../../public/assets/build/arrow.svg";
import "../components/build.css";

const TextSection = () => {
    const sectionRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);
    const [ hasAnimated, setHasAnimated ] = useState(false);
    const engineerCodeText = "Engineer Code";
    const powersText = "That Powers";
    const businessText = "Business Growth";

    useEffect(() => {
        if (!isVisible && hasAnimated) {
            setHasAnimated(false);
        }
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [ isVisible, hasAnimated ]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [ entry ] = entries;
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
                rootMargin: '-10% 0px'
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

    const firstLineDelay = 0;
    const secondLineDelay = 0.7;
    const secondLineCompletesAt = secondLineDelay + 0.05 * powersText.length + 0.4;
    const thirdLineDelay = 1.5;
    const thirdLineCompletesAt = thirdLineDelay + 0.05 * businessText.length + 0.3;

    return (
        <div
            ref={sectionRef}
            className="flex flex-col h-screen items-center justify-center px-4 text-center"
        >
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute -top-8 left-4">
                    <span className="text-2xl">✧</span>
                </div>
                <div className="absolute -top-8 right-4">
                    <span className="text-2xl">✧</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="text-black">We </span>
                    <span className="text-primary">
                        {engineerCodeText.split('').map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block ${hasAnimated ? 'first-line-animated' : 'opacity-0'}`}
                                style={{
                                    animationDelay: `${firstLineDelay + 0.05 * index}s`,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                </h1>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="text-black">
                        {powersText.split('').map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block ${hasAnimated ? 'powers-animated' : 'opacity-0'}`}
                                style={{
                                    animationDelay: `${secondLineDelay + 0.05 * index}s`,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                </h1>

                <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="text-black">
                        {businessText.split('').map((char, index) => (
                            <span
                                key={index}
                                className={`inline-block ${hasAnimated ? 'letter-animated' : 'opacity-0'}`}
                                style={{
                                    animationDelay: `${thirdLineDelay + 0.05 * index}s`,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </span>
                </h1>

                <div
                    className={`absolute -top-10 right-8 transition-opacity duration-300 ${hasAnimated ? 'rocket-animated' : 'opacity-0'}`}
                    style={{
                        animationDelay: `${secondLineDelay - 0.2}s`,
                    }}
                >
                    <div className="relative">
                        <Image src={Hero1} alt="Rocket icon" className="w-26 h-26" />
                    </div>
                </div>

                <div
                    className={`absolute top-25 left-2 mt-4 ${hasAnimated ? 'phone-vibrate' : 'opacity-0'}`}
                    style={{ animationDelay: `${secondLineCompletesAt}s` }}
                >
                    <Image src={Hero2} alt="Mobile phone icon" className="w-16 h-16" />
                </div>

                <div
                    className={`absolute right-6 top-30 mt-4 ${hasAnimated ? 'arrow-animated' : 'opacity-0'}`}
                    style={{ animationDelay: `${secondLineCompletesAt + 0.1}s` }}
                >
                    <Image src={Arrow} alt="Graph line icon" className="w-16 h-16" />
                </div>

                <div
                    className={`absolute right-2 -bottom-10 ${hasAnimated ? 'gear-animated' : 'opacity-0'}`}
                    style={{
                        animationDelay: `${thirdLineCompletesAt}s`,
                    }}
                >
                    <Image src={Hero3} alt="Gear icon" className="w-16 h-16" />
                </div>
            </div>
        </div>
    );
};

export default TextSection;

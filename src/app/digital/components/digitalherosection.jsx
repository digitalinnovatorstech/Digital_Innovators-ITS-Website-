'use client'
import React, { useEffect } from 'react';
import HeroImage1 from "../../../../public/assets/digital/hero1.svg";
import HeroImage2 from "../../../../public/assets/digital/hero2.svg";
import HeroImage3 from "../../../../public/assets/digital/hero3.svg";
import Digitalbg from "../../../../public/assets/digital/digitalbg.svg";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import '../components/styles/digital.css'; 

const Digitalherosection = () => {
    const digitalItems = Array(20).fill("DIGITAL");

    useEffect(() => {
       
        const heroImages = document.querySelectorAll('.hero-image');
        const heroHeading = document.querySelector('.hero-heading');
        const heroSubtext = document.querySelector('.hero-subtext');
        const heroBackground = document.querySelector('.hero-background');

        
        setTimeout(() => {
            if (heroBackground) heroBackground.classList.add('animate-background');
        }, 300);

        setTimeout(() => {
            if (heroHeading) heroHeading.classList.add('animate-heading');
        }, 600);

        setTimeout(() => {
            if (heroSubtext) heroSubtext.classList.add('animate-subtext');
        }, 1000);

        // Define specific timing for each image
        const topRightImage = document.querySelector('.image-top-right');
        const leftImage = document.querySelector('.image-left');
        const bottomRightImage = document.querySelector('.image-bottom-right');

        // Animate desktop images specifically
        setTimeout(() => {
            if (leftImage) leftImage.classList.add('animate-in');
        }, 500);

        setTimeout(() => {
            if (topRightImage) topRightImage.classList.add('animate-in');
        }, 800);

        setTimeout(() => {
            if (bottomRightImage) bottomRightImage.classList.add('animate-in');
        }, 1100);

        // Animate mobile images
        const mobileImages = document.querySelectorAll('.md\\:hidden .hero-image');
        mobileImages.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('animate-in');
            }, 800 + (index * 250));
        });
    }, []);

    return (
        <div className="relative w-full overflow-hidden h-screen">
            {/* Top right image */}
            <div className="absolute top-8 right-4 sm:right-8 md:right-16 lg:right-32 z-10 hidden md:block">
                <Image
                    src={HeroImage1}
                    alt="Digital interface"
                    width={200}
                    height={200}
                    priority
                    className="hero-image image-top-right w-auto h-auto sm:w-40 md:w-52 lg:w-64"
                />
            </div>

            {/* Left image */}
            <div className="absolute left-0 top-32 md:top-1/4 z-10 hidden md:block">
                <Image
                    src={HeroImage2}
                    alt="Digital creativity"
                    width={200}
                    height={200}
                    priority
                    className="hero-image image-left w-auto h-auto sm:w-40 md:w-52 lg:w-64"
                />
            </div>

            {/* Main content - centered exactly */}
            <div className="flex flex-col items-center justify-center h-full relative z-20">
                <div className="text-center w-full max-w-3xl mx-auto">
                    <div
                        className="relative flex flex-col items-center justify-center hero-background"
                        style={{
                            position: "relative",
                            zIndex: 20,
                            padding: "1.5rem 1rem",
                        }}
                    >
                        {/* Background image positioned absolutely */}
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: `url(${Digitalbg.src})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center bottom",
                                backgroundRepeat: "no-repeat",
                                transform: "translateY(30%)", // Move the background down by 30%
                            }}
                        ></div>

                        {/* Content remains centered */}
                        <div className="flex flex-col items-center mx-auto leading-[1.5] z-10">
                            <div className="flex flex-col items-center justify-center text-center px-4">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font hero-heading">
                                    <span className="block">Crafting great</span>
                                    <span className="block text-primary">digital experiences</span>
                                </h1>
                                <p className="text-black text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-md hero-subtext">
                                    Where your ideas thrive and creativity becomes reality
                                    through innovative digital solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom right image - positioned to touch marquee */}
            <div className="absolute bottom-10 right-0 sm:right-4 md:right-16 lg:right-32 z-20 hidden md:block">
                <Image
                    src={HeroImage3}
                    alt="Digital innovation"
                    width={200}
                    height={200}
                    className="hero-image image-bottom-right w-auto h-auto sm:w-40 md:w-52 lg:w-64"
                />
            </div>

            {/* Marquee */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary z-30 marquee-container">
                <Marquee
                    speed={100}
                    gradient={false}
                    className="py-2"
                >
                    {digitalItems.map((text, index) => (
                        <span key={index} className="text-white mx-2 font-bold">• {text}</span>
                    ))}
                </Marquee>
            </div>

            {/* Mobile view adjustments - matching the design */}
            <div className="md:hidden flex flex-col items-center space-y-4 absolute top-1/4 left-0 right-0 z-20">
                <Image
                    src={HeroImage1}
                    alt="Digital interface"
                    width={150}
                    height={150}
                    className="hero-image mobile-image-1 w-auto h-auto"
                />
                <Image
                    src={HeroImage2}
                    alt="Digital creativity"
                    width={150}
                    height={150}
                    className="hero-image mobile-image-2 w-auto h-auto"
                />
            </div>

            {/* Bottom mobile image positioned to touch marquee */}
            <div className="md:hidden absolute bottom-12 right-0 left-0 flex justify-center z-20">
                <Image
                    src={HeroImage3}
                    alt="Digital innovation"
                    width={150}
                    height={150}
                    className="hero-image mobile-image-3 w-auto h-auto"
                />
            </div>
        </div>
    );
};

export default Digitalherosection;
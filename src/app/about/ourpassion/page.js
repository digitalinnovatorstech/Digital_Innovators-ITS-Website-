'use client'
import { useElementSize } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';

const OurPassion = () => {
    const companyImages = Array.from(
        { length: 3 },
        (_, index) => `/assets/about/carousal/image${index + 1}.svg`
    );

    const { ref: containerRef } = useElementSize();
    const stats = [
        { number: "05+", label: "Years" },
        { number: "220+", label: "Clients" },
        { number: "300+", label: "Projects" },
        { number: "60+", label: "Team" },
    ];

    return (
        <div className="md:h-screen my-10 flex flex-col justify-center items-center">
            <div className="container px-4 flex flex-col justify-center items-center">
                <div className="text-center md:mb-12">
                    <h2 className="md:text-4xl xl:text-4xl xl:mt-10 2xl:text-5xl font text-2xl mt-5 md:mt-0">
                        Our Passion Proven <span className="text-primary">Results</span>
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full gap-6 mb-5">
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm text-center">
                        <h3 className="md:text-3xl xl:text-5xl font-bold mb-2">360+</h3>
                        <p className="uppercase font-medium">Successful Projects</p>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm text-center">
                        <h3 className="md:text-3xl xl:text-5xl font-bold mb-2">220+</h3>
                        <p className="uppercase font-medium">Happy Clients</p>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm text-center">
                        <h3 className="md:text-3xl xl:text-5xl font-bold mb-2">200+</h3>
                        <p className="uppercase font-medium">Specialized Experts</p>
                    </div>
                </div>
            </div>

            {/* Horizontal Marquee with immediate repeat */}
            <div className="w-full mt-10 mb-5" ref={containerRef}>
                <Marquee speed={40} gradient={false} className="py-10">
                    {/* First set of images */}
                    {companyImages.map((image, index) => (
                        <Image
                            key={`first-${index}`}
                            src={image}
                            width={300}
                            height={64}
                            className="p-1 mx-10 object-contain"
                            alt={`Client_${index + 1}`}
                        />
                    ))}

                    {/* Duplicate set to ensure seamless looping */}
                    {companyImages.map((image, index) => (
                        <Image
                            key={`second-${index}`}
                            src={image}
                            width={300}
                            height={64}
                            className="p-1 mx-10 object-contain"
                            alt={`Client_${index + 1}`}
                        />
                    ))}

                    {/* Third set for extra safety */}
                    {companyImages.map((image, index) => (
                        <Image
                            key={`third-${index}`}
                            src={image}
                            width={300}
                            height={64}
                            className="p-1 mx-10 object-contain"
                            alt={`Client_${index + 1}`}
                        />
                    ))}
                </Marquee>
            </div>

            <div className="container mt-5 mx-auto px-4 flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-3/4 mb-8 md:mb-0 pr-0 md:pr-8">
                        <h2 className="xl:text-3xl md:text-xl text-xl font-bold mb-4">
                            Crafting Innovative, Scalable Digital Solutions{" "}
                            <span className="text-primary">
                                That Grow With Your Vision.
                            </span>
                        </h2>
                        <p className="mb-4 mt-10 md:text-sm xl:text-lg">
                            For the last 6 years, Innovators Tech Solutions has provided
                            process-driven digital solutions for clients in the global
                            marketplace.
                        </p>
                        <p className="text-justify md:text-sm xl:text-lg">
                            We primarily work growth-oriented, medium-size businesses
                            hailing from a diverse array of industries and needs. What ties
                            our partners together is their strong leadership teams that
                            acknowledge their digital pain points and seek to either improve
                            or expand their current efforts.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurPassion
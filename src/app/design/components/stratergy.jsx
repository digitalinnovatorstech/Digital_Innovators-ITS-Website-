'use client'
import React from 'react';
import StratergyImage from '../../../../public/assets/design/stratergy.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import "../components/styles/stratergy.css";

const Strategy = () => {
    const strategyItems = [
        {
            id: 1,
            title: "Empathies",
            description: "As a thriving UI UX agency, we harness the proven empathy-driven human-focused design process to craft the best digital solutions mapping the users preferences."
        },
        {
            id: 2,
            title: "Define (the Problem)",
            description: "And begin the definition is accompanied together with elements like design functions, features, functionalities, workflow and bounds to cater the user's goals and intent."
        },
        {
            id: 3,
            title: "Ideation",
            description: "With Proper ideation techniques combined with a client-centric approach at the core, we ideate pathways while mapping your business journey to decode human-focused problem statements."
        },
        {
            id: 4,
            title: "Prototype",
            description: "We develop realistic focused prototype meant to build an authentic digital connection with the various level of detail and quality based on diversified experiments."
        },
        {
            id: 5,
            title: "Testing",
            description: "We finalize our designs using state-of-the-art testing techniques by testing the overall product usability of design-experience touchpoints, personas, and journey maps of ideal consumers."
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col overflow-hidden">
            {/* Marquee at the top - with continuous text without gaps */}
            <div className="w-full bg-black transform -rotate-4 text-white py-5 mt-20 z-10 mb-10 overflow-hidden">
                <Marquee gradient={false} speed={40} direction="left">
                    <div className="flex items-center">
                        {[ ...Array(20) ].map((_, i) => (
                            <span key={i} className="text-2xl font-bold tracking-wider mr-4">HOW WE DO IT *</span>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* Main content container - centered in the remaining space */}
            <div className="flex-grow flex container items-center justify-between px-4 mt-20">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row">
                        {/* Left content - Title and image */}
                        <div className="w-full md:w-3/5 pr-8">
                            <h1 className=" text-3xl xl:text-4xl font-bold mb-4">Our <span className="text-primary">Strategic Approach</span></h1>
                            <h1 className=" text-3xl xl:text-4xl font-bold mb-6">to Building Brand Assets</h1>
                            <p className="mb-4 text-sm xl:text-lg">
                                Whether it's your logo, colors, typography, or marketing assets — we don't just design, we define. Every brand asset is crafted to tell your story clearly, consistently, and powerfully across every interaction.
                            </p>
                            {/* Strategy image */}
                            <div className="mt-4 xl:w-[500px] xl:h-[500px] w-[300px] h-[300px]">
                                <Image
                                    src={StratergyImage}
                                    alt="Strategy illustration showing people with happy face masks collaborating"
                                    className="max-w-full rounded-lg"
                                />
                            </div>
                        </div>
                        {/* Right content - Strategy cards */}
                        <div className="w-full md:w-2/5 md:mt-0">
                            <div className="flex flex-col space-y-6">
                                {strategyItems.map((item) => (
                                    <div key={item.id} className="card-wrapper">
                                        <div className="card">
                                            <div className="card-background"></div>
                                            <div className="card-content p-5 bg-white rounded-lg">
                                                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                                                <p className="text-gray-700 text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Strategy;
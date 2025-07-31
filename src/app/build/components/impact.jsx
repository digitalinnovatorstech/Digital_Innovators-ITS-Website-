'use client'
import React, { useEffect, useRef } from 'react'
import Bulb from "../../../../public/assets/build/idea/bulb.svg"
import Search from "../../../../public/assets/build/idea/icon1.svg"
import Layout from "../../../../public/assets/build/idea/icon2.svg"
import Code from "../../../../public/assets/build/idea/icon3.svg"
import TestTube from "../../../../public/assets/build/idea/icon4.svg"
import Maintenance from "../../../../public/assets/build/idea/icon5.svg"
import Launch from "../../../../public/assets/build/idea/icon6.svg"
import Image from 'next/image'
import "../components/build.css"

const Impact = () => {
    const sectionRef = useRef(null);
    const processItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Observe the main section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Observe each process item
        processItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    // Add refs to process items
    const addToRefs = (el) => {
        if (el && !processItemsRef.current.includes(el)) {
            processItemsRef.current.push(el);
        }
    };

    return (
        <div ref={sectionRef} className="bg-gradient-to-b from-[#FFFDF6] to-[#FFFFFF] bg-cover bg-center bg-no-repeat mx-auto px-4 py-12 text-center">
            <div className="my-10 max-w-6xl flex flex-col items-center mx-auto">
                <div className="relative flex flex-col items-center mb-6">
                    {/* Animated bulb */}
                    <div className="absolute -top-10 left-[35%] -translate-x-[2.4rem] z-10 bulb-glow">
                        <Image src={Bulb} alt="Bulb" className="w-10 h-10" />
                    </div>
                    {/* Heading with animation */}
                    <h1 className="text-4xl md:text-5xl font title-animation">
                        <span className="text-black">From Idea to </span>
                        <span className="text-primary">Impact</span>
                    </h1>
                </div>
                <div className="flex justify-center subtitle-animation">
                    <h2 className="text-2xl font-semibold border-b-2 border-primary inline-block pb-1">
                        OUR DEVELOPMENT PROCESS
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-6 text-center description-animation">
                    <p className="text-black">
                        From sleek websites to robust apps, we transform ideas into powerful digital experiences.
                        Whether you're launching a product, scaling your business, or upgrading your tech—our custom-built
                        solutions are crafted to deliver speed, security, and seamless functionality across every device.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 container md:grid-cols-3 gap-8 mb-8">
                {/* First row of process items */}
                <div ref={addToRefs} className="p-6 rounded-lg process-item">
                    <div className="flex justify-center mb-4">
                        <div className="icon-animation">
                            <Image src={Search} alt="Search" className="w-10 h-10" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Discovery & Requirement Analysis</h3>
                    <p className="text-sm text-black">
                        We start by understanding your business, users, and goals. Through deep discovery sessions, we define clear requirements, use cases, and technical needs.
                    </p>
                </div>
                <div ref={addToRefs} className="p-6 rounded-lg process-item" style={{ animationDelay: '0.2s' }}>
                    <div className="flex justify-center mb-4">
                        <div className="icon-animation" style={{ animationDelay: '0.2s' }}>
                            <Image src={Layout} alt="Layout" className="w-10 h-10" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Planning & Architecture</h3>
                    <p className="text-sm text-black">
                        Based on your needs, we design the system architecture, choose the right tech stack, and map out a development roadmap that ensures performance, security, and scalability.
                    </p>
                </div>
                <div ref={addToRefs} className="p-6 rounded-lg process-item" style={{ animationDelay: '0.4s' }}>
                    <div className="flex justify-center mb-4">
                        <div className="icon-animation" style={{ animationDelay: '0.4s' }}>
                            <Image src={Code} alt="Code" className="w-10 h-10" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Development & Integration</h3>
                    <p className="text-sm text-black">
                        Our dev team builds the frontend and backend using modern frameworks and best coding practices. We integrate third-party tools, APIs, and systems as needed.
                    </p>
                </div>
            </div>
            {/* Process Grid - Bottom Row */}
            <div className="grid grid-cols-1 container md:grid-cols-3 gap-8">
                <div ref={addToRefs} className="p-6 rounded-lg process-item" style={{ animationDelay: '0.6s' }}>
                    <div className="flex justify-center mb-4">
                        <div className="icon-animation" style={{ animationDelay: '0.6s' }}>
                            <Image src={TestTube} alt="TestTube" className="w-10 h-10" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Testing & Quality Assurance</h3>
                    <p className="text-sm text-black">
                        We run rigorous testing—unit, functional, performance, and security—to ensure your application is bug-free, fast, and reliable before launch.
                    </p>
                </div>
                <div ref={addToRefs} className="p-6 rounded-lg process-item" style={{ animationDelay: '0.8s' }}>
                    <div className="flex justify-center mb-4">
                        <div className="icon-animation" style={{ animationDelay: '0.8s' }}>
                            <Image src={Launch} alt="Launch" className="w-10 h-10" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Deployment & Launch</h3>
                    <p className="text-sm text-black">
                        We prepare your application for production, configure servers or cloud environments, and deploy with minimal disruption. Ready for real users.
                    </p>
                </div>
                <div ref={addToRefs} className="p-6 rounded-lg process-item" style={{ animationDelay: '1s' }}>
                    <div className="flex justify-center mb-4">
                        <div className="icon-animation" style={{ animationDelay: '1s' }}>
                            <Image src={Maintenance} alt="Maintenance" className="w-10 h-10" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Maintenance & Support</h3>
                    <p className="text-sm text-black">
                        Post-launch, we offer ongoing support, updates, and feature enhancements to keep your application running smoothly and evolving with your business.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Impact

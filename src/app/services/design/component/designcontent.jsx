"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Vector1 from "../../../../../public/assets/services/design/vector1.svg";
import Vector2 from "../../../../../public/assets/services/design/vector2.svg";
import Vector3 from "../../../../../public/assets/services/design/vector3.svg";
import "@/app/services/styles/services.css";
import "./design.css";

export default function DesignContent() {
    const contentSectionRef = useRef(null);

    useEffect(() => {
        // Function to check if element is in viewport
        const isInViewport = (element) => {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        };

        // Function to handle animation
        const handleAnimation = () => {
            if (contentSectionRef.current && isInViewport(contentSectionRef.current)) {
                contentSectionRef.current.classList.add('animate-content');
                // Remove scroll listener once animation is triggered
                window.removeEventListener('scroll', handleAnimation);
            }
        };

        // Set up intersection observer for scrolling into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        contentSectionRef.current.classList.add('animate-content');
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (contentSectionRef.current) {
            // Check if already in viewport on initial load
            if (isInViewport(contentSectionRef.current)) {
                // If already in viewport, trigger animation immediately
                setTimeout(() => {
                    contentSectionRef.current.classList.add('animate-content');
                }, 100); // Small timeout to ensure DOM is ready
            } else {
                // Otherwise observe for scrolling into view
                observer.observe(contentSectionRef.current);
            }

            // Add scroll listener as a backup
            window.addEventListener('scroll', handleAnimation);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleAnimation);
        };
    }, []);

    return (
        <div
            ref={contentSectionRef}
            className="design-content-section bg-[#F99B23] overflow-hidden py-30 md:py-10 text-white md:h-screen flex items-center justify-center relative"
        >
            {/* Vector 1 - Top Left */}
            <div className="vector vector-1 absolute -top-14 mt-20 left-20 md:top-10 md:left-24 w-28 md:w-32 lg:w-38 z-10">
                <Image
                    src={Vector1}
                    alt="Design Vector 1"
                    width={140}
                    height={100}
                    priority
                />
            </div>
            {/* Vector 2 - Top Right */}
            <div className="vector vector-2 absolute top-8 mt-10 right-8 md:top-10 md:right-28 w-16 md:w-24 lg:w-32 z-10">
                <Image
                    src={Vector3}
                    alt="Design Vector 2"
                    width={120}
                    height={120}
                    priority
                />
            </div>
            {/* Vector 3 - Bottom Left */}
            <div className="vector vector-3 absolute bottom-8 left-20 md:bottom-10 md:left-24 w-20 md:w-28 lg:w-42 z-10">
                <Image
                    src={Vector2}
                    alt="Design Vector 3"
                    width={120}
                    height={120}
                    priority
                />
            </div>
            <div className="container relative z-20">
                <div className="header_section">
                    <div className="header_text font">
                        Design
                    </div>
                    <div>
                        <p className=" md:text-sm xl:text-lg text-center mt-5 text-justify">
                            Our DESIGN services breathe life into your brand. From striking
                            logos and intuitive UX/UI designs to compelling advertisement
                            and outdoor ad designs, we create visual stories that captivate
                            and connect with your audience.
                        </p>
                    </div>
                </div>
                <div className="service_grid">
                    <div className="grid-item grid-item-1">
                        <h2 className="grid_header">BRANDING</h2>
                        <p className="grid_para">
                            We create cohesive digital brand identities that reflect your
                            values, and build long-term customer trust.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-white md:border-none grid-item grid-item-2">
                        <h2 className="grid_header">UI & UX DESIGN</h2>
                        <p className="grid_para">
                            Crafting intuitive and pixel-perfect user interfaces backed by
                            user experience research for seamless interactions.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-3">
                        <h2 className="grid_header">ADVERTISEMENT DESIGN</h2>
                        <p className="grid_para">
                            High-impact ad creatives tailored for digital and print media,
                            optimized to capture attention and drive conversions.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-4">
                        <h2 className="grid_header">BROCHURE DESIGNS</h2>
                        <p className="grid_para">
                            Visually rich and brand-consistent brochures that communicate
                            your offerings with clarity and creativity.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-5">
                        <h2 className="grid_header uppercase">AI Design Solutions</h2>
                        <p className="grid_para">
                            Leveraging AI-powered tools for rapid prototyping, personalized
                            experiences, and intelligent design automation.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-6">
                        <h2 className="grid_header uppercase">Ads Design</h2>
                        <p className="grid_para">
                            Engaging static and animated ad for social media, Google Ads,
                            and display networks to boost your campaign performance.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-7">
                        <h2 className="grid_header uppercase">Illustrations...</h2>
                        <p className="grid_para">
                            Custom illustrations and icons that enhance visual storytelling,
                            improve user navigation, and brand recognition.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-8">
                        <h2 className="grid_header uppercase">Motion Graphics</h2>
                        <p className="grid_para">
                            Dynamic motion graphics and explainer videos that simplify
                            complex ideas and bring your brand stories to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
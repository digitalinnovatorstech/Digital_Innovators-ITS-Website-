"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Vector1 from "../../../../../public/assets/services/digital/vector1.svg";
import Vector2 from "../../../../../public/assets/services/digital/vector2.svg";
import Vector3 from "../../../../../public/assets/services/digital/vector3.svg";
import Vector4 from "../../../../../public/assets/services/digital/vector4.svg";
import "@/app/services/styles/services.css";
import "./digital.css";

export default function DigitalContent() {
    const contentSectionRef = useRef(null);


    useEffect(() => {
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
            observer.observe(contentSectionRef.current);
        }

        return () => {
            if (contentSectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={contentSectionRef}
            className="digital-content-section bg-[#353535] overflow-hidden py-30 md:py-10 text-white md:h-screen flex items-center justify-center relative"
        >
            {/* Vector 1 - Top Left */}
            <div className="vector vector-1 absolute top-2 left-16 md:top-28 md:left-28 w-18 md:w-32 lg:w-32 z-10">
                <Image
                    src={Vector1}
                    alt="Digital Vector 1"
                    width={160}
                    height={100}
                    priority
                />
            </div>
            {/* Vector 2 - Top Right */}
            <div className="vector vector-2 absolute top-32 right-24 md:top-48 md:right-28 w-16 md:w-24 lg:w-32 z-10">
                <Image
                    src={Vector4}
                    alt="Digital Vector 2"
                    width={130}
                    height={130}
                    priority
                />
            </div>
            {/* Vector 3 - Bottom Left */}
            <div className="vector vector-3 absolute bottom-5 left-24 md:bottom-10 md:left-20 w-20 md:w-28 lg:w-30 z-10">
                <Image
                    src={Vector2}
                    alt="Digital Vector 3"
                    width={140}
                    height={140}
                    priority
                />
            </div>
            {/* Vector 4 - Bottom Right */}
            <div className="vector vector-4 absolute bottom-8 right-22 md:bottom-10 md:right-28 w-20 md:w-28 lg:w-32 z-10">
                <Image
                    src={Vector3}
                    alt="Digital Vector 4"
                    width={140}
                    height={140}
                    priority
                />
            </div>
            <div className="container relative z-20">
                <div className="header_section">
                    <div className="header_text font ">
                        Digital
                    </div>
                    <div>
                        <p className=" md:text-xs xl:text-lg xl-text-lg text-center mt-5 text-justify">
                            Our DIGITAL services breathe life into your brand. From striking
                            logos and intuitive UX/UI designs to compelling advertisement
                            and outdoor ad designs, we create visual stories that captivate
                            and connect with your audience.
                        </p>
                    </div>
                </div>
                <div className="service_grid">
                    <div className="pt-4 grid-item grid-item-1">
                        <h2 className="grid_header">Digital Marketing</h2>
                        <p className="grid_para">
                            We create full-funnel digital marketing strategies that boost visibility, drive traffic, and accelerate ROI.
                        </p>
                    </div>
                    <div className="pt-4 grid-item grid-item-2">
                        <h2 className="grid_header">Blog Writing</h2>
                        <p className="grid_para">
                            Our expert content writers craft SEO-optimized blogs that educate, engage your brand as an industry thought leader.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-3">
                        <h2 className="grid_header">Lead Generation</h2>
                        <p className="grid_para">
                            We build intelligent lead generation campaigns using inbound marketing, targeted ads that convert.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-4">
                        <h2 className="grid_header">Social Media Marketing</h2>
                        <p className="grid_para">
                            Grow your online presence with platform-specific strategies, content calendars, influencer outreach, and analytics.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-5">
                        <h2 className="grid_header">SEO</h2>
                        <p className="grid_para">
                            Increase your search rankings and organic traffic with on-page SEO, technical audits, link building, and keyword strategies.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-6">
                        <h2 className="grid_header">Pay Per Click (PPC)</h2>
                        <p className="grid_para">
                            Drive instant results with ROI-focused Google Ads and paid social campaigns, optimized for budget efficiency.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-7">
                        <h2 className="grid_header">Content Marketing</h2>
                        <p className="grid_para">
                            We deliver content strategies that combine storytelling and SEO to attract, retain, and convert your ideal customers.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-8">
                        <h2 className="grid_header">Email Marketing</h2>
                        <p className="grid_para">
                            Nurture leads and boost retention through personalized email campaigns, automated workflows, and performance tracking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
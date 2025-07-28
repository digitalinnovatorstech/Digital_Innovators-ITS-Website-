"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Vector1 from "../../../../../public/assets/services/build/vector1.svg";
import Vector2 from "../../../../../public/assets/services/build/vector2.svg";
import Vector3 from "../../../../../public/assets/services/build/vector3.svg";
import Vector4 from "../../../../../public/assets/services/build/vector4.svg";
import "@/app/services/styles/services.css";
import "./build.css";

export default function BuildContent() {
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
            className="build-content-section bg-[#087830] overflow-hidden py-30 md:py-10 text-white md:h-screen flex items-center justify-center relative"
        >
            {/* Vector 1 - Top Left */}
            <div className="vector vector-1 absolute top-2 left-16 md:top-28 md:left-25 w-18 md:w-32 lg:w-32 z-10">
                <Image
                    src={Vector1}
                    alt="Build Vector 1"
                    width={160}
                    height={100}
                    priority
                />
            </div>
            {/* Vector 2 - Top Right */}
            <div className="vector vector-2 absolute top-8 right-24 md:top-48 md:right-28 w-16 md:w-24 lg:w-30 z-10">
                <Image
                    src={Vector3}
                    alt="Build Vector 2"
                    width={130}
                    height={130}
                    priority
                />
            </div>
            {/* Vector 3 - Bottom Left */}
            <div className="vector vector-3 absolute bottom-8 left-24 md:bottom-10 md:left-22 w-20 md:w-28 lg:w-30 z-10">
                <Image
                    src={Vector2}
                    alt="Build Vector 3"
                    width={140}
                    height={140}
                    priority
                />
            </div>
            {/* Vector 4 - Bottom Right */}
            <div className="vector vector-4 absolute bottom-8 right-22 md:bottom-10 md:right-25 w-20 md:w-28 lg:w-30 z-10">
                <Image
                    src={Vector4}
                    alt="Build Vector 4"
                    width={140}
                    height={140}
                    priority
                />
            </div>
            <div className="container relative z-20">
                <div className="header_section">
                    <div className="header_text font ">
                        Build
                    </div>
                    <div>
                        <p className=" md:text-sm xl:text-lg text-center mt-5 text-justify">
                            Our BUILD services breathe life into your brand. From striking
                            logos and intuitive UX/UI designs to compelling advertisement
                            and outdoor ad designs, we create visual stories that captivate
                            and connect with your audience.
                        </p>
                    </div>
                </div>
                <div className="service_grid">
                    <div className="pt-4 grid-item grid-item-1">
                        <h2 className="grid_header">Web Applications</h2>
                        <p className="grid_para">
                            We craft responsive, scalable web applications using modern frameworks to deliver seamless digital experiences.
                        </p>
                    </div>
                    <div className="pt-4 grid-item grid-item-2">
                        <h2 className="grid_header">Mobile Applications</h2>
                        <p className="grid_para">
                            From iOS to Android, we build custom mobile apps with intuitive UI/UX, native performance, and cross-platforms.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-3">
                        <h2 className="grid_header">Custom Applications</h2>
                        <p className="grid_para">
                            Tailor-made software solutions designed to solve your unique business challenges with scalable, secure, development.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-4">
                        <h2 className="grid_header">SaaS Implementation</h2>
                        <p className="grid_para">
                            We help you launch and scale cloud-based SaaS platforms with multi-tenant architecture, and real-time analytics.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-5">
                        <h2 className="grid_header">CRM, ERP, HRMS Applications</h2>
                        <p className="grid_para">
                            Streamline operations with enterprise-grade CRM, ERP, and HRMS systems that enhance productivity.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-6">
                        <h2 className="grid_header">CMS Integrations</h2>
                        <p className="grid_para">
                            Integrate and customize powerful content management systems (WordPress, Drupal, etc.) for flexible digital content control.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-7">
                        <h2 className="grid_header">Cloud Management</h2>
                        <p className="grid_para">
                            Leverage AWS, Azure, or Google Cloud for secure, cost-effective cloud infrastructure, with real-time monitoring.
                        </p>
                    </div>
                    <div className="white_border grid-item grid-item-8">
                        <h2 className="grid_header">Emerging Tech (AI, AR/VR)</h2>
                        <p className="grid_para">
                            Integrate AI, machine learning, and immersive AR/VR solutions to drive innovation and futuristic digital experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
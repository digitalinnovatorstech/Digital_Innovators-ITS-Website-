"use client";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
 
import Image from "next/image";
import Starfield from "./Starfield";
 
const HorizontalScroll = ({ children }) => {
    const stickyRef = useRef(null);
    const stickyParentRef = useRef(null);
 
    useEffect(() => {
        const sticky = stickyRef.current;
        const stickyParent = stickyParentRef.current;
 
        if (!sticky || !stickyParent) return;
 
        const scrollWidth = sticky.scrollWidth;
        const verticalScrollHeight =
            stickyParent.getBoundingClientRect().height -
            sticky.getBoundingClientRect().height;
 
        const horizontalScroll = () => {
            const stickyPosition = sticky.getBoundingClientRect().top;
 
            if (stickyPosition > 1) return;
 
            const scrolled = stickyParent.getBoundingClientRect().top;
            sticky.scrollLeft =
                (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
        };
 
        window.addEventListener("scroll", horizontalScroll);
 
        return () => {
            window.removeEventListener("scroll", horizontalScroll);
        };
    }, []);
 
    return (
        <div className="sticky-parent" ref={stickyParentRef}>
            <div className="sticky" ref={stickyRef}>
                <div className="horizontal">{children}</div>
            </div>
        </div>
    );
};
 
export default function HorizontalScrollSection() {
    const [ activeSection, setActiveSection ] = useState('overview');
    const sectionRefs = {
        overview: useRef(null),
        design: useRef(null),
        digital: useRef(null),
        build: useRef(null)
    };
 
    const handleSectionClick = (section) => {
        if (sectionRefs[ section.toLowerCase() ]?.current) {
            const sectionElement = sectionRefs[ section.toLowerCase() ].current;
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(section.toLowerCase());
        }
    };
 
    return (
        <HorizontalScroll>
            <div
                ref={sectionRefs.overview}
                className="relative h-screen w-screen flex-shrink-0 overflow-hidden"
            >
                {/* First vertical section - Build */}
                <div
                    className="absolute left-0 hidden md:flex top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-end justify-center z-30 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                    onClick={() => handleSectionClick('build')}
                >
                    <div className="rotate-360 writing-vertical mb-20 text-primary font text-4xl tracking-wide">
                        Build
                    </div>
                </div>
 
                {/* Second vertical section - Digital */}
                <div
                    className="absolute left-[6.666%] hidden md:flex -top-6 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                    onClick={() => handleSectionClick('design')}
                >
                    <div className="rotate-360 writing-vertical text-primary font text-4xl tracking-wide">
                          Design
                    </div>
                </div>
 
                {/* Third vertical section - Design */}
                <div
                    className="absolute left-[13.332%] hidden md:flex top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/designbg.svg')] bg-cover bg-center flex items-start justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                    onClick={() => handleSectionClick('digital')}
                >
                    <div className="rotate-360 mt-20 writing-vertical text-primary font text-4xl pt-30 tracking-wide">
                       Digital
                    </div>
                </div>
 
                {/* Right content area */}
                <div className="absolute md:left-[20%] top-0 right-0 bottom-0 text-white bg-[url('/assets/home/services/designbg.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
                    <Starfield />
                    <div className="max-w-4xl px-8 relative z-10">
                        <h2 className="md:text-2xl xl:text-4xl mb-6 font-semibold ">
                            WHAT WE <span className="text-primary">OFFER</span>
                        </h2>
                        <p className="text-3xl font-light mb-14 leading-relaxed">
                            We're committed to providing the tools and expertise our clients need to accomplish great things.
                        </p>
                        <div className="relative flex justify-center">
                            <div className="relative w-full h-72">
                                <div className="absolute inset-0 flex justify-center">
                                    <div className="relative w-full max-w-xl mt-10">
                                        <Image
                                            src="/assets/home/services/designimg.svg"
                                            alt="Services Illustration"
                                            layout="fill"
                                            objectFit="contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
 
 
                {/* First vertical section on right - Design */}
              <div
    className="absolute hidden md:flex right-0 top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
    style={{ boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.3)" }}
    onClick={() => handleSectionClick('build')}
>
    <div className="rotate-360 writing-vertical text-primary font text-4xl tracking-wide">
        Build
    </div>
</div>
 
                {/* Second vertical section on right - Digital */}
                {/* <div
                    className="absolute hidden md:flex right-[6.666%] -top-6 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "inset 4px 0 6px rgba(0, 0, 0, 0.3)" }}
                    onClick={() => handleSectionClick('digital')}
                >
                    <div className="rotate-360 writing-vertical text-white font text-4xl tracking-wide">
                        Digital
                    </div>
                </div> */}
              {/* Section 2 - Build */}
            <div
                ref={sectionRefs.build}
                className="relative h-screen w-screen flex-shrink-0 overflow-hidden will-change-transform"
            >
                {/* Left content area */}
                <div className="relative h-screen w-full overflow-hidden text-white bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center">
                    <Starfield />
                    <div className="absolute left-0 top-0 md:w-[80.668%] h-full flex flex-col justify-center items-center px-6 py-10 relative z-10">
                        {/* Build Title */}
                        <h2 className="xl:text-8xl md:text-5xl font-bold uppercase text-[#FFFCEE] text-center mb-20">
                            Build
                        </h2>
                        {/* Main Content Wrapper */}
                        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-20">
                            {/* Right Image */}
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md h-80">
                                    <Image
                                        src="/assets/home/services/buildimg.svg"
                                        alt="Digital Illustration"
                                        layout="fill"
                                        objectFit="contain"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Left Content */}
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="xl:text-4xl md:text-2xl font text-primary">
                                    We build compelling brand stories that connect with your
                                    audience.
                                </h3>
                                <p className="text-lg text-gray-200">
                                    We help you turn UI/UX designs into pixel-perfect, flexible,
                                    and scalable digital products that power business growth.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-white uppercase">
                                    <li>Web applications</li>
                                    <li>mobile applications</li>
                                    <li>custom applications</li>
                                    <li>saas implementation</li>
                                    <li>crm, erp, Hrms applications</li>
                                    <li>cms integrations</li>
                                    <li>cloud management</li>
                                    <li>Emerging tech (Ai, AR/VR)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
 
            </div>
            {/* Section 2 - DESIGN */}
            <div
                ref={sectionRefs.design}
                className="relative h-screen w-screen flex-shrink-0 overflow-hidden"
            >
                {/* First vertical section - Build */}
<div
    className="absolute hidden md:flex left-0 top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
    onClick={() => handleSectionClick('design')}
>
    <div className="rotate-360 writing-vertical text-primary font text-4xl tracking-wide">
        Design
    </div>
</div>
                {/* Second vertical section - Digital */}
                {/* <div
                    className="absolute hidden md:flex left-[6.666%] -top-6 -bottom-4 w-[6.666%] bg-[url('/assets/home/services/digitalbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                    onClick={() => handleSectionClick('digital')}
                >
                    <div className="rotate-360 writing-vertical text-primary font text-4xl tracking-wide">
                        Digital
                    </div>
                </div> */}
              <div className="absolute inset-0 text-white bg-[url('/assets/home/services/designbg.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
  <Starfield />
  <div className="absolute inset-0 flex justify-center items-center z-10 px-6 py-10">
    {/* Inner Wrapper */}
    <div className="w-full max-w-6xl flex flex-col justify-center items-center">
      {/* Design Title */}
      <h2 className="xl:text-8xl md:text-5xl font-bold uppercase text-[#FFFCEE] text-center mb-16">
        Design
      </h2>
 
      {/* Main Content Row */}
      <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-80">
            <Image
              src="/assets/home/services/designimg2.svg"
              alt="Digital Illustration"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
 
        {/* Right Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="xl:text-4xl md:text-2xl font text-primary">
            We sculpt visual identities that leave a lasting impact.
          </h3>
          <p className="text-lg text-gray-200">
            Our team of designers excels at crafting intuitive, scalable designs that users love & trust as a design company.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-white text-left">
            <li>Digital Branding</li>
            <li>UX & UI Design</li>
            <li>Advertisement Design</li>
            <li>Brochure Design</li>
            <li>AI Design Solutions</li>
            <li>Ads Design</li>
            <li>Illustrations and iconography</li>
            <li>Motion Graphics</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
 
            </div>
            {/* Section 3 - Digital */}
            <div
                ref={sectionRefs.digital}
                className="relative h-screen w-screen bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex-shrink-0 overflow-hidden text-white"
            >
                {/* Full-width background to ensure no gaps */}
               
                {/* Build section on left */}
                {/* <div
                    className="absolute left-0 hidden md:flex top-0 bottom-0 w-[5.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-end justify-center shadow-2xl z-20 cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
                    onClick={() => handleSectionClick('build')}
                >
                    <div className="rotate-360 mb-20 writing-vertical text-primary font text-4xl pb-30 tracking-wide">
                        Build
                    </div>
                </div> */}
<div
    className="absolute hidden md:flex left-0 top-0 bottom-0 w-[6.666%] bg-[url('/assets/home/services/buildbg.svg')] bg-cover bg-center flex items-center justify-center shadow-2xl z-10 cursor-pointer hover:opacity-90 transition-opacity"
    style={{ boxShadow: "inset -4px 0 6px rgba(0, 0, 0, 0.3)" }}
    onClick={() => handleSectionClick('digital')}
>
    <div className="rotate-360 writing-vertical text-primary font text-4xl tracking-wide">
        Digital
    </div>
</div>
                {/* Content area */}
                <div className="absolute md:left-[6.666%] md:right-[6.666%] top-0 bottom-0 flex flex-col justify-center items-center px-6 md:px-12 py-10">
                    <Starfield />
                    <h2 className="xl:text-8xl md:text-5xl font-bold uppercase text-[#FFFCEE] text-center mb-20">
                        Digital
                    </h2>
                    <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2 space-y-4">
                            <h3 className="xl:text-4xl md:text-2xl font text-primary">
                                We are the architects of your digital growth.
                            </h3>
                            <p className="text-lg text-gray-200">
                                Our Digital team Studio delivers data-driven insights that
                                reflect the user's perspective while aligning with business
                                goals.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-white">
                                <li>DIGITAL MARKETING</li>
                                <li>BLOG WRITING</li>
                                <li>LEAD GENERATION</li>
                                <li>SOCIAL MEDIA MARKETING</li>
                                <li>SEO</li>
                                <li>PAY PER CLICK (PPC)</li>
                                <li>CONTENT MARKETING</li>
                                <li>EMAIL MARKETING</li>
                            </ul>
                        </div>
                        {/* Right Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md h-80">
                                <Image
                                    src="/assets/home/services/digitalimg.svg"
                                    alt="Digital Illustration"
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
         
        </HorizontalScroll>
    );
}
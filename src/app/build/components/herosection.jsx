'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Hero1 from "../../../../public/assets/build/hero1.svg"
import Hero2 from "../../../../public/assets/build/hero2.svg"
import Build from "../../../../public/assets/build/buildletter.svg"
import "../components/build.css"

const BuildHerosection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (section) {
            section.classList.add('animate-section');
        }
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full h-screen px-4 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                    src={Build}
                    alt="BUILD background"
                    className="w-full max-w-xl md:max-w-3xl"
                    width={400}
                    height={400}
                    priority
                />
            </div>
            <div className="container mx-auto relative z-10">
                <div className="flex justify-end">
                    <Image
                        src={Hero1}
                        alt="Interface illustration"
                        className="w-24 h-24 md:w-54 md:h-54 -mt-10"
                    />
                </div>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font text-4xl md:text-5xl lg:text-6xl leading-tight">
                        <span className="text-reveal">Every pixel, every line of code</span><br />
                        <span className="text-reveal" style={{ animationDelay: '0.3s' }}>build to move your</span><br />
                        <span className="text-primary text-reveal" style={{ animationDelay: '0.6s' }}>business forward.</span>
                    </h1>
                </div>
                <div className="relative flex flex-col items-center justify-center mt-30">
                    <div className="w-full flex justify-center z-10">
                        <p className="text-lg max-w-xl text-center fade-in" style={{ animationDelay: '0.9s' }}>
                            We help you translate any kind of design into functional
                            <br />
                            and scalable digital products such as websites, mobile
                            <br />
                            apps, or enterprise platforms/solutions.
                        </p>
                    </div>
                    <div className="hidden md:block absolute left-0 bottom-[-120px] w-1/3 flex justify-center">
                        <Image
                            src={Hero2}
                            alt="Person thinking"
                            className="w-full max-w-md slide-from-bottom"
                            priority
                        />
                    </div>
                    <div className="block md:hidden mt-6 w-full flex justify-center">
                        <Image
                            src={Hero2}
                            alt="Person thinking"
                            className="w-full max-w-md slide-from-bottom"
                            priority
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BuildHerosection

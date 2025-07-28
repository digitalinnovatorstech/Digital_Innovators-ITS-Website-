'use client'
import React, { useEffect, useRef, useState } from 'react'
import MainImage from "../../../../public/assets/home/aiml/internal/section4image.svg"
import Icon1 from "../../../../public/assets/home/aiml/internal/icon1.svg"
import Icon2 from "../../../../public/assets/home/aiml/internal/icon2.svg"
import Icon3 from "../../../../public/assets/home/aiml/internal/icon3.svg"
import Image from 'next/image'

const Section4 = () => {
    const [ isVisible, setIsVisible ] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([ entry ]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.8 }
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

    return (
        <>
            <div ref={sectionRef} className='flex flex-col h-full items-center h-screen gap-y-10 overflow-hidden'>
                <div className="w-full h-[50vh] overflow-hidden">
                    <div>
                        <Image
                            src={MainImage}
                            alt="AI Development"
                            layout="responsive"
                        />
                    </div>
                </div>

                <div className="container h-[40vh] bg-[#1c1f23] flex flex-col justify-center items-center rounded-xl text-white px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                    <div
                        className={`flex flex-col items-center px-10 text-center border-b md:border-r md:border-b-0 border-gray-700 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <Image src={Icon1} alt="Icon 1" className="w-16 h-16 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Cutting-Edge Innovation</h3>
                        <p className="text-sm text-gray-300">
                            Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.
                        </p>
                    </div>

                    <div
                        className={`flex flex-col items-center px-10 text-center border-b md:border-r md:border-b-0 border-gray-700 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <Image src={Icon2} alt="Icon 2" className="w-16 h-16 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Seamless Connectivity</h3>
                        <p className="text-sm text-gray-300">
                            Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.
                        </p>
                    </div>

                    <div
                        className={`flex flex-col items-center px-10 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                        style={{ transitionDelay: '900ms' }}
                    >
                        <Image src={Icon3} alt="Icon 3" className="w-16 h-16 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Intuitive User Interface</h3>
                        <p className="text-sm text-gray-300">
                            Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4
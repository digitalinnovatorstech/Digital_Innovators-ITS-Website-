'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useEffect, useRef, useState } from 'react';

const Crafting = () => {
    const sectionRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                const [ entry ] = entries;

                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
                rootMargin: '-10% 0px'
            }
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
        <div
            ref={sectionRef}
            className="flex flex-col h-screen items-center justify-center w-full py-20 px-4"
        >
            <div className="relative w-full text-center">
                <div className="relative inline-block">
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute left-12 -top-2 -translate-y-1/2">
                                <DotLottieReact
                                    src="/assets/flyingbird.lottie"
                                    loop
                                    autoplay
                                    className="flying_bird"
                                />
                            </div>
                            <span className="text-8xl font-black">Crafting</span>
                            <div className="absolute -right-24 top-0 -mt-6">
                                <img
                                    src="/assets/design/crafting.svg"
                                    alt="Crafting Bird"
                                    width={150}
                                    height={150}
                                    style={{
                                        animation: isVisible ? 'slideInFromRight 1.5s ease-out forwards' : 'none',
                                        transform: 'translateX(200px)',
                                        opacity: 0
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-8xl font-black my-4 relative">
                    v<span className="relative inline-block">
                        i
                        <div className="absolute h-[2px] w-8 bg-black -top-1 -left-4 transform rotate-45"></div>
                        <div className="absolute w-[2px] h-8 bg-black -top-8 left-1/2 transform -translate-x-1/2"></div>
                        <div className="absolute h-[2px] w-8 bg-black -top-1 -right-4 transform -rotate-45"></div>
                    </span>suals that don't just
                </div>
                <div className="flex items-center justify-center pb-20 ">
                    <span className="text-8xl font-black">speak — </span>
                    <div className="inline-block">
                        <span
                            className="text-8xl pl-5 py-3 font-black text-primary"
                            style={{
                                display: 'inline-block',
                                width: 0,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                animation: isVisible ? 'typing 1.5s steps(9) 1.2s forwards' : 'none',
                                // borderRight: '3px solid transparent'
                            }}
                        > they roar</span>
                    </div>
                    <div className="-ml-5 mt-10">
                        <img
                            src="/assets/design/roar.svg"
                            alt="Lion Roar"
                            width={64}
                            height={64}
                            style={{
                                animation: isVisible ? 'roarEntrance 1s ease-out 2.5s forwards' : 'none',
                                opacity: 0,
                                transform: 'scale(0) rotate(45deg)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Global keyframes */}
            <style jsx global>{`
                @keyframes slideInFromRight {
                    0% {
                        transform: translateX(200px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes typing {
                    from { width: 0; }
                    to { width: 100%; }
                }
                
                @keyframes roarEntrance {
                    0% {
                        opacity: 0;
                        transform: scale(0) rotate(45deg);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.5) rotate(0deg);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) rotate(0deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Crafting;

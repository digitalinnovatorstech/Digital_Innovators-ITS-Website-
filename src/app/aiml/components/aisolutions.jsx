"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const UnsplashRobot = "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D";
import Image2 from "../../../../public/assets/home/aiml/internal/solutions/image2.svg";
import Image3 from "../../../../public/assets/home/aiml/internal/solutions/image3.svg";
import Image4 from "../../../../public/assets/home/aiml/internal/solutions/image4.svg";
import Image5 from "../../../../public/assets/home/aiml/internal/solutions/image5.svg";
import "../styles/solutions.css";

const Aisolutions = () => {
    const imageRef = useRef(null);
    const cardsRef = useRef([]);
    const [ isImageVisible, setIsImageVisible ] = useState(false);
    const [ visibleCards, setVisibleCards ] = useState([ false, false, false, false ]);

    useEffect(() => {
        // Set up Intersection Observer for the robot image
        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsImageVisible(true);
                    } else {
                        setIsImageVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        // Set up Intersection Observer for each card
        const cardObservers = [];
        cardsRef.current.forEach((card, index) => {
            if (card) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleCards(prev => {
                                    const newState = [ ...prev ];
                                    newState[ index ] = true;
                                    return newState;
                                });
                            } else {
                                setVisibleCards(prev => {
                                    const newState = [ ...prev ];
                                    newState[ index ] = false;
                                    return newState;
                                });
                            }
                        });
                    },
                    { threshold: 0.1 }
                );

                observer.observe(card);
                cardObservers.push(observer);
            }
        });

        // Cleanup observers on component unmount
        return () => {
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }

            cardsRef.current.forEach((card, index) => {
                if (card && cardObservers[ index ]) {
                    cardObservers[ index ].unobserve(card);
                }
            });
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-30">
            <h1 className="text-xl max-w-xl lg:text-4xl text-start font-bold capitalize leading-snug mb-10">
              the  Accelerating Success with AI and ML Development{" "}
                <span className="text-primary">Solutions</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Left - Robot Image */}
                <div
                    className={`w-full md:w-[30%] transition-all duration-1000 ease-out ${isImageVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-24'
                        }`}
                    ref={imageRef}
                >
                    <Image
                        src={UnsplashRobot}
                        alt="AI Robot"
                        className="rounded-2xl w-full h-auto object-cover"
                        width={700}
                        height={500}
                        priority
                    />
                </div>

                {/* Right - Grid of Solutions */}
                <div className="w-full md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-20">
                    {[ Image2, Image3, Image4, Image5 ].map((img, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[ i ] = el)}
                            className={`bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-700 ease-out ${visibleCards[ i ]
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-16 scale-95'
                                }`}
                            style={{
                                transitionDelay: `${i * 100}ms`,
                                transformOrigin: 'center bottom'
                            }}
                        >
                            <Image src={img} alt={`Solution ${i}`} width={100} height={100} />
                            <p className="mt-4 font-semibold">
                                {[
                                    "NO-CODE AI",
                                    "ENTERPRISE SAAS",
                                    "BUILT FOR ENGINEERS",
                                    "EXPERT AI CONSULTING",
                                ][ i ]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Aisolutions;

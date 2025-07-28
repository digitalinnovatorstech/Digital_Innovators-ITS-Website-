import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image1 from "../../../public/assets/home/project/image1.svg";
import Image2 from "../../../public/assets/home/project/image2.svg";
import Image3 from "../../../public/assets/home/project/image3.svg";
import Image4 from "../../../public/assets/home/project/image4.svg";
import PrimaryButton from "../../components/common/primarybutton";
import Link from "next/link";

const VerticalScrollImages = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const items = itemsRef.current;
        if (!items.length) return;

        items.forEach((item, index) => {
            if (index !== 0) {
                gsap.set(item, { yPercent: 100 });
            }
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                end: () => `+=${items.length * 100}%`,
                scrub: 1,
                invalidateOnRefresh: true,
            },
            defaults: { ease: "none" }
        });

        items.forEach((item, index) => {
            timeline.to(item, {
                scale: 0.9,
                borderRadius: "10px"
            });

            if (items[ index + 1 ]) {
                timeline.to(
                    items[ index + 1 ],
                    {
                        yPercent: 0
                    },
                    "<"
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const addToItemsRef = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <main className="my-30">
            {/* Main section that will be pinned */}
            <div ref={sectionRef} className="h-screen w-full">
                <div className="container mx-auto px-4 h-full flex flex-col">
                    {/* Title section that will stay visible */}
                    <div className="md:py-10 py-30">
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 md:mt-0 mb-10 md:mb-2">
                                <h1 className="text-[#666666] md:xl:text-2xl md:mb-0 mb-10 text-3xl uppercase">
                                    Every Project - A Story of creativity
                                </h1>
                                <Link href="/projects">
                                    <div>
                                        <PrimaryButton text="Explore More" />
                                    </div>
                                </Link>
                            </div>
                            <p className="font xl:text-5xl md:text-2xl text-4xl">
                                <span className="inline-block">We Transform Companies through tech</span>
                                <br />
                                <span className="inline-block">
                                    and Design <span className="text-primary">Innovation!</span>
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="flex-1 relative">
                        <div role="list" className="relative h-full flex items-center justify-center">
                            <div
                                ref={addToItemsRef}
                                role="listitem"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="max-w-full max-h-full">
                                    <Image
                                        src={Image1}
                                        alt="Project Display 1"
                                        className="object-contain mx-auto"
                                        priority
                                    />
                                </div>
                            </div>

                            <div
                                ref={addToItemsRef}
                                role="listitem"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="max-w-full max-h-full">
                                    <Image
                                        src={Image2}
                                        alt="Project Display 2"
                                        className="object-contain mx-auto"
                                    />
                                </div>
                            </div>

                            <div
                                ref={addToItemsRef}
                                role="listitem"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="max-w-full max-h-full">
                                    <Image
                                        src={Image3}
                                        alt="Project Display 3"
                                        className="object-contain mx-auto"
                                    />
                                </div>
                            </div>

                            <div
                                ref={addToItemsRef}
                                role="listitem"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="max-w-full max-h-full">
                                    <Image
                                        src={Image4}
                                        alt="Project Display 4"
                                        className="object-contain mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VerticalScrollImages;
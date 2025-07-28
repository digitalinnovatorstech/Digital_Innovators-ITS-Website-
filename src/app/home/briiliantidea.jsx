import React, { useEffect, useRef } from "react";
import Brandimage from "../../../public/assets/home/section2/brand.svg";
import BirdImage from "../../../public/assets/home/section2/pencil.svg";
import TypingImage from "../../../public/assets/home/section2/typing.svg";
import Projects from "../../../public/assets/home/section2/projects.svg";
import Settings from "../../../public/assets/home/section2/settings.svg";
import Digital from "../../../public/assets/home/section2/digital.svg";
import Team from "../../../public/assets/home/section2/team.svg";
import Years from "../../../public/assets/home/section2/years.svg";
import Success from "../../../public/assets/home/section2/success.svg";
import Team1 from "../../../public/assets/home/section2/team1.svg";
import Industries from "../../../public/assets/home/section2/industries.svg";
import Projects1 from "../../../public/assets/home/section2/projects1.svg";
import Image from "next/image";
import "../home/styles/homepage.css";

const Briiliantidea = () => {
    const sectionRef = useRef(null);
    const birdRef = useRef(null);
    const animationStarted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animationStarted.current) {
                        if (sectionRef.current) {
                            sectionRef.current.classList.add("animate-section");
                            animationStarted.current = true;
                            // Start bird animation sequence
                            setTimeout(() => {
                                if (birdRef.current) {
                                    birdRef.current.classList.add("fall-animation");
                                    setTimeout(() => {
                                        if (birdRef.current) {
                                            birdRef.current.classList.remove("fall-animation");
                                            birdRef.current.classList.add("float-animation");
                                        }
                                    }, 1500);
                                }
                            }, 1200);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Initial visibility check
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
            if (isVisible && !animationStarted.current) {
                sectionRef.current.classList.add("animate-section");
                animationStarted.current = true;
                setTimeout(() => {
                    if (birdRef.current) {
                        birdRef.current.classList.add("fall-animation");
                        setTimeout(() => {
                            if (birdRef.current) {
                                birdRef.current.classList.remove("fall-animation");
                                birdRef.current.classList.add("float-animation");
                            }
                        }, 1500);
                    }
                }, 1200);
            }
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="relative bg-[url('/assets/home/backgroundimage.svg')] bg-cover bg-center bg-no-repeat">
            <div
                ref={sectionRef}
                className="container mx-auto px-4 py-16 min-h-screen flex items-center brilliant-idea-section"
            >
                <div className="flex flex-col md:flex-row w-full gap-6">
                    <div className="w-full md:w-1/4 flex flex-col gap-6">
                        <div className="text-white rounded-xl aspect-square flex flex-col justify-between p-6 relative h-full animate-item orange-card overflow-hidden">
                            <Image
                                src={Industries}
                                alt="Industries background"
                                className="object-cover rounded-xl"
                                fill
                            />
                            <div className="absolute top-4 right-4 z-10">
                                <Image
                                    src={Settings}
                                    width={50}
                                    height={50}
                                    alt="Settings icon"
                                />
                            </div>
                            <div className="mt-auto z-10 relative">
                                <h2 className="text-5xl font-bold">10+</h2>
                                <p className="text-base mt-1">Industries</p>
                                <p className="text-base">Empowered</p>
                            </div>
                        </div>
                        <div className="text-white rounded-xl aspect-square flex flex-col justify-between p-6 relative h-full animate-item blue-card overflow-hidden">
                            <Image
                                src={Success}
                                alt="Success background"
                                className="object-cover rounded-xl"
                                fill
                            />
                            <div className="absolute top-4 right-4 z-10">
                                <Image src={Years} width={50} height={50} alt="Years icon" />
                            </div>
                            <div className="mt-auto z-10 relative">
                                <h2 className="text-5xl font-bold">06+</h2>
                                <p className="text-base mt-1">Success Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="mb-8">
                            <div className="flex flex-col space-y-2 font-semibold animate-item heading-text">
                                <h1 className="text-[#BBBBBB] text-xl md:text-3xl font-semibold">
                                    HAVE A BRILLIANT IDEA?
                                </h1>
                                <h2 className="text-xl md:text-3xl font-semibold text-[#BBBBBB]">
                                    SUPERCHARGE YOUR{" "}
                                    <span className="text-primary font-semibold">GROWTH</span>{" "}
                                    <span className="text-black">WITH OUR </span>
                                    <br className="hidden md:block" />
                                    <span className="text-primary font-semibold">
                                        DEVELOPMENT
                                    </span>{" "}
                                    AGENCY AND{" "}
                                    <span className="font-semibold text-black">
                                        ELEVATE YOUR
                                        <br className="hidden md:block" /> BRANDING!
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden h-64 md:h-80 animate-item brand-image">
                                <Image
                                    src={Brandimage}
                                    alt="Brand diagram"
                                    className="object-cover w-full h-full"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4 h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center">
                                <div ref={birdRef} className="bird-pencil">
                                    <Image
                                        src={BirdImage}
                                        alt="Pencil illustration"
                                        width={280}
                                        height={280}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 rounded-xl overflow-hidden h-64 md:h-80 flex items-end relative animate-item projects-card">
                                <Image
                                    src={Projects1}
                                    alt="Projects background"
                                    className="object-cover w-full h-full"
                                    fill
                                />
                                <div className="absolute top-4 right-4 z-10">
                                    <Image
                                        src={Projects}
                                        width={50}
                                        height={50}
                                        alt="Projects icon"
                                    />
                                </div>
                                <div className="p-6 z-10 relative text-white">
                                    <h2 className="text-5xl font-bold">360+</h2>
                                    <p className="text-base">Projects</p>
                                    <p className="text-base">Accomplished</p>
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-4 rounded-xl overflow-hidden h-32 md:h-40 flex items-center p-4 animate-item team-card relative">
                                <Image
                                    src={Team1}
                                    alt="Team background"
                                    className="object-cover w-full h-full"
                                    fill
                                />
                                <div className="mr-4 absolute -top-2 right-2 z-10">
                                    <Image src={Team} width={50} height={50} alt="Team icon" />
                                </div>
                                <div className="z-10 p-4 mt-8 relative text-white">
                                    <h2 className="text-5xl font-bold">200+</h2>
                                    <p className="text-base">Dedicated Team</p>
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-4 rounded-xl overflow-hidden h-32 md:h-40 relative animate-item dark-card">
                                <Image
                                    src={Digital}
                                    alt="Person typing on keyboard"
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-4 rounded-xl overflow-hidden h-32 md:h-40 animate-item typing-image">
                                <Image
                                    src={TypingImage}
                                    alt="Person typing on keyboard"
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Briiliantidea;
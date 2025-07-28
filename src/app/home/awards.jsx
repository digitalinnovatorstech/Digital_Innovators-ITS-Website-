import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import Award from "../../../public/assets/home/awards/award.svg"
import AwardMar1 from "../../../public/assets/home/awards/award1.svg"
import AwardMar2 from "../../../public/assets/home/awards/award2.svg"
import AwardMar3 from "../../../public/assets/home/awards/award3.svg"
import AwardMar4 from "../../../public/assets/home/awards/award4.svg"

const Awards = () => {
    const awardsContainerRef = useRef(null);
    const customMarqueeRef = useRef(null);
    const award1Ref = useRef(null);
    const award2Ref = useRef(null);
    const award3Ref = useRef(null);
    const award4Ref = useRef(null);

    // Custom marquee animation using direct DOM manipulation instead of state
    useEffect(() => {
        if (!customMarqueeRef.current) return;

        let position = 0;
        let animationFrameId = null;

        const animateMarquee = () => {
            position -= 0.05;
            if (position <= -100) {
                position = 0;
            }

            // Directly manipulate the DOM element instead of using state
            if (customMarqueeRef.current) {
                customMarqueeRef.current.style.transform = `translateX(${position}%)`;
            }

            animationFrameId = requestAnimationFrame(animateMarquee);
        };

        animationFrameId = requestAnimationFrame(animateMarquee);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // GSAP animations for award images
    useEffect(() => {
        const loadGSAP = async () => {
            const gsapModule = await import('gsap');
            const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
            const gsap = gsapModule.default;
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: awardsContainerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Award 1: Fade in from left
            tl.fromTo(award1Ref.current,
                { x: -40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                0
            );

            // Award 2: Fade in from bottom
            tl.fromTo(award2Ref.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power1.out"
                },
                0.2
            );

            // Award 3: Simple fade in
            tl.fromTo(award3Ref.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out"
                },
                0.4
            );

            // Award 4: Fade in from right
            tl.fromTo(award4Ref.current,
                { x: 40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "sine.out"
                },
                0.6
            );
        };

        loadGSAP();
    }, []);

    const awards = [
        { text: "Award Winning Designs", ref: award1Ref },
        { text: "4.9 Rating in Google Reviews", ref: award2Ref },
        { text: "Technology Firm of the Year", ref: award3Ref },
        { text: "60+ Dedicated Developers", ref: award4Ref }
    ];

    const serviceItems = [
        { text: "Web Solutions", icon: AwardMar1, hasBg: false },
        { text: "Branding Strategy", icon: AwardMar2, hasBg: true },
        { text: "Digital Solutions", icon: AwardMar3, hasBg: false },
        { text: "UI/UX Design", icon: AwardMar4, hasBg: true },
        { text: "Web Solutions", icon: AwardMar1, hasBg: false },
        { text: "Digital Solutions", icon: AwardMar2, hasBg: true },
        { text: "UI/UX Design", icon: AwardMar3, hasBg: false },
        { text: "Branding Strategy", icon: AwardMar4, hasBg: true },
    ];

    return (
        <div
            ref={awardsContainerRef}
            className="min-h-screen w-full overflow-hidden text-white bg-[url('/assets/home/awardbg.svg')] bg-cover bg-center bg-no-repeat flex flex-col gap-y-10 md:gap-y-30 justify-center items-center py-10 md:py-0"
        >
            {/* Awards grid - 2 per row on mobile, 4 in a row on desktop */}
            <div className="flex justify-center items-center gap-4 md:gap-20 flex-wrap w-full px-4 md:px-10 mt-10">
                {awards.map((award, index) => (
                    <div
                        key={index}
                        ref={award.ref}
                        className="flex flex-col items-center justify-center bg-[#353535] rounded-xl border border-[#868686] shadow-md p-4 md:p-6 w-[45%] md:w-[200px] h-[180px] md:h-[220px] text-center"
                    >
                        <Image src={Award} alt="Award" className="w-16 h-16 md:w-20 md:h-20 mb-4" />
                        <p className="text-white text-sm md:text-base font-medium">{award.text}</p>
                    </div>
                ))}
            </div>

            <div className="w-full mt-6 md:mt-10 flex flex-col">
                {/* Orange banner with marquee - fixed for mobile */}
                <div className="w-full bg-primary py-2 md:py-3 relative -rotate-3 overflow-hidden">
                    {/* Mobile marquee */}
                    <div className="md:hidden">
                        <Marquee
                            speed={40}
                            gradient={false}
                            direction='left'
                        >
                            <span className="mx-4 text-white text-lg font-bold">DESIGN</span>
                            <span className="mx-4 text-white">|</span>
                            <span className="mx-4 text-white text-lg font-bold">DIGITAL</span>
                            <span className="mx-4 text-white">|</span>
                            <span className="mx-4 text-white text-lg font-bold">BUILD</span>
                            <span className="mx-4 text-white">|</span>
                            <span className="mx-4 text-white text-lg font-bold">UI</span>
                            <span className="mx-4 text-white">|</span>
                            <span className="mx-4 text-white text-lg font-bold">UX</span>
                        </Marquee>
                    </div>

                    {/* Desktop custom marquee */}
                    <div
                        ref={customMarqueeRef}
                        className="hidden md:block whitespace-nowrap text-white text-2xl font-bold tracking-wider"
                    >
                        <span className="mx-6">DESIGN</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">DIGITAL</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">BUILD</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">UI</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">UX</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">CRM</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">REACT</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">WEBSITE DESIGN</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">WEBSITE DEVELOPMENT</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">MOBILE APP DESIGN</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">MOBILE APP DESIGN & DEVELOPMENT</span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">CRM DESIGN & DEVELOPMENT </span>
                        <span className="mx-6">|</span>
                        <span className="mx-6">X RESEARCH </span>
                    </div>
                </div>

                {/* Service icons marquee section - fixed for mobile */}
                <div className="w-full py-4 md:py-6 overflow-hidden relative mt-10 md:mt-20 rotate-3">
                    <Marquee
                        speed={40}
                        gradient={false}
                        pauseOnHover={true}
                        direction='right'
                    >
                        {serviceItems.map((item, index) => (
                            <div key={index} className="flex items-center mx-2 md:mx-4">
                                <span className="text-primary mr-2 md:mr-4 whitespace-nowrap border-2 border-primary p-2 md:p-3 rounded-full text-xs md:text-base">
                                    {item.text}
                                </span>
                                <div className={`border-2 border-primary p-2 md:p-3 rounded-full flex items-center justify-center ${item.hasBg ? 'bg-primary' : ''}`}>
                                    <Image
                                        src={item.icon}
                                        alt="service icon"
                                        className="object-contain w-6 h-6 md:w-8 md:h-8"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Awards

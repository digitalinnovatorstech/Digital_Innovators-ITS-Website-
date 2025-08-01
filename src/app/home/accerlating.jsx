// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Image1 from "../../../public/assets/home/handimage.svg";
// import PrimaryButton from "@/components/common/primarybutton";
// import "../home/styles/accerlating.css"
 
// const Accelerating = () => {
//     const [ isVisible, setIsVisible ] = useState(false);
//     const [ hasAnimated, setHasAnimated ] = useState(false);
 
//     useEffect(() => {
//         // IntersectionObserver to detect when section is in view
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 const [ entry ] = entries;
//                 if (entry.isIntersecting && !hasAnimated) {
//                     setIsVisible(true);
//                     setHasAnimated(true);
//                 } else if (!entry.isIntersecting && !hasAnimated) {
//                     setIsVisible(false);
//                 }
//             },
//             { threshold: 0.2 }
//         );
 
//         const section = document.querySelector(".animated-section");
//         if (section) {
//             observer.observe(section);
//         }
 
//         return () => {
//             if (section) {
//                 observer.unobserve(section);
//             }
//         };
//     }, [ hasAnimated ]);
 
//     // Function to handle scroll effect for parallax
//     useEffect(() => {
//         const handleScroll = () => {
//             const section = document.querySelector(".animated-section");
//             if (!section) return;
 
//             const scrollPosition = window.scrollY;
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
 
//             // Only apply parallax when section is in view
//             if (scrollPosition > sectionTop - window.innerHeight &&
//                 scrollPosition < sectionTop + sectionHeight) {
 
//                 const contentElement = document.querySelector(".content-wrapper");
//                 const imageElement = document.querySelector(".image-wrapper");
 
//                 if (contentElement) {
//                     contentElement.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
//                 }
 
//                 if (imageElement) {
//                     imageElement.style.transform = `translateY(${-scrollPosition * 0.08}px)`;
//                 }
//             }
//         };
 
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
 
//     return (
//             <div
//                 className={`animated-section absolute inset-0  h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden ${isVisible ? 'active-section' : ''}`}
//                 style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1695902173528-0b15104c4554?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGxlYXJuaW5nJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D')"
//                 }}
//             >
//             <div className="container py-20">
//                 <h1 className="font md:text-5xl xl:text-6xl text-3xl text-white text-start">
//                     <div className={`animate-fadeInUp`}>
//                         Accelerating Success with
//                         <br />
//                         <span className={`text-primary animate-fadeInUp-delay-300`}>
//                             AI and ML
//                         </span> Development
//                         <br />
//                         Solutions
//                     </div>
//                 </h1>
//                 <p className={`text-white pt-10 md:text-sm xl:text-xl animate-fadeInUp-delay-400`}>
//                     Transforming tomorrow with AI-Powered <br />
//                     intelligence to drive innovation
//                 </p>
//             </div>
 
//             {/* Mobile-specific layout */}
//             <div className="md:hidden flex flex-col items-center absolute bottom-0 w-full">
//                 <div className={`image-wrapper origin-bottom mx-auto mb-20 ${isVisible ? 'animate-fadeInUp-delay-500' : ''}`}>
//                     <Image src={Image1} alt="AI robotics hand" priority />
//                 </div>
 
//                 <div className="text-end pb-16 max-w-xs">
//                     <p className={`text-primary animate-fadeInUp-delay-300 ${isVisible ? 'animate-fadeInUp-delay-600' : ''}`}>
//                         Our custom AI/ML development services enable your system to exhibit
//                         intelligent thinking, auditory perception, and decision-making
//                         capabilities. Leverage advanced algorithms to effectively identify
//                         patterns, extract valuable insights, generate predictions, and
//                         ultimately facilitate data-driven decision-making processes that
//                         propel your organization toward progress.
//                     </p>
 
//                     <Link href="/aiml">
//                         <div className={`mt-20 flex justify-end item-end relative button-wrapper ${isVisible ? 'animate-slideInRight' : ''}`}>
//                             <div className="relative button-element">
//                                 {/* Attention indicator animation */}
//                                 <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping"></div>
//                                 <div className={`${isVisible ? 'animate-float' : ''}`}>
//                                     <PrimaryButton
//                                         text="Explore Our Solutions"
//                                         className="!w-52"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
 
//             {/* Desktop layout (unchanged from original) */}
//             <div className="hidden md:flex justify-between items-end absolute bottom-0 w-full">
//                 <div className={`image-wrapper origin-bottom ${isVisible ? 'animate-fadeInUp-delay-500' : ''}`}>
//                     <Image src={Image1} alt="AI robotics hand" priority />
//                 </div>
 
//                 <div className="text-right pr-4 md:pr-20 lg:pr-60 pb-20 w-full max-w-4xl">
//                  <p className={`text-white font-bold text-base w-[100%] md:text-lg lg:text-xl xl:text-2xl paragraph-element ${isVisible ? 'animate-fadeInUp-delay-600' : ''}`}>
//     Our custom AI/ML development services enable your system to exhibit
//     intelligent thinking, auditory perception, and decision-making
//     capabilities. Leverage advanced algorithms to effectively identify
//     patterns, extract valuable insights, generate predictions, and
//     ultimately facilitate data-driven decision-making processes that
//     propel your organization toward progress.
// </p>
 
 
//                     <Link href="/aiml">
//                         <div className={`mt-10 flex justify-end relative button-wrapper ${isVisible ? 'animate-slideInRight' : ''}`}>
//                             <div className="relative button-element">
//                                 {/* Attention indicator animation */}
//                                 <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping"></div>
//                                 <div className={`${isVisible ? 'animate-float' : ''}`}>
//                                     <PrimaryButton
//                                         text="Explore Our Solutions"
//                                         className="!w-52"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
 
//         </div>
//     );
// };
 
// export default Accelerating;
 
 
 
 
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/assets/home/handimage.svg";
import PrimaryButton from "@/components/common/primarybutton";
import "../home/styles/accerlating.css";
 
const Accelerating = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
 
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                } else if (!entry.isIntersecting && !hasAnimated) {
                    setIsVisible(false);
                }
            },
            { threshold: 0.2 }
        );
 
        const section = document.querySelector(".animated-section");
        if (section) observer.observe(section);
 
        return () => {
            if (section) observer.unobserve(section);
        };
    }, [hasAnimated]);
 
    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".animated-section");
            if (!section) return;
 
            const scrollPosition = window.scrollY;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
 
            if (
                scrollPosition > sectionTop - window.innerHeight &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                const contentElement = document.querySelector(".content-wrapper");
                const imageElement = document.querySelector(".image-wrapper");
 
                if (contentElement) {
                    contentElement.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
                }
 
                if (imageElement) {
                    imageElement.style.transform = `translateY(${-scrollPosition * 0.08}px)`;
                }
            }
        };
 
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
 
    return (
        <div className={`animated-section absolute inset-0 h-screen relative overflow-hidden ${isVisible ? 'active-section' : ''}`}>
            {/* Blurred background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[3px]
 scale-110 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1695902173528-0b15104c4554?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGxlYXJuaW5nJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D')"
                }}
            />
 
            {/* Foreground content */}
            <div className="relative z-10 container py-20 pl-4 sm:pl-6 lg:pl-10">
                <h1 className="font md:text-5xl xl:text-6xl text-3xl text-white text-start">
                    <div className={`animate-fadeInUp`}>
                        Accelerating Success with
                        <br />
                        <span className={`text-primary animate-fadeInUp-delay-300`}>
                            AI and ML
                        </span> Development
                        <br />
                        Solutions
                    </div>
                </h1>
                <p className={`text-white pt-10 md:text-sm xl:text-xl animate-fadeInUp-delay-400`}>
                    Transforming tomorrow with AI-Powered <br />
                    intelligence to drive innovation
                </p>
            </div>
 
            {/* Mobile-specific layout */}
            <div className="md:hidden flex flex-col items-center absolute bottom-0 w-full z-10">
                <div className={`image-wrapper origin-bottom mx-auto mb-20 ${isVisible ? 'animate-fadeInUp-delay-500' : ''}`}>
                    <Image src={Image1} alt="AI robotics hand" priority />
                </div>
 
                <div className="text-end pb-16 pr-20 max-w-xs">
                    <p className={`text-primary animate-fadeInUp-delay-300 ${isVisible ? 'animate-fadeInUp-delay-600' : ''}`}>
                        Our custom AI/ML development services enable your system to exhibit
                        intelligent thinking, auditory perception, and decision-making
                        capabilities. Leverage advanced algorithms to effectively identify
                        patterns, extract valuable insights, generate predictions, and
                        ultimately facilitate data-driven decision-making processes that
                        propel your organization toward progress.
                    </p>
 
                    <Link href="/aiml">
                        <div className={`mt-20 flex justify-end item-end relative button-wrapper ${isVisible ? 'animate-slideInRight' : ''}`}>
                            <div className="relative button-element">
                                <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping"></div>
                                <div className={`${isVisible ? 'animate-float' : ''}`}>
                                    <PrimaryButton
                                        text="Explore Our Solutions"
                                        className="!w-52"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
 
            {/* Desktop layout */}
            <div className="hidden md:flex justify-between items-end absolute bottom-0 w-full z-10">
                <div className="flex-1 flex justify-between items-end">
                    <div className={`image-wrapper origin-bottom transform translate-y-10 ${isVisible ? 'animate-fadeInUp-delay-500' : ''}`}>
                        <Image src={Image1} alt="AI robotics hand" priority />
                    </div>
 
                    <div className="text-right pr-4 md:pr-10 lg:pr-20 pb-20 max-w-2xl ml-10">
                        <p className={`text-white font-bold text-base w-full md:text-lg lg:text-xl xl:text-1xl ${isVisible ? 'animate-fadeInUp-delay-600' : ''}`}>
                            Our custom AI/ML development services enable your system to exhibit
                            intelligent thinking, auditory perception, and decision-making
                            capabilities. Leverage advanced algorithms to effectively identify
                            patterns, extract valuable insights, generate predictions, and
                            ultimately facilitate data-driven decision-making processes that
                            propel your organization toward progress.
                        </p>
 
                        <Link href="/aiml">
                            <div className={`mt-10 flex justify-end relative button-wrapper ${isVisible ? 'animate-slideInRight' : ''}`}>
                                <div className="relative button-element">
                                    <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping"></div>
                                    <div className={`${isVisible ? 'animate-float' : ''}`}>
                                        <PrimaryButton
                                            text="Explore Our Solutions"
                                            className="!w-52"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Accelerating;

// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { SquaresFour, ChartBar, Buildings, ArrowRight } from "phosphor-react";
 
// import InnovatorsDark from "../../../public/assets/home/Innovators_dark.svg";
// import Menu from "../../../public/assets/menuicon.svg";
// import MenuOrange from "../../../public/assets/menuorangeicon.svg";
// import MenuContent from "../menucomponent";
 
// export default function Header() {
//   const [ opened, setOpened ] = useState(false);
//   const [ scrollProgress, setScrollProgress ] = useState(0);
//   const [ isScrolled, setIsScrolled ] = useState(false);
//   const [ isMobile, setIsMobile ] = useState(false);
//   const [ isHovered, setIsHovered ] = useState(false);
//   const [ headerIconPosition, setHeaderIconPosition ] = useState({ top: 0, right: 0 });
 
//   const menuButtonRef = useRef(null);
//   const headerMenuButtonRef = useRef(null);
 
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";
 
//   const navLinks = [
//     {
//       title: "SERVICES",
//       href: "/services",
//       icon: <SquaresFour size={20} weight="bold" className="mr-1" />
//     },
//     {
//       title: "INSIGHTS",
//       href: "/insights",
//       icon: <ChartBar size={20} weight="bold" className="mr-1" />
//     },
//     {
//       title: "INDUSTRIES",
//       href: "/industries",
//       icon: <Buildings size={20} weight="bold" className="mr-1" />
//     },
//     {
//       title: (
//         <Link href="/contact" className="group relative overflow-hidden">
//           <div className="relative z-10 bg-gradient-to-r from-[#FF7A00] to-[#FFAE00] hover:from-[#FF8A1A] hover:to-[#FFC14D] transition-all duration-500 px-3 py-2.5 rounded-lg flex items-center gap-3">
//             <style jsx>{`
//               .shiny-effect::before {
//                 content: '';
//                 position: absolute;
//                 top: 0;
//                 left: 0;
//                 right: 0;
//                 bottom: 0;
//                 background: linear-gradient(
//                   to right,
//                   transparent 0%,
//                   rgba(255, 255, 255, 0.4) 50%,
//                   transparent 100%
//                 );
//                 background-size: 200% 100%;
//                 background-position: 150% 0;
//                 animation: shine 3s infinite;
//               }
//               @keyframes shine {
//                 0% { background-position: 150% 0; }
//                 100% { background-position: -50% 0; }
//               }
//             `}</style>
//             <div className="shiny-effect absolute inset-0 rounded-lg"></div>
//             <span className="relative z-10 text-white font-medium">Get in touch</span>
//             <span className="relative z-10 bg-white w-6 h-6 rounded-full flex items-center justify-center">
//               <ArrowRight size={12} weight="bold" className="text-orange-500" style={{ transform: "rotate(-45deg)" }} />
//             </span>
//           </div>
//         </Link>
//       ),
//       href: "/contact-us",
//     },
//   ];
 
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);
 
//   useEffect(() => {
//     if (headerMenuButtonRef.current) {
//       const updateIconPosition = () => {
//         const rect = headerMenuButtonRef.current.getBoundingClientRect();
//         setHeaderIconPosition({
//           top: rect.top,
//           right: window.innerWidth - rect.right,
//         });
//       };
//       updateIconPosition();
//       window.addEventListener("resize", updateIconPosition);
//       return () => window.removeEventListener("resize", updateIconPosition);
//     }
//   }, []);
 
//   useEffect(() => {
//     let animationFrameId = null;
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const progress = Math.min(scrollTop / scrollHeight, 1);
//       setScrollProgress(progress);
//       setIsScrolled(scrollTop > 50);
//     };
//     const throttledHandleScroll = () => {
//       if (animationFrameId === null) {
//         animationFrameId = requestAnimationFrame(() => {
//           handleScroll();
//           animationFrameId = null;
//         });
//       }
//     };
//     window.addEventListener("scroll", throttledHandleScroll);
//     return () => {
//       window.removeEventListener("scroll", throttledHandleScroll);
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, []);
 
//   useEffect(() => {
//     if (opened) document.body.classList.add("overflow-hidden");
//     else document.body.classList.remove("overflow-hidden");
//     return () => document.body.classList.remove("overflow-hidden");
//   }, [ opened ]);
 
//   const radius = 21;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - scrollProgress * circumference;
 
//   return (
//     <>
//       <div
//         ref={menuButtonRef}
//         className={`fixed z-50 hidden lg:block transition-all duration-500 ease-in-out ${opened ? "opacity-0 pointer-events-none" : "opacity-100"
//           } ${isScrolled ? "scale-100" : "scale-0 opacity-0 pointer-events-none"}`}
//         style={{
//           top: isScrolled ? "2.5rem" : "1rem",
//           right: isScrolled ? "1rem" : `${headerIconPosition.right}px`,
//         }}
//       >
//         <div className="relative w-15 h-15">
//           <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full shadow-md"></div>
//           <svg
//             className="absolute top-0 left-0 w-full h-full -rotate-90 z-10"
//             viewBox="0 0 46 46"
//           >
//             <circle
//               cx="23"
//               cy="23"
//               r={radius}
//               fill="transparent"
//               stroke="#ff8c00"
//               strokeWidth="2"
//               strokeDasharray={circumference}
//               strokeDashoffset={strokeDashoffset}
//               strokeLinecap="round"
//               className="transition-all duration-150 ease-out"
//               style={{
//                 filter: "drop-shadow(0 0 4px rgba(255, 140, 0, 0.5))",
//               }}
//             />
//           </svg>
//           <button
//             onClick={() => setOpened(true)}
//             className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full transition z-20"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <img
//               src={isHovered ? MenuOrange.src : Menu.src}
//               alt="Menu Icon"
//               className="object-contain"
//               width={30}
//               height={30}
//             />
//           </button>
//         </div>
//       </div>
 
//       <div
//         className={`backdrop-blur-lg bg-[rgba(255,248,242,0.97)] text-gray-900 ${opened ? "relative" : "relative w-full z-40"}`}
//         style={{
//           background: 'linear-gradient(90deg, rgba(255,248,242,0.97) 60%, rgba(255,233,213,0.93) 100%)',
//           WebkitBackdropFilter: 'blur(14px)',
//           backdropFilter: 'blur(14px)',
//           border: '1px solid rgba(255,184,107,0.18)',
//           boxShadow: '0 4px 24px 0 rgba(255,184,107,0.08)',
//         }}
//       >
//         <div className="header-container container flex justify-between items-center transition-all duration-500 ease-in-out">
//           <div>
//             <Link href="/">
//               <Image
//                 src={InnovatorsDark}
//                 alt="Company Logo"
//                 className="w-26 h-26 cursor-pointer"
//               />
//             </Link>
//           </div>
 
//           <div className="flex items-center gap-8">
//             <ul className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <li
//                   key={typeof link.title === "string" ? link.title : link.href}
//                 >
//                   {typeof link.title === "string" ? (
//                     <a
//                       href={link.href}
//                       className="text-secondary text-sm hover:text-primary tracking-[.15em] flex items-center gap-2"
//                     >
//                       <span className="flex-shrink-0">{link.icon}</span>
//                       <span>{link.title}</span>
//                     </a>
//                   ) : (
//                     link.title
//                   )}
//                 </li>
//               ))}
//             </ul>
 
//             <div ref={headerMenuButtonRef} className="relative">
//               <button
//                 onClick={() => setOpened(true)}
//                 className="p-3 relative z-10 cursor-pointer"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <img
//                   src={isHovered ? MenuOrange.src : Menu.src}
//                   alt="Menu Icon"
//                   className="object-contain"
//                   width={40}
//                   height={40}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
 
//       {opened && <MenuContent setOpened={setOpened} />}
//     </>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import InnovatorsDark from "../../../public/assets/home/Innovators_dark.svg";
import Menu from "../../../public/assets/menuicon.svg";
import MenuOrange from "../../../public/assets/menuorangeicon.svg";
import MenuContent from "../menucomponent";

export default function Header() {
  const [ opened, setOpened ] = useState(false);
  const [ scrollProgress, setScrollProgress ] = useState(0);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ isMobile, setIsMobile ] = useState(false);
  const [ isHovered, setIsHovered ] = useState(false);
  const [ headerIconPosition, setHeaderIconPosition ] = useState({ top: 0, right: 0 });

  const menuButtonRef = useRef(null);
  const headerMenuButtonRef = useRef(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { title: "SERVICES", href: "/services" },
    { title: "INSIGHTS", href: "/insights" },
    { title: "INDUSTRIES", href: "/industries" },
    {
      title: (
        <Link href="/contact">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative flex items-center gap-2">
              <div className="relative flex items-center gap-2">
                <span className="text-primary">LETS</span>
                <span className="text-black">Talks</span>
                <div className="absolute -bottom-2 left-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  <span className="h-[2px] bg-primary w-6 transition-all duration-300 group-hover:w-[70px]"></span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ),
      href: "/contact-us",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (headerMenuButtonRef.current) {
      const updateIconPosition = () => {
        const rect = headerMenuButtonRef.current.getBoundingClientRect();
        setHeaderIconPosition({
          top: rect.top,
          right: window.innerWidth - rect.right,
        });
      };
      updateIconPosition();
      window.addEventListener("resize", updateIconPosition);
      return () => window.removeEventListener("resize", updateIconPosition);
    }
  }, []);

  useEffect(() => {
    let animationFrameId = null;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);
    };
    const throttledHandleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(() => {
          handleScroll();
          animationFrameId = null;
        });
      }
    };
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (opened) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [ opened ]);

  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <>
      <div
        ref={menuButtonRef}
        className={`fixed z-50 hidden lg:block transition-all duration-500 ease-in-out ${opened ? "opacity-0 pointer-events-none" : "opacity-100"
          } ${isScrolled ? "scale-100" : "scale-0 opacity-0 pointer-events-none"}`}
        style={{
          top: isScrolled ? "2.5rem" : "1rem",
          right: isScrolled ? "1rem" : `${headerIconPosition.right}px`,
        }}
      >
        <div className="relative w-15 h-15">
          <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full shadow-md"></div>
          <svg
            className="absolute top-0 left-0 w-full h-full -rotate-90 z-10"
            viewBox="0 0 46 46"
          >
            <circle
              cx="23"
              cy="23"
              r={radius}
              fill="transparent"
              stroke="#ff8c00"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
              style={{
                filter: "drop-shadow(0 0 4px rgba(255, 140, 0, 0.5))",
              }}
            />
          </svg>
          <button
            onClick={() => setOpened(true)}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full transition z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? MenuOrange.src : Menu.src}
              alt="Menu Icon"
              className="object-contain"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      <div
        className={`${isHomePage ? "bg-transparent text-secondary" : "bg-white text-secondary"} ${opened ? "relative" : "relative w-full z-40"
          }`}
      >
        <div className="header-container container flex justify-between items-center transition-all duration-500 ease-in-out">
          <div>
            <Link href="/">
              <Image
                src={InnovatorsDark}
                alt="Company Logo"
                className="w-26 h-26 cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li
                  key={typeof link.title === "string" ? link.title : link.href}
                >
                  {typeof link.title === "string" ? (
                    <a
                      href={link.href}
                      className="text-secondary text-sm hover:text-primary tracking-[.15em]"
                    >
                      {link.title}
                    </a>
                  ) : (
                    link.title
                  )}
                </li>
              ))}
            </ul>

            <div ref={headerMenuButtonRef} className="relative">
              <button
                onClick={() => setOpened(true)}
                className="p-3 relative z-10 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={isHovered ? MenuOrange.src : Menu.src}
                  alt="Menu Icon"
                  className="object-contain"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {opened && <MenuContent setOpened={setOpened} />}
    </>
  );
}

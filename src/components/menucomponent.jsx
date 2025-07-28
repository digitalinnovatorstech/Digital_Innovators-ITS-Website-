"use client";
import Link from "next/link";
import "../components/styles/menustyles.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Img1 from "../../public/assets/menu/design.svg";
import Img2 from "../../public/assets/menu/build.svg";
import Img3 from "../../public/assets/menu/digital.svg";
import Arrow from "../../public/assets/menu/arrow.svg";
import { useEffect, useState } from "react";
import "../components/menustyles.css";
import VerticalTextMarquee from "./animated";

export default function MenuContent({ setOpened }) {
  const handleLinkClick = () => setOpened(false);


  const [ lottieLoaded, setLottieLoaded ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLottieLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  const mainNavLinks = [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "/about" },
    { title: "SERVICES", href: "/services" },
    { title: "OUR WORKS", href: "/projects" },
    { title: "CLIENTS", href: "/clients" },
    { title: "TECHNOLOGY", href: "/technologies" },
    { title: "INDUSTRIES", href: "/industries" },
    { title: "INSIGHTS", href: "/insights" },
    { title: "CONTACT US", href: "/contact" },
  ];

  const socialIcons = [
    { src: "/assets/facebookicon.svg", alt: "Facebook" },
    { src: "/assets/instagram.svg", alt: "Instagram" },
    { src: "/assets/linkedin.svg", alt: "LinkedIn" },
    { src: "/assets/youtube.svg", alt: "YouTube" },
    { src: "/assets/x.svg", alt: "X" },
  ];

  return (
    <div className="menu-content fixed inset-0 w-full h-full z-[9999] flex flex-col md:flex-row">
      {/* Overlay to prevent interaction with background */}
      <div className="fixed inset-0 w-full h-full bg-opacity-50 z-[9998]"></div>

      
      <button
        onClick={() => setOpened(false)}
        className="p-2 rounded-full absolute top-2 right-2 md:top-6 md:right-50 z-[10000]"
      >
        <img src="/assets/menucloseicon.svg" alt="Close Menu" />
      </button>

    
      <div className="hidden md:block">
        <VerticalTextMarquee />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:w-full md:h-full z-[9999] relative">
      
        <div className="w-[60%] bg-[#fffcee] flex">
          <div className="w-[20%] h-full flex items-center justify-center overflow-hidden">
            {/* Vertical Marquee */}
            <div className="">
              <Marquee
                direction="up"
                speed={50}
                gradient={false}
                className="h-full"
              >
                <div className="flex flex-col h-full gap-y-10">
                  <div className=" px-4 flex flex-col items-center">
                    <Image
                      src={Img1}
                      alt="Design"
                      width={60}
                      height={60}
                      className="mb-3 "
                    />
                  </div>
                  <div className=" px-4 flex flex-col items-center">
                    <Image
                      src={Img2}
                      alt="Build"
                      width={60}
                      height={60}
                      className="mb-3"
                    />
                  </div>
                  <div className=" px-4 flex flex-col items-center">
                    <Image
                      src={Img3}
                      alt="Build"
                      width={60}
                      height={60}
                      className="mb-3"
                    />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
          <div className="w-full">
            <div className="h-[50%] flex flex-col justify-center items-start">
              <div className="flex md:justify-start mb-10">
                <img src="/assets/footer/innovators.svg" alt="Logo" />
              </div>
              <div className="mb-10">
                <p className="text-black text-lg text-justify">
                  We'd love to empower businesses with innovative, scalable{" "}
                  <br />
                  digital solutions designed to evolve with your vision and
                  drive <br />
                  sustainable growth.
                </p>
                <div className="flex gap-16 mt-8">
                  <Link href="/design" onClick={handleLinkClick} className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Image src={Arrow} alt="Arrow" width={16} height={16} />
                      <p className="text-black font-bold text-lg">Design</p>
                    </div>
                  </Link>
                  <Link href="/digital" onClick={handleLinkClick} className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Image src={Arrow} alt="Arrow" width={16} height={16} />
                      <p className="text-black font-bold text-lg">Digital</p>
                    </div>
                  </Link>
                  <Link href="/build" onClick={handleLinkClick} className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Image src={Arrow} alt="Arrow" width={16} height={16} />
                      <p className="text-black font-bold text-lg">Build</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
            <div className="h-[50%]">
              <div>
                <div className="bird_header relative">
                  {/* SVG circle with path starting from bottom - adjusted to avoid touching the letter "e" */}
                  <svg
                    className="absolute"
                    width="220"
                    height="200"
                    viewBox="0 0 200 200"
                    style={{
                      top: "-65px", // Moved up more to ensure gap above "e"
                      left: "250px",
                      zIndex: 0,
                      transform: "rotate(90deg)",
                    }}
                  >
                    <circle
                      className="svg-circle"
                      cx="100"
                      cy="100"
                      r="90" // Reduced radius further to ensure gap below "e"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="534.07" // 2 * PI * 85
                      strokeDashoffset="534.07" // Start fully invisible
                    />
                  </svg>
                  {/* Text and bird container */}
                  <Link href="/contact" onClick={handleLinkClick}>
                    <div className="flex items-start relative z-10">
                      <span
                        className="text-6xl font cursor-pointer"
                      >
                        Let's Connect
                      </span>
                      <div className="relative">
                        {lottieLoaded && (
                          <DotLottieReact
                            src="/assets/flyingbird.lottie"
                            loop
                            autoplay
                            className="w-20 h-20 -mt-10"
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <h1 className="text-lg font-bold mt-16">Build with us</h1>
              <p className="text-lg font-normal mt-2">1800 203 4199</p>
              <p className="text-lg font-normal mt-2">
                info@innovatorstech.com
              </p>
              <div className="text-sm text-black mt-16">
                <span>FAQ's | </span>
                <span>Privacy Policy | </span>
                <span>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Dark colored */}
        <div className="w-[40%] bg-[#353535] text-white p-20 flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <nav className="main-navigation">
              <ul className="space-y-6">
                {mainNavLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="md:text-xl xl:text-2xl font-medium hover:text-gray-300 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-30 flex gap-6">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="social-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                }}
              >
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout - Complete restructure with 50/50 vertical split */}
      <div className="md:hidden flex flex-col h-full w-full z-[9999] relative">
        {/* Bottom section with navigation - 50% height */}
        <div className="bg-[#353535] 6 text-white p-6 h-1/2 flex flex-col">
          {/* Navigation links */}
          <nav className="flex-grow">
            <ul className="space-y-3">
              {mainNavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium block py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="social-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                }}
              >
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Top section with content - 50% height */}
        <div className="bg-[#fffcee] p-6 h-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <img
              src="/assets/footer/innovators.svg"
              alt="Logo"
              className="mb-6"
            />
            <div className="mb-10">
              <p className="text-black text-sm text-justify">
                We'd love to empower businesses with innovative, scalable
                digital solutions designed to evolve with your vision and drive
                sustainable growth.
              </p>
              <div className="flex gap-16 mt-5">
                <Link href="/design" onClick={handleLinkClick} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                    <p className="text-black font-bold text-sm">Design</p>
                  </div>
                </Link>
                <Link href="/digital" onClick={handleLinkClick} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                    <p className="text-black font-bold text-sm">Digital</p>
                  </div>
                </Link>
                <Link href="/build" onClick={handleLinkClick} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Image src={Arrow} alt="Arrow" width={16} height={16} />
                    <p className="text-black font-bold text-sm">Build</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>
          <Link href="/contact">
            <div className="flex items-start relative z-10">
              <span className="text-5xl font cursor-pointer">
                Let's Connect
              </span>
              <div className="relative ">
                {/* SVG circle for mobile - also rotated to start from bottom */}
                {/* <svg
                  className="absolute"
                  width="120"
                  height="150"
                  viewBox="0 0 150 150"
                  style={{
                    top: '-45px',
                    left: '-50px',
                    zIndex: 0,
                    transform: 'rotate(210deg)'
                  }}
                >
                  <circle
                    cx="75"
                    cy="75"
                    r="73"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="458"
                    strokeDashoffset="115" // Approximately 25% gap (458 * 0.25 = 114.5)
                  />
                </svg> */}

                <DotLottieReact
                  src="/assets/flyingbird.lottie"
                  loop
                  autoplay
                  className="w-20 h-20 -mt-10"
                />
              </div>
            </div>
          </Link>
          <div className="contact-info mt-auto">
            <p className="text-base font-medium">1800 203 4199</p>
            <p className="text-base font-medium mb-4">
              info@innovatorstech.com
            </p>
            <div className="text-xs text-gray-600">
              <span>FAQ's | </span>
              <span>Privacy Policy | </span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import InnovatorsDark from "../../../public/assets/home/Innovators_dark.svg";
import Menu from "../../../public/assets/menuicon.svg";
import MenuOrange from "../../../public/assets/menuorangeicon.svg";
import MenuContent from "../menucomponent";

export default function Header() {
  const [ opened, setOpened ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ isMobile, setIsMobile ] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [ isHovered, setIsHovered ] = useState(false);

  const navLinks = [
    { title: "SERVICES", href: "/services" },
    { title: "INSIGHTS", href: "/insights" },
    { title: "INDUSTRIES", href: "/industries" },
    {
      title: (
        <Link href="/contact">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative flex items-center gap-2">
              {/* Text */}
              <div className="relative flex items-center gap-2">
                <span className="text-primary ">LETS</span>
                <span className="text-black ">Talks</span>

                {/* Dot + Line under LETS */}
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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll to toggle header visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (opened) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [ opened ]);

  return (
    <>
      <div
        className={`${isHomePage
          ? "bg-transparent text-secondary"
          : "bg-white text-secondary"
          } ${opened ? "relative" : "relative w-full z-40"}`}
      >
        <div className="header-container container">
          <div className="logo-container" >
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
                <li key={typeof link.title === "string" ? link.title : link.href}>
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

            {/* Menu button for mobile */}
            <div className="relative">
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

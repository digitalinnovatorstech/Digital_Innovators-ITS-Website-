"use client";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../common/primarybutton";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialLinks = [
    {
      icon: "/assets/footer/facebook.svg",
      alt: "Facebook",
      url:  "https://www.facebook.com/khkrinnovatorstech"
    },
    {
      icon: "/assets/footer/instagram.svg",
      alt: "Instagram",
      url: "https://www.instagram.com/innovators_tech_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      icon: "/assets/footer/youtube.svg",
      alt: "Youtube",
      url: "https://www.youtube.com/@InnovatorsTechSolutions"
    },
    {
      icon: "/assets/footer/x.svg",
      alt: "X",
      url: "https://x.com/InnovatorsTechs"
    },
    {
      icon: "/assets/footer/linkedin.svg",
      alt: "Linkedin",
      url: "https://www.linkedin.com/company/innovatorstech/posts/?feedView=all"
    },
  ];

  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Services", url: "/services" },
    { title: "Our Works", url: "/projects" },
    { title: "Clients", url: "/clients" },
    { title: "About", url: "/about" },
    { title: "Industries", url: "/industries" },
    { title: "Technology", url: "/technologies" },
    { title: "Contact Us", url: "/contact" },
  ];

  return (
    <>
      <div className="md:h-screen ">
        {/* First section - 50% height with vertically centered content */}
        <div className="bg-tertiary py-10 md:py-0 h-[60%] flex items-center">
          <div className="container">
            <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
              {/* Left Section */}
              <div className="text-white  rounded-lg mb-10 md:mb-0">
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4 bg-[#232326] w-fit mx-auto md:mx-0 p-2 rounded-lg">
                  <span className="w-3 h-3 bg-[#A6FB7B] rounded-full"></span>
                  <span className="text-xs font-medium text-white">AVAILABLE NOW</span>
                </div>
                {/* Heading */}
                <h1 className="text-3xl md:text-2xl xl:text-4xl font-bold leading-tight mb-6">
                  START YOUR <br /> JOURNEY WITH US
                </h1>
                <p className="text-white text-base md:text-xs xl:text-lg mb-8 text-sm">
                  Imagine The Success Your Business Could Achieve. Let's
                  <span className="hidden xl:inline"><br /></span>
                  Discuss The Possibilities In A Free Consultation.
                </p>
                {/* CTA Button */}
                <Link href="/contact/general">
                  <div >
                    <PrimaryButton
                      text="Let's Connect Now"
                      className="!bg-[#595959] !w-52 mt-4 !uppercase hover:!bg-primary !p-6 transition-colors duration-200"
                    />
                  </div>
                </Link>
              </div>
              {/* Right Section */}
              <div>
                <img
                  src="/assets/footer/letsconnect.svg"
                  alt="image"
                  className="w-[250px] md:w-[300px] xl:w-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Second section - 50% height with vertically centered content */}
        <div className="h-[40%] flex items-center">
          <div className="container mx-auto">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-6">
              <img src="/assets/footer/innovators.svg" alt="Logo" />
            </div>
            {/* Main Row: Socials & Navigation */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              {/* Social Links */}
              <div className="flex gap-8 justify-center md:justify-start md:w-[40%] mt-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="xl:w-8 xl:h-8 md:w-8 md:h-8"
                    />
                  </a>
                ))}
              </div>
              {/* Navigation Links */}
              <div className="w-full flex justify-center md:justify-start md:w-[60%]">
                <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-left w-full max-w-xs md:grid-cols-4 md:max-w-full md:text-left sm:grid-cols-3 ml-12 md:ml-0">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="font-medium text-black hover:text-primary text-base md:text-xs xl:text-lg"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="border-t border-black my-6 hidden md:block" />
            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center md:text-sm text-xs text-black gap-3 mt-5 md:mt-0">
              <div className="flex items-center gap-2">
                <img src="/assets/footer/cicon.svg" alt="Copyright" />
                <span>2025, KHKR Innovators Tech Solutions. All Rights Reserved</span>
              </div>
              <hr className="border-t border-black w-full md:hidden" />
              <div className="flex gap-4">
                <a href="#" className="hover:underline">FAQ's </a>
                <div className="h-4 border-r border-current "></div>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <div className="h-4 border-r border-current "></div>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

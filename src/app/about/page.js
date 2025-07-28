" use client";
import React from "react";
import PeopleImage from "../../../public/assets/about/peoplesimage.svg";
import Potimage from "../../../public/assets/about/potimage.svg";

import HeroSection from "./herosection/page";
import HowItWorks from "./howitworks/page";
import ClientsCarouselBar from "@/components/common/clientbar";
import EmpowerSection from "@/components/common/empower";
import ServicesCarousel from "@/components/common/blackbarcarousal";
import Customer from "@/components/common/customer";
import StepsWeDO from "./stepswedo";
import Image from "next/image";
export default function About() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <HowItWorks />
      <div className="my-10">
        {" "}
        <ClientsCarouselBar />
      </div>
      <EmpowerSection />

      <ServicesCarousel />
      <StepsWeDO />
      <div className="my-20">
        <Customer />
      </div>
      <div className="md:flex md:justify-between md:items-center md:px-10 md:py-5 hidden ">
        <Image
          src={PeopleImage}
          alt="image"
          className="w-32 sm:w-40 md:w-sm lg:w-lg mt-10 md:mt-0"
        />
        <Image
          src={Potimage}
          alt="image"
          className="hidden md:block w-32 md:w-12 lg:w-16"
        />
      </div>
    </div>
  );
}

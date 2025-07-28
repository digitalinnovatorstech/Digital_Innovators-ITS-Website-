"use client";

import React from "react";

import Image from "next/image";
import "@/app/contact/styles/contact.css";
import TechnologyStack from "@/components/common/technologystack";
import Image1 from "../../../public/assets/insights/mainimage.svg";
import Image2 from "../../../public/assets/insights/background.svg";
import ClientsCarouselBar from "@/components/common/clientbar";
import BlogTabs from "./blogtabs";
import PrimaryButton from "@/components/common/primarybutton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Insights() {
  return (
    <>
      <div className="container  ">
        <div className="flex flex-col gap-2 px-4 ">

          <div className="bird_header">
            <span className="bird_subheader">Insights</span>

            <DotLottieReact
              src="/assets/flyingbird.lottie"
              loop
              autoplay
              className="flying_bird"
            />
          </div>

          <div className="flex flex-col w-full md:flex-row items-center justify-between">
            <div className="md:w-[70%] w-full">
              <h1 className="font text-3xl xl:text-5xl mt-5 md:-mt-15">
                Our <span className="text-primary">Insights</span> could help{" "}
                <span className="text-primary mr-2">build</span>
                <span className="md:hidden"> your business successfully.</span>
                <span className="hidden md:inline">
                  <br />
                  your business successfully.
                </span>
              </h1>
            </div>
            <div className="w-[25%] hidden md:block">
              <Image src={Image1} alt="Illustration" />
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-2">Latest Posts</h2>

          <div className="md:mb-8 relative">
            <Image
              src={Image2}
              alt="Blog Post 1"
              className="w-full h-full "
            />

            {/* Overlay Content */}
            <div className="overlay_container">
              <div className="overlay">
                <div className="flex flex-col justify-between text-start h-full gap-6">
                  <p className="xl:text-lg text-black">Posted on 2 January, 2025</p>

                  <h3 className="xl:text-4xl lg:text-2xl font-semibold text-black capitalize">
                    Top 5 AI Tools Used for
                    <br /> Design in 2025
                  </h3>

                  <PrimaryButton className="xl:mt-10 md:mt-0" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <BlogTabs />
        <div className=" ">
          {" "}
          <TechnologyStack />
        </div>
      </div>

      <div className="md:mt-24 mb-12 mt-10">
        <ClientsCarouselBar />
      </div>
    </>
  );
}

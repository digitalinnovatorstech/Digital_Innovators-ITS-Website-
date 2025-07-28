" use client";
import React from "react";
import IndustriesBlogs from "./Herosection";
import WhatWeDo from "./whatwedo";
import ClientsCarouselBar from "@/components/common/clientbar";
import StayUpdates from "@/components/common/stayupdates";

export default function Technologies() {
  return (
    <div className="h-full w-full">
      <IndustriesBlogs />
      <WhatWeDo />

      <div className="my-20">
        <ClientsCarouselBar />
      </div>

      <div className="">
        <StayUpdates />
      </div>
    </div>
  );
}

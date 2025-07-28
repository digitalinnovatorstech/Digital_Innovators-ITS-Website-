
import React from "react";


import ClientHeroSection from "./herosection/page";
import Customer from "@/components/common/customer";
import StayUpdates from "@/components/common/stayupdates";

export default function Clients() {
  return (
    <div className="h-full w-full  ">
      <ClientHeroSection />
      <div className="my-30">
        <Customer />
      </div>
      <div className="my-15">
        <StayUpdates />
      </div>

    </div>
  );
}

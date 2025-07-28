" use client";
import React from "react";

import WorkProcess from "./workprocess";
import CarouselBar from "./carousalbar";
import ProjectHeroSection from "./herosection";
import ClientsCarouselBar from "@/components/common/clientbar";
import TechnologyStack from "@/components/common/technologystack";
import ProjectsList from "./projectslist";
import StayUpdates from "@/components/common/stayupdates";

export default function Projects() {
  return (
    <div className="h-full w-full">
      <ProjectHeroSection />
      <WorkProcess />
      <CarouselBar />
      <ProjectsList />
      <div className="mt-20 ">
        <ClientsCarouselBar />
      </div>
      <div className=" mb-10 container">
        <TechnologyStack />
      </div>
      <div className="my-20 mb-20">
        <StayUpdates />
      </div>
    </div>
  );
}

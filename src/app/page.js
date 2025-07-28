"use client";
import React, { useEffect } from "react";

import HomeHeroSection from "./home/herosection";
import SecondSection from "./home/secondsection";
import LatestProjects from "./home/latestproject";
import StepsWeDO from "./about/stepswedo";
import ClientsSection from "./home/clients";

import OurServices from "./home/ourservices";
import AIMLServices from "./home/aiml";
import Accerlating from "./home/accerlating";
import Customer from "../components/common/customer";
import StayUpdates from "../components/common/stayupdates";
import Weworkfor from "./home/weworkfor";
import WorkProcess from "./projects/workprocess";
import Technologies from "./home/technologies";
import Awards from "./home/awards";
import Briiliantidea from "./home/briiliantidea";
import Projects from "./home/project";
import VerticalScrollImages from "./home/project";
import TechnologiesWrapper from "./home/techwrapper";
import ResponsiveBrilliantIdea from "./home/brilliantwrapper";
import HorizontalScrollSection from "./scroll/page";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      {/* <SecondSection /> */}
      <ResponsiveBrilliantIdea />
      {/* <OurServices /> */}
      <HorizontalScrollSection />
      <Weworkfor />
      <VerticalScrollImages />
      <TechnologiesWrapper />
      <StepsWeDO />

      <ClientsSection />
      <Awards />
      <Accerlating />
      <AIMLServices />
      <Customer />
      <div className="my-20 md:my-0">
        {" "}
        <StayUpdates />
      </div>
    </>
  );
}

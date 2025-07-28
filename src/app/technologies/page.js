" use client";
import React from "react";

import WebTechnologies from "./webtechnologies/page";
import MobileTechnologies from "./mobiledevices";
import CMS from "./cms";
import DesignTesting from "./designeandtesting/indes";
import Cloud from "./cloud";
import DataBase from "./database";
import AIandPlatforms from "./ai&platforms";
import ClientsCarouselBar from "@/components/common/clientbar";
import StayUpdates from "@/components/common/stayupdates";

export default function Technologies() {
  return (
    <div className="h-full w-full ">
      <WebTechnologies />
      <MobileTechnologies />
      <CMS />
      <DesignTesting />
      <Cloud />
      <DataBase />
      <AIandPlatforms />
      <div className="my-30">
        <ClientsCarouselBar />
      </div>
      <div className=" md:hidden my-10">
        {" "}
        <StayUpdates />{" "}
      </div>
    </div>
  );
}

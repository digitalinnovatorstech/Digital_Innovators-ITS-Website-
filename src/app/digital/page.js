import React from "react";
import Digitalherosection from "./components/digitalherosection";
import Section3 from "./components/section3";
import Weshape from "./components/weshape";
import Wtweexpect from "./components/wtweexpect";
import WhatWeServe from "./components/wtweserve";

const DigitalPage = () => {
    return (
        <div>
            {" "}
            <Digitalherosection />
            <Section3 /> <WhatWeServe />
            <Weshape />
            <Wtweexpect />

        </div>
    );
};

export default DigitalPage;

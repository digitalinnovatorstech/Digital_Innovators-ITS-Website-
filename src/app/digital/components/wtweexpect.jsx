import Image from "next/image";
import React from "react";
import Expect1 from "../../../../public/assets/digital/expect1.svg";
import Expect2 from "../../../../public/assets/digital/expect2.svg";
import Expect3 from "../../../../public/assets/digital/expect3.svg";
import Expect4 from "../../../../public/assets/digital/expect4.svg";
import Expect5 from "../../../../public/assets/digital/expect5.svg";

const WhatWeExpect = () => {
    return (
        <div className="container mx-auto  py-20">
            <h2 className="text-lg font-medium mb-6">What you Can Expect</h2>

            <h1 className="text-4xl font-bold mb-6">
                What Strategists Love{" "}
                <span className="text-primary">INNOVATORS</span>
            </h1>

            <p className="text-lg font-semibold mb-6">
                Innovators are the spark that ignites strategy.
            </p>

            <p className="text-md mb-10">
                Strategists love innovators because they inspire action, not just ideas.
                They turn "what ifs" into "what's next." Their boldness creates
                opportunities where others see obstacles. Together, strategists and
                innovators build futures—bold, brilliant, and beautifully uncharted.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Discovery & Strategy card */}
                <div className="border border-gray-200 rounded-lg p-6 ">
                    <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
                    <p className="mb-6">
                        Innovators lay the foundation for a campaign with purpose and
                        precision.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Expect1}
                            alt="Person pointing at a target"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Research & Planning card */}
                <div className="border border-gray-200 rounded-lg p-6 ">
                    <h3 className="text-2xl font-bold mb-4">Research & Planning</h3>
                    <p className="mb-6">
                        Innovators will move Smart planning leads to powerful campaigns.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Expect2}
                            alt="Planning documents and laptop"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Creative & Content Development card - full width */}
            <div
                className="grid grid-cols-1 lg:grid-cols-4 gap-8  border rounded-lg  border-gray-200
 border border-gray-200"
            >
                <div className="lg:col-span-2 rounded-lg p-6 ">
                    <h3 className="text-2xl font-bold mb-4">
                        Creative & Content Development
                    </h3>
                    <p className="mb-6">
                        We craft compelling content that connects and converts.
                    </p>
                </div>

                <div className="lg:col-span-2 rounded-lg p-6 ">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Expect3}
                            alt="Content planning on tablet"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 mb-8">
                {/* Discovery & Strategy card */}
                <div className="border border-gray-200 rounded-lg p-6 ">
                    <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
                    <p className="mb-6">
                        Innovators lay the foundation for a campaign with purpose and
                        precision.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Expect1}
                            alt="Person pointing at a target"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Research & Planning card */}
                <div className="border border-gray-200 rounded-lg  p-6 ">
                    <h3 className="text-2xl font-bold mb-4">Research & Planning</h3>
                    <p className="mb-6">
                        Innovators will move Smart planning leads to powerful campaigns.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Expect2}
                            alt="Planning documents and laptop"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Creative & Content Development card - full width */}
            <div
                className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 border rounded-lg  border-gray-200
 border border-gray-200"
            >
                <div className="lg:col-span-2 rounded-lg p-6 ">
                    <h3 className="text-2xl font-bold mb-4">
                        Creative & Content Development
                    </h3>
                    <p className="mb-6">
                        We craft compelling content that connects and converts.
                    </p>
                </div>

                <div className="lg:col-span-2 rounded-lg p-6 ">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={Expect3}
                            alt="Content planning on tablet"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeExpect;

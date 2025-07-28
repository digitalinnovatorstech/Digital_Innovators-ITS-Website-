import React from "react";
import Image from "next/image";
import PrimaryButton from "@/components/common/primarybutton";
import SectionImg from "../../../../public/assets/industry/internal/section2image.svg";
import Section2img from "../../../../public/assets/industry/internal/secction3image.svg";
import StayUpdates from "@/components/common/stayupdates";
import TechnologyStack from "@/components/common/technologystack";
import Customer from "@/components/common/customer";

export default function IndustryPage() {
    const features = [
        {
            title: "Digital Banking Solutions",
            description:
                "Enable customers to access accounts, transfer funds, pay bills, and view statements seamlessly.",
        },
        {
            title: "Financial Planning and Management Tools",
            description:
                "Help users monitor spending habits and create personalized budgets.",
        },
        {
            title: "Fraud Detection and Security",
            description:
                "Detect suspicious activities in real-time using machine learning models.",
        },
        {
            title: "Blockchain and Cryptocurrency Solutions",
            description:
                "Secure storage and transaction capabilities for digital assets.",
        },
    ];
    return (
        <>
            <div className="container">
                <div className="flex flex-col  justify-center md:h-screen  my-20 md:my-0 ">
                    <div className="max-w-4xl w-full items-start flex flex-col gap-y-8">
                        {" "}
                        <h1 className="text-tertiary md:text-lg xl:text-xl">
                            Industries / Finance & Insurance
                        </h1>
                        <p className="font md:text-5xl xl:text-7xl text-2xl">
                            Unlock your <span className="text-primary">Financial </span>
                            future <br />
                            with our services
                        </p>
                        <p className="md:text-sm xl:text-lg text-tertiary text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500.
                        </p>
                        <div className="bg-secondary  w-full max-w-3xl  flex flex-col gap-y-4 p-10 rounded-xl">
                            <h1 className="text-white text-xl font-semibold">
                                Got a Financial project in mind ?
                            </h1>
                            <p className="text-white text-lg font-normal">
                                {" "}
                                Let’s Make it reality together
                            </p>
                            <PrimaryButton
                                text="Lets connect"
                                className="!bg-[#353535] mt-6 hover:!bg-primary transition-colors duration-200"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Image
                        src={SectionImg}
                        alt="section image"
                        className=" w-full h-full object-contain"
                    />
                </div>
                <div className="w-full flex flex-col gap-y-12 items-center px-4 my-15 lg:px-0">
                    <h1 className="text-secondary xl:text-4xl text-xl max-w-xl text-center font-semibold">
                        key features of financial services that can be offered
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Left Image */}
                        <div className="h-full">
                            <div className="h-full w-full relative aspect-square md:aspect-auto md:h-full">
                                <Image
                                    src={Section2img}
                                    alt="Financial Image"
                                    className="rounded-xl object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Right Features */}
                        <div className="flex flex-col justify-between gap-4 h-full">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4  p-4 rounded-xl h-full"
                                >
                                    <div className="min-w-8 min-h-8 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                                        {index + 1}
                                    </div>
                                    <div className="flex flex-col gap-2 flex-grow">
                                        <h3 className="font-semibold text-sm">{item.title}</h3>
                                        <p className="text-xs text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Left Features */}
                        <div className="flex flex-col justify-between gap-4 order-2 md:order-1">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4  p-4 rounded-xl"
                                >
                                    <div className="min-w-8 min-h-8 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                                        {index + 1}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-semibold text-sm">{item.title}</h3>
                                        <p className="text-xs text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Image */}
                        <div className="h-full order-1 md:order-2">
                            <div className="h-full w-full relative aspect-square md:aspect-auto">
                                <Image
                                    src={Section2img}
                                    alt="Financial Image"
                                    className="rounded-xl object-cover"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:h-screen">
                <Customer />
            </div>
            <div className="container">
                <TechnologyStack />
            </div>
            <div className="h-screen">
                <StayUpdates />
            </div>
        </>
    );
}

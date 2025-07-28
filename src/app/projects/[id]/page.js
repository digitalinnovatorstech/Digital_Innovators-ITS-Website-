"use client";

import { useParams } from "next/navigation";
import Heroimage from "../../../../public/assets/projects/list/heroimage.svg";
import ProcessImg from "../../../../public/assets/projects/list/process.svg";
import Image1 from "../../../../public/assets/projects/list/image1.svg";
import Image2 from "../../../../public/assets/projects/list/image2.svg";
import Image3 from "../../../../public/assets/projects/list/image3.svg";
import Image4 from "../../../../public/assets/projects/list/image4.svg";
import Image from "next/image";
import Customer from "@/components/common/customer";
import StayUpdates from "@/components/common/stayupdates";

export default function ProjectDetailPage() {
    const { id } = useParams();

    return (
        <>
            <div className="container ">
                <div className="flex md:h-screen w-full flex-col md:flex-row items-center justify-between ">
                    {/* Left - Text Content */}
                    <div className="w-full md:w-1/2 space-y-8 my-20 md:my-0">
                        <h1 className="md:text-4xl xl:text-6xl text-5xl font-bold uppercase  leading-tight">
                            Soubhagya <br /> Chocolates
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:max-w-sm md:max-w-xs">
                            <div className="border border-[#9C9C9C] px-4 py-3">
                                <h1 className="font-semibold text-lg mb-2 uppercase underline">Services</h1>
                                <ul className="text-sm space-y-1">
                                    <li>Strategy</li>
                                    <li>UI & UX</li>
                                    <li>Design</li>
                                    <li>Development</li>
                                    <li>Marketing</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-y-10">
                                <div className="border border-[#9C9C9C] px-4 py-3">
                                    <h1 className="font-semibold text-lg mb-2 uppercase underline">Industry</h1>
                                    <p className="text-sm">Food Industry</p>
                                </div>

                                <div className="border border-[#9C9C9C] px-4 py-3">
                                    <h1 className="font-semibold text-lg mb-2 uppercase underline">Location</h1>
                                    <p className="text-sm">India</p>
                                </div></div>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="w-full md:w-1/2 flex justify-center ">
                        <Image
                            src={Heroimage}
                            alt="Project Image"
                            className="xl:max-w-4xl md:max-w-sm h-full object-contain"
                            priority
                        />
                    </div>
                </div>


                <div className="flex flex-col gap-y-20 md:h-screen justify-center items-center w-full max-w-full overflow-x-hidden">
                    <div className="flex flex-col gap-10 w-full px-4">
                        <h1 className="text-2xl text-secondary font-bold">Project Brief</h1>
                        <p className="xl:text-lg md:text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="flex flex-col gap-10 w-full px-4">
                        <div><h1 className="text-2xl text-secondary font-bold">Organize Process</h1></div>
                        <div className="w-full flex justify-center">
                            <Image
                                src={ProcessImg}
                                alt="Project Image"
                                className="object-contain max-w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-screen flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">

                        {/* Column 1: 60/40 */}
                        <div className="flex flex-col gap-4 h-[90vh]">
                            <div className="h-[60%]">
                                <Image src={Image1} alt="Image 1" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <div className="h-[40%]">
                                <Image src={Image2} alt="Image 2" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>

                        {/* Column 2: 70/30 */}
                        <div className="flex flex-col gap-4 h-[90vh]">
                            <div className="h-[70%]">
                                <Image src={Image3} alt="Image 3" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <div className="h-[30%]">
                                <Image src={Image4} alt="Image 4" className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <div className="my-20">
                <Customer />
                <StayUpdates />
            </div></>
    );
}

import React from 'react'
import Vector1 from "../../../../public/assets/build/serve1.svg"
import Vector2 from "../../../../public/assets/build/serve2.svg"
import Vector3 from "../../../../public/assets/build/serve3.svg"
import Vector4 from "../../../../public/assets/build/serve4.svg"
import Image from 'next/image'

const Buildwtweserve = () => {
    return (
        <div className="relative w-full py-16 h-screen flex flex-col justify-center overflow-hidden">
            {/* Main content container */}
            <div className="container flex flex-col items-center mx-auto px-4">
                {/* WHAT DO WE SERVE text */}
                <div className="relative  leading-[1.1]">
                    <h1 className="text-[120px] font-bold text-[#FFD4A6] text-center">
                        WHAT<span className="inline-flex items-center">D<Image src={Vector2} alt="Globe icon" className="w-24 h-24" /></span>
                    </h1>
                    <div className="relative">
                        <h1 className="text-[120px] font-bold text-[#FFD4A6] text-center">
                            WE SERVE
                        </h1>
                    </div>
                </div>

                {/* Content area with illustrations */}
                <div className="relative w-full ">
                    {/* The illustrations row */}
                    <div className="flex justify-between items-end w-full">

                        <div className='ml-30'>
                            <Image src={Vector1} alt="Share icon" />
                        </div>
                        {/* Person working - center */}
                        <div className="flex-1 flex justify-center relative">
                            {/* Traffic cone - left */}
                            <div className="-mt-10 ml-50 flex justify-center">
                                <Image src={Vector3} alt="Traffic cone" />
                            </div>

                        </div>


                        <div className="flex-1 flex justify-center">


                            {/* Person working - center */}
                            <div className="flex-1 ml-5 flex justify-center relative">
                                <Image src={Vector4} alt="Person working" />

                            </div>
                        </div>
                    </div>

                    {/* Horizontal line at the bottom */}
                    <div className="absolute bottom-0 w-full h-px bg-gray-300 "></div>
                </div>
            </div>
        </div>
    )
}

export default Buildwtweserve
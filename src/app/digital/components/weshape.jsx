import React from 'react';
import Image from 'next/image';
import Weshape from "../../../../public/assets/digital/weshape.svg";

const WeshapeSection = () => {
    return (
        <div className="relative w-full h-screen bg-[#1E1E1E] overflow-hidden flex items-center justify-center px-6">


            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">

                <div className="absolute border-t-2 border-primary transform rotate-[12deg] origin-top-left"
                    style={{ top: '0px', left: '0', width: '100%' }}></div>


                <div className="absolute border-t-2 border-primary transform rotate-[-12deg] origin-bottom-left"
                    style={{ bottom: '0', left: '0', width: '140%' }}></div>
            </div>


            <div className="absolute top-[10%] left-[42%] transform -translate-x-1/2 -translate-y-1/2 rotate-12">
                <div className="w-25 h-25 border-2 border-primary" />
            </div>


            <div className="absolute bottom-[32%] left-[60%] transform -translate-x-1/2 translate-y-1/2">
                <div className="w-25 h-25 border-2 border-primary rounded-full" />
            </div>


            <div className="z-10 text-white max-w-lg text-left">
                <h1 className="text-6xl font-bold leading-[1.3]">
                    WE SHAPE<br />
                    YOUR <span className="text-primary">DIGITAL</span><br />
                    FUTURE
                </h1>
            </div>

            {/* Moon Image */}
            <div className="absolute right-[-2px] top-1/2 transform -translate-y-1/2">
                <Image
                    src={Weshape}
                    alt="Moon"
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>

        </div>
    );
};

export default WeshapeSection;

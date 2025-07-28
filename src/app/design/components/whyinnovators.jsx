import React from 'react';

const WhyInnovators = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className="flex container flex-col md:flex-row items-start justify-center px-6 md:px-20 py-10">
                
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full mb-6 text-sm font-medium">
                        Why Innovators ?
                    </button>

                    <h1 className="text-4xl md:text-5xl font leading-tight">
                        <span className="block">Your Goals, Our</span>
                        <span className="block">Expertise, <span className="text-primary">Real</span></span>
                        <span className="text-primary">Impact</span>
                    </h1>
                </div>

              
                <div className="w-full md:w-1/2">
                    <p className="text-black mb-8">
                        At Innovators, we specialize in Design, Digital, and Build—the three pillars that shape powerful brands. We don't just craft visuals; we design meaningful experiences. From strategic branding and creative design to smart digital solutions and seamless development, we help your business stand out, build trust, and grow with purpose.
                    </p>

                    <div className="mb-6">
                        <h2 className="font-bold xl:text-lg text-sm ">Expertise Across Industries:</h2>
                        <p className="text-black mt-1">We Specialize in creating Powerful, user-friendly Sites and Projects.</p>
                    </div>

                    <hr className="my-4 border-gray-300" />

                    <div className="mb-6">
                        <h2 className="font-bold xl:text-lg text-sm ">No Templates:</h2>
                        <p className="text-black mt-1">Every site is 100% custom-designed for your business.</p>
                    </div>

                    <hr className="my-4 border-gray-300" />

                    <div className="mb-6">
                        <h2 className="font-bold xl:text-lg text-sm ">All-in-One Solutions:</h2>
                        <p className="text-black mt-1">From design to maintenance, we handle it all so you can focus on your business.</p>
                    </div>

                    <hr className="my-4 border-gray-300" />

                    <div className="mb-6">
                        <h2 className="font-bold xl:text-lg text-sm ">Transparent Pricing:</h2>
                        <p className="text-black mt-1">No hidden fees, just clear and upfront pricing.</p>
                    </div>
                </div>
            </div></div>
    );
};

export default WhyInnovators;
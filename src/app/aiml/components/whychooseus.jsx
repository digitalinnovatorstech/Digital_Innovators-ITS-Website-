"use client";
import React from "react";
import Image1 from "../../../../public/assets/home/aiml/internal/whychooseus/image1.svg";
import Image2 from "../../../../public/assets/home/aiml/internal/whychooseus/image2.svg";
import Image3 from "../../../../public/assets/home/aiml/internal/whychooseus/image3.svg";
import Image4 from "../../../../public/assets/home/aiml/internal/whychooseus/image4.svg";
import Image5 from "../../../../public/assets/home/aiml/internal/whychooseus/image5.svg";
import Image6 from "../../../../public/assets/home/aiml/internal/whychooseus/image6.svg";
import Icon1 from "../../../../public/assets/home/aiml/internal/whychooseus/icon1.svg";
import Icon2 from "../../../../public/assets/home/aiml/internal/whychooseus/icon2.svg";
import Icon3 from "../../../../public/assets/home/aiml/internal/whychooseus/icon3.svg";
import Icon4 from "../../../../public/assets/home/aiml/internal/whychooseus/icon4.svg";
import Icon5 from "../../../../public/assets/home/aiml/internal/whychooseus/icon5.svg";
import Icon6 from "../../../../public/assets/home/aiml/internal/whychooseus/icon6.svg";
import Image from "next/image";

const WhyChooseUs = () => {
    const cards = [
        {
            id: 1,
            title: "Customization",
            description:
                "With our extensive technical prowess, a wealth of experience, and cutting-edge tools at our disposal, we are fully equipped to assist you in creating tailor-made AI and ML development solutions that cater to the unique requirements of your business.",
            image: Image1,
            icon: Icon1,
            size: "normal",
        },
        {
            id: 2,
            title: "Latest Tech Integration",
            description:
                "We pride ourselves on staying up-to-date with the latest advancements in technology, and we utilize cutting-edge tools and technologies such as TensorFlow, Theano, and Caffe to deliver exceptional results.",
            image: Image3,
            icon: Icon2,
            size: "normal",
        },
        {
            id: 3,
            title: "Data Security",
            description:
                "At our AI and ML development company, we prioritize the safety and security of your data through robust policies and practices. Rest assured that we have implemented stringent measures to safeguard your valuable information.",
            image: Image5,
            icon: Icon3,
            size: "large",
        },
        {
            id: 4,
            title: "Expertise Across Industries",
            description:
                "Our team of skilled developers is excel at delivering top-notch AI and ML development services across a wide range of industries. We incorporate AI and ML solutions into your business operations, thereby empowering you to flourish in various verticals.",
            image: Image2,
            icon: Icon4,
            size: "large",
        },
        {
            id: 5,
            title: "Minimalist Approach",
            description:
                "Our innovative approach effectively minimizes unnecessary expenditures, optimizes time management, and streamlines infrastructure utilization. With our AI and ML development, we empower you to optimize ROI to the fullest.",
            image: Image4,
            icon: Icon5,
            size: "normal",
        },
        {
            id: 6,
            title: "On-Time Delivery",
            description:
                "We build intelligent solutions that not only align with budgetary constraints but also adhere to strict timelines. Despite the ever-changing nature of the project extent, our team remains committed to delivering the final product within the designated timeframe.",
            image: Image6,
            icon: Icon6,
            size: "normal",
        },
    ];

    const getCardHeightClass = (size) => {
        return size === "large" ? "h-80" : "h-64";
    };

    const leftColumnCards = cards.slice(0, 3);
    const rightColumnCards = cards.slice(3, 6);

    return (
        <div className="container my-20 mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-16">
                <h1 className="text-3xl xl:text-5xl max-w-3xl text-center font-bold capitalize leading-snug mb-10">
                    Why Choose us for{" "}
                    <span className="text-primary">AI & ML Development</span>
                </h1>
                <p className="text-center max-w-4xl">
                    Our team of experienced developers possesses deep expertise in AI and
                    ML technologies, staying up-to-date with the latest advancements and
                    leveraging their knowledge to create powerful, customized solutions.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 flex flex-col gap-6">
                    {leftColumnCards.map((card) => (
                        <div
                            key={card.id}
                            className={`relative overflow-hidden rounded-lg cursor-pointer group ${getCardHeightClass(
                                card.size
                            )}`}
                        >
                            <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* Overlay that darkens on hover */}
                            <div className="absolute inset-0  group-hover:bg-black/30 transition-all duration-300">
                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                    <div className="flex flex-col items-start gap-0">
                                        <Image src={card.icon} alt="icon" width={40} height={40} />
                                        <h3 className="text-white text-xl font-bold">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:w-1/2 flex flex-col gap-6">
                    {rightColumnCards.map((card) => (
                        <div
                            key={card.id}
                            className={`relative overflow-hidden rounded-lg cursor-pointer group ${getCardHeightClass(
                                card.size
                            )}`}
                        >
                            <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div className="absolute inset-0  group-hover:bg-black/30 transition-all duration-300">
                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                    <div className="flex flex-col items-start gap-0">
                                        <Image src={card.icon} alt="icon" width={40} height={40} />
                                        <h3 className="text-white text-xl font-bold">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

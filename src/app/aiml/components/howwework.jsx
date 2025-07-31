"use client";

import React, { useEffect, useRef } from "react";
import "../styles/solutions.css";

const steps = [
    {
        id: "01",
        title: "Initial Planning",
        content:
            "In this phase, we thoroughly assess your organization's needs, limitations, and goals. We set realistic timelines and allocate the essential resources, including expert personnel, data, computing power, and budget, to ensure successful execution.",
    },
    {
        id: "02",
        title: "Gathering the Data",
        content:
            "Our team will gather the data and carry out extensive preprocessing tasks, such as cleaning, transforming, and standardizing it. This process will ready the data for model training, ensuring it is optimized for peak performance.",
    },
    {
        id: "03",
        title: "Designing",
        content:
            "We translate insights into intuitive, user-centric designs that align with your business goals. Wireframes, prototypes, and design systems are crafted to visualize the solution. Collaboration with stakeholders ensures every detail meets functional and aesthetic expectations.",
    },
    {
        id: "04",
        title: "Model Development",
        content:
            "During this phase, our team will assess the model's performance using key metrics like accuracy, precision, and others. We will collaborate closely with you to pinpoint areas for improvement based on the evaluation results.",
    },
    {
        id: "05",
        title: "Testing",
        content:
            "Our skilled experts will design and refine the model architecture, then train it using the prepared data. Leveraging advanced techniques and algorithms, our developers will ensure the model makes precise predictions and informed decisions.",
    },
    {
        id: "06",
        title: "Deployment and Maintenance",
        content:
            "Our skilled experts will design and refine the model architecture, then train it using the prepared data. Leveraging advanced techniques and algorithms, our developers will ensure the model makes precise predictions.",
    },
];

const Howwework = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const stepItems = document.querySelectorAll(".step-item");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("step-active");
                    } else {
                        entry.target.classList.remove("step-active");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "-50px 0px",
            }
        );

        stepItems.forEach((item) => {
            observer.observe(item);
        });

        return () => {
            stepItems.forEach((item) => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className="container mx-auto px-4 py-20" ref={sectionRef}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl lg:text-4xl max-w-3xl text-center font-bold capitalize leading-snug mb-10">
                    This is how we <span className="text-primary">work</span> with our
                    <br />
                    <span className="text-primary"> AI and ML</span> Development
                </h1>
                <p className="text-center">
                    We offer comprehensive end-to-end AI and ML development services,
                    guiding you through every phase—from data preparation for AI
                    algorithms to the smooth rollout of systems that can accommodate a
                    large user base.
                </p>
            </div>
            <div className="grid md:grid-cols-2 my-20 gap-x-20 relative">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div
                            className={`step-item ${index % 2 === 0 ? "flex flex-col" : "flex flex-col"
                                }`}
                        >
                            {index % 2 === 0 ? (
                                <div className="flex flex-col">
                                    <div className="text-5xl font-extrabold text-[#BCB9B9]">
                                        {step.id}
                                    </div>
                                    <h3 className="font-semibold text-3xl mb-2">{step.title}</h3>
                                </div>
                            ) : (
                                <div className="w-full">
                                    <p className="text-gray-600 text-justify text-lg leading-relaxed">
                                        {step.content}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div
                            className={`step-item ${index % 2 === 0 ? "flex flex-col" : "flex flex-col"
                                }`}
                        >
                            {index % 2 === 0 ? (
                                <div className="w-full">
                                    <p className="text-gray-600 text-justify text-lg ">
                                        {step.content}
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <div className="text-5xl font-extrabold text-[#BCB9B9]">
                                        {step.id}
                                    </div>
                                    <h3 className="font-semibold text-3xl mb-2">{step.title}</h3>
                                </div>
                            )}
                        </div>
                        <div
                            className="absolute left-1/2 w-5 h-5 bg-primary rounded-full -translate-x-1/2 z-10"
                            style={{
                                top: `calc(${index * (100 / (steps.length - 1))}%)`,
                            }}
                        ></div>
                        {index < steps.length - 1 && <div className="col-span-2 mt-10 mb-10"></div>}
                    </React.Fragment>
                ))}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block -translate-x-1/2 z-0"></div>
            </div>
        </div>
    );
};

export default Howwework;

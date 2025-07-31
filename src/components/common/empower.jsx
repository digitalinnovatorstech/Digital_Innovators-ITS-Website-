"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Previous from "../../../public/assets/orangebuttonleft.svg";
import Next from "../../../public/assets/orangebutton.svg";
import Empower1 from "../../../public/assets/empower/empower_1.svg";
import Empower2 from "../../../public/assets/empower/empower_2.svg";
import Empower3 from "../../../public/assets/empower/empower_6.svg";
import Empower4 from "../../../public/assets/empower/empower_3.svg";
import Empower5 from "../../../public/assets/empower/empower_5.svg";
import Empower6 from "../../../public/assets/empower/empower_4.svg";
import Empower7 from "../../../public/assets/empower/empower_8.svg";
import Empower8 from "../../../public/assets/empower/empower_7.svg";
import Empower9 from "../../../public/assets/empower/empower_9.svg";
import PrimaryButton from "./primarybutton";

const EmpowerSection = () => {
  const swiperRef = useRef(null);
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ totalSlides, setTotalSlides ] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      setTotalSlides(swiperRef.current.slides.length);
    }
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const industries = [
    {
      id: 1,
      image: Empower1,
      category: "Education",
      description:
        "Transform the future of education with our innovative edtech services, designed to improve outcomes and streamline learning.",
    },
    {
      id: 2,
      image: Empower2,
      category: "Healthcare",
      description:
        "In healthcare with innovative digital solutions that improve patient care, streamline operations, telemedicine, health data analytics with AI-driven.",
    },
    {
      id: 3,
      image: Empower3,
      category: "Agriculture",
      description:
        "Transforming agriculture with innovative digital solutions that drive smarter. we provide real-time data, optimize resource usage, and improve crop yields",
    },
    {
      id: 4,
      image: Empower4,
      category: "IT / Consulting",
      description:
        "Unlock your organization's potential with personalized IT services and to consulting with actionable insights for long-term success.",
    },
    {
      id: 5,
      image: Empower5,
      category: "Finance & Insurance",
      description:
        "Revolutionize your financial operations with our advanced fintech solutions, driving efficiency and innovation. ",
    },
    {
      id: 6,
      image: Empower6,
      category: "E-Commerce & Market place",
      description:
        "Empowering your e-commerce business with tailored digital solutions that enhance customer experiences and drive sales, advanced analytics to optimize performance.",
    },
    {
      id: 7,
      image: Empower7,
      category: "Construction",
      description:
        "Our services include virtual property tours, advanced analytics, and seamless online platforms, We empower real estate businesses to deliver smarter, faster to Users.",
    },
    {
      id: 8,
      image: Empower8,
      category: "Food Industry",
      description:
        "Transforming the food industries with innovative digital solutions that enhance customer experiences and streamline operations.",
    },
    {
      id: 9,
      image: Empower9,
      category: "Travel Industry",
      description:
        "We provide digital solutions tailored to the travel industry, enhancing efficiency, customer experiences, and business growth through innovative technology integrations.",
    },
  ];

  return (
    <div className="bg-[#FEFDF5]   md:p-6 md:h-screen md:flex md:flex-col md:justify-center md:items-center py-10 md:py-0 ">
      <div className="w-full md:flex items-center container">
        {/* Left Side (Text) */}
        <div className="md:w-[50%] text-center md:text-left">
          <h1 className="xl:text-[45px] md:text-2xl text-2xl font-semibold leading-tight text-secondary">
            We Empowering <br />
            <span className="inline-block mt-2">
              <span className="text-primary">Every Industry</span> with
            </span>
            <br />
            <span className="inline-block mt-2">
              World-Class <span className="text-primary">Designs.</span>
            </span>
          </h1>

          <p className="mt-6 xl:text-xl md:text-sm text-sm">
            Our services help businesses stay ahead
            <br /> in a competitive market.
          </p>
        </div>

        {/* Right Side (Carousel) */}
        <div className="md:w-[50%]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTotalSlides(swiper.slides.length);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
            }}
            allowTouchMove={true}
            speed={500}
            className="mt-4"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id}>
                <div className="border border-gray-300 xl:h-[450px] md:h-[350px] shadow-lg rounded-lg p-4 bg-white flex flex-col">
                  {/* Image Section */}
                  <div>
                    <Image
                      src={industry.image}
                      alt={industry.category}
                      priority
                      className="w-full xl:h-[200px] md:h-[120px] object-contain rounded-lg"
                    />
                  </div>
                  <hr className="border border-gray-100" />
                  {/* Text Section (Category & Description) */}
                  <div className="flex flex-1 flex-col my-3">
                    <h3 className="xl:text-lg  text-sm font-semibold text-secondary mt-4">
                      {industry.category}
                    </h3>

                    <p className="text-secondary xl:text-sm text-xs mt-2 w-full flex-1">
                      {industry.description}
                    </p>
                  </div>

                  <PrimaryButton />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex md:justify-center justify-between items-center md:mr-12  p-4 md:p-0  mt-6 md:pt-12  ">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`px-4 py-2 rounded-md transition ${activeIndex === 0
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
            }`}
        >
          <Image src={Previous} alt="Previous" />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === totalSlides - 1}
          className={`px-4 py-2 rounded-md transition ${activeIndex === totalSlides - 1
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
            }`}
        >
          <Image src={Next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default EmpowerSection;

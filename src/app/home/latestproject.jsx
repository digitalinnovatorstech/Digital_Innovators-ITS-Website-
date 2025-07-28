"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Leftarrow from "../../../public/assets/orangebuttonleft.svg";
import Rightarrow from "../../../public/assets/orangebutton.svg";
import PrimaryButton from "../../components/common/primarybutton";


const LatestProjects = () => {
    const swiperRef = useRef(null);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ slidesPerView, setSlidesPerView ] = useState(3);
    const [ isMounted, setIsMounted ] = useState(false);
    const totalItems = 6;

    // Calculate total pages based on items and slides per view
    const totalPages = Math.ceil(totalItems / slidesPerView);

    useEffect(() => {
        setIsMounted(true);

        const handleResize = () => {
            setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);

        const slideIndex = (newPage - 1) * slidesPerView;
        swiperRef.current?.slideTo(slideIndex);
    };

    // Handle Swiper's slide change event to update currentPage
    const handleSlideChange = () => {
        if (!swiperRef.current) return;

        const activeIndex = swiperRef.current.activeIndex;
        const newPage = Math.floor(activeIndex / slidesPerView) + 1;

        if (newPage !== currentPage) {
            setCurrentPage(newPage);
        }
    };

    const blogPosts = [
        {
            id: 1,
            image: "/assets/home/projectimages/image1.svg",

        },
        {
            id: 2,
            image: "/assets/home/projectimages/image2.svg",

        },
        {
            id: 3,
            image: "/assets/home/projectimages/image3.svg",

        },
        {
            id: 4,
            image: "/assets/home/projectimages/image2.svg",

        },
        {
            id: 5,
            image: "/assets/home/projectimages/image1.svg",

        },
        {
            id: 6,
            image: "/assets/home/projectimages/image2.svg",

        },
    ];

    // Don't render anything on the server or during initial client render
    if (!isMounted) {
        return <div className="container min-h-[400px]">Loading updates...</div>;
    }

    return (
        <div className="container my-30 ">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-gray-500 md:text-lg text-sm uppercase tracking-wide">
                    Enjoy Our Latest projects
                </h1>
                <PrimaryButton text="Explore More" className="w-42" />
            </div>

            <h1 className="md:text-5xl text-2xl  mt-2 leading-snug font-semibold font">
                We Transform Companies through tech <br />and Design <span className="text-primary">Innovation!</span>
            </h1>

            {/* Swiper Carousel */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                spaceBetween={20}
                allowTouchMove={true}
                className="mt-8"
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                }}
            >
                {blogPosts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <div className="shadow-md mb-8 rounded-lg overflow-hidden">
                            <div className="relative w-full h-[350px]">
                                <Image
                                    src={post.image}
                                    alt="image"
                                    fill
                                    className="object-cover"
                                />
                            </div>


                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination Controls */}
            <div className="flex md:justify-center justify-between items-center gap-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-2 rounded-md transition ${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                >
                    <Image src={Leftarrow} alt="Previous" />
                </button>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 py-2 rounded-md transition ${currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                >
                    <Image src={Rightarrow} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default LatestProjects;

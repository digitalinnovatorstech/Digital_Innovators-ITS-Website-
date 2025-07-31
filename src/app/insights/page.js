"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/app/contact/styles/contact.css";
import TechnologyStack from "@/components/common/technologystack";
import Image1 from "../../../public/assets/insights/mainimage.svg";
import Image2 from "../../../public/assets/insights/background.svg";
import ClientsCarouselBar from "@/components/common/clientbar";
import BlogTabs from "./blogtabs";
import PrimaryButton from "@/components/common/primarybutton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGetBlogs } from "./hooks/crudAPIS";
import Link from "next/link";

export default function Insights() {
  // Fetch the latest blog post
  const {
    data: latestBlogData,
    isLoading: latestBlogLoading,
    error: latestBlogError,
  } = useGetBlogs(null, null, 1, 1); // page 1, limit 1 to get only the latest post

  // Format date function
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Get the latest blog post from the API response
  const latestBlog = latestBlogData?.data?.[ 0 ] || null;

  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-2 px-4">
          <div className="bird_header">
            <span className="bird_subheader">Insights</span>
            <DotLottieReact
              src="/assets/flyingbird.lottie"
              loop
              autoplay
              className="flying_bird"
            />
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-between">
            <div className="md:w-[70%] w-full">
              <h1 className="font text-3xl xl:text-5xl mt-5 md:-mt-15">
                Our <span className="text-primary">Insights</span> could help{" "}
                <span className="text-primary mr-2">build</span>
                <span className="md:hidden"> your business successfully.</span>
                <span className="hidden md:inline">
                  <br />
                  your business successfully.
                </span>
              </h1>
            </div>
            <div className="w-[25%] hidden md:block">
              <Image src={Image1} alt="Illustration" />
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">Latest Posts</h2>

          {latestBlogLoading ? (
            <div className="md:mb-8 relative h-64 flex items-center justify-center bg-gray-100">
              <p>Loading latest post...</p>
            </div>
          ) : latestBlogError ? (
            <div className="md:mb-8 relative h-64 flex items-center justify-center bg-gray-100">
              <p>Error loading latest post</p>
            </div>
          ) : !latestBlog ? (
            <div className="md:mb-8 relative h-64 flex items-center justify-center bg-gray-100">
              <p>No posts available</p>
            </div>
          ) : (
            <Link href={`/insights/${latestBlog.id}`}>
              <div className="md:mb-8 relative cursor-pointer">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={latestBlog.image || Image2.src}
                    alt={latestBlog.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Overlay Content */}
                <div className="overlay_container">
                  <div className="overlay">
                    <div className="flex flex-col justify-between text-start h-full gap-6">
                      <p className="xl:text-lg text-black">
                        Posted on {formatDate(latestBlog.createdAt) || latestBlog.date || "Recent"}
                      </p>
                      <h3 className="xl:text-4xl lg:text-2xl font-semibold text-black capitalize">
                        {latestBlog.title}
                      </h3>
                      <PrimaryButton text="Read More" className="xl:mt-10 md:mt-0" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
        <BlogTabs />
        <div className="">
          <TechnologyStack />
        </div>
      </div>
      <div className="md:mt-24 mb-12 mt-10">
        <ClientsCarouselBar />
      </div>
    </>
  );
}

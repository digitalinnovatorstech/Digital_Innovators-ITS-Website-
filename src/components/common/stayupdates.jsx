"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "./primarybutton";
import BackgroundImage from "../../../public/assets/industries/image1.svg";
import { useRouter } from "next/navigation";

const StayUpdates = () => {
  const [ isMounted, setIsMounted ] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      category: "Design",
      title: "Top 5 AI Tools Used for Design in 2025",
      date: "2 January, 2025",
    },
    {
      id: 2,
      category: "Design",
      title: "Top 5 AI Tools Used for Design in 2025",
      date: "2 January, 2025",
    },
    {
      id: 3,
      category: "Design",
      title: "Top 5 AI Tools Used for Design in 2025",
      date: "2 January, 2025",
    },
  ];

  if (!isMounted) {
    return <div className="container min-h-[400px]">Loading updates...</div>;
  }
  const handleExploreClick = () => {
    router.push("/insights");
  };

  return (
    <div className="container md:h-screen flex flex-col justify-center">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-gray-500 text-sm md:text-lg uppercase tracking-wide">
          Yes! We Write Too...
        </h1>
        <PrimaryButton text="Explore More" className="w-42" onClick={handleExploreClick} />
      </div>

      <h1 className="text-xl lg:text-4xl font-bold capitalize leading-snug mb-10">
        Stay Update With Our <br />
        <span className="text-primary">Latest Posts</span>
      </h1>

      <div className="grid grid-cols-1   md:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl overflow-hidden md:mt-20  md:mb-0 relative group cursor-pointer shadow-md h-[25vh] md:h-[40vh]"
          >
            {/* Background image with hover effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${BackgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-3 z-10">
              <p className="text-sm text-primary font-semibold uppercase mb-1">
                {post.category}
              </p>
              <p className="text-xs mb-2">Posted on {post.date}</p>
              <h3 className="text-sm font-semibold leading-snug">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>


    </div>

  );
};

export default StayUpdates;

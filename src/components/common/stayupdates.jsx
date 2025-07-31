"use client";
import React, { useEffect, useState } from "react";


import BackgroundImage from "../../../public/assets/industries/image1.svg";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useGetBlogs } from "@/app/insights/hooks/crudAPIS";
import PrimaryButton from "./primarybutton";

const StayUpdates = () => {
  const [ isMounted, setIsMounted ] = useState(false);
  const router = useRouter();


  const {
    data: blogsData,
    isLoading: blogsLoading,
    error: blogsError,
  } = useGetBlogs(null, null, 1, 3); // page 1, limit 3

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleExploreClick = () => {
    router.push("/insights");
  };

  // Format date function from BlogTabs
  // const formatDate = (dateString) => {
  //   try {
  //     const date = new Date(dateString);
  //     return date.toLocaleDateString("en-US", {
  //       day: "numeric",
  //       month: "long",
  //       year: "numeric",
  //     });
  //   } catch (error) {
  //     return dateString;
  //   }
  // };

  // if (!isMounted || blogsLoading) {
  //   return <div className="container min-h-[400px]">Loading updates...</div>;
  // }

  // if (blogsError) {
  //   return <div className="container min-h-[400px]">Error loading latest posts</div>;
  // }

  // Get the blog posts from the API response
  const blogPosts = blogsData?.data || [];

  return (
    // <div className="container md:h-screen flex flex-col justify-center">
    //   <div className="flex justify-between items-center mb-4">
    //     <h1 className="text-gray-500 text-sm md:text-lg uppercase tracking-wide">
    //       Yes! We Write Too...
    //     </h1>
    //     <PrimaryButton text="Explore More" className="w-42" onClick={handleExploreClick} />
    //   </div>
    //   <h1 className="text-xl lg:text-4xl font-bold capitalize leading-snug mb-10">
    //     Stay Update With Our <br />
    //     <span className="text-primary">Latest Posts</span>
    //   </h1>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
    //     {blogPosts.length > 0 ? (
    //       blogPosts.map((post) => (
    //         <Link href={`/insights/${post.id}`} key={post.id}>
    //           <div
    //             className="rounded-2xl overflow-hidden md:mt-20 md:mb-0 relative group cursor-pointer shadow-md h-[25vh] md:h-[40vh]"
    //           >

    //             <div
    //               className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
    //               style={{
    //                 backgroundImage: `url(${post.image || BackgroundImage.src})`,
    //                 backgroundSize: 'cover',
    //                 backgroundPosition: 'center',
    //               }}
    //             ></div>


    //             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent p-3 z-10 
    //                 transform transition-all duration-300 
    //                 translate-y-full opacity-0
    //                 group-hover:translate-y-0 group-hover:opacity-100 
    //                 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-transparent
    //                 group-hover:h-2/4">
    //               <div className="absolute bottom-3 left-3 right-3">
    //                 <p className="text-sm text-primary font-bold uppercase mb-1">
    //                   {post.categories ? post.categories.name : post.category ? post.category : "Design"}
    //                 </p>
    //                 <p className="text-xs mb-2 text-white">
    //                   Posted on {formatDate(post.createdAt) || post.date}
    //                 </p>
    //                 <h3 className="text-sm font-semibold leading-snug text-white">
    //                   {post.title}
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //         </Link>


    //       ))
    //     ) : (

    //       <div className="col-span-3 text-center py-10">
    //         No blog posts available at the moment.
    //       </div>
    //     )}
    //   </div>
    // </div>
    <></>
  );
};

export default StayUpdates;

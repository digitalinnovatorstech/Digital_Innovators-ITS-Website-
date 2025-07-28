"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Comments from "../blogtabs/comments";
import Link from "next/link";

const blogPosts = [
  { id: 1, title: "Top 5 AI Tools in 2025", content: "AI tools revolutionizing design in 2025." },
  { id: 2, title: "UX Trends for 2025", content: "The latest UX trends that will dominate." },
  { id: 3, title: "Business Growth Hacks", content: "Boost your business with these tips." },
];

export default function BlogPost() {
  const { blogId } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(blogId));

  if (!blog) return <div className="text-center text-red-500">Blog not found!</div>;

  return (
    <div className="  md:my-20 container">
      {/* Main Content */}
      <div className="flex justify-center items-center  mt-5">
        <div className="flex-1 mb-6 flex flex-col items-center justify-center">
          <span className="text-[#4F4F4F] text-lg">Design</span>
          <h1 className="text-2xl md:text-4xl text-center font-semibold mt-2">
            Top 5 AI Tools Used for
            <span className="hidden md:inline"><br /></span>
            Design in 2025
          </h1>
          <div className="flex justify-center items-center mt-6 gap-8">
            <p className="text-[#4F4F4F] text-sm">Posted on 2 January, 2025</p>
            <div className="flex md:gap-4 gap:2 items-center">
              <span className="text-[#4F4F4F] md:hidden text-xs">Share:</span>
              <Image src="/assets/insights/blogs/wtsapp.svg" alt="share" width={20} height={20} />
              <Image src="/assets/insights/blogs/facebook.svg" alt="facebook" width={20} height={20} />
              <Image src="/assets/insights/blogs/twitter.svg" alt="twitter" width={20} height={20} />
              <Image src="/assets/insights/blogs/instagram.svg" alt="linkedin" width={20} height={20} />
            </div>
          </div>
          <div className="md:hidden mt-4 w-full flex gap-5 items-center">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <img src="/assets/searchicon.svg" alt="search" />
          </div>
        </div>

        <div className="hidden md:block ml-10">
          <Image src="/assets/insights/blogs/designhero.svg" alt="ui" width={200} height={180} />
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-10">
        {/* Article Section */}

        <div className="lg:col-span-2">
          <div className="w-full h-64 relative">
            <Image
              src="/assets/insights/blogs/ui.svg"
              alt="AI Tools Design"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-4">
              Current Trends in UI/UX Design
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-black text-xs">
              <li>
                <strong>Dark Mode:</strong> Users increasingly prefer dark mode
                for its aesthetic appeal and reduced eye strain.
              </li>
              <li>
                <strong>Micro Interactions:</strong> Small animations that
                improve the user experience by making interactions feel
                responsive and dynamic.
              </li>
              <li>
                <strong>Voice User Interfaces (VUI):</strong> With the rise of
                smart speakers and voice assistants, integrating voice-driven
                interactions is becoming more common.
              </li>
              <li>
                <strong>Augmented Reality (AR):</strong> AR is enhancing UI/UX
                by providing immersive interactions.
              </li>
              <li>
                <strong>Minimalism:</strong> Simple, clean designs focusing on
                content over excessive embellishments.
              </li>
              <li>
                <strong>AI and Personalization:</strong> AI-driven experiences
                and adaptive interfaces are becoming integral to UX design.
              </li>
            </ul>
          </div>
          <div className="w-full mt-3 h-64 relative">
            <Image
              src="/assets/insights/blogs/ui_1.svg"
              alt="AI Tools Design"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-4">
              Current Trends in UI/UX Design
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-black text-sm">
              <li>
                <strong>Dark Mode:</strong> Users increasingly prefer dark mode
                for its aesthetic appeal and reduced eye strain.
              </li>
              <li>
                <strong>Micro Interactions:</strong> Small animations that
                improve the user experience by making interactions feel
                responsive and dynamic.
              </li>
              <li>
                <strong>Voice User Interfaces (VUI):</strong> With the rise of
                smart speakers and voice assistants, integrating voice-driven
                interactions is becoming more common.
              </li>
              <li>
                <strong>Augmented Reality (AR):</strong> AR is enhancing UI/UX
                by providing immersive interactions.
              </li>
              <li>
                <strong>Minimalism:</strong> Simple, clean designs focusing on
                content over excessive embellishments.
              </li>
              <li>
                <strong>AI and Personalization:</strong> AI-driven experiences
                and adaptive interfaces are becoming integral to UX design.
              </li>
            </ul>
          </div>

          <hr className="my-4" />
          <div className="flex justify-start items-center gap-x-6  ">
            <h3 className="text-lg font-medium text-center ">
              Popular Tags
            </h3>
            <div className="flex text-center items-center gap-2">
              {["Design", "AI", "Digital"].map((tag) => (
                <span key={tag} className="bg-gray-200 px-3 py-1 text-sm ">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <hr className="my-4" />

          <hr className="my-4 mt-11" />
          <div className="flex justify-between items-center gap-x-6 ">
            <button className="text-black text-sm flex gap-4 items-center" type="submit">  <span><img src="/assets/previous.svg" /></span> Previous Post</button>
            <button className="text-black text-sm flex gap-4 items-center" type="submit">Next Post  <span><img src="/assets/next.svg" /></span></button>
          </div>
          <hr className="my-4" />

          <Comments />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Search Bar */}
          <div className="mb-6  hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border p-2 pl-4 pr-10 rounded-lg  text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image
                src="/assets/insights/blogs/search.svg"
                width={16}
                height={16}
                alt="search"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6 border border-gray-200  hidden md:block rounded-lg p-4">
            <h3 className="text-lg font-medium mb-3">Categories</h3>
            <ul className="space-y-2 text-xs text-gray-700">
              {[
                "Home",
                "General",
                "Technology",
                "Design",
                "Marketing",
                "Business",
                "AI & ML",
                "Case Studies",
              ].map((category) => (
                <li
                  key={category}
                  className="hover:text-orange-500 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/insights/blogs/arrowicon.svg"
                      width={8}
                      height={8}
                      alt="icon"
                    />
                    <span>{category}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts */}
          <div className="mb-6 border border-[#9C9C9C] rounded-lg p-4">
            <h3 className="text-lg font-medium mb-3">Latest Posts</h3>

            <ul className="space-y-4">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-20 h-20 relative">
                      <Image
                        src="/assets/insights/blogs/uiicon.svg"
                        alt="Post Thumbnail"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-1 py-2">
                      <p className="text-[10px] text-gray-500">
                        Posted on January 2, 2025
                      </p>
                      <Link href="#">
                        <p className="text-lg md:text-sm font-semibold ">
                          Top 5 AI Tools Used for Design in 2025
                        </p>
                      </Link>
                      <button className="text-primary underline  mt-5 text-xs">

                        Read More
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="mb-6 border border-gray-200  hidden md:block p-4">
            <h3 className="text-lg font-medium mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Design", "AI", "Digital"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 px-3 py-1 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

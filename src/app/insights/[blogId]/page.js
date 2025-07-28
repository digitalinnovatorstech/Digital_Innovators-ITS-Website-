"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Comments from "../blogtabs/comments";
import Link from "next/link";
import { useGetBlogById, useGetBlogs } from "../hooks/crudAPIS";

export default function BlogPost() {
  const { blogId } = useParams();
  const router = useRouter();
  const [ latestPosts, setLatestPosts ] = useState([]);

  const { data: blogData, isLoading, error } = useGetBlogById(blogId);

  const { data: latestBlogsData } = useGetBlogs(null, null, 1, 4);

  useEffect(() => {
    if (latestBlogsData && latestBlogsData.data) {
      setLatestPosts(latestBlogsData.data);
    }
  }, [ latestBlogsData ]);

  if (isLoading) {
    return <div className="text-center py-20">Loading blog post...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-20">
        Failed to load blog post. Please try again later.
      </div>
    );
  }

  const blog = blogData?.data;

  if (!blog) {
    return (
      <div className="text-center text-red-500 py-20">Blog not found!</div>
    );
  }

 
  const renderContentStructure = (contentStructure) => {
    if (!contentStructure || !Array.isArray(contentStructure)) {
      return <p>No content available</p>;
    }
    return contentStructure.map((item, index) => {
      if (item.type === "text") {
        return (
          <p key={index} className="mb-4 text-sm">
            {item.value}
          </p>
        );
      } else if (item.type === "image") {
        return (
          <div key={index} className="w-full my-6 relative h-64">
            <Image
              src={item.value}
              alt={`Content image ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        );
      }
      return null;
    });
  };
  const navigateToBlog = (blogId) => {
    router.push(`/insights/${blogId}`);
  };

  return (
    <div className="container">
      {/* Main Content */}
      <div className="flex justify-center items-center mt-5">
        <div className="flex-1 mb-6 flex flex-col items-center justify-center">
          <span className="text-[#4F4F4F] text-lg">
            {blog.categories?.name || "Uncategorized"}
          </span>
          <h1 className="text-2xl md:text-4xl text-center font-semibold mt-2">
            {blog.title}
          </h1>
          <div className="flex justify-center items-center mt-6 gap-8">
            <p className="text-[#4F4F4F] text-sm">
              Posted on{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            {/* <div className="flex md:gap-4 gap:2 items-center">
              <span className="text-[#4F4F4F] md:hidden text-xs">Share:</span>
              <Image
                src="/assets/insights/blogs/wtsapp.svg"
                alt="share"
                width={20}
                height={20}
              />
              <Image
                src="/assets/insights/blogs/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
              <Image
                src="/assets/insights/blogs/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
              />
              <Image
                src="/assets/insights/blogs/instagram.svg"
                alt="linkedin"
                width={20}
                height={20}
              />
            </div> */}
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
          <Image
            src="/assets/insights/blogs/designhero.svg"
            alt="ui"
            width={200}
            height={180}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-10">
        {/* Article Section */}
        <div className="lg:col-span-2">


          {/* Article Content - Dynamic from content_structure */}
          <div className="mt-6">
            {renderContentStructure(blog.content_structure)}
          </div>
          <hr className="my-4" />
          {/* Tags Section */}
          <div className="flex justify-start items-center gap-x-6">
            <h3 className="text-lg font-medium text-center">Popular Tags</h3>
            <div className="flex text-center items-center gap-2">
              {blog.tags && blog.tags.length > 0 ? (
                blog.tags.map((tag) => (
                  <span key={tag.id} className="bg-gray-200 px-3 py-1 text-sm">
                    {tag.name}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-500">No tags available</span>
              )}
            </div>
          </div>
          <hr className="my-4" />
          {/* <hr className="my-4 mt-11" /> */}
          {/* <div className="flex justify-between items-center gap-x-6">
            <button
              className="text-black text-sm flex gap-4 items-center"
              type="button"
              onClick={() =>
                blog.previous_post && navigateToBlog(blog.previous_post.id)
              }
              disabled={!blog.previous_post}
            >
              <span>
                <img src="/assets/previous.svg" alt="Previous" />
              </span>
              Previous Post
            </button>
            <button
              className="text-black text-sm flex gap-4 items-center"
              type="button"
              onClick={() =>
                blog.next_post && navigateToBlog(blog.next_post.id)
              }
              disabled={!blog.next_post}
            >
              Next Post{" "}
              <span>
                <img src="/assets/next.svg" alt="Next" />
              </span>
            </button>
          </div> */}
          {/* <hr className="my-4" /> */}

          {blog.comments && <Comments blogId={blogId} />}
        </div>
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Search Bar */}
          <div className="mb-6 hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border p-2 pl-4 pr-10 rounded-lg text-sm"
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
          <div className="mb-6 border border-gray-200 hidden md:block rounded-lg p-4">
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
              {latestPosts && latestPosts.length > 0
                ? latestPosts.map((post) => (
                  <li key={post.id} className="flex items-center gap-3">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={
                          post.image || "/assets/insights/blogs/uiicon.svg"
                        }
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-1 py-2">
                      <p className="text-[10px] text-gray-500">
                        Posted on{" "}
                        {new Date(post.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <Link href={`/insights/${post.id}`}>
                        <p className="text-lg md:text-sm font-semibold">
                          {post.title}
                        </p>
                      </Link>
                      <Link
                        href={`/insights/${post.id}`}
                        className="text-primary underline mt-5 text-xs block"
                      >
                        Read More
                      </Link>
                    </div>
                  </li>
                ))
                : Array(4)
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
                          <p className="text-lg md:text-sm font-semibold">
                            Top 5 AI Tools Used for Design in 2025
                          </p>
                        </Link>
                        <button className="text-primary underline mt-5 text-xs">
                          Read More
                        </button>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
          {/* Popular Tags */}
          <div className="mb-6 border border-gray-200 hidden md:block p-4">
            <h3 className="text-lg font-medium mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags && blog.tags.length > 0 ? (
                blog.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-gray-200 px-3 py-1 text-sm rounded-full"
                  >
                    {tag.name}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-500">No tags available</span>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

"use client";
import PrimaryButton from "@/components/common/primarybutton";
import "@/app/insights/styles/insights.css";
import { Tabs } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useGetBlogs, useGetCategories } from "../hooks/crudAPIS";

export default function BlogTabs() {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [allLoadedBlogs, setAllLoadedBlogs] = useState([]);

 
  const {
    data: blogsData,
    isLoading: blogsLoading,
    error: blogsError,
  } = useGetBlogs(
    activeTab !== "all" ? activeTab : null,
    activeTab !== "all" ? "category" : null,
    page,
    10
  );

 
  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategories("category");

  useEffect(() => {
    if (categoriesData && categoriesData.data && categoriesData.data.rows) {
      const catMap = {};
      categoriesData.data.rows.forEach((cat) => {
        catMap[cat.id] = cat.name;
      });
      setCategoryMap(catMap);
    }
  }, [categoriesData]);

  const generateTabs = () => {
    const defaultTabs = [{ label: "All", value: "all" }];

   
    if (
      categoriesData &&
      categoriesData.data &&
      Array.isArray(categoriesData.data.rows)
    ) {
      const categoryTabs = categoriesData.data.rows.map((cat) => ({
        label: cat.name,
        value: cat.id.toString(),
      }));
      return [...defaultTabs, ...categoryTabs];
    } else if (categoriesData && Array.isArray(categoriesData.rows)) {
      const categoryTabs = categoriesData.rows.map((cat) => ({
        label: cat.name,
        value: cat.id.toString(),
      }));
      return [...defaultTabs, ...categoryTabs];
    }

    return defaultTabs;
  };

  const tabs = generateTabs();

  useEffect(() => {
    if (blogsData && blogsData.data) {
      if (page === 1) {
        setAllLoadedBlogs(blogsData.data);
        setFilteredBlogs(blogsData.data);
      } else {
        setAllLoadedBlogs((prev) => [...prev, ...blogsData.data]);
        setFilteredBlogs((prev) => [...prev, ...blogsData.data]);
      }
      setIsLoadingMore(false);
    }
  }, [blogsData, page]);

  const handleTabChange = (value) => {
    setActiveTab(value);

    setPage(1);
  };

  const handleLoadMore = () => {
    if (
      blogsData &&
      blogsData.pagination &&
      page < blogsData.pagination.totalPages
    ) {
      setIsLoadingMore(true);
      setPage((prev) => prev + 1);
    }
  };

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

  const isLoading = blogsLoading || categoriesLoading;
  const error = blogsError;

  return (
    <div>
      <Tabs
        variant="pills"
        defaultValue="all"
        className="mb-8 py-15 z-10 relative w-full custom-tabs"
        value={activeTab}
        onChange={handleTabChange}
      >
        {/* Mobile Tabs */}
        <hr className="border-t border-black block md:hidden mb-6" />
        <div className="md:hidden overflow-x-auto">
          <Tabs.List className="tabs-container">
            {tabs.map((tab) => (
              <Tabs.Tab
                key={tab.value}
                value={tab.value}
                className="tab-item text-center"
              >
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </div>
        <hr className="border-t border-black mb-6 mt-6 hidden md:block" />

        {/* Desktop Tabs */}
        <div className="hidden md:block w-full">
          <Tabs.List className="desktop-tabs-container">
            {tabs.map((tab) => (
              <Tabs.Tab
                key={tab.value}
                value={tab.value}
                className="tab-item text-center"
              >
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </div>

        {/* Content Panel - Single panel with filtered content */}
        <Tabs.Panel value={activeTab} className="mt-6">
          {isLoading && page === 1 ? (
            <div className="text-center py-10">Loading blogs...</div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              Error loading blogs.
            </div>
          ) : !filteredBlogs || filteredBlogs.length === 0 ? (
            <div className="text-center mt-20 font-semibold">
              No blogs found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBlogs.map((post) => (
                <Link href={`/insights/${post.id}`} key={post.id}>
                  <div className="rounded-lg overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image
                        src={post.image || "/assets/insights/blogs/default.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 rounded-md shadow-md border border-gray-200">
                      <div className="text-sm text-black mb-1">
                        {post.categories
                          ? post.categories.name
                          : categoryMap[post.category] || "Uncategorized"}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {post.title}
                      </h3>
                      <div className="text-xs text-black mb-3">
                        Posted on {formatDate(post.createdAt) || post.date}
                      </div>
                      <PrimaryButton text="Read More" className="mt-10" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Tabs.Panel>
      </Tabs>

      {/* Load More Button */}
      {blogsData &&
        blogsData.pagination &&
        page < blogsData.pagination.totalPages && (
          <div className="flex justify-center text-center mt-10">
            <PrimaryButton
              text={isLoadingMore ? "Loading..." : "Load More"}
              className="text-center"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
            />
          </div>
        )}

      <style jsx global>{`
        /* Custom styles for Mantine tabs */
        .custom-tabs .mantine-Tabs-tabsList {
          border-bottom: none !important;
        }

        /* Desktop tabs - single row with equal width and gaps */
        .desktop-tabs-container {
          display: flex !important;
          width: 100% !important;
          justify-content: space-between !important;
        }

        .desktop-tabs-container .tab-item {
          flex: 1 !important;
          margin: 0 8px !important;
        }

        .desktop-tabs-container .tab-item:first-child {
          margin-left: 0 !important;
        }

        .desktop-tabs-container .tab-item:last-child {
          margin-right: 0 !important;
        }

        /* Mobile tabs - scrollable row */
        .tabs-container {
          display: flex !important;
          width: max-content !important;
          padding-bottom: 8px;
        }

        .tabs-container .tab-item {
          flex: 0 0 auto !important;
          margin: 0 6px !important;
          min-width: 80px !important;
        }

        .tabs-container .tab-item:first-child {
          margin-left: 0 !important;
        }

        .tabs-container .tab-item:last-child {
          margin-right: 0 !important;
        }

        /* Common tab styles */
        .tab-item {
          border-radius: 15px;
          padding: 8px 4px;
          font-weight: 500;
          color: #000;
          border: 1px solid #000;
          transition: all 0.3s ease;
          margin-bottom: 8px;
          text-align: center;
        }

        .tab-item:hover {
          background-color: #ff8c00;
          color: white;
          border-color: #ff8c00;
        }

        .tab-item[data-active="true"] {
          background-color: #ff8c00;
          color: white;
          border-color: #ff8c00;
        }

        /* Remove any bottom borders */
        .mantine-Tabs-panel {
          border-top: none !important;
        }

        @media (max-width: 768px) {
          .tab-item {
            padding: 6px 4px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

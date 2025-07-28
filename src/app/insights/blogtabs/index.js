import PrimaryButton from "@/components/common/primarybutton";
import "@/app/insights/styles/insights.css";
import { Tabs } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function BlogTabs() {
  const tabs = [
    { label: "All", value: "all" },
    { label: "General", value: "general" },
    { label: "Technology", value: "technology" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Business", value: "business" },
    { label: "UX/UI", value: "ux-ui" },
    { label: "Case Studies", value: "case-studies" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 AI Tools Used for Design in 2025",
      category: "Design",
      date: "2 January, 2025",
      image: "/assets/insights/blogs/image_1.svg",
    },
    {
      id: 2,
      title: "Top 5 AI Tools Used for Design in 2025",
      category: "Design",
      date: "2 January, 2025",
      image: "/assets/insights/blogs/image_2.svg",
    },
    {
      id: 3,
      title: "Top 5 AI Tools Used for Design in 2025",
      category: "Design",
      date: "2 January, 2025",
      image: "/assets/insights/blogs/image_3.svg",
    },
    {
      id: 4,
      title: "Top 5 AI Tools Used for Design in 2025",
      category: "Design",
      date: "2 January, 2025",
      image: "/assets/insights/blogs/image_4.svg",
    },
    {
      id: 5,
      title: "Top 5 AI Tools Used for Design in 2025",
      category: "Design",
      date: "2 January, 2025",
      image: "/assets/insights/blogs/image_5.svg",
    },
    {
      id: 6,
      title: "Top 5 AI Tools Used for Design in 2025",
      category: "Design",
      date: "2 January, 2025",
      image: "/assets/insights/blogs/image_6.svg",
    },
  ];
  return (
    <div>
      {" "}
      <Tabs defaultValue="all" className="mb-8 py-15 z-10 relative w-full">
        {/* Mobile Tabs */}
        <hr className="border-t border-black   block md:hidden mb-6" />
        <div className="md:hidden">
          <Tabs.List className="tabs-container">
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.value} value={tab.value} className="tabs">
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </div>
        <hr className="border-t border-black mb-6 mt-6 hidden md:block" />
        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs.List className="grid grid-cols-8 gap-2 pb-2">
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.value} value={tab.value} className="">
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </div>

        {/* Content Panels */}
        {tabs.map((tab) => (
          <Tabs.Panel key={tab.value} value={tab.value} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {blogPosts.map((post) => (
                <Link href={`/insights/${post.id}`} key={post.id}>
                  <div className="rounded-lg overflow-hidden ">
                    <div className="relative w-full h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 rounded-md shadow-md border border-gray-200">
                      <div className="text-sm text-black mb-1">
                        {post.category}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {post.title}
                      </h3>
                      <div className="text-xs text-black mb-3">
                        Posted on {post.date}
                      </div>
                      <PrimaryButton className="mt-10" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Tabs.Panel>
        ))}
      </Tabs>
      <div className="flex justify-center text-center mt-10">
        <PrimaryButton text="Load More" className="text-center" />
      </div>
    </div>
  );
}

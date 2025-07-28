"use client";

import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../../public/assets/projects/project1.svg";
import Image2 from "../../../../public/assets/projects/project2.svg";
import Image3 from "../../../../public/assets/projects/project3.svg";
import Image4 from "../../../../public/assets/projects/project4.svg";
import PrimaryButton from "@/components/common/primarybutton";
import "@/app/projects/styles/projects.css";

const images = [
  [ Image1, Image2 ],
  [ Image3, Image4 ],
  [ Image1, Image2 ],
  [ Image2, Image1 ],
];

export default function AlternatingImages() {
  return (
    <div className="container my-20">
      <h1 className="projects_heading">PROJECTS</h1>
      <div className="space-y-10">
        {images.map((pair, rowIdx) => {
          const isEvenRow = rowIdx % 2 === 0;

          return (
            <div key={rowIdx} className="flex flex-col md:flex-row gap-6">
              {pair.map((src, idx) => {
                const isFirst = idx === 0;

                const widthClass =
                  (isEvenRow && isFirst) || (!isEvenRow && !isFirst)
                    ? "md:w-3/5"
                    : "md:w-2/5";

                const projectId = rowIdx * 2 + idx;

                return (
                  <Link
                    key={idx}
                    href={`/projects/${projectId}`}
                    className={`${widthClass} relative group overflow-hidden aspect-[4/3] rounded-lg block`}
                  >
                    <Image
                      src={src}
                      alt={`Project ${projectId}`}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-end">
                      <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        <h1 className="text-white text-lg font-semibold">Project Name</h1>
                        <p className="text-white text-sm font-medium">Project Services</p>
                      </div>
                    </div>

                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center text-center mt-10">
        <PrimaryButton text="Load More" className="text-center" />
      </div>
    </div>
  );
}

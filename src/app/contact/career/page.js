"use client";
import React from "react";
import Circle from "../../../../public/assets/contact/careercircle.svg";
import Image1 from "../../../../public/assets/contact/team_1.svg";
import Image2 from "../../../../public/assets/contact/team_2.svg";
import Image3 from "../../../../public/assets/contact/team_3.svg";
import Image4 from "../../../../public/assets/contact/dots.svg";
import Underline from "../../../../public/assets/contact/underline.svg";
import Image from "next/image";
import Link from "next/link";
import "@/app/contact/styles/contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const jobs = {
  design: [
    {
      id: 1,
      title: "Sr. UI Designer",
      experience: "3 Years",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Illustrator & Animator",
      experience: "2 Years",
      location: "Hyderabad",
      type: "Full-time",
    },
  ],
  technology: [
    {
      id: 3,
      title: "Front-end Developer",
      experience: "2 Years",
      location: "Hyderabad, Mumbai",
      type: "Full-time",
    },
    {
      id: 4,
      title: "Android Developer",
      experience: "2 Years",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      id: 5,
      title: "iOS Developer",
      experience: "3 Years",
      location: "Hyderabad",
      type: "Full-time",
    },
  ],
  sales: [
    {
      id: 6,
      title: "Sr. Sales manager",
      experience: "3 Years",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      id: 7,
      title: "Technical Content Writer",
      experience: "2 Years",
      location: "Hyderabad, Bangalore",
      type: "Full-time",
    },
  ],
};
const JobCard = ({ job }) => (
  <Link href={`/contact/career/${job.id}`}>
    <div className="jobcontainer flex justify-between px-2">
      <div>
        <h4 className="font-semibold">{job.title}</h4>
        <p className="text-sm mt-6 text-secondary">
          Experience: {job.experience} | Full-time
        </p>
      </div>

      <div className="flex flex-col items-end justify-between ">
        <span className="text-sm">{job.location}</span>
        <span className="text-primary mt-6 text-sm font-medium ">
          View 
        </span>
      </div>
    </div>
  </Link>
);


const JobSection = ({ title, description, jobs }) => (
  <>
    <div className="md:flex md:items-start gap-4 md:my-8 space-y-6">
      <div className="md:w-2/4">
        <h3 className="jobtitle mt-3">{title}</h3>
        <p className="text-sm text-secondary mt-3 ">{description}</p>
      </div>
      <div className="md:w-3/4 space-y-6 ">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
    <hr className="custom-divider" />
  </>
);

export default function CareerTalk() {
  return (
    <div className="container ">
      <div className="bird_header">
        <span className="bird_subheader">Careers</span>
        <DotLottieReact
          src="/assets/flyingbird.lottie"
          loop
          autoplay
          className="flying_bird"
        />
      </div>

      <div className="md:flex items-center gap-2   mb-4">
        <h1 className="font md:text-5xl text-3xl">
          Want To Join The <span className="text-primary">Team</span> ?
        </h1>

        {/* Vertical line */}
        <div className="h-8 w-[1px]  hidden md:block bg-secondary"></div>

        <div className="md:flex mt-3 flex-col items-center justify-center">
          <span className="text-sm block">We're always hiring</span>
          <span className="underline-image">
            <Image
              src={Underline}
              alt="underline"
              className="hidden md:block"
            />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:mt-10 gap-4 md:grid-cols-3 md:gap-4 lg:gap-4 xl:gap-4 hidden md:grid">
        <div className="col-span-1">
          <Image
            src={Image1}
            alt="Team hands image"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={Image2}
            alt="Laptop/workspace image"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1 mb-4"> {/* Added mb-4 to create space below */}
          <Image
            src={Image3}
            alt="Team meeting image"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:hidden">
        <div className="col-span-1">
          <Image
            src={Image1}
            alt="Team hands image"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={Image2}
            alt="Laptop/workspace image"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={Image3}
            alt="Team meeting image"
            className="w-full h-40 object-cover"
          />
        </div>
      </div>



      <div className="md:mt-25 mt-10">
        <h2 className="text-3xl xl:text-4xl md:text-3xl font-medium text-center">
          We bring a wealth of experience
          <span className="inline md:block mt-2">from a wide range of backgrounds.</span>
        </h2>
        <hr className="border-t border-black my-8" />
      </div>



      <JobSection
        title="Design"
        description="Open positions in our design team."
        jobs={jobs?.design}
      />
      <JobSection
        title="Technology"
        description="Open positions in our Software team."
        jobs={jobs?.technology}
      />
      <JobSection
        title="Sales & Marketing"
        description="Open positions in our Digital Marketing and Sales team."
        jobs={jobs?.sales}
      />
      {/* <div className="md:flex md:justify-between bg-[#F5F5F5] items-center p-3 my-10 rounded-lg ">
        <div className="text-center text-secondary text-xs md:text-sm">
          If Your Profile is not listed above, Send your resume here
        </div>
        <div className="text-center mt-4 md:mt-0">
          <button className="bg-primary p-2 cursor-pointer  rounded-lg text-xs text-white">
            Send here
          </button>
        </div>
      </div> */}
    </div>
  );
}

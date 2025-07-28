"use client";
import React, { useState, useEffect } from "react";

import Image1 from "../../../../public/assets/contact/team_1.svg";
import Image2 from "../../../../public/assets/contact/team_2.svg";
import Image3 from "../../../../public/assets/contact/team_3.svg";

import Underline from "../../../../public/assets/contact/underline.svg";
import Image from "next/image";
import Link from "next/link";
import "@/app/contact/styles/contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGetCareers, useGetCategories } from "../hooks/careerCRUDapi";

const JobCard = ({ job }) => (
  <Link href={`/contact/career/${job.id}`}>
    <div className="jobcontainer flex justify-between px-2">
      <div>
        <h4 className="font-semibold">{job.role || job.title}</h4>
        <p className="text-sm mt-6 text-secondary">
          Experience: {job.experience} |{" "}
          {job.jobType || job.type || "Full-time"}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between ">
        <span className="text-sm">{job.locations || job.location}</span>
        <span className="text-primary mt-6 text-sm font-medium ">View</span>
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
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No open positions at the moment</p>
        )}
      </div>
    </div>
    <hr className="custom-divider" />
  </>
);

export default function CareerTalk() {
  const [page, setPage] = useState(1);
  const {
    data: careersData,
    isLoading: jobsLoading,
    error: jobsError,
  } = useGetCareers(page, 20);
  const {
    data: departmentsData,
    isLoading: deptsLoading,
    error: deptsError,
  } = useGetCategories("department");
  const [groupedJobs, setGroupedJobs] = useState({});
  const [departments, setDepartments] = useState([]);
  const [departmentMap, setDepartmentMap] = useState({});
  const [departmentDescriptions, setDepartmentDescriptions] = useState({});

  useEffect(() => {
    if (departmentsData && Array.isArray(departmentsData)) {
      const deptMap = {};
      departmentsData.forEach((dept) => {
        deptMap[dept.id] = dept.name;
      });
      setDepartmentMap(deptMap);
    }
  }, [departmentsData]);

  useEffect(() => {
    if (careersData && careersData.data && Array.isArray(careersData.data)) {
      const grouped = {};
      const descriptions = {};

      careersData.data.forEach((job) => {
        const departmentId = job.department;
        const departmentName = departmentMap[departmentId] || departmentId;
        if (!grouped[departmentName]) {
          grouped[departmentName] = [];

          if (job.roleDescription) {
            descriptions[departmentName] = job.roleDescription;
          }
        }
        grouped[departmentName].push(job);
      });
      setGroupedJobs(grouped);
      setDepartments(Object.keys(grouped));
      setDepartmentDescriptions(descriptions);
    }
  }, [careersData, departmentMap]);

  const isLoading = jobsLoading || deptsLoading;
  const error = jobsError || deptsError;

  // Function to get department description
  const getDepartmentDescription = (departmentName) => {
    return (
      departmentDescriptions[departmentName] ||
      `Open positions in our ${departmentName} team.`
    );
  };

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
      <div className="md:flex items-center gap-2 mb-4">
        <h1 className="font md:text-5xl text-3xl">
          Want To Join The <span className="text-primary">Team</span> ?
        </h1>
        {/* Vertical line */}
        <div className="h-8 w-[1px] hidden md:block bg-secondary"></div>
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
        <div className="col-span-2 md:col-span-1 mb-4">
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
          <span className="inline md:block mt-2">
            from a wide range of backgrounds.
          </span>
        </h2>
        <hr className="border-t border-black my-8" />
      </div>

      {isLoading ? (
        <div className="text-center py-10">Loading available positions...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">
          Error loading positions...
        </div>
      ) : (
        <>
          {departments.length > 0 ? (
            departments.map((department) => (
              <JobSection
                key={department}
                title={department}
                description={getDepartmentDescription(department)}
                jobs={groupedJobs[department]}
              />
            ))
          ) : (
            <div className="text-center py-10">
              No job openings available at the moment.
            </div>
          )}

          {/* Pagination controls */}
          {careersData && careersData.totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-8">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 mr-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {page} of {careersData.totalPages}
              </span>
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, careersData.totalPages))
                }
                disabled={page === careersData.totalPages}
                className="px-4 py-2 ml-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <div className="md:flex md:justify-between bg-[#F5F5F5] items-center p-3 my-10 rounded-lg ">
        <div className="text-center text-secondary text-xs md:text-sm">
          If Your Profile is not listed above, Send your resume here
        </div>
        <div className="text-center mt-4 md:mt-0">
          <button className="bg-primary p-2 cursor-pointer rounded-lg text-xs text-white">
            Send here
          </button>
        </div>
      </div>
    </div>
  );
}

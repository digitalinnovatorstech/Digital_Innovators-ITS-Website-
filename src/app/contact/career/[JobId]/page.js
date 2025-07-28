"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import JobImage from "../../../../../public/assets/contact/design.svg";
import Orangebutton from "../../../../../public/assets/orangebutton.svg";
import JobApplicationForm from "../components/jobform";
import "../../../contact/styles/contact.css";

import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { useGetCareerById } from "../../hooks/careerCRUDapi";

// Department mapping
const departmentMap = {
  9: "Design",
  16: "Technology",
  // Add more department mappings as needed
};

export default function JobDetails() {
  const params = useParams();
  const jobId = params?.JobId;
  const { data: careerData, isLoading, error } = useGetCareerById(jobId);
  const [ parsedContent, setParsedContent ] = useState(null);
  const [ responsibilities, setResponsibilities ] = useState([]);
  const [ qualifications, setQualifications ] = useState([]);

  useEffect(() => {
    if (careerData) {
      // Parse HTML content
      if (careerData.content && careerData.content.length > 0) {
        const htmlContent = careerData.content[ 0 ].text;
        setParsedContent(htmlContent);
        const contentText = htmlContent.replace(/<[^>]*>/g, '');
        const respMatch = contentText.match(/Responsibilities:(.*?)(?=Qualifications:|$)/s);
        const qualMatch = contentText.match(/Qualifications:(.*?)(?=$)/s);

        if (respMatch && respMatch[ 1 ]) {
          setResponsibilities(
            respMatch[ 1 ].split('\n')
              .map(item => item.trim())
              .filter(item => item.length > 0)
          );
        } else {
          // Default responsibilities if not found in content
          setResponsibilities([
            "Collaborate with the team",
            "Deliver high-quality work",
            "Meet project deadlines",
            "Communicate effectively"
          ]);
        }

        if (qualMatch && qualMatch[ 1 ]) {
          setQualifications(
            qualMatch[ 1 ].split('\n')
              .map(item => item.trim())
              .filter(item => item.length > 0)
          );
        } else {
          // Default qualifications if not found in content
          setQualifications([
            `${careerData.experience}+ years of experience`,
            "Relevant education or training",
            "Strong communication skills",
            "Problem-solving abilities"
          ]);
        }
      }
    }
  }, [ careerData ]);

  if (isLoading) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading job details...</h2>
          <Link href="/contact/career" className="text-primary">
            Return to Careers
          </Link>
        </div>
      </div>
    );
  }

  if (error || !careerData) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">
            {error ? "Error loading job details" : "Job not found"}
          </h2>
          <p className="mb-4">
            {error ? error.message : "The job you're looking for doesn't exist or has been removed."}
          </p>
          <Link href="/contact/career" className="text-primary">
            Return to Careers
          </Link>
        </div>
      </div>
    );
  }

  // Get department name from mapping
  const departmentName = departmentMap[ careerData.department ] || `Department ${careerData.department}`;

  return (
    <div className="container">
      <div className="text-center my-7 space-y-2">
        <h1 className="text-2xl font-normal text-secondary">
          Join Our Team as
        </h1>
        <h2 className="text-4xl font-semibold text-secondary">{careerData.role}</h2>
        <p className="text-secondary">{careerData.locations}</p>

      </div>

      <div className="my-5 mb-14 w-full max-h-[250px] flex justify-center items-center overflow-hidden">
        {careerData && careerData.content && careerData.content[ 0 ] && careerData.content[ 0 ].url ? (
          <Image
            src={careerData.content[ 0 ].url}
            alt={`${careerData.role} image`}
            width={800}
            height={500}
            className="object-contain w-full h-full"
          />
        ) : (
          <Image
            src={JobImage}
            alt="Workspace"
            width={800}
            height={500}
            className="object-contain w-full h-full"
          />
        )}
      </div>

      <div className="mb-8">
        <h3 className="job_heading">About the Job</h3>

        {parsedContent && (
          <div className="mt-4 text-gray-700">
            {parse(parsedContent.replace(/<figure class="image">[\s\S]*?<\/figure>/g, '')
              .replace(/<img[^>]*>/g, ''))}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="job_heading">Responsibilities</h3>
        <ul className="individual_job">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h1 className="job_heading">Qualifications</h1>
        <ul className="individual_job">
          {qualifications.map((qualification, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {qualification}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center my-15">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          "Excited to work along with you, see you soon"
        </h3>
        <JobApplicationForm />
      </div>
    </div>
  );
}

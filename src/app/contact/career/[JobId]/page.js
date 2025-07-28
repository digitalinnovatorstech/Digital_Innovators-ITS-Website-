"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import JobImage from "../../../../../public/assets/contact/design.svg";
import Orangebutton from "../../../../../public/assets/orangebutton.svg";
import JobApplicationForm from "../components/jobform";
import "@/app/contact/styles/contact.css";
const jobs = {
  1: {
    title: "Sr. UI Designer",
    location: "Hyderabad",
    experience: "3 Years",
    description:
      "Innovatorstech is looking for freethinkers who visualize what others don't and are comfortable outside the box. People who empathize with users and simplify solutions like a piece of cake! You should be excited about research and analysis and also open-minded with an unquenchable thirst for new approaches and solutions to real-world problems faced by the common man. You should analyze tasks, and user journeys and provide workflows, interactions, and wireframes.",
    responsibilities: [
      "Proven experience as a UI/UX Designer or similar role",
      "Solid experience in creating wireframes, storyboards, user flows, process flows and site maps",
      "Proficiency in Photoshop, Illustrator, Figma, or other visual design and wire-framing tools",
      "Excellent visual design skills with sensitivity to user-system interaction, including mobile responsive design",
      "Strong portfolio of design projects",
    ],
    qualifications: [
      "Proven experience as a UI/UX Designer or similar role",
      "Solid experience in creating wireframes, storyboards, user flows, process flows and site maps",
      "Proficiency in Photoshop, Illustrator, Figma, or other visual design and wire-framing tools",
      "Excellent visual design skills with sensitivity to user-system interaction, including mobile responsive design",
      "Strong portfolio of design projects",
    ],
  },
  2: {
    title: "Illustrator & Animator",
    location: "Hyderabad",
    experience: "2 Years",
    description:
      "Proven experience as a Sr. UX/UI Designer or similar role. Solid experience in creating wireframes, storyboards, user flows, process flows and site maps. Proficiency in Photoshop, Illustrator, Figma, or other visual design and wire-framing tools. Excellent visual design skills with sensitivity to user-system interaction, including mobile responsive design. Strong portfolio of design projects.",
    responsibilities: [
      "Create engaging illustrations and animations",
      "Develop visual concepts and designs",
      "Collaborate with the design team",
      "Maintain brand consistency",
      "Create motion graphics",
    ],
    qualifications: [
      "2+ years of illustration and animation experience",
      "Proficiency in animation software",
      "Strong portfolio showing animation work",
      "Understanding of motion principles",
      "Creative problem-solving skills",
    ],
  },
};

export default function JobDetails() {
  const params = useParams();
  const jobId = params?.JobId;
  const job = jobs[ jobId ];
  // fallback
  if (!job) {
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading job details...</h2>
          <Link href="/contact/career" className="text-primary">
            Return to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="text-center my-7 space-y-2">
        <h1 className="text-2xl font-normal text-secondary">
          Join Our Team as
        </h1>
        <h2 className="text-4xl font-semibold text-secondary">{job.title}</h2>
        <p className="text-secondary">{job.location}</p>
        {/* <button className="applybutton w-32">
          <span alt="company icon">
            <Image src={Orangebutton} alt="Orange button icon" />
          </span>
          <span className="text-primary text-xs">Apply Now</span>
        </button> */}
      </div>

      <div className="my-5 mb-14 w-full ">
        <Image
          src={JobImage}
          alt="Workspace"
          layout="responsive"
          width={100}
          height={50}
          className="w-full h-auto"
        />
      </div>


      <div className="mb-8">
        <h3 className="job_heading">About the Job</h3>
        <p className="text-gray-700 mb-2">{job.description}</p>
      </div>

      <div className="mb-8">
        <h3 className="job_heading ">Responsibilities</h3>
        <ul className="individual_job">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h1 className="job_heading">Qualifications</h1>
        <ul className="individual_job">
          {job.qualifications.map((qualification, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {qualification}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center my-15 ">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          "Excited to work along with you, see you soon"
        </h3>
        <JobApplicationForm />
      </div>
    </div>
  );
}

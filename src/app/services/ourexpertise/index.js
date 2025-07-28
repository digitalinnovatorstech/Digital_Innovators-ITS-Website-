'use client'
import "@/app/services/styles/services.css";
import Think from "../../../../public/assets/services/think.svg";
import Create from "../../../../public/assets/services/create.svg";
import Achieve from "../../../../public/assets/services/achieve.svg";
import Image from "next/image";
import "@/app/services/styles/services.css";

export default function OurExpertise() {
  return (
    <div className="expertise_container ">
      {/* Header Section */}
      <div className="md:block hidden">
        {" "}
        <div className="mb-5 ">
          <h3 className="text-gray-500 text-lg mb-4">OUR EXPERTISE</h3>
        </div>
        <div className="expertise_head_body ">
          <h1 className="expertise_header">
            We Craft Experiences that <br />
            Amaze, Engage, & Build Loyalty.
          </h1>

          {/* People illustration */}
          <div className="relative top-4 md:top-6">
            <img
              src="/assets/services/groupimage.svg"
              alt="People collaborating"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden ">
        <div className="flex flex-row items-center gap-4 ">
          {/* Header */}
          <h3 className="text-gray-500 text-lg">OUR EXPERTISE</h3>
          <img
            src="/assets/services/groupimage.svg"
            alt="Expertise Icon"
            width={200}
            height={200}
          />
        </div>
        <div>
          {/* Main Heading */}
          <h1 className="text-xl font-bold leading-snug mb-4">
            We Craft Experiences that Amaze, Engage, & Build Loyalty.
          </h1>
        </div>
      </div>

      {/* Three Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pr-30">
        {/* Column 1: We Think */}
        <div>
          <div className="border_black pt-4 ">
            <div className="column_head">
              <h2 className="column_para">We Think</h2>
              <span className="text-xl">
                <Image src={Think} alt="think" />
              </span>
            </div>
          </div>

          <ul className="column_list">
            <li>RESEARCH & ANALYSIS</li>
            <li>STRATEGIC WORKSHOPS</li>
            <li>PLANIFICATION</li>
            <li>WIREFRAMES</li>
            <li>USER STORIES</li>
            <li>CONTENT HIERARCHY</li>
          </ul>
        </div>

        {/* Column 2: We Create */}
        <div>
          <div className="border_black">
            <div className="column_head">
              <h2 className="column_para">We Create</h2>
              <span className="text-xl">
                <Image src={Create} alt="create" />
              </span>
            </div>
          </div>

          <ul className="column_list ">
            <li>STORYTELLING</li>
            <li>USER EXPERIENCE (UX)</li>
            <li>USER INTERFACE (UI)</li>
            <li>PROTOTYPES</li>
            <li>RESPONSIVE DESIGN</li>
            <li>VISUAL MOTION & TEXT CONTENT</li>
          </ul>
        </div>

        {/* Column 3: We Achieve */}
        <div>
          <div className="border_black">
            <div className="column_head">
              <h2 className="column_para">We Achieve</h2>
              <span className="text-xl">
                <Image src={Achieve} alt="achieve" />
              </span>
            </div>
          </div>

          <ul className="column_list">
            <li>WEB APPLICATIONS</li>
            <li>CUSTOM - APPLICATIONS</li>
            <li>SEARCH ENGINE OPTIMIZATION (SEO)</li>
            <li>CLOUD MANAGEMENT</li>
            <li>MOBILE APPLICATIONS</li>
            <li>AI, AR/VR, CRM, SAAS, CMS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

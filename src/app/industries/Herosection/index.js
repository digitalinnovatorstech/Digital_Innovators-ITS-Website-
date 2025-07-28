"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import EducationImg from "../../../../public/assets/empower/empower_1.svg";
import HealthcareImg from "../../../../public/assets/empower/empower_2.svg";
import ITImg from "../../../../public/assets/empower/empower_3.svg";
import ECommerceImg from "../../../../public/assets/empower/empower_4.svg";
import FinanceImg from "../../../../public/assets/empower/empower_5.svg";
import AgricultureImg from "../../../../public/assets/empower/empower_6.svg";
import FoodImg from "../../../../public/assets/empower/empower_7.svg";
import ConstructionImg from "../../../../public/assets/empower/empower_8.svg";
import TravelImg from "../../../../public/assets/empower/empower_9.svg";
import EduImg from "../../../../public/assets/home/workfor/education.svg";
import HealthImg from "../../../../public/assets/home/workfor/healthcare.svg";
import It from "../../../../public/assets/home/workfor/it.svg";
import EcommImg from "../../../../public/assets/home/workfor/ecommerce.svg";
import FinImg from "../../../../public/assets/home/workfor/finance.svg";
import AgrImg from "../../../../public/assets/home/workfor/agriculture.svg";
import FoodImage from "../../../../public/assets/home/workfor/food.svg";
import ContImg from "../../../../public/assets/home/workfor/construction.svg";
import TraImg from "../../../../public/assets/home/workfor/tarvel.svg";
import "@/app/technologies/styles/technologies.css";
import "@/app/contact/styles/contact.css";
import PrimaryButton from "@/components/common/primarybutton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industriesData = [
  {
    id: "education",
    title: "Education",
    image: EducationImg,
    hoverImage: EduImg,
    description:
      "Transform the future of education with our innovative edtech services, designed to improve outcomes and streamline learning.",
  },
  {
    id: "healthcare",
    title: "Health Care",
    image: HealthcareImg,
    hoverImage: HealthImg,
    description:
      "In healthcare with innovative digital solutions that improve patient care, streamline operations, telemedicine, health data analytics with AI-driven.",
  },
  {
    id: "it-consulting",
    title: "IT / Consulting",
    image: ITImg,
    hoverImage: It,
    description:
      "Unlock your organization's potential with personalized IT services and to consulting with actionable insights for long-term success.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    image: ECommerceImg,
    hoverImage: EcommImg,
    description:
      "Empowering your e-commerce business with tailored digital solutions that enhance customer experiences, advanced analytics to optimize performance.",
  },
  {
    id: "finance-insurance",
    title: "Finance & Insurance",
    image: FinanceImg,
    hoverImage: FinImg,
    description:
      "Revolutionize your financial operations with our advanced fintech solutions, driving efficiency and innovation.",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    image: AgricultureImg,
    hoverImage: AgrImg,
    description:
      "Transforming agriculture with innovative digital solutions that drive smarter, we provide real-time data, optimize resource usage, and improve crop yields.",
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    image: FoodImg,
    hoverImage: FoodImage,
    description:
      "Transforming the food industries with innovative digital solutions that enhance customer experiences and streamline operations.",
  },
  {
    id: "construction",
    title: "Construction",
    image: ConstructionImg,
    hoverImage: ContImg,
    description:
      "Our services include virtual property tours, advanced analytics, and seamless online platforms, We empower real estate businesses to deliver smarter, faster to Users.",
  },
  {
    id: "travel-hospitality",
    title: "Travel & Hospitality",
    image: TravelImg,
    hoverImage: TraImg,
    description:
      "We provide digital solutions tailored to the travel industry, enhancing efficiency, customer experiences, and business growth through innovative technology integrations.",
  },
];

const IndustryCard = ({ industry, index }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const cardRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize animation on mount
    if (typeof window !== "undefined" && cardRef.current) {
      // Set initial state (off-screen)
      gsap.set(cardRef.current, {
        y: 100,
        opacity: 0
      });
      // Create the scroll trigger animation
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.2, // Staggered animation based on index
        ease: "power3.out"
      });
    }
  }, [ index ]);

  const handleCardClick = () => {
    router.push(`/industries/${industry.id}`);
  };

  return (
    <div
      className="industry-card container"
      onClick={handleCardClick}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-shape-container">
        <div className="image-container">
          <Image
            src={isHovered ? industry.hoverImage : industry.image}
            alt={industry.title}
            fill
            className={`industry-image ${isHovered ? 'hover-image' : ''}`}
          />
        </div>
      </div>
      <div className="card-content max-w-[300px]">
        <h3 className="card-title">{industry.title}</h3>
        <p className="card-description">{industry.description}</p>
        <div className="card-button">
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};


export default function IndustriesBlogs() {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Header animations
    if (typeof window !== "undefined") {
      // Animate header elements
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Animate title with a slight delay
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out"
        }
      );

      // Animate subtitle with more delay
      gsap.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <>
      <div className="container py-10">
        <div className="bird_header">
          <span className="bird_subheader">Industries</span>

          <DotLottieReact
            src="/assets/flyingbird.lottie"
            loop
            autoplay
            className="flying_bird"
          />
        </div>
        <h1 className="font text-3xl mt-5 xl:text-7xl mb-5 md:mb-0" >
          Redefining industries through{" "}
          <span className="text-primary">innovative</span>{" "}
          <span className="md:hidden">design...</span>
          <span className="hidden md:inline">
            des<span className="text-primary">i</span>gn
            <span className="text-primary">...</span>
          </span>
        </h1>

        <hr className=" mt-3" />
        <p className="text-secondary mt-4 text-lg mb-10" >
          We empower industries with world-class design solutions, helping
          <br />
          businesses stay ahead in a competitive market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="transition-transform duration-100"
            >
              <IndustryCard industry={industry} index={index} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          max-width: 100%;
          justify-items: center;
        }

        .industry-card {
          position: relative;
          border-radius: 36px;
          overflow: visible;
          border: 1px solid black;
          padding-bottom: 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.15s ease;
          width: 380px;
          margin-top: 90px;
        }

        .card-shape-container {
          position: absolute;
          width: 290px;
          height: 300px;
          top: -90px;
          z-index: 2;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          transition: all 0.15s ease;
          background-color: #F0F0F0;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Adding the white corner to the image container */
        .image-container::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 40px;
          background-color: white;
          border-radius: 0 0 0 30px;
          z-index: 3;
        }

        .industry-image {
          object-fit: contain;
          z-index: 1;
          transition: all 0.15s ease;
        }

        .hover-image {
          height: 300px !important;
          width: 290px !important;
          object-fit: contain !important;
          transition: all 0.15s ease;
        }

        .card-content {
          padding: 12px 12px 20px 12px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          max-width: 300px;
          margin-top: 210px;
        }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #111;
        }

        .card-description {
          font-size: 12px;
          line-height: 1.6;
          color: #404040;
          margin-bottom: 15px;
          flex-grow: 1;
          font-weight: 400;
        }

        .card-button {
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: 1fr;
          }
          
          .industry-card {
            max-width: 350px;
            margin: 0 auto;
            margin-top: 90px;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
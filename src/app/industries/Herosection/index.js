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
import "../styles/industries.css";

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
      "Empowering your e-commerce business with digital solutions that enhance experiences, advanced analytics to optimize performance.",
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
      "Our services include virtual property tours, advanced analytics, and seamless online platforms, smarter, faster to Users.",
  },
  {
    id: "travel-hospitality",
    title: "Travel Industry",
    image: TravelImg,
    hoverImage: TraImg,
    description:
      "We provide digital solutions tailored to the travel industry, enhancing efficiency and business growth technology integrations.",
  },
];

const IndustryCard = ({ industry, index }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(false);
  const cardRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    router.push(`/industries/${industry.id}`);
  };

  return (
    <div
      className={`industry-card container ${isVisible ? 'card-visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
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
  const [ isVisible, setIsVisible ] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="container py-10" ref={sectionRef}>
        <div className="bird_header">
          <span className="bird_subheader">Industries</span>
          <DotLottieReact
            src="/assets/flyingbird.lottie"
            loop
            autoplay
            className="flying_bird"
          />
        </div>
        <h1 className="font text-3xl mt-5 xl:text-7xl mb-5 md:mb-0">
          Redefining industries through{" "}
          <span className="text-primary">innovative</span>{" "}
          <span className="md:hidden">design...</span>
          <span className="hidden md:inline">
            des<span className="text-primary">i</span>gn
            <span className="text-primary">...</span>
          </span>
        </h1>
        <hr className="mt-3" />
        <p className="text-secondary mt-4 text-lg mb-10">
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
    </>
  );
}

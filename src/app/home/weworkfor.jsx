"use client";
import React, { useState, useRef, useEffect } from "react";
import "../home/styles/workfor.css";

const Weworkfor = () => {
  const industries = [
    {
      title: "Education",
      description:
        "Transform the future of education with our innovative edtech services, designed to improve outcomes and streamline learning.",
      icon: "/assets/home/workfor/eduicon.svg",
      bgImage: "/assets/home/workfor/education.svg",
    },
    {
      title: "Agriculture",
      description:
        "Transforming agriculture with innovative digital solutions that drive smarter, real-time data, optimize resource usage, and improve crop yields.",
      icon: "/assets/home/workfor/agriicon.svg",
      bgImage: "/assets/home/workfor/agriculture.svg",
    },
    {
      title: "Health Care",
      description:
        "In healthcare with innovative digital solutions that improve patient care, streamline operations, telemedicine, health data analytics with AI-driven.",
      icon: "/assets/home/workfor/healthicon.svg",
      bgImage: "/assets/home/workfor/healthcare.svg",
    },
    {
      title: "Finance & Insurance",
      description:
        "Revolutionize your financial operations with our advanced fintech solutions, driving efficiency and innovation.",
      icon: "/assets/home/workfor/financeicon.svg",
      bgImage: "/assets/home/workfor/finance.svg",
    },
    {
      title: "IT/ Consulting",
      description:
        "Unlock your organization's potential with personalized IT services and to consulting with actionable insights for long-term success.",
      icon: "/assets/home/workfor/iticon.svg",
      bgImage: "/assets/home/workfor/it.svg",
    },
    {
      title: "E-Commerce",
      description:
        "Empowering your e-commerce business with tailored digital solutions that enhance customer experiences and drive sales, advanced analytics to optimize performance.",
      icon: "/assets/home/workfor/ecomicon.svg",
      bgImage: "/assets/home/workfor/ecommerce.svg",
    },
    {
      title: "Construction",
      description:
        "Our services include virtual property tours, advanced analytics, and seamless online platforms, We empower real estate businesses to deliver smarter, faster to Users.",
      icon: "/assets/home/workfor/consticon.svg",
      bgImage: "/assets/home/workfor/construction.svg",
    },
    {
      title: "Food Industry",
      description:
        "Transforming the food industries with innovative digital solutions that enhance customer experiences and streamline operations.",
      icon: "/assets/home/workfor/foodicon.svg",
      bgImage: "/assets/home/workfor/food.svg",
    },
    {
      title: "Travel Industry",
      description:
        "We provide digital solutions tailored to the travel industry, enhancing efficiency, customer experiences, and business growth through innovative technology integrations.",
      icon: "/assets/home/workfor/travelicon.svg",
      bgImage: "/assets/home/workfor/tarvel.svg",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingLine1Ref = useRef(null);
  const subHeadingLine2Ref = useRef(null);

  useEffect(() => {
    const prepareTextAnimation = () => {
      if (!subHeadingLine1Ref.current || !subHeadingLine2Ref.current) return;

      const words1 = subHeadingLine1Ref.current.innerText.split(" ");
      subHeadingLine1Ref.current.innerHTML = "";
      words1.forEach((word, i) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "inline-block overflow-hidden mx-1";
        const innerSpan = document.createElement("span");
        innerSpan.className = "inline-block transform word-span";
        innerSpan.style.transitionDelay = `${0.08 * i + 0.3}s`;
        innerSpan.textContent = word;
        wordSpan.appendChild(innerSpan);
        subHeadingLine1Ref.current.appendChild(wordSpan);
      });

      const words2 = subHeadingLine2Ref.current.innerText.split(" ");
      subHeadingLine2Ref.current.innerHTML = "";
      words2.forEach((word, i) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "inline-block overflow-hidden mx-1";
        const innerSpan = document.createElement("span");
        innerSpan.className = "inline-block transform word-span";
        innerSpan.style.transitionDelay = `${0.08 * i + 0.6}s`;
        innerSpan.textContent = word;
        wordSpan.appendChild(innerSpan);
        subHeadingLine2Ref.current.appendChild(wordSpan);
      });
    };

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add("animate-heading");
            }

            const wordSpans = document.querySelectorAll(".word-span");
            wordSpans.forEach((span) => {
              span.classList.add("animate-word");
            });
          } else {
            if (headingRef.current) {
              headingRef.current.classList.remove("animate-heading");
            }

            const wordSpans = document.querySelectorAll(".word-span");
            wordSpans.forEach((span) => {
              span.classList.remove("animate-word");
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (subHeadingLine1Ref.current && subHeadingLine2Ref.current) {
      prepareTextAnimation();
    }

    if (sectionRef.current) {
      headingObserver.observe(sectionRef.current);
    }

    return () => {
      if (headingObserver) {
        headingObserver.disconnect();
      }
    };
  }, []);

  const IndustryCard = ({ title, description, icon, bgImage, index }) => {
    const [ isHovered, setIsHovered ] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && cardRef.current) {
              cardRef.current.classList.add("card-visible");
            } else if (cardRef.current) {
              cardRef.current.classList.remove("card-visible");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "-5% 0px -5% 0px",
        }
      );

      if (cardRef.current) {
        cardObserver.observe(cardRef.current);
      }

      return () => {
        if (cardObserver) {
          cardObserver.disconnect();
        }
      };
    }, []);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        ref={cardRef}
        className="industry-card relative w-full h-64 cursor-pointer perspective-500"
        style={{ transitionDelay: `${index * 0.1}s` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`bg-image absolute inset-0 rounded-2xl overflow-hidden ${isHovered ? "hovered" : ""
            }`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={`content-container absolute inset-0 p-6 rounded-2xl overflow-hidden border border-gray-400 ${isHovered ? "hovered" : ""
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="bg-primary xl:w-12 xl:h-12 w-6 h-6 rounded-lg flex items-center justify-center text-2xl mr-3 text-white">
                <img src={icon} alt={title} className="w-8 h-8" />
              </div>
              <h3
                className={`card-title xl:text-xl md:text-sm font-bold ${isHovered ? "text-white" : "text-[#1a202c]"
                  }`}
              >
                {title}
              </h3>
            </div>
            <p
              className={`card-description xl:text-sm md:text-xs mt-10 ${isHovered ? "text-white" : "text-[#4a5568]"
                }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="md:mt-20 xl:mt-0">
          <h1
            ref={headingRef}
            className="text-[#666666] xl:text-2xl uppercase xl:mb-4 heading-text"
          >
            We Work FOR
          </h1>
          <p className="font xl:text-5xl md:text-2xl mb-4 text-3xl">
            <span ref={subHeadingLine1Ref} className="inline-block">
              We have experience working across a
            </span>

            <br className="hidden md:block" />

            <span className="md:hidden"> </span>
            <span className="inline-block">
              variety of <span className="text-[#ff8c00]">industries</span> and{" "}
              <span className="text-[#ff8c00]">domains</span>.
            </span>

          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              index={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              bgImage={industry.bgImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weworkfor;

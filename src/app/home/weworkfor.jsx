import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Weworkfor = () => {
  const industries = [
    {
      title: "Education",
      description: "Transform the future of education with our innovative edtech services, designed to improve outcomes and streamline learning.",
      icon: "/assets/home/workfor/eduicon.svg",
      bgImage: "/assets/home/workfor/education.svg"
    },
    {
      title: "Agriculture",
      description: "Transforming agriculture with innovative digital solutions that drive smarter, real-time data, optimize resource usage, and improve crop yields.",
      icon: "/assets/home/workfor/agriicon.svg",
      bgImage: "/assets/home/workfor/agriculture.svg"
    },
    {
      title: "Health Care",
      description: "In healthcare with innovative digital solutions that improve patient care, streamline operations, telemedicine, health data analytics and more.",
      icon: "/assets/home/workfor/healthicon.svg",
      bgImage: "/assets/home/workfor/healthcare.svg"
    },
    {
      title: "Finance & Insurance",
      description: "Revolutionize your financial operations with our advanced fintech solutions, driving efficiency and innovation.",
      icon: "/assets/home/workfor/financeicon.svg",
      bgImage: "/assets/home/workfor/finance.svg"
    },
    {
      title: "IT/ Consulting",
      description: "Unlock your organization's potential with personalized IT services and to consulting with actionable insights for long-term success.",
      icon: "/assets/home/workfor/iticon.svg",
      bgImage: "/assets/home/workfor/it.svg"
    },
    {
      title: "E-Commerce",
      description: "Empowering your e-commerce business with tailored digital solutions that enhance customer experiences and drive sales, advanced analytics to optimize performance.",
      icon: "/assets/home/workfor/ecomicon.svg",
      bgImage: "/assets/home/workfor/ecommerce.svg"
    },
    {
      title: "Construction",
      description: "Our services include virtual property tours, advanced analytics and seamless online platforms that empower real estate businesses to deliver smarter, faster to users.",
      icon: "/assets/home/workfor/consticon.svg",
      bgImage: "/assets/home/workfor/construction.svg"
    },
    {
      title: "Food Industry",
      description: "Transforming the food industries with innovative digital solutions that enhance customer experiences and streamline operations.",
      icon: "/assets/home/workfor/foodicon.svg",
      bgImage: "/assets/home/workfor/food.svg"
    },
    {
      title: "Travel Industry",
      description: "We provide digital solutions tailored to the travel industry, enhancing efficiency, customer experiences, and business growth through innovative offerings.",
      icon: "/assets/home/workfor/travelicon.svg",
      bgImage: "/assets/home/workfor/tarvel.svg"
    },
  ];

  // Refs for the heading section
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingLine1Ref = useRef(null);
  const subHeadingLine2Ref = useRef(null);

  useEffect(() => {
    // Animation for the heading section
    const animateHeading = () => {
      // Animate the "We Work FOR" heading
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Create text animation for the first line of subheading
      const words1 = subHeadingLine1Ref.current.innerText.split(' ');
      subHeadingLine1Ref.current.innerHTML = '';

      words1.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block overflow-hidden mx-1';

        const innerSpan = document.createElement('span');
        innerSpan.className = 'inline-block transform';
        innerSpan.textContent = word;

        wordSpan.appendChild(innerSpan);
        subHeadingLine1Ref.current.appendChild(wordSpan);
      });

      // Create text animation for the second line of subheading
      const words2 = subHeadingLine2Ref.current.innerText.split(' ');
      subHeadingLine2Ref.current.innerHTML = '';

      words2.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block overflow-hidden mx-1';

        const innerSpan = document.createElement('span');
        innerSpan.className = 'inline-block transform';
        innerSpan.textContent = word;

        wordSpan.appendChild(innerSpan);
        subHeadingLine2Ref.current.appendChild(wordSpan);
      });

      // Animate first line of subheading
      gsap.fromTo(
        subHeadingLine1Ref.current.querySelectorAll('span > span'),
        {
          y: '100%',
          opacity: 0
        },
        {
          y: '0%',
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          delay: 0.3, // Delay after the heading animation
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate second line of subheading with delay
      gsap.fromTo(
        subHeadingLine2Ref.current.querySelectorAll('span > span'),
        {
          y: '100%',
          opacity: 0
        },
        {
          y: '0%',
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          delay: 0.6, // Additional delay for the second line
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    };

    animateHeading();
  }, []);

  const IndustryCard = ({ title, description, icon, bgImage }) => {
    const [ isHovered, setIsHovered ] = useState(false);
    const cardRef = useRef(null);
    const bgImageRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
      // Initial styles
      gsap.set(bgImageRef.current, {
        opacity: 0,
        scale: 0.95,
        rotation: 0,
        x: 0,
        y: 10
      });
      gsap.set(contentRef.current, {
        backgroundColor: "white",
        borderRadius: "16px",
        border: "1px dashed #ddd",
        rotation: 0
      });
      gsap.set(titleRef.current, { color: "#1a202c" });
      gsap.set(descriptionRef.current, { color: "#4a5568" });

      // Scroll animation
      gsap.fromTo(
        cardRef.current,
        {
          autoAlpha: 0,
          y: 60,
          scale: 0.95
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, []);

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(bgImageRef.current, {
        opacity: 1,
        scale: 1.05,
        rotation: -10,
        x: -5,
        y: -40,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      gsap.to(contentRef.current, {
        backgroundColor: "#353535",
        border: "none",
        rotation: 2,
        y: -5,
        duration: 0.3,
        ease: "back.out(1.2)"
      });
      gsap.to(titleRef.current, { color: "white", duration: 0.3 });
      gsap.to(descriptionRef.current, { color: "white", duration: 0.3 });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(bgImageRef.current, {
        opacity: 0,
        scale: 0.95,
        rotation: 0,
        x: 0,
        y: 10,
        duration: 0.4
      });
      gsap.to(contentRef.current, {
        backgroundColor: "white",
        border: "1px dashed #ddd",
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      gsap.to(titleRef.current, { color: "#1a202c", duration: 0.3 });
      gsap.to(descriptionRef.current, { color: "#4a5568", duration: 0.3 });
    };

    return (
      <div
        ref={cardRef}
        className="relative w-full h-64 cursor-pointer perspective-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={bgImageRef}
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: 0,
            transformOrigin: 'center center'
          }}
        />
        <div
          ref={contentRef}
          className="absolute inset-0 p-6 rounded-2xl overflow-hidden border border-gray-400"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="bg-primary xl:w-12 xl:h-12 w-6 h-6 rounded-lg flex items-center justify-center text-2xl mr-3 text-white">
                <img src={icon} alt={title} className="w-6 h-6" />
              </div>
              <h3 ref={titleRef} className="xl:text-xl md:text-sm font-bold">
                {title}
              </h3>
            </div>
            <p ref={descriptionRef} className="xl:text-sm md:text-xs mt-10">
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
        <div className='md:mt-20 xl:mt-0'>
          <h1 ref={headingRef} className='text-[#666666] xl:text-2xl uppercase xl:mb-4'>We Work FOR</h1>
          <p className='font xl:text-5xl md:text-2xl mb-4 text-3xl'>
            <span ref={subHeadingLine1Ref} className="inline-block">
              We have experience working across a
            </span>
            {/* Hide br on mobile, show on medium screens and up */}
            <br className="hidden md:block" />
            {/* Show a space on mobile only */}
            <span className="md:hidden"> </span>
            <span ref={subHeadingLine2Ref} className="inline-block">
              variety of industries and domains.
            </span>
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
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

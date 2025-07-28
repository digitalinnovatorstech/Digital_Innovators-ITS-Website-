"use client";
import "@/app/services/styles/services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vector1 from "../../../../public/assets/services/build/vector1.svg";
import Vector2 from "../../../../public/assets/services/build/vector2.svg";
import Vector3 from "../../../../public/assets/services/build/vector3.svg";
import Vector4 from "../../../../public/assets/services/build/vector4.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Build() {
  const firstSectionRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);
  const contentSectionRef = useRef(null);
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const gridItemsRef = useRef([]);
  const vector1Ref = useRef(null);
  const vector2Ref = useRef(null);
  const vector3Ref = useRef(null);
  const vector4Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial states - text fully visible, image hidden
    gsap.set(textRef.current, {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      transformOrigin: "left center", // Set origin to left for B-centered zoom
    });

    // Set image container to be fully transparent initially
    gsap.set(imageContainerRef.current, {
      opacity: 0,
    });

    // Content section initial states
    gsap.set(headerRef.current, {
      y: -200,
      opacity: 0,
      rotation: -5,
    });

    gsap.set(paragraphRef.current, {
      y: -150,
      opacity: 0,
      rotation: 3,
    });

    gsap.set(vector1Ref.current, {
      x: -50,
      opacity: 0.3,
    });

    gsap.set(vector2Ref.current, {
      x: 50,
      opacity: 0.3,
    });

    gsap.set(vector3Ref.current, {
      x: -50,
      opacity: 0.3,
    });

    gsap.set(vector4Ref.current, {
      x: 50,
      opacity: 0.3,
    });

    gridItemsRef.current.forEach((item, index) => {
      const isEven = index % 2 === 0;
      gsap.set(item, {
        x: isEven ? -300 : 300,
        opacity: 0,
      });
    });

    // First section animation timeline - modified for smoother control
    const firstSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: firstSectionRef.current,
        start: "top top",
        end: "+=400%", // Longer scroll distance for more granular control
        scrub: true, // Set to true for more direct connection to scroll position
        pin: true,
        anticipatePin: 1,
        markers: false,
        snap: {
          snapTo: "labels", // Snap to timeline labels instead of fixed points
          duration: { min: 0.1, max: 0.2 }, // Quicker snapping
          delay: 0.1, // Small delay before snapping
          ease: "power1.inOut",
        },
      },
    });

    // More gradual animation sequence with better distribution
    firstSectionTimeline
      // Stage 1: Begin zoom (25% of timeline)
      .addLabel("start")
      .to(
        textRef.current,
        {
          scale: 2.5, // Reduced first zoom stage
          x: "10%", // Slight movement toward center
          duration: 25, // Percentage of timeline
          ease: "power1.inOut",
        },
        0
      )
      // Stage 2: Continue zoom (25% of timeline)
      .addLabel("midZoom")
      .to(
        textRef.current,
        {
          scale: 5, // Reduced second zoom stage
          x: "20%", // More movement toward center
          duration: 25,
          ease: "power1.inOut",
        },
        25 // Start at 25% of timeline
      )
      // Stage 3: Final zoom and center B (20% of timeline)
      .addLabel("finalZoom")
      .to(
        textRef.current,
        {
          scale: 8, // Reduced final zoom size
          x: "30%", // Final position center
          duration: 20,
          ease: "power1.inOut",
        },
        50 // Start at 50% of timeline
      )
      // Stage 4: Rotate B into cross shape (moving upward) (15% of timeline)
      .addLabel("crossTransform")
      .to(
        textRef.current,
        {
          rotation: -45, // Explicitly set to 45 degrees
          y: "-20%", // Move upward
          duration: 15,
          ease: "power2.inOut",
        },
        70 // Start at 70% of timeline
      )
      // Stage 5: Text fade out (10% of timeline)
      .to(
        textRef.current,
        {
          opacity: 0,
          duration: 10,
          ease: "power1.inOut",
        },
        85 // Start at 85% of timeline
      )
      // Stage 6: Image fade in (10% of timeline)
      .addLabel("imageShow")
      .to(
        imageContainerRef.current,
        {
          opacity: 1,
          duration: 10,
          ease: "power1.inOut",
        },
        90 // Start at 90% of timeline, with slight overlap
      )
      .addLabel("end");

    // Content section animations with smoother transitions
    const contentTrigger = ScrollTrigger.create({
      trigger: contentSectionRef.current,
      start: "top 80%", // Start earlier for smoother entrance
      onEnter: () => {
        // More natural header animation
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.8, // Slower animation
          ease: "power3.out", // More natural easing
        });

        // More natural paragraph animation
        gsap.to(paragraphRef.current, {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 2.2, // Even slower
          ease: "power3.out",
          delay: 0.3,
        });

        // Animate vectors with smaller movements and slower timing
        gsap.to(vector1Ref.current, {
          x: -60,
          opacity: 0.7,
          duration: 2.5,
          ease: "power2.out",
        });

        gsap.to(vector2Ref.current, {
          x: 60,
          opacity: 0.7,
          duration: 2.5,
          ease: "power2.out",
        });

        gsap.to(vector3Ref.current, {
          x: -60,
          opacity: 0.7,
          duration: 2.5,
          ease: "power2.out",
        });

        gsap.to(vector4Ref.current, {
          x: 60,
          opacity: 0.7,
          duration: 2.5,
          ease: "power2.out",
        });

        // Staggered grid item animations
        gridItemsRef.current.forEach((item, index) => {
          gsap.to(item, {
            x: 0,
            opacity: 1,
            duration: 1.8, // Slower animation
            ease: "power2.out",
            delay: 0.5 + index * 0.15, // More staggered delay
          });
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current.push(el);
    }
  };

  return (
    <>
      <div
        ref={firstSectionRef}
        className="h-screen flex justify-center items-center overflow-hidden relative"
      >
        {/* The text layer */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h1 ref={textRef} className="font single_text text-[#087830]">
            Build
          </h1>
        </div>

        {/* The image layer */}
        <div
          ref={imageContainerRef}
          className="absolute inset-0 z-5 flex justify-center items-center"
        >
          <div className="h-screen w-full text-white bg-[url('/assets/services/buildbg.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center"></div>
        </div>
      </div>

      <div
        ref={contentSectionRef}
        className="bg-[#087830] overflow-hidden py-30 md:py-10 text-white md:h-screen flex items-center justify-center relative"
      >
        {/* Vector 1 - Top Left */}
        <div
          ref={vector1Ref}
          className="absolute top-2 left-16 md:top-28 md:left-28 w-18 md:w-32 lg:w-32 z-10"
        >
          <Image
            src={Vector1}
            alt="Build Vector 1"
            width={160}
            height={100}
            priority
          />
        </div>

        {/* Vector 2 - Top Right */}
        <div
          ref={vector2Ref}
          className="absolute top-8 right-24 md:top-48 md:right-28 w-16 md:w-24 lg:w-32 z-10"
        >
          <Image
            src={Vector3}
            alt="Build Vector 2"
            width={130}
            height={130}
            priority
          />
        </div>

        {/* Vector 3 - Bottom Left */}
        <div
          ref={vector3Ref}
          className="absolute bottom-8 left-24 md:bottom-10 md:left-28 w-20 md:w-28 lg:w-32 z-10"
        >
          <Image
            src={Vector2}
            alt="Build Vector 3"
            width={140}
            height={140}
            priority
          />
        </div>

        {/* Vector 4 - Bottom Right */}
        <div
          ref={vector4Ref}
          className="absolute bottom-8 right-22 md:bottom-10 md:right-28 w-20 md:w-28 lg:w-32 z-10"
        >
          <Image
            src={Vector4}
            alt="Build Vector 4"
            width={140}
            height={140}
            priority
          />
        </div>

        <div className="container relative z-20">
          <div className="header_section">
            <div ref={headerRef} className="header_text font">
              Build
            </div>
            <div>
              <p
                ref={paragraphRef}
                className="md:text-sm xl:text-lg text-center mt-5 text-justify"
              >
                Our BUILD services breathe life into your brand. From striking
                logos and intuitive UX/UI designs to compelling advertisement
                and outdoor ad designs, we create visual stories that captivate
                and connect with your audience.
              </p>
            </div>
          </div>

          <div className="service_grid">
            <div className="pt-4" ref={addToRefs}>
              <h2 className="grid_header">Web Applications</h2>
              <p className="grid_para">
                We craft responsive, scalable web applications using modern frameworks to deliver seamless digital experiences.
              </p>
            </div>

            <div className="pt-4" ref={addToRefs}>
              <h2 className="grid_header">Mobile Applications</h2>
              <p className="grid_para">
                From iOS to Android, we build custom mobile apps with intuitive UI/UX, native performance, and cross-platforms.
              </p>
            </div>

            <div className="white_border" ref={addToRefs}>
              <h2 className="grid_header">Custom Applications</h2>
              <p className="grid_para">
                Tailor-made software solutions designed to solve your unique business challenges with scalable, secure, development.
              </p>
            </div>

            <div className="white_border" ref={addToRefs}>
              <h2 className="grid_header">SaaS Implementation</h2>
              <p className="grid_para">
                We help you launch and scale cloud-based SaaS platforms with multi-tenant architecture, and real-time analytics.
              </p>
            </div>

            <div className="white_border" ref={addToRefs}>
              <h2 className="grid_header">CRM, ERP, HRMS Applications</h2>
              <p className="grid_para">
                Streamline operations with enterprise-grade CRM, ERP, and HRMS systems that enhance productivity.
              </p>
            </div>

            <div className="white_border" ref={addToRefs}>
              <h2 className="grid_header">CMS Integrations</h2>
              <p className="grid_para">
                Integrate and customize powerful content management systems (WordPress, Drupal, etc.) for flexible digital content control.
              </p>
            </div>

            <div className="white_border" ref={addToRefs}>
              <h2 className="grid_header">Cloud Management</h2>
              <p className="grid_para">
                Leverage AWS, Azure, or Google Cloud for secure, cost-effective cloud infrastructure, with real-time monitoring.
              </p>
            </div>

            <div className="white_border" ref={addToRefs}>
              <h2 className="grid_header">Emerging Tech (AI, AR/VR)</h2>
              <p className="grid_para">
                Integrate AI, machine learning, and immersive AR/VR solutions to drive innovation and futuristic digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

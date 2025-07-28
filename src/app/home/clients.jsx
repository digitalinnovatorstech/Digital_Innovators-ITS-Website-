"use client";
import PrimaryButton from "@/components/common/primarybutton";
import { useElementSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import SplitType from "split-type";

const ClientsSection = () => {
  const companyImages = Array.from(
    { length: 65 },
    (_, index) => `/assets/clients/client_${index + 1}.svg`
  );
  const { ref: containerRef } = useElementSize();
  const headingRef = useRef(null);
  const counterRef = useRef(null);
  const counterTextRef = useRef(null);
  const [ count, setCount ] = useState(0);
  const animationCompletedRef = useRef(false);
  useEffect(() => {
    const split = new SplitType(headingRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    const animateText = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const lines = headingRef.current.querySelectorAll(".line");

      // Animate first line (from left)
      gsap.fromTo(
        lines[ 0 ].querySelectorAll(".char"),
        {
          x: -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Animate second line (from right)
      gsap.fromTo(
        lines[ 1 ].querySelectorAll(".char"),
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
          delay: 0.3,
        }
      );
    };

    animateText();

    return () => {
      split.revert();
    };
  }, []);



  useEffect(() => {
    if (animationCompletedRef.current) return;

    const loadGSAP = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const obj = { val: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          once: true
        },
        onComplete: () => {
          animationCompletedRef.current = true;
        }
      });

      tl.fromTo(
        counterRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1.2,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      )

        .to(counterRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        })

        .to(obj, {
          val: 300,
          duration: 2.5,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          }
        }, "-=0.3");

      tl.fromTo(
        counterTextRef.current,
        { color: "#000000" },
        {

          duration: 0.5,
          yoyo: true,
          repeat: 3,
          ease: "power1.inOut"
        },
        "-=1.5"
      );

      tl.to(
        counterRef.current,
        {
          scale: 1.05,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut"
        },
        "-=0.5"
      );
    };

    loadGSAP();
  }, []);

  return (
    <>
      <div className="h-screen py-10 xl:py-10 flex flex-col justify-center px-6 md:px-12">
        <div
          className="container ml-auto text-right"
          ref={counterRef}
        >
          <h3
            className="md:text-3xl xl:text-6xl font-bold transition-colors duration-300"
            ref={counterTextRef}
          >
            {count}+
          </h3>
          <p className="text-gray-600 text-2xl">Clients</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center flex-1 xl:my-15 gap-y-8">
          <h2
            ref={headingRef}
            className="md:text-2xl xl:mt-10 mt-10 xl:text-5xl text-4xl font text-black text-center leading-[1.2]"
          >
            We Make Friends Out Of <br /> Our{" "}
            <span className="text-orange-500">Clients</span>
          </h2>
          <p className="mt-4 text-gray-600 text-xl md:text-base text-center">
            We believe in real connections, honest conversations, and <br />
            partnerships that go beyond the contract.
          </p>
          <div className="flex justify-center container">
            <Link href="/clients">
              <PrimaryButton text="View More" />
            </Link>
          </div>
          <div className="w-full mt-10" ref={containerRef}>
            <Marquee
              speed={150}
              loop={0}
              className="flex flex-1 items-center justify-center  space-y-15 space-x-10"
            >
              {companyImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={160}
                  height={36}
                  className="p-1 mx-3 grayscale object-contain"
                  alt={`Client_${index + 1}`}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsSection;

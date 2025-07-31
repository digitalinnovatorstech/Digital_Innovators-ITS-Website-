"use client";
import PrimaryButton from "@/components/common/primarybutton";
import { useElementSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import "../home/styles/clients.css";

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
  const [ isVisible, setIsVisible ] = useState(false);
  const [ animationPlayed, setAnimationPlayed ] = useState(false);
  const sectionRef = useRef(null);

  // Text splitting function
  const splitText = () => {
    if (!headingRef.current) return;

    // First, reset the content to ensure we're working with the original
    headingRef.current.innerHTML = `We Make Friends Out Of <br /> Our <span class="text-orange-500">Clients</span>`;

    // Get lines of text
    const firstLine = "We Make Friends Out Of";
    const secondLinePart1 = "Our ";
    const secondLinePart2 = "Clients"; // This is the orange part

    // Process first line (animated from left)
    const firstLineProcessed = firstLine.split('').map((char, i) => {
      if (char === ' ') return ' ';
      const delay = `--delay: ${i * 0.05}s`;
      return `<span class="char first-line-char" style="${delay}">${char}</span>`;
    }).join('');

    // Process second line part 1 (animated from right)
    const secondLinePart1Processed = secondLinePart1.split('').map((char, i) => {
      if (char === ' ') return ' ';
      const delay = `--delay: ${i * 0.05}s`;
      return `<span class="char second-line-char" style="${delay}">${char}</span>`;
    }).join('');

    // Process second line part 2 (orange text, animated from right)
    const secondLinePart2Processed = secondLinePart2.split('').map((char, i) => {
      if (char === ' ') return ' ';
      const delay = `--delay: ${(secondLinePart1.length + i) * 0.05}s`;
      return `<span class="char second-line-char orange-char" style="${delay}">${char}</span>`;
    }).join('');

    // Combine everything
    headingRef.current.innerHTML =
      `${firstLineProcessed}<br />${secondLinePart1Processed}<span class="text-orange-500">${secondLinePart2Processed}</span>`;
  };

  // Animate counter from 0 to target value
  const animateCounter = () => {
    if (!counterRef.current) return;

    // Reset counter first
    setCount(0);

    // Add animation class to trigger CSS animations
    counterRef.current.classList.remove('counter-animate');
    // Force reflow to restart animation
    void counterRef.current.offsetWidth;
    counterRef.current.classList.add('counter-animate');

    // Animate the counter numerically
    const duration = 2500;
    const finalCount = 300;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        // Calculate progress with easing (power2.out equivalent)
        const progress = elapsedTime / duration;
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        // Update counter value
        setCount(Math.floor(easedProgress * finalCount));
        // Continue animation
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure we end at the exact target value
        setCount(finalCount);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // Start animations when element becomes visible
  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [ entry ] = entries;
        const isNowVisible = entry.isIntersecting;

        // Update visibility state
        setIsVisible(isNowVisible);

        if (isNowVisible) {
          // Element is now visible, start animations
          if (!animationPlayed) {
            splitText();
            animateCounter();
            setAnimationPlayed(true);
          }
        } else {
          // Element is no longer visible, reset animation state for next scroll
          setAnimationPlayed(false);

          // Reset counter and heading when out of view
          if (counterRef.current) {
            counterRef.current.classList.remove('counter-animate');
            counterRef.current.classList.add('counter-initial');
          }

          if (headingRef.current) {
            headingRef.current.innerHTML = `We Make Friends Out Of <br /> Our <span class="text-orange-500">Clients</span>`;
          }
        }
      },
      { threshold: 0.2, rootMargin: "-100px" }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Initial split text setup
    splitText();

    // Clean up observer
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [ animationPlayed ]);

  return (
    <div className="bg-white">
      <div
        className="h-screen py-10 xl:py-10 flex flex-col justify-center items-center container mx-auto px-6 md:px-12 relative"
        ref={sectionRef}
      >
        {/* Counter at xthe top of the content */}
        <div
          className={`w-full flex justify-end mb-6 ${isVisible ? 'counter-animate' : 'counter-initial'}`}
          ref={counterRef}
        >
          <div className="text-right">
            <h3
              className="md:text-3xl xl:text-6xl font-bold text-black"
              ref={counterTextRef}
            >
              {count}+
            </h3>
            <p className="text-gray-600 text-2xl">Clients</p>
          </div>
        </div>

        {/* Main content section */}
        <div className="flex flex-col justify-center items-center flex-1 gap-y-8 w-full">
          <h2
            ref={headingRef}
            className="md:text-2xl xl:text-5xl text-4xl font-bold text-black text-center leading-[1.2]"
          >
            We Make Friends Out Of <br /> Our{" "}
            <span className="text-orange-500">Clients</span>
          </h2>
          <p className="mt-4 text-gray-600 text-xl md:text-base text-center">
            We believe in real connections, honest conversations, and <br />
            partnerships that go beyond the contract.
          </p>
          <div className="flex justify-center">
            <Link href="/clients">
              <PrimaryButton text="View More" />
            </Link>
          </div>

          {/* Marquee section */}
          <div className="w-full mt-10" ref={containerRef}>
            <Marquee
              speed={150}
              loop={0}
              className="flex flex-1 items-center justify-center space-y-15 space-x-10"
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
    </div>
  );
};

export default ClientsSection;
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const wrapCharacters = (element, className = "") => {
      const chars = [];
      const text = element.textContent;
      element.innerHTML = "";

      for (let char of text) {
        const div = document.createElement("div");
        div.className = className;
        div.textContent = char === " " ? "\u00A0" : char;
        div.style.display = "inline-block";
        element.appendChild(div);
        chars.push(div);
      }
      return chars;
    };

    const allChars = [];

    Array.from(heading.childNodes).forEach((node) => {
      if (node.nodeType === 3) {
        const span = document.createElement("span");
        node.replaceWith(span);
        span.textContent = node.textContent;
        allChars.push(...wrapCharacters(span));
      } else if (node.tagName === "BR") {
      } else if (node.tagName === "SPAN") {
        const spanClass = node.className;
        allChars.push(...wrapCharacters(node, spanClass));
      }
    });

    gsap.fromTo(
      allChars,
      { opacity: 0, y: 90 },
      {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 0.01,
        ease: "elastic(1.2, 0.5)",
        scrollTrigger: {
          trigger: heading,
          start: "top 70%",
          toggleActions: "restart none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="h-screen text-white bg-[url('/assets/home/bg.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <h1
        ref={headingRef}
        className="font text-5xl md:text-6xl lg:text-9xl  text-start leading-tight overflow-hidden"
      >
        We Bring<br />
        <span className="text-primary">Unforgettable</span> <br />
        <span className="text-primary">Brands</span> To Life
      </h1>
    </div>
  );
}

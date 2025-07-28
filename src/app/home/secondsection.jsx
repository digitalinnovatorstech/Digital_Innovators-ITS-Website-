"use client";
import React, { useEffect, useRef } from "react";
import "../home/styles/homepage.css";

export default function SecondSection() {
  const headingRef = useRef(null);
  const animationPlayed = useRef(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const wrapCharacters = (element, className = "") => {
      const chars = [];
      const text = element.textContent;
      element.innerHTML = "";

      for (let char of text) {
        const div = document.createElement("div");
        div.className = className ? `${className} char-anim` : "char-anim";
        div.textContent = char === " " ? "\u00A0" : char;
        div.style.display = "inline-block";
        div.style.opacity = "0";
        div.style.transform = "translateY(90px)";
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
        // Skip
      } else if (node.tagName === "SPAN") {
        const spanClass = node.className;
        allChars.push(...wrapCharacters(node, spanClass));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            allChars.forEach((char, index) => {
              char.style.transitionProperty = "opacity, transform";
              char.style.transitionDuration = "1s, 1s";
              char.style.transitionTimingFunction = "ease, cubic-bezier(0.34, 1.56, 0.64, 1)";
              char.style.transitionDelay = `${index * 0.01}s`;
              char.style.opacity = "1";
              char.style.transform = "translateY(0)";
            });
          } else {
            // Reset for re-animation
            allChars.forEach((char) => {
              char.style.transition = "none";
              char.style.opacity = "0";
              char.style.transform = "translateY(90px)";
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heading);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="h-screen text-white bg-[url('/assets/home/bg.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <h1
        ref={headingRef}
        className="font text-5xl md:text-6xl lg:text-9xl text-start leading-tight overflow-hidden second-section-heading"
      >
        We Bring<br />
        <span className="text-primary">Unforgettable</span> <br />
        <span className="text-primary">Brands</span> To Life
      </h1>
    </div>
  );
}
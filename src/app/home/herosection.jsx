'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Flyingbird from "../../../public/assets/home/homebird.svg";

export default function HomeHeroSection() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const el = paragraphRef.current;
    if (!el) return;

    const wrapChars = (element) => {
      const chars = [];
      const childNodes = Array.from(element.childNodes);

      childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          const spanWrapper = document.createElement("span");
          node.replaceWith(spanWrapper);
          const text = node.textContent;

          for (let char of text) {
            const span = document.createElement("span");
            span.className = "_text3";
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            spanWrapper.appendChild(span);
            chars.push(span);
          }
        } else if (node.nodeType === 1 && node.tagName === "SPAN") {
          chars.push(...wrapChars(node));
        } else {
          chars.push(...wrapChars(node));
        }
      });

      return chars;
    };

    const allChars = wrapChars(el);

    const tl = gsap.timeline(); // Removed repeat: -1
    tl.staggerFrom(allChars, 0.5, { opacity: 0, x: 40, ease: "power1.out" }, 0.1, "+=0.5")
      .staggerTo(allChars, 0.5, { opacity: 1, x: 0, ease: "power1.out" }, 0.05, "+=0.2");

    return () => {
      tl.kill();
    };
  }, []);


  return (
    <div className="h-screen relative bg-[url('/assets/home/backgroundimage.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center -mt-[120px] pt-[150px]">
      <div className="flex flex-col md:flex-row container justify-between items-start w-full">
        <div className="w-70%">
          <h1 className="xl:text-3xl md:text-xl  text-2xl font-medium text-black">
            Custom website creation
          </h1>
          <br />

          {/* Add the ref here to target this element */}
          <p ref={paragraphRef} className="xl:text-7xl font md:text-5xl text-3xl text-black">
            Where <span className="text-primary">Creativity</span><br />Meets Purpose
          </p>

          <p className="xl:text-lg md:text-sm mt-5 text-black">
            Creative design to build a brand<br />
            that’s strong, impactful, and full of meaning.
          </p>
        </div>

        <div className="w-30% mt-10 md:mt-0">
          <Image src={Flyingbird} alt="Creative Studio Logo" />
        </div>
      </div>
    </div>
  );
}

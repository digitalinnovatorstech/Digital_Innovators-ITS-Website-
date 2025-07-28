'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import Flyingbird from "../../../public/assets/home/homebird.svg";

export default function HomeHeroSection() {
  const paragraphRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const el = paragraphRef.current;
    if (!el || animationStarted.current) return;


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
            span.className = "char-span";
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
    animationStarted.current = true;


    allChars.forEach((char, index) => {
      char.style.opacity = "0";
      char.style.transform = "translateX(40px)";
      char.style.transitionProperty = "opacity, transform";
      char.style.transitionDuration = "0.5s";
      char.style.transitionTimingFunction = "ease-out";
      char.style.transitionDelay = `${0.1 * index + 0.5}s`;
    });


    void el.offsetWidth;

    // Start animation
    setTimeout(() => {
      allChars.forEach(char => {
        char.style.opacity = "1";
        char.style.transform = "translateX(0)";
      });
    }, 50);


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted.current) {
            animationStarted.current = true;

          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-screen relative bg-[url('/assets/home/backgroundimage.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center -mt-[120px] pt-[150px]">
      <div className="flex flex-col md:flex-row container justify-between items-start w-full">
        <div className="w-[70%]">
          <h1 className="xl:text-3xl md:text-xl text-2xl font-medium text-black">
            Custom website creation
          </h1>



          <div className="xl:text-7xl mt-3 md:text-5xl text-3xl text-black font tracking-tight">
            <div className="flex flex-wrap items-center gap-4">
              <span>Where</span>
              <span className="text-primary">Creativity</span>
            </div>
            <div className="flex gap-4">
              <span>Meets</span>
              <span>Purpose</span>
            </div>
          </div>

          <p className="xl:text-lg md:text-sm mt-3 text-black">
            Creative design to build a brand<br />
            that's strong, impactful, and full of meaning.
          </p>
        </div>


        <div className="w-30% mt-10 md:mt-0 fade-in-image">
          <Image src={Flyingbird} alt="Creative Studio Logo" />
        </div>
      </div>
    </div>
  );
}
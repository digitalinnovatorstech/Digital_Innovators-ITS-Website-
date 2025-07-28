"use client";
import { useElementSize } from "@mantine/hooks";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ServicesCarousel = () => {
  const companyImages = Array.from(
    { length: 4 },
    (_, index) => `/assets/blackbar/image_${index + 1}.svg`
  );

  const { ref: containerRef } = useElementSize();

  return (
    <div className="bg-secondary ">
      <div className="w-full" ref={containerRef}>
        <Marquee className="flex  py-7 ">
          {companyImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={360}
              height={64}
              className="p-1 mx-3  object-contain"
              alt={`Client_${index + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServicesCarousel;

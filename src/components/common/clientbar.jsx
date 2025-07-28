"use client";
import { useElementSize } from "@mantine/hooks";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import PrimaryButton from "./primarybutton";
import Link from "next/link";

const ClientsCarouselBar = () => {
  const companyImages = Array.from(
    { length: 65 },
    (_, index) => `/assets/clients/client_${index + 1}.svg`
  );

  const { ref: containerRef } = useElementSize();

  return (
    <div>
      <div className="flex flex-col container">
        {" "}
        <h1 className="text-secondary  font-semibold text-2xl sm:text-3xl ">
          Clients
        </h1>
        <div className="flex justify-between   items-center group">
          <hr className="w-full border-t-2 border-primary  my-4" />
          <Link href="/clients"> <PrimaryButton text="View More" /></Link>
        </div>

      </div>

      <div className="w-full" ref={containerRef}>
        <Marquee
          speed={60}
          loop={0}
          className="flex flex-1 items-center justify-center xl:space-y-20 xl:space-x-10"
        >
          {companyImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={200}
              className="p-1 mx-12 grayscale object-contain"
              alt={`Client_${index + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientsCarouselBar;

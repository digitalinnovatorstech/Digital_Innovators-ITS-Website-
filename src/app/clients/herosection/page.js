'use client';
import "@/app/clients/styles/clients.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import ClientImage from "../../../../public/assets/clients/clientsimg.svg";
export default function ClientHeroSection() {
  const companyImages = Array.from(
    { length: 65 },
    (_, index) => `/assets/clients/client_${index + 1}.svg`
  );

  return (
    <>
      <div className="clients_body">
        <div className=" text-start w-full container  ">
          {/* Title and Icon */}
          <div className="relative flex items-center justify-start">
            <span className="md:text-2xl text-xl font-normal  mt-15  text-secondary">Clients</span>

            <DotLottieReact
              src="/assets/flyingbird.lottie"
              loop
              autoplay
              className="flying_bird"
            />
          </div>

          <h2 className=" text-black md:text-4xl xl:text-6xl text-3xl  mt-10 font w-full ">
            "We deliver <span className="text-primary">happy clients</span> by{" "}
            <br />
            seamlessly integrating{" "}
            <span className="text-primary">technology</span>, <br />
            <span className="text-primary">business</span>, and{" "}
            <span className="text-primary">art</span>."
          </h2>

          {/* Divider */}
          <div className="border-t border-black my-4"></div>

          {/* Subtext */}
          <p className="text-black text-xl md:text-2xl mt-4">
            We believe in real connections, honest conversations, and partnerships that go beyond the contract.
          </p>

        </div>

      </div> <div className="flex justify-center items-center flex-col  ">

        <h1 className="uppercase md:text-xl xl:text-5xl  font-bold text-black">On board <span className="text-primary">with us</span></h1>
      </div>

      <div className="container">
        <div className="images_container">
          {companyImages.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={src} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

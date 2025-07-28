import Image from "next/image";
import jsondata from "../../../../public/assets/Birdfly.json";
// import Lottie from "react-lottie";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function HeroSection() {
  return (
    <section className="container my-20 md:my-0 md:h-screen flex flex-col justify-center ">
      {/* Contact Title */}
      <div className="bird_header">
        <span className="bird_subheader">Contact us</span>


        <DotLottieReact
          src="/assets/flyingbird.lottie"
          loop
          autoplay
          className="flying_bird"
        />
      </div>

      {/* Heading */}
      <h1 className="font md:text-5xl xl:text-7xl mt-10 md:mt-0 text-4xl">
        {/* Mobile layout */}
        <span className="block sm:hidden">
          Let's connect over <br />a cup of{" "}
          <span className="text-primary">
            CO<span className="text-black">FF</span>EE...!
          </span>
        </span>

        {/* Desktop layout */}
        <span className="hidden sm:block">
          Let's connect over a cup <br />
          of{" "}
          <span className="text-primary">
            CO<span className="text-black">FF</span>EE...!
          </span>
        </span>
      </h1>

      <div className="flex justify-end mt-10 md:mt-0 ">
        <img src="/assets/contact/mainimage.svg" alt="Work Illustration" />
      </div>

    </section>
  );
}

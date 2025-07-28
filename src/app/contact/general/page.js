"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/contact/styles/contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Scrolldown from "../../../../public/assets/contact/scrolldown.svg";
import Image from "next/image";

export default function GeneralTalk() {
  const handleScroll = () => {
    const target = document.getElementById("next-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* First section - Full height screen with absolute positioning for scroll button */}
      <div className="container h-screen flex flex-col relative">
        <div className="pt-20">
          <div className="bird_header">
            <span className="bird_subheader">Contact us</span>
            <div>
              <DotLottieReact
                src="/assets/flyingbird.lottie"
                loop
                autoplay
                className="flying_bird"
              />
            </div>
          </div>
          <h1 className="contact-page">
            <span className="text-secondary">General</span>{" "}
            <span className="text-primary">Talk</span>
          </h1>
          <p className="title xl:text-xl">
            Let's have Conversation about something you got in your mind ? We'd love to help
          </p>
          <p className="text-sm text-black text-justify xl:text-xl">
            Whether it's feedback, a friendly hello, or a question that doesn't quite fit in the boxes <br />
            above — we're all ears. Don't hesitate to reach out.
          </p>
        </div>

        {/* Image positioned to the right */}
        <div className="flex-grow w-full flex justify-end items-center">
          <img
            src="/assets/contact/general.svg"
            alt="General Talk illustration"
            className="w-[250px] md:w-[500px]"
          />
        </div>

        {/* Scroll down button - absolutely positioned at bottom center */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          animate={{
            y: [ 0, -10, 0 ],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <button
            onClick={handleScroll}
            className="flex flex-col cursor-pointer items-center text-xl text-[#ADADAD] p-2 rounded-md transition"
          >
            <Image
              src={Scrolldown}
              alt="Scroll Down Icon"
              width={24}
              height={24}
              className="w-6 h-6 mb-2"
            />
            <span className="text-2xl font-medium">Scroll Down</span>
          </button>
        </motion.div>
      </div>

      {/* Contact form */}
      <div
        id="next-section"
        className="h-screen container flex flex-col justify-center"
      >
        <p className="text-black text-xs xl:text-lg md:text-sm md:mb-5 mb-5 xl:mb-12">
          Drop us a message. We're here to listen and respond to whatever's on your mind.
        </p>
        <div className="w-full md:mb-5 mb-4 xl:mb-12">
          <label htmlFor="name" className="flex-layout">
            <span className="label-text">Hi! I am</span>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
            />
          </label>
        </div>
        <div className="w-full flex flex-col md:flex-row md:mb-5 mb-4 xl:mb-12 gap-2 md:gap-8">
          <div className="flex-1">
            <label htmlFor="connectingFrom" className="flex-layout">
              <span className="label-text">Connecting from</span>
              <input
                type="text"
                id="connectingFrom"
                name="connectingFrom"
                className="input-field"
              />
            </label>
          </div>
          <div className="flex-1">
            <label htmlFor="reachMeAt" className="flex-layout">
              <span className="label-text">Reach me at</span>
              <input
                type="text"
                id="reachMeAt"
                name="reachMeAt"
                className="input-field"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full pr-0 md:pr-4">
            <div className="md:mb-5 mb-4 xl:mb-12">
              <label htmlFor="mobileNo" className="flex-layout">
                <span className="label-text">Call Me on.</span>
                <input
                  type="number"
                  id="mobileNo"
                  name="mobileNo"
                  className="input-field"
                />
              </label>
            </div>
            <div className="md:mb-5 mb-4 xl:mb-12">
              <label htmlFor="workAt" className="flex-layout">
                <span className="label-text">I work at</span>
                <input
                  type="text"
                  id="workAt"
                  name="workAt"
                  className="input-field"
                />
              </label>
            </div>
            <div className="md:mb-5 mb-5 xl:mb-12">
              <label htmlFor="services" className="flex-layout">
                <span className="label-text">Looking Services for</span>
                <input
                  type="text"
                  id="services"
                  name="services"
                  className="input-field"
                />
              </label>
            </div>
            <div className="mt-8">
              <button type="submit" className="sendbutton">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container h-screen flex flex-col justify-center">
        <div className="help-text">
          <div className="md:w-[60%]">
            <h2 className="md:text-4xl text-3xl font-bold">
              We're here to help <br />
              Feel free to say hello!
            </h2>
          </div>
          <div className="space-y-4 w-full md:w-[40%] mt-4 md:mt-0 text-start">
            <div className="flex-column-space">
              <img src="/assets/contact/email.svg" alt="Email Icon" />
              <p className="text-primary font-semibold">
                info@innovatorstech.com
              </p>
              <p className="text-gray-500">Email</p>
            </div>
            <div className="flex-column-space">
              <img src="/assets/contact/phone.svg" alt="Phone Icon" />
              <p className="text-primary font-semibold">1800 203 4199</p>
              <p className="text-gray-500">Phone</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
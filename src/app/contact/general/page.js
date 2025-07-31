"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/contact/styles/contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Scrolldown from "../../../../public/assets/contact/scrolldown.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useCreateGeneralTalk } from "./hooks/useCRUDapis";

export default function GeneralTalk() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createGeneralTalk = useCreateGeneralTalk();

  const onSubmit = async (data) => {
    try {
      // Create a new object with only the fields we want
      const formData = {
        name: data.name,
        connectingFrom: data.connectingFrom,
        reachMeAt: data.reachMeAt,
        mobileNo: data.mobileNo,
        workAt: data.workAt,
        services: data.services
      };

      await createGeneralTalk.mutateAsync(formData);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleScroll = () => {
    const target = document.getElementById("next-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container md:h-screen flex flex-col relative">
        <div className="">
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
            Let's have Conversation about something you got in your mind ? We'd
            love to help
          </p>
          <p className="text-sm text-black text-justify xl:text-xl">
            Whether it's feedback, a friendly hello, or a question that doesn't
            quite fit in the boxes <br />
            above — we're all ears. Don't hesitate to reach out.
          </p>
        </div>
        <div className="flex-grow w-full flex mt-10 md:mt-0 md:justify-end justify-center items-center">
          <img
            src="/assets/contact/general.svg"
            alt="General Talk illustration"
            className="w-[250px] md:w-[500px]"
          />
        </div>
        <motion.div
          className="absolute md:flex hidden bottom-8 left-0 right-0 flex justify-center"
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

      <div
        id="next-section"
        className="md:h-screen my-30 md:my-0 container flex flex-col justify-center"
      >
        <p className="text-black text-xs xl:text-lg md:text-sm md:mb-5 mb-5 xl:mb-12">
          Fill out the form or email us at{" "}
          <span className="text-primary">info@innovatorstech.com </span>— we'll
          get back to you soon!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full md:mb-5 mb-4 xl:mb-12">
            <label htmlFor="name" className="flex-layout">
              <span className="label-text">Hi! I am</span>
              <input
                type="text"
                id="name"
                className={`input-field ${errors.name ? "border-red-500" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
            </label>
            {errors.name && (
              <p className="text-red-500 text-xs mt-3">{errors.name.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col md:flex-row md:mb-5 mb-4 xl:mb-12 gap-2 md:gap-8">
            <div className="flex-1">
              <label htmlFor="connectingFrom" className="flex-layout">
                <span className="label-text">Connecting from</span>
                <input
                  type="text"
                  id="connectingFrom"
                  className={`input-field ${errors.connectingFrom ? "border-red-500" : ""}`}
                  {...register("connectingFrom", {
                    required: "Location is required",
                  })}
                />
              </label>
              {errors.connectingFrom && (
                <p className="text-red-500 text-xs mt-3">
                  {errors.connectingFrom.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="reachMeAt" className="flex-layout">
                <span className="label-text">Reach me at</span>
                <input
                  type="email"
                  id="reachMeAt"
                  className={`input-field ${errors.reachMeAt ? "border-red-500" : ""}`}
                  {...register("reachMeAt", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>
              {errors.reachMeAt && (
                <p className="text-red-500 text-xs mt-3">
                  {errors.reachMeAt.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full pr-0 md:pr-4">
              <div className="w-full flex flex-col md:flex-row md:mb-5 mb-4 xl:mb-12 gap-2 md:gap-8">
                <div className="flex-1">
                  <label htmlFor="mobileNo" className="flex-layout">
                    <span className="label-text">Call Me on.</span>
                    <input
                      type="number"
                      id="mobileNo"
                      className={`input-field ${errors.mobileNo ? "border-red-500" : ""}`}
                      {...register("mobileNo", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Please enter only numbers",
                        },
                      })}
                    />
                  </label>
                  {errors.mobileNo && (
                    <p className="text-red-500 text-xs mt-3">
                      {errors.mobileNo.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label htmlFor="workAt" className="flex-layout">
                    <span className="label-text">I work at</span>
                    <input
                      type="text"
                      id="workAt"
                      className={`input-field ${errors.workAt ? "border-red-500" : ""}`}
                      {...register("workAt", {
                        required: "Company name is required",
                      })}
                    />
                  </label>
                  {errors.workAt && (
                    <p className="text-red-500 text-xs mt-3">
                      {errors.workAt.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="md:mb-5 mb-5 xl:mb-12">
                <label htmlFor="services" className="flex-layout">
                  <span className="label-text">Looking Services for</span>
                  <input
                    type="text"
                    id="services"
                    className={`input-field ${errors.services ? "border-red-500" : ""}`}
                    {...register("services", {
                      required: "Service information is required",
                    })}
                  />
                </label>
                {errors.services && (
                  <p className="text-red-500 text-xs mt-3">
                    {errors.services.message}
                  </p>
                )}
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="sendbutton"
                  disabled={createGeneralTalk.isPending}
                >
                  {createGeneralTalk.isPending ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="relative md:h-screen overflow-hidden">
        <div className="md:flex hidden absolute left-0 top-[38%] transform -translate-y-1/2 z-10">
          <img src="/assets/contact/arrow.svg" alt="Arrow" className="h-auto" />
        </div>
        <div className="absolute md:flex hidden bottom-0 right-0 z-10">
          <img
            src="/assets/contact/circle.svg"
            alt="Circle"
            className="h-auto"
          />
        </div>
        <div className="container mx-auto my-30 md:my-0 md:h-screen flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                We're here to help.
                <br />
                Feel free to say hello!
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col space-y-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <img
                    src="/assets/contact/email.svg"
                    alt="Email Icon"
                    className="mr-3"
                  />
                  <p className="text-primary font-semibold text-lg md:text-xl">
                    info@innovatorstech.com
                  </p>
                </div>
                <p className="text-gray-500 ml-16">Email</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <img
                    src="/assets/contact/phone.svg"
                    alt="Phone Icon"
                    className="mr-3"
                  />
                  <p className="text-primary font-semibold text-lg md:text-xl">
                    1800 203 4199
                  </p>
                </div>
                <p className="text-gray-500 ml-16">Phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

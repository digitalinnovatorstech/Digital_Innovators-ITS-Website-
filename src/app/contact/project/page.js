"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/contact/styles/contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Scrolldown from "../../../../public/assets/contact/scrolldown.svg";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { FileInput } from "@mantine/core";
import { useCreateProjectTalk } from "./hooks/useCRUDapis";


export default function ProjectTalk() {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();


  const createProjectTalk = useCreateProjectTalk();

  const onSubmit = async (data) => {
    try {

      const formData = new FormData();


      formData.append("name", data.name);
      formData.append("connectingfrom", data.connectingfrom);
      formData.append("reachmeat", data.reachmeat);
      formData.append("callme", data.callme);
      formData.append("workat", data.workat);
      formData.append("services", data.services);
      formData.append("projectbudget", data.projectbudget);


      if (data.document) {
        formData.append("document", data.document);
      }




      await createProjectTalk.mutateAsync(formData);


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
            <span className="text-secondary">Project</span>{" "}
            <span className="text-primary">Talk</span>
          </h1>
          <p className="title xl:text-xl">
            Let's Build Something Great Together
          </p>
          <p className="text-sm text-black text-justify xl:text-xl">
            Have an idea or project in mind? Whether it's a product, platform, or
            partnership <br />
            we'd love to hear what you're planning. Share your vision, and let's
            explore how we can bring it to life.
          </p>
        </div>
        {/* Image positioned to the right */}
        <div className="flex-grow my-20 md:my-0 w-full flex justify-center md:justify-end items-center">
          <img
            src="/assets/contact/projecttalk.svg"
            alt="Project illustration"
            className="w-[250px] md:w-[500px]"
          />
        </div>
        <motion.div
          className="md:flex hidden absolute bottom-8 left-0 right-0 flex justify-center"
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
            className="flex flex-col cursor-pointer items-center text-2xl font-bold text-[#ADADAD] p-2 rounded-md transition"
          >
            <Image
              src={Scrolldown}
              alt="Scroll Down Icon"
              width={32}
              height={32}
              className="w-6 h-6 mb-2"
            />
            <span className="text-2xl font-medium">Scroll Down</span>
          </button>
        </motion.div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          id="next-section"
          className="md:h-screen container flex flex-col justify-center"
        >
          <p className="text-black text-xs xl:text-lg md:text-sm md:mb-5 mb-5 xl:mb-12">
            Drop us a message or book a quick discovery call. Let's make it
            happen.
          </p>
          <div className="w-full md:mb-5 mb-4 xl:mb-12">
            <label htmlFor="name" className="flex-layout">
              <span className="label-text">Hi! I am</span>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Required" })}
                className={`input-field ${errors.name ? "border-red-500" : ""}`}
              />
            </label>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="w-full flex flex-col md:flex-row md:mb-5 mb-4 xl:mb-12 gap-2 md:gap-8">
            <div className="flex-1">
              <label htmlFor="connectingfrom" className="flex-layout">
                <span className="label-text">Connecting from</span>
                <input
                  type="text"
                  id="connectingfrom"
                  {...register("connectingfrom", { required: "Required" })}
                  className={`input-field ${errors.connectingfrom ? "border-red-500" : ""}`}
                />
              </label>
              {errors.connectingfrom && (
                <p className="text-red-500 text-xs mt-1">{errors.connectingfrom.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="reachmeat" className="flex-layout">
                <span className="label-text">Reach me at</span>
                <input
                  type="email"
                  id="reachmeat"
                  {...register("reachmeat", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`input-field ${errors.reachmeat ? "border-red-500" : ""}`}
                />
              </label>
              {errors.reachmeat && (
                <p className="text-red-500 text-xs mt-1">{errors.reachmeat.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full pr-0 md:pr-4">
              <div className="w-full flex flex-col md:flex-row md:mb-5 xl:mb-12 gap-2 mb-2 md:gap-8">
                <div className="flex-1">
                  <label htmlFor="callme" className="flex-layout">
                    <span className="label-text">Call Me on.</span>
                    <input
                      type="number"
                      id="callme"
                      {...register("callme", { required: "Required" })}
                      className={`input-field ${errors.callme ? "border-red-500" : ""}`}
                    />
                  </label>
                  {errors.callme && (
                    <p className="text-red-500 text-xs mt-1">{errors.callme.message}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label htmlFor="workat" className="flex-layout">
                    <span className="label-text">I work at</span>
                    <input
                      type="text"
                      id="workat"
                      {...register("workat", { required: "Required" })}
                      className={`input-field ${errors.workat ? "border-red-500" : ""}`}
                    />
                  </label>
                  {errors.workat && (
                    <p className="text-red-500 text-xs mt-1">{errors.workat.message}</p>
                  )}
                </div>
              </div>
              <div className="md:mb-5 mb-4 xl:mb-12">
                <label htmlFor="services" className="flex-layout">
                  <span className="label-text">Looking Services for</span>
                  <input
                    type="text"
                    id="services"
                    {...register("services", { required: "Required" })}
                    className={`input-field ${errors.services ? "border-red-500" : ""}`}
                  />
                </label>
                {errors.services && (
                  <p className="text-red-500 text-xs mt-1">{errors.services.message}</p>
                )}
              </div>
              <div className="md:mb-5 mb-5 xl:mb-12">
                <label htmlFor="projectbudget" className="flex-layout">
                  <span className="label-text">Project Budget</span>
                  <input
                    type="number"
                    id="projectbudget"
                    {...register("projectbudget", { required: "Required" })}
                    className={`input-field ${errors.projectbudget ? "border-red-500" : ""}`}
                  />
                </label>
                {errors.projectbudget && (
                  <p className="text-red-500 text-xs mt-1">{errors.projectbudget.message}</p>
                )}
              </div>
              <div className="mt-16 space-y-3">
                <p className="md:text-sm text-xs xl:text-lg text-gray-600">
                  If you have a requirement brief or document, share it with us
                  here
                </p>
                <div className="w-full">
                  <Controller
                    name="document"
                    control={control}
                    render={({ field }) => (
                      <FileInput
                        placeholder="Attach Your Document"
                        accept=".pdf,.doc,.docx,.txt"
                        className="attachbutton"
                        onChange={(file) => field.onChange(file)}
                        error={errors.document?.message}
                        styles={{
                          input: {
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: '#4a4a4a',



                          },

                          error: {
                            color: '#ef4444'
                          }
                        }}
                      />
                    )}
                    rules={{
                      validate: {
                        fileSize: (file) => {
                          if (file && file.size > 2 * 1024 * 1024) {
                            return "File size must be less than 2MB";
                          }
                          return true;
                        }
                      }
                    }}
                  />
                </div>
                <p className="md:text-xs xl:text-sm text-gray-500">
                  File Size not more than 2 MB
                </p>
                <button
                  type="submit"
                  className="sendbutton"
                  disabled={createProjectTalk.isPending}
                >
                  {createProjectTalk.isPending ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="relative md:h-screen overflow-hidden">
        <div className="absolute md:flex hidden left-0 top-[38%] transform -translate-y-1/2 z-10">
          <img src="/assets/contact/arrow.svg" alt="Arrow" className="h-auto" />
        </div>
        <div className="absolute bottom-0 md:flex hidden right-0 z-10">
          <img src="/assets/contact/circle.svg" alt="Circle" className="h-auto" />
        </div>
        <div className="container mx-auto my-20 md:my-0 md:h-screen flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">

            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                We're here to help.<br />
                Feel free to say hello!
              </h2>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <img src="/assets/contact/email.svg" alt="Email Icon" className="mr-3" />
                  <p className="text-primary font-semibold text-lg md:text-xl">
                    info@innovatorstech.com
                  </p>
                </div>
                <p className="text-gray-500 ml-16">Email</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <img src="/assets/contact/phone.svg" alt="Phone Icon" className="mr-3" />
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

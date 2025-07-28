"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "./primarybutton";
import Leftarrow from "../../../public/assets/orangebuttonleft.svg";
import Rightarrow from "../../../public/assets/orangebutton.svg";

import Image from "next/image";

export default function Customer() {
  const testimonials = [
    {
      icon: "/assets/companyname/image_1.svg",
      company: "Company Name 1",
      text: "We have built a strong equation with Innovators\ntech solutions and continuously work with them\nfor all our requirements.",
      name: "Name 1",
      position: "Position 1",
    },
    {
      icon: "/assets/companyname/image_2.svg",
      company: "Company Name 2",
      text: "We have built a strong equation with Innovators\ntech solutions and continuously work with them\nfor all our requirements.",
      name: "Name 2",
      position: "Position 2",
    },
    {
      icon: "/assets/companyname/image_3.svg",
      company: "Company Name 3",
      text: "We have built a strong equation with Innovators\ntech solutions and continuously work with them\nfor all our requirements.",
      name: "Name 3",
      position: "Position 3",
    },
    {
      icon: "/assets/companyname/image_1.svg",
      company: "Company Name 4",
      text: "We have built a strong equation with Innovators\ntech solutions and continuously work with them\nfor all our requirements.",
      name: "Name 4",
      position: "Position 4",
    },
  ];

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const displayTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[ index ]);
    }
    return visibleTestimonials;
  };

  const testimonialVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <div className="bg-[url('/assets/map.svg')] md:h-screen flex items-center justify-center ">
        <div className="max-w-8xl w-full mx-auto">
          {/* Desktop View */}
          <div className="container hidden md:block">
            <div className="flex items-start justify-between w-full">
              <div>
                <h1 className="text-gray-500 lg:text-2xl text-lg uppercase tracking-wide">
                  WHY CUSTOMERS LIKE US
                </h1>
                <h1 className="xl:text-4xl md:text-2xl font-bold mt-2 leading-snug capitalize">
                  Well, we will let our
                  <br /> <span className="text-primary font-bold">clients answer </span>that
                  <br /> question for us
                </h1>
                <PrimaryButton text="view more" className="mt-5" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`testimonial-${currentIndex}`}
                  variants={testimonialVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="testimonial-card"
                >
                  <h1 className="testimonial-header">
                    <img src={displayTestimonials()[ 0 ].icon} alt="company icon" />
                    <span>{displayTestimonials()[ 0 ].company}</span>
                  </h1>
                  <p className="testimonial-para">
                    {displayTestimonials()[ 0 ].text}
                  </p>
                  <p className="testimonal_name">
                    {displayTestimonials()[ 0 ].name}
                  </p>
                  <p className="text-sm mt-4">
                    {displayTestimonials()[ 0 ].position}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex + 1}
                  variants={testimonialVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="testimonial-card"
                >
                  <h2 className="testimonial-header">
                    <img src={displayTestimonials()[ 1 ].icon} alt="company icon" />
                    <span>{displayTestimonials()[ 1 ].company}</span>
                  </h2>
                  <p className="testimonial-para">
                    {displayTestimonials()[ 1 ].text}
                  </p>
                  <p className="testimonal_name">
                    {displayTestimonials()[ 1 ].name}
                  </p>
                  <p className="text-sm mt-4">
                    {displayTestimonials()[ 1 ].position}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-end mt-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex + 2}
                  variants={testimonialVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="testimonial-card"
                >
                  <h1 className="testimonial-header">
                    <img src={displayTestimonials()[ 2 ].icon} alt="company icon" />
                    <span>{displayTestimonials()[ 2 ].company}</span>
                  </h1>
                  <p className="testimonial-para">
                    {displayTestimonials()[ 2 ].text}
                  </p>
                  <p className="testimonal_name">
                    {displayTestimonials()[ 2 ].name}
                  </p>
                  <p className="text-sm mt-4">
                    {displayTestimonials()[ 2 ].position}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col justify-end relative items-end gap-4 -mt-15">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={Leftarrow} alt="left arrow" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={Rightarrow} alt="right arrow" />
              </motion.button>
            </div>
          </div>

          {/* Mobile View (1 Testimonial per slide) */}
          <div className="p-6 md:hidden">
            <div className="flex flex-col items-center">
              <h1 className="text-gray-500 lg:text-xl text-lg uppercase tracking-wide">
                WHY CUSTOMERS LIKE US
              </h1>
              <h1 className="text-xl font-medium mt-2 text-center">
                Well, we will let our clients answer that question for us
              </h1>
              <PrimaryButton text="view more" className="mt-5" />
            </div>
            <div className="md:hidden w-full mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-${currentIndex}`}
                  variants={testimonialVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="testimonial-card mx-auto text-center"
                >
                  <h1 className="testimonial-header flex md:items-center text-start md:justify-center gap-2">
                    <img
                      src={testimonials[ currentIndex ].icon}
                      alt="company icon"
                    />
                    <span>{testimonials[ currentIndex ].company}</span>
                  </h1>
                  <p className="testimonial-para text-start">
                    {testimonials[ currentIndex ].text}
                  </p>
                  <p className="text-start font-semibold mt-3">
                    {testimonials[ currentIndex ].name}
                  </p>
                  <p className="text-sm mt-2 text-start">
                    {testimonials[ currentIndex ].position}
                  </p>
                </motion.div>
              </AnimatePresence>
              {/* Mobile Navigation Buttons */}
              <div className="flex justify-between mt-4 gap-4">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2"
                >
                  <Image src={Leftarrow} alt="left arrow" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2"
                >
                  <Image src={Rightarrow} alt="right arrow" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

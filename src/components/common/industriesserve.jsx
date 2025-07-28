"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import { Navigation, Autoplay, EffectFade, EffectCoverflow, EffectCards } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import Leftarrow from "../../../public/assets/orangebuttonleft.svg";
import Rightarrow from "../../../public/assets/orangebutton.svg";
const industries = [
  { id: 1, title: "Education", icon: "/assets/industry/image_1.svg" },
  { id: 2, title: "Health Care", icon: "/assets/industry/image_2.svg" },
  { id: 3, title: "Agriculture", icon: "/assets/industry/image_3.svg" },
  { id: 4, title: "IT / Consulting", icon: "/assets/industry/image_4.svg" },
  { id: 5, title: "Finance & Insurance", icon: "/assets/industry/image_5.svg" },
  { id: 6, title: "E-Commerce", icon: "/assets/industry/image_6.svg" },
  { id: 7, title: "Construction", icon: "/assets/industry/image_7.svg" },
  { id: 8, title: "Food Industry", icon: "/assets/industry/image_8.svg" },
  { id: 9, title: "Travel Industry", icon: "/assets/industry/image_9.svg" },
];

export default function IndustriesWeServe() {
  const swiperRef = useRef(null);

  return (
    <div className="container h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.h2
        className="font-semibold text-black text-center md:text-5xl text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-primary"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Industries
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          We Serve
        </motion.span>
      </motion.h2>

      <motion.p
        className="text-secondary text-center mt-8 md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {[ "With a proven approach, our design process begins by thoroughly",
          "understanding your needs, allowing us to create a comprehensive",
          "planning template." ].map((line, index) => (
            <motion.span
              key={index}
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.2), duration: 0.5 }}
              viewport={{ once: true }}
            >
              {line}
            </motion.span>
          ))}
      </motion.p>

      <div className="w-full mt-20 relative">
        <Swiper
          modules={[ Navigation, Autoplay, EffectCoverflow ]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {industries.map(({ id, title, icon }) => (
            <SwiperSlide key={id}>
              <motion.div
                className="bg-gray-100 p-6 rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-all duration-300"

              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8 }}
                  style={{ perspective: 1000 }}
                >
                  <Image src={icon} alt={title} width={100} height={100} />
                </motion.div>
                <motion.p
                  className="text-lg font-semibold mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {title}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex md:justify-center justify-between items-center gap-6 mt-10">

          <Image src={Leftarrow} alt="left arrow " className="cursor-pointer" />

          <Image src={Rightarrow} alt="right arrow" className="cursor-pointer" />

        </div>
      </div>
    </div>
  );
}

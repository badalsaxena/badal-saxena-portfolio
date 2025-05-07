"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 mt-12 sm:mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-center md:text-start mt-6 sm:mt-8 md:mt-0">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-1 sm:gap-2 py-[5px] sm:py-[6px] px-[5px] sm:px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          <h1 className="text-[10px] sm:text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Frontend Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ideas
          </span>{" "}
          into Seamless User{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm xs:text-base sm:text-lg text-gray-400 my-2 sm:my-3 md:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a frontend Developer specializing in building modern web applications. Check out my projects and skills.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 px-4 sm:px-5 md:px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm sm:text-base md:text-lg font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] mx-auto md:mx-0"
        >
          Learn more
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center relative"
      >
        {/* Glowing gradient effect behind the image */}
        <div className="absolute z-0 w-[220px] h-[220px] xs:w-[300px] xs:h-[300px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-3xl opacity-70"></div>
        <Image
          src="/badal.png"
          alt="Badal's Portfolio"
          height={500}
          width={500}
          draggable={false}
          className="select-none relative z-10 rounded-full border-8 border-transparent bg-clip-padding bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 shadow-2xl shadow-cyan-500/40 h-[180px] w-[180px] xs:h-[240px] xs:w-[240px] sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = ({ darkMode }) => {
  const [text, setText] = useState("");
  const fullText = "  Front-End Developer & Back-End Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  const collidingLineVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const collidingLineVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      id="home"
      className="relative h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-4 space-x-0 md:space-x-16 overflow-hidden pt-16 md:pt-0"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div id="particles-js" className="absolute inset-0"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center md:items-start justify-center h-full"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className={`text-3xl md:text-5xl font-bold max-w-lg mb-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Joshua Calma
        </motion.h1>
        <motion.p
          className={`text-xl md:text-4xl max-w-lg mb-8 ${
            darkMode ? "text-white" : "text-black"
          }`}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {text}
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#projects"
            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative z-10 mt-8 md:mt-0 flex justify-center md:justify-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 1.5 }}
      >
        <div className="relative w-60 h-60 md:w-96 md:h-96 overflow-hidden left-1 md:left-0">
          <motion.img
            src="/assets/images/me.png" // Replace with the path to your image
            alt="Your Image"
            className="w-full h-full object-contain"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 2 }}
          />
          {/* <motion.div
            className={`absolute inset-0 border-4 animate-pulse ${
              darkMode ? "border-white" : "border-black"
            }`}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 2 }}
          ></motion.div> */}
        </div>
        {/* <motion.div
          className={`absolute top-0 right-0 w-full h-full border-4 transform z-[-1] animate-pulse ${
            darkMode ? "border-white" : "border-black"
          }`}
          initial="hidden"
          animate="visible"
          variants={collidingLineVariants}
          transition={{ duration: 2 }}
        ></motion.div> */}
        <motion.div
          className={`absolute top-10 right-5 w-full h-full border-4 transform translate-x-1 translate-y-1 z-[-1] animate-pulse ${
            darkMode ? "border-white" : "border-black"
          }`}
          initial="hidden"
          animate="visible"
          variants={collidingLineVariant}
          transition={{ duration: 2 }}
        ></motion.div>
        <motion.div
          className={`absolute top-0 left-0 w-full h-full border-4 transform translate-x-4 translate-y-4 z-[-1] animate-pulse ${
            darkMode ? "border-white" : "border-black"
          }`}
          initial="hidden"
          animate="visible"
          variants={collidingLineVariants}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

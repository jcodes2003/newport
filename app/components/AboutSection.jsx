"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = ({ darkMode }) => {
  return (
    <motion.section
      id="about"
      className={`py-10 ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      } overflow-hidden`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:gap-8 gap-6 text-center md:text-left">
          <motion.div
            className="flex-1 w-full md:w-auto"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold mb-3">Hi, I'm Joshua Calma</h3>
            <p className="mb-3 text-lg">
              I'm a graduating student with a Bachelor of Science in Information Technology. My passion lies in developing web-based systems that are both functional and visually engaging.
            </p>
            <p className="mb-3 text-lg">
              I have experience working with various technologies, including:
            </p>
            <ul className="list-disc list-inside mb-3 text-lg">
              <li>Frontend: HTML, CSS, Tailwind CSS, React.js</li>
              <li>Backend: PHP, MySQL</li>
              <li>Database Management: MySQL</li>
            </ul>
            <p className="text-lg">
              I’m always eager to learn and improve my skills to create efficient and user-friendly applications. Let’s build something great together!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;

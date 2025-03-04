"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionVisionSection = ({ darkMode }) => {
  return (
    <motion.section
      id="mission-vision"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-100"} overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-extrabold text-center mb-16 ${darkMode ? "text-white" : "text-black"}`}>
          Mission & Vision
        </h2>
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <img
              src="/assets/images/mission.png" // Replace with the path to your image
              alt="Mission"
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="text-left">
              <h3 className={`text-3xl font-semibold mb-3 text-center ${darkMode ? "text-white" : "text-black"}`}>Mission</h3>
              <p className={`mb-3 text-lg ${darkMode ? "text-white" : "text-black"}`}>
                To innovate and revolutionize digital systems through cutting-edge websites and applications, creating seamless,
                efficient, and scalable solutions that empower businesses and individuals with advanced technology. Our mission is to
                continuously push the boundaries of what is possible, leveraging the latest advancements in technology to deliver
                exceptional results for our clients. We are committed to fostering a culture of innovation, collaboration, and excellence,
                ensuring that we remain at the forefront of the digital landscape.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="text-left">
              <h3 className={`text-3xl font-semibold mb-3 text-center${darkMode ? "text-white" : "text-black"}`}>Vision</h3>
              <p className={`mb-3 text-lg ${darkMode ? "text-white" : "text-black"}`}>
                To make everything easier and more accessible anywhere through secure, intelligent, and user-friendly digital solutions,
                ensuring a seamless experience for all. Our vision is to be a global leader in technology, driving progress and innovation
                to create a better future. We aim to transform the way people interact with technology, making it more intuitive, efficient,
                and enjoyable. By staying ahead of industry trends and continuously improving our skills and knowledge, we strive to deliver
                solutions that not only meet but exceed the expectations of our clients and users.
              </p>
            </div>
            <img
              src="/assets/images/vision.png" // Replace with the path to your image
              alt="Vision"
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg mb-4 md:mb-0 md:ml-4"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVisionSection;

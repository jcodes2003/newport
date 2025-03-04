"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = ({ darkMode, skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getBackgroundColor = (skillName) => {
    switch (skillName) {
      case "HTML/CSS":
        return "bg-[url('/assets/images/html.png')] bg-cover bg-center";
      case "JavaScript":
        return "bg-[url('/assets/images/javascript.png')] bg-cover bg-center";
      case "React":
        return "bg-[url('/assets/images/react.png')] bg-cover bg-center";
      case "UI/UX Design":
        return "bg-[url('/assets/images/ui-ux.png')] bg-cover bg-center";
      case "Responsive Design":
        return "bg-[url('/assets/images/responsive.png')] bg-cover bg-center";
      case "API Integration":
        return "bg-[url('/assets/images/api.png')] bg-cover bg-center";
      case "PHP":
        return "bg-[url('/assets/images/php.png')] bg-cover bg-center";
      default:
        return darkMode ? "bg-gray-800" : "bg-gray-50";
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const getTranslateValue = (skillName) => {
    switch (skillName) {
      case "JavaScript":
      case "UI/UX Design":
      case "API Integration":
        return "translate(-50%, -50%)";
      default:
        return "translate(50%, -50%)";
    }
  };

  return (
    <motion.section
      id="skills"
      className="py-20 transition-all duration-500"
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">My Skills</h2>
        <motion.div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1 bg-white/30 rounded-lg shadow-lg transition-all duration-500 ${getBackgroundColor(
            hoveredSkill
          )}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md text-center ${
                darkMode
                  ? "bg-gray/30 text-gray-100 backdrop-invert backdrop-opacity-10"
                  : "bg-white/50 text-gray-800 backdrop-invert backdrop-opacity-10"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              animate={{
                x: hoveredSkill === skill.name ? (index % 2 === 0 ? "50%" : "-50%") : "0%",
                y: hoveredSkill === skill.name ? "-50%" : "0%",
                transformOrigin: hoveredSkill === skill.name ? "center" : "initial",
              }}
              style={{
                transform: hoveredSkill === skill.name ? getTranslateValue(skill.name) : "translate(0, 0)",
                backgroundColor: hoveredSkill === skill.name ? (darkMode ? "#4a4a4a" : "#e0e0e0") : "",
              }}
            >
              <div className="flex justify-center mb-4 text-blue-500">
                {skill.icon}
              </div>
              <h3 className="font-medium text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        {hoveredSkill && (
          <div className="text-center mt-4 text-lg font-semibold">
            {hoveredSkill}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default SkillsSection;

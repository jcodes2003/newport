"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = ({ darkMode, projects = [] }) => {
  return (
    <motion.section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-6 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-16">My Projects</h2>
        <div className="relative flex overflow-hidden w-full">
          {projects.length > 0 && (
            <motion.div
              className="flex w-100%"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: projects.length * 3, // Adjust duration for smoother sliding
                ease: "linear",
              }}
            >
              {projects.concat(projects).map((project, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg shadow-md ${
                    darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ minWidth: "33.33%" }} // Ensure three projects per slide
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 rounded-full text-sm ${
                          darkMode ? "bg-gray-600 text-gray-100" : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;

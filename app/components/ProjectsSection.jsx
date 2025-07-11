"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const ProjectsSection = ({ darkMode, projects = [] }) => {
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useAnimationFrame((t, delta) => {
    if (!isHovered && projects.length > 0) {
      const speed = 2 / projects.length; // px per second (much slower)
      const width = containerRef.current?.scrollWidth || 1;
      let next = x.get() - (speed * delta) / 15000 * width;
      if (Math.abs(next) >= width / 2) {
        next = 0;
      }
      x.set(next);
    }
  });

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
        <h2 className="text-4xl font-extrabold text-center mb-16">My Projects</h2>
        <div
          className="relative flex overflow-hidden w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.length > 0 && (
            <motion.div
              className="flex gap-6"
              ref={containerRef}
              style={{ x, width: "300%" }}
            >
              {projects.concat(projects).map((project, index) => (
                <motion.div
                  key={index}
                  className={`p-6 pr-8 rounded-lg shadow-md transition-all duration-200 cursor-pointer ${
                    darkMode
                      ? "bg-gray-700 text-gray-100 border border-blue-400 hover:border-blue-500"
                      : "bg-white text-gray-800 border border-blue-400 hover:border-blue-500"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ minWidth: "25%" }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-600 text-gray-100"
                            : "bg-gray-200 text-gray-800"
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

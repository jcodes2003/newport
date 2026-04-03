"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = ({ darkMode, projects = [] }) => {
  return (
    <section
      id="projects"
      className={`py-20 px-6 ${darkMode ? "bg-slate-900/40" : "bg-slate-50/80"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p
            className={`text-sm tracking-[0.25em] uppercase mb-4 ${
              darkMode ? "text-cyan-300" : "text-cyan-700"
            }`}
          >
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Work that blends functionality and experience
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl border p-6 md:p-8 transition ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className={darkMode ? "text-cyan-300" : "text-cyan-700"}
                  size={20}
                />
              </div>

              <p
                className={`leading-7 mb-6 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      darkMode
                        ? "bg-cyan-950/50 border-cyan-900 text-cyan-200"
                        : "bg-cyan-50 border-cyan-200 text-cyan-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

"use client";

import { motion } from "framer-motion";

const SkillsSection = ({ darkMode, skills = [] }) => {
  return (
    <section id="skills" className="py-20 px-6">
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
            Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Tools I use to ship reliable web apps
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className={`rounded-2xl border p-5 text-center transition ${
                darkMode
                  ? "bg-slate-900 border-slate-700 hover:border-cyan-400"
                  : "bg-white border-slate-200 hover:border-cyan-500 shadow-sm"
              }`}
            >
              <div
                className={`mb-3 flex justify-center ${
                  darkMode ? "text-cyan-300" : "text-cyan-700"
                }`}
              >
                {skill.icon}
              </div>
              <p className="text-sm md:text-base font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

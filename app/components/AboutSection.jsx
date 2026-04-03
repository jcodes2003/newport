"use client";

import { motion } from "framer-motion";

const techGroups = [
  { label: "Frontend", value: "HTML, CSS, Tailwind CSS, React.js" },
  { label: "Backend", value: "PHP, REST APIs" },
  { label: "Database", value: "MySQL" },
];

const AboutSection = ({ darkMode }) => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p
            className={`text-sm tracking-[0.25em] uppercase mb-4 ${
              darkMode ? "text-cyan-300" : "text-cyan-700"
            }`}
          >
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Building useful products with clean visuals and clear user flow.
          </h2>
          <p
            className={`text-base md:text-lg leading-8 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            I am a graduating BSIT student who enjoys turning ideas into
            practical web systems. I focus on balancing technical structure and
            visual quality so users get a smooth and reliable experience.
          </p>
        </div>

        <div
          className={`rounded-3xl border p-6 md:p-8 backdrop-blur-sm ${
            darkMode
              ? "bg-slate-900/60 border-slate-700"
              : "bg-white/80 border-slate-200 shadow-lg"
          }`}
        >
          <h3 className="text-2xl font-bold mb-5">Core Stack</h3>
          <div className="space-y-4">
            {techGroups.map((group) => (
              <div
                key={group.label}
                className={`rounded-xl p-4 ${
                  darkMode ? "bg-slate-800/80" : "bg-slate-100"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.2em] mb-1 ${
                    darkMode ? "text-cyan-300" : "text-cyan-700"
                  }`}
                >
                  {group.label}
                </p>
                <p className={darkMode ? "text-slate-200" : "text-slate-700"}>
                  {group.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

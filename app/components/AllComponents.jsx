"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Sun, Moon, Twitter, Linkedin, Mail } from "lucide-react";

export const AboutSection = ({ darkMode }) => {
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
              I'm always eager to learn and improve my skills to create efficient and user-friendly applications. Let's build something great together!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export const ContactSection = ({ darkMode }) => {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className={`w-full p-3 rounded-md ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border`}
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-md ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border`}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2">Subject</label>
              <input
                type="text"
                className={`w-full p-3 rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border`}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Message</label>
              <textarea
                rows={5}
                className={`w-full p-3 rounded-md ${
                  darkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-10 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Mail size={24} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Joshua All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export const HeroSection = ({ darkMode }) => {
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

export const MissionVisionSection = ({ darkMode }) => {
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
          {/* Mission Box */}
          <motion.div
            className={`flex flex-col md:flex-row items-center md:items-start rounded-xl shadow-lg p-6 ${
              darkMode
                ? "bg-gray-800 bg-opacity-80 border border-gray-700"
                : "bg-white bg-opacity-90 border border-gray-200"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <img
              src="/assets/images/mission.png"
              alt="Mission"
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4 order-1"
            />
            <div className="text-left order-2 md:ml-4 flex-1">
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
          {/* Vision Box */}
          <motion.div
            className={`flex flex-col md:flex-row items-center md:items-start rounded-xl shadow-lg p-6 ${
              darkMode
                ? "bg-gray-800 bg-opacity-80 border border-gray-700"
                : "bg-white bg-opacity-90 border border-gray-200"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="text-left order-2 md:order-1 md:mr-4 flex-1">
              <h3 className={`text-3xl font-semibold mb-3 text-center ${darkMode ? "text-white" : "text-black"}`}>Vision</h3>
              <p className={`mb-3 text-lg ${darkMode ? "text-white" : "text-black"}`}>
                To make everything easier and more accessible anywhere through secure, intelligent, and user-friendly digital solutions,
                ensuring a seamless experience for all. Our vision is to be a global leader in technology, driving progress and innovation
                to create a better future. We aim to transform the way people interact with technology, making it more intuitive, efficient,
                and enjoyable. By staying ahead of industry trends and continuously improving our skills and knowledge, we strive to deliver
                solutions that not only meet but exceed the expectations of our clients and users.
              </p>
            </div>
            <img
              src="/assets/images/vision.png"
              alt="Vision"
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg mb-4 md:mb-0 order-1 md:order-2"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export const Navbar = ({
  darkMode,
  activeSection,
  handleNavClick,
  toggleDarkMode,
}) => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    handleNavClick(sectionId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleNavClick(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section, #home");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [handleNavClick]);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md bg-opacity-20 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/assets/images/logo.png" alt="Logo" className="h-15 w-15 object-contain" />
          Portfolio
        </div>
        <div className="hidden md:flex space-x-8 text-lg justify-center w-full">
          <a
            href="#home"
            className={`hover:text-blue-500 transition ${
              activeSection === "home" ? "text-blue-500" : ""
            }`}
            onClick={(e) => handleClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-blue-500 transition ${
              activeSection === "about" ? "text-blue-500" : ""
            }`}
            onClick={(e) => handleClick(e, "about")}
          >
            About
          </a>
          <a
            href="#projects"
            className={`hover:text-blue-500 transition ${
              activeSection === "projects" ? "text-blue-500" : ""
            }`}
            onClick={(e) => handleClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`hover:text-blue-500 transition ${
              activeSection === "skills" ? "text-blue-500" : ""
            }`}
            onClick={(e) => handleClick(e, "skills")}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-500 transition ${
              activeSection === "contact" ? "text-blue-500" : ""
            }`}
            onClick={(e) => handleClick(e, "contact")}
          >
            Contact
          </a>
        </div>
        <button
          className={`fixed right-6 z-50 p-2 rounded-full ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export const ProjectsSection = ({ darkMode, projects = [] }) => {
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

export const SkillsSection = ({ darkMode, skills }) => {
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
                {React.createElement(skill.icon)}
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
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MissionVisionSection from "./components/MissionVisionSection";
import { Layout, Code, Layers, Heart } from "lucide-react";
import { RingLoader } from "react-spinners";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);
  const sectionsRef = useRef({});

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Dynamically import particles.js when component mounts
    if (typeof window !== "undefined") {
      import("particles.js").then((module) => {
        particlesJS.load = module.default;
        if (window.particlesJS && document.getElementById("particles-js")) {
          const particlesConfig = {
            particles: {
              number: {
                value: window.innerWidth < 768 ? 40 : 100, // Adjust particle number for mobile
                density: { enable: true, value_area: 800 },
              },
              color: { value: darkMode ? "#ffffff" : "#333333" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: darkMode ? "#ffffff" : "#333333",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          };
          window.particlesJS("particles-js", particlesConfig);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      // Reinitialize particles.js to apply the correct color
      if (window.particlesJS && document.getElementById("particles-js")) {
        const particlesConfig = {
          particles: {
            number: {
              value: window.innerWidth < 768 ? 40 : 100, // Adjust particle number for mobile
              density: { enable: true, value_area: 800 },
            },
            color: { value: darkMode ? "#ffffff" : "#333333" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: darkMode ? "#ffffff" : "#333333",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        };
        window.particlesJS("particles-js", particlesConfig);
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section, #home");
    sections.forEach((section) => {
      observer.observe(section);
      sectionsRef.current[section.id] = section;
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionsRef.current[sectionId]) {
      sectionsRef.current[sectionId].scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Ensure active section is updated
    }
  };

  // Projects data
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-featured online store with shopping cart and user authentication.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for organizing and prioritizing tasks.",
      tags: ["React", "Redux", "Firebase"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for monitoring social media performance.",
      tags: ["React", "Chart.js", "API Integration"],
    },
  ];

  // Skills data
  const skills = [
    { name: "HTML/CSS", icon: <Layout size={24} /> },
    { name: "JavaScript", icon: <Code size={24} /> },
    { name: "React", icon: <Layers size={24} /> },
    { name: "UI/UX Design", icon: <Heart size={24} /> },
    { name: "Responsive Design", icon: <Layers size={24} /> },
    { name: "API Integration", icon: <Code size={24} /> },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen relative">
        <div id="particles-js" className="absolute inset-0 z-0"></div>
        <RingLoader color={darkMode ? "#00c2ff" : "#00c2ff"} size={150} />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      {!loading && (
        <Navbar
          darkMode={darkMode}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <MissionVisionSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} projects={projects} />
      <SkillsSection darkMode={darkMode} skills={skills} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;
"use client";
import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({
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

export default Navbar;

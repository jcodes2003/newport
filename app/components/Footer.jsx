"use client";
import React from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = ({ darkMode }) => {
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

export default Footer;

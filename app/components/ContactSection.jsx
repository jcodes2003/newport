"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = ({ darkMode }) => {
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
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
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

export default ContactSection;

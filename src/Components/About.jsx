import React, { useState } from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

function About() {
  // Set your CV file path here
  const [cvPath, setCvPath] = useState("/sohancv.pdf"); // Update the path

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.setAttribute("download", "Sohan_CV.pdf"); // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl "
      >
        About <span className="text-neutral-400">Me</span>
      </motion.h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            {/* Replace the image with Person Profile Icon SVG */}
            <svg
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d94680" stopOpacity="0.8" />{" "}
                  {/* Duller Pink */}
                  <stop
                    offset="50%"
                    stopColor="#7c3aed"
                    stopOpacity="0.8"
                  />{" "}
                  {/* Duller Purple */}
                  <stop
                    offset="100%"
                    stopColor="#2563eb"
                    stopOpacity="0.8"
                  />{" "}
                  {/* Duller Blue */}
                </linearGradient>
              </defs>
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="url(#gradient)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M4 20C4 17.5 8 15 12 15C16 15 20 17.5 20 20"
                stroke="url(#gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 items-center flex justify-center lg:justify-start"
        >
          <div className="text-center lg:text-left max-w-md">
            <p className="my-10 opacity-90">{ABOUT_TEXT}</p>
            {/* Download CV Button */}
            <button
              onClick={handleDownload}
              className="mt-4 px-6 py-3 border border-neutral-400 font-semibold rounded-lg transition-all 
             bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text text-transparent 
             hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 
             hover:text-transparent hover:border-transparent"
            >
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

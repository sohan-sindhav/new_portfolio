import React, { useState } from "react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // Importing the icons
import { motion } from "framer-motion";

function ProblemSolving() {
  // State to hold the problem count
  const [leetcodeCount, setLeetcodeCount] = useState(5); // Default value is 50, change it
  const [gfgCount, setGfgCount] = useState(5); // Default value is 30, change it

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl my-20"
      >
        Problem Solving
      </motion.h2>

      {/* Daily Update Disclaimer */}
      <div className="text-center text-lg text-neutral-400 mb-8">
        <span>(Daily updating)</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Leetcode Section */}
        <div className="flex w-full lg:w-1/2 p-4 border-4 border-neutral-800 rounded-2xl">
          {/* Icon on the Left */}
          <div className="flex justify-center items-center w-1/3">
            <a
              href="https://leetcode.com/u/sohan7/" // Replace with your actual Leetcode profile URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-6xl text-yellow-500 hover:text-yellow-400 cursor-pointer" />
            </a>
          </div>
          {/* Problem Count on the Right */}
          <div className="flex flex-col justify-center w-2/3 pl-4">
            <a
              href="https://leetcode.com/u/sohan7/" // Replace with your actual Leetcode profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="block text-3xl font-semibold text-neutral-300 hover:text-cyan-400"
            >
              LeetCode Problems Solved
            </a>
            <div className="text-xl mt-2 text-neutral-500">
              {leetcodeCount} problems solved
            </div>
          </div>
        </div>

        {/* GeeksforGeeks Section */}
        <div className="flex w-full lg:w-1/2 p-4 border-4 border-neutral-800 rounded-2xl">
          {/* Icon on the Left */}
          <div className="flex justify-center items-center w-1/3">
            <a
              href="https://www.geeksforgeeks.org/user/sohan77/" // Replace with your actual GFG profile URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks className="text-6xl text-green-500 hover:text-green-400 cursor-pointer" />
            </a>
          </div>
          {/* Problem Count on the Right */}
          <div className="flex flex-col justify-center w-2/3 pl-4">
            <a
              href="https://www.geeksforgeeks.org/user/sohan77/" // Replace with your actual GFG profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="block text-3xl font-semibold text-neutral-300 hover:text-green-400"
            >
              GeeksforGeeks Problems Solved
            </a>
            <div className="text-xl mt-2 text-neutral-500">
              {gfgCount} problems solved
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center mt-12 text-lg text-neutral-500">
        <p>
          Click on the icons or titles to visit my profiles on{" "}
          <a
            href="https://leetcode.com/u/sohan7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            LeetCode
          </a>{" "}
          and{" "}
          <a
            href="https://www.geeksforgeeks.org/user/sohan77/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400"
          >
            GeeksforGeeks
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default ProblemSolving;

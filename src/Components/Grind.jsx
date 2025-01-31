import React, { useState } from "react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // Importing the icons
import { motion } from "framer-motion";

function ProblemSolving() {
  // State to hold the problem count
  const [leetcodeCount, setLeetcodeCount] = useState(6); // Default value is 50, change it
  const [gfgCount, setGfgCount] = useState(11); // Default value is 30, change it
  const [gfgCodingScore, setGfgCodingScore] = useState(19); // Example coding score, change as needed

  // LeetCode problem stats (Categorized by difficulty)
  const leetcodeStats = {
    easy: 4,
    medium: 2,
    hard: 0,
  };

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

      {/* Daily Update Disclaimer directly below Problem Solving */}
      <div className="text-center text-lg text-neutral-400 mb-8">
        <span>(Daily updating)</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Leetcode Section */}
        <div className="flex flex-col sm:flex-row w-full lg:w-1/2 p-6 border-4 border-neutral-800 rounded-2xl mb-8 sm:mb-0">
          {/* Icon on the Left */}
          <div className="flex justify-center items-center w-full sm:w-1/3 mb-4 sm:mb-0">
            <a
              href="https://leetcode.com/u/sohan7/" // Replace with your actual Leetcode profile URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-6xl text-yellow-500 hover:text-yellow-400 cursor-pointer" />
            </a>
          </div>
          {/* Problem Count and Stats on the Right */}
          <div className="flex flex-col justify-center w-full sm:w-2/3 sm:pl-4">
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

            {/* LeetCode Problem Stats */}
            <div className="mt-6">
              <div className="flex justify-between text-neutral-500">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2" />
                  Easy: {leetcodeStats.easy}
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2" />
                  Medium: {leetcodeStats.medium}
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-2" />
                  Hard: {leetcodeStats.hard}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-neutral-500">
                  <span>Progress</span>
                  <span>{leetcodeCount} / 3435</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${(leetcodeCount / 100) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GeeksforGeeks Section */}
        <div className="flex flex-col sm:flex-row w-full lg:w-1/2 p-4 border-4 border-neutral-800 rounded-2xl">
          {/* Icon on the Left */}
          <div className="flex justify-center items-center w-full sm:w-1/3 mb-4 sm:mb-0">
            <a
              href="https://www.geeksforgeeks.org/user/sohan77/" // Replace with your actual GFG profile URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks className="text-6xl text-green-500 hover:text-green-400 cursor-pointer" />
            </a>
          </div>
          {/* Problem Count and Coding Score on the Right */}
          <div className="flex flex-col justify-center w-full sm:w-2/3 sm:pl-4">
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
            {/* Display the coding score */}
            <div className="text-xl mt-2 text-neutral-500">
              Coding Score: {gfgCodingScore}
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

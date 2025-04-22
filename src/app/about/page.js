"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaPython, FaDatabase, FaNodeJs } from "react-icons/fa"; // Import icons

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-8 font-orbitron"
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          Hello! I&apos;m Rishi Raj, a passionate web developer with a strong
          foundation in modern technologies like JavaScript, React, and Python.
          I enjoy building interactive web applications and exploring new
          frameworks and tools to enhance the user experience. I am currently
          pursuing my B.Tech and looking to improve my skills by working on
          interesting projects and collaborating with like-minded people.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl mb-16"
        >
          <h2 className="text-3xl mb-4 text-yellow-300 font-semibold">
            My Skills
          </h2>
          <div className="flex justify-center space-x-6 text-4xl">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaJs className="text-yellow-400" />
              <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
                JavaScript
              </span>
            </motion.div>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaReact className="text-blue-500" />
              <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
                React
              </span>
            </motion.div>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaPython className="text-yellow-500" />
              <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
                Python
              </span>
            </motion.div>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaDatabase className="text-green-500" />
              <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
                SQL
              </span>
            </motion.div>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaNodeJs className="text-green-600" />
              <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
                Node.js
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl"
        >
          <h2 className="text-3xl mb-4 text-yellow-300 font-semibold">
            Experience
          </h2>
          <p className="max-w-3xl mx-auto mb-4">
            Over the years, I have worked on a variety of personal and academic
            projects, building everything from simple websites to interactive
            web applications. I&apos;m also constantly learning and
            experimenting with new technologies to improve my skills. I love
            collaborating with others and taking on challenges that push me to
            grow.
          </p>
          <p className="max-w-3xl mx-auto">
            My primary focus is on front-end development, especially with React
            and other modern JavaScript libraries and frameworks. I am also
            familiar with back-end technologies and databases, and I plan to
            dive deeper into full-stack development in the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="relative bg-black/80 py-12 mt-0">
      {/* Overlay Glow Circles */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full bottom-10 right-10 blur-3xl animate-pulse" />

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect!</h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me or follow my journey!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="https://github.com/rishiraj38"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-white hover:text-cyan-300 transition-all duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rishi-raj-3488432ab/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-white hover:text-blue-500 transition-all duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/rishi__raj_38/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-white hover:text-blue-400 transition-all duration-300"
          >
            <FaInstagram />
          </motion.a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-white/80">
          © 2025 Rishi Raj. All rights reserved.
        </p>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-black/80"></div>
    </section>
  );
}

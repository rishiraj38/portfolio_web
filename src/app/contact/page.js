"use client";

import { motion } from "framer-motion";
import Particles from "../../../ReactBits2/Particles/Particles";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-6 md:px-16 py-20 flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/10 shadow-xl space-y-8"
      >
        <h2 className="text-4xl font-bold text-center font-orbitron">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-gray-200">
          Have a project in mind or just want to say hi? Fill out the form below
          👇
        </p>

        <form
          action="https://formsubmit.co/your@email.com" // replace with your email or backend endpoint
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-bold py-3 rounded-xl hover:bg-cyan-300 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>
    </section>
  );
}

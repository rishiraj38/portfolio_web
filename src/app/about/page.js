"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h1>

          <div className="space-y-8 text-lg text-muted leading-relaxed">
            <p>
              Hi! I&#39;m <strong className="text-foreground">Rishi</strong>, a
              passionate full-stack developer and UI/UX enthusiast who loves
              creating beautiful, functional web experiences.
            </p>

            <p>
              With expertise in modern web technologies like React, Next.js, and
              Node.js, I build applications that are not just visually stunning
              but also highly performant and user-friendly.
            </p>

            <p>
              When I&#39;m not coding, you can find me exploring new design
              trends, contributing to open-source projects, or experimenting
              with the latest web technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                className="p-6 rounded-2xl bg-card-bg border border-card-border"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Experience
                </h3>
                <p className="text-muted">3+ years building web applications</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-card-bg border border-card-border"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Projects
                </h3>
                <p className="text-muted">20+ successful deployments</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

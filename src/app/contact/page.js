"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
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
            Let&#39;s <span className="text-gradient">Connect</span>
          </h1>

          <p className="text-xl text-muted mb-12 leading-relaxed">
            Have a project in mind or just want to chat? I&#39;d love to hear
            from you. Reach out through any of the channels below!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:rishi@rishiverse.com"
              className="group p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary transition-all duration-300 flex items-center gap-4"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <p className="text-muted">rishi@rishiverse.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary transition-all duration-300 flex items-center gap-4"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Linkedin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                <p className="text-muted">Connect professionally</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary transition-all duration-300 flex items-center gap-4"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Github size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">GitHub</h3>
                <p className="text-muted">Check out my code</p>
              </div>
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary transition-all duration-300 flex items-center gap-4"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Twitter size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Twitter</h3>
                <p className="text-muted">Follow for updates</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="p-10 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Quick Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-background border border-card-border focus:border-primary outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl bg-background border border-card-border focus:border-primary outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-6 py-4 rounded-xl bg-background border border-card-border focus:border-primary outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

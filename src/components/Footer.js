"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/#projects" },
      { name: "Contact", href: "/contact" },
    ],
    Socials: [
      { name: "GitHub", href: "https://github.com", icon: Github },
      { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
      { name: "Twitter", href: "https://twitter.com", icon: Twitter },
      { name: "Email", href: "mailto:rishi@rishiverse.com", icon: Mail },
    ],
  };

  return (
    <footer className="relative bg-card-bg border-t border-card-border pt-20 pb-10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black mb-4 tracking-tight">
              <span className="text-gradient">Rishi</span>
              <span className="text-foreground">Verse</span>
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Building digital experiences that inspire and innovate. Let&#39;s
              create something amazing together.
            </p>
            <div className="flex gap-4">
              {footerLinks.Socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-black mb-6 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.Navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <h4 className="text-lg font-black mb-3 tracking-tight">
              Let&#39;s Work Together
            </h4>
            <p className="text-muted text-sm mb-4">
              Have a project in mind? Let&#39;s make it happen!
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full text-sm hover:scale-105 transition-transform duration-300"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm flex items-center gap-2">
            © {currentYear} RishiVerse. Made with{" "}
            <Heart size={16} className="text-primary" /> by Rishi
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

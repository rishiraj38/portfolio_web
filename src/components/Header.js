"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black tracking-tighter hover:scale-105 transition-transform">
          <span className="text-gradient">Rishi</span>
          <span className="text-foreground">Verse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#projects" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="/#skills" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <a
            href="/contact"
            className="hidden md:inline-flex px-6 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

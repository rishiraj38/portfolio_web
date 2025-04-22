// src/app/page.js
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "./project/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Cursor />
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
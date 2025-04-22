// src/app/page.js
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Header />
      <Hero />
    </main>
  );
}
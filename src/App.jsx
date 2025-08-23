import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen p-3 sm:p-6 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="skills" className="py-20"><Skills /></section>
        <section id="experience" className="py-20 bg-zinc-100 dark:bg-zinc-900"><Experience /></section>
        <section id="projects" className="py-20"><Projects /></section>
        <section id="certificates" className="py-20 bg-zinc-100 dark:bg-zinc-900"><Certificates /></section>
        <section id="education" className="py-20"><Education /></section>
        <section id="contact" className="py-20 bg-zinc-100 dark:bg-zinc-900"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

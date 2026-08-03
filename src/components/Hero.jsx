import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Animated gradient blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Second subtle blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 blur-3xl opacity-10 -bottom-20 -left-20"
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center md:text-left max-w-3xl">
        {/* Role Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
        >
          <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mt-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Amrit Rai
          </span>
        </motion.h1>

        {/* Full-Stack Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          A passionate <span className="text-indigo-400 font-medium">Full-Stack Developer</span> 
          {" "}who builds modern, scalable web applications with{" "}
          <span className="text-indigo-400 font-medium">Next.js</span>,{" "}
          <span className="text-purple-400 font-medium">React</span>,{" "}
          <span className="text-blue-400 font-medium">TypeScript</span>, and{" "}
          <span className="text-teal-400 font-medium">Tailwind CSS</span>.
          <br />
          <span className="text-gray-400 text-base">
            From pixel-perfect UI to robust backends — I deliver complete solutions with 
            <span className="text-pink-400"> smooth animations</span> and 
            <span className="text-pink-400"> seamless experiences</span>.
          </span>
        </motion.p>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-3"
        >
          <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-400 flex items-center gap-2">
            <SiNextdotjs className="text-xl" /> Next.js
          </span>
          <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 flex items-center gap-2">
            <SiReact className="text-xl" /> React
          </span>
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 flex items-center gap-2">
            <SiTypescript className="text-xl" /> TypeScript
          </span>
          <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm text-teal-400 flex items-center gap-2">
            <SiTailwindcss className="text-xl" /> Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm text-pink-400 flex items-center gap-2">
            <SiFramer className="text-xl" /> Framer Motion
          </span>
          <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 flex items-center gap-2">
            <SiNodedotjs className="text-xl" /> Node.js
          </span>
          <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 flex items-center gap-2">
            <SiMongodb className="text-xl" /> MongoDB
          </span>
          <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400 flex items-center gap-2">
            <SiPostgresql className="text-xl" /> PostgreSQL
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-sm"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1zOrsM7RAQsfh9FJN_BH44nc0UO0KKRtj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
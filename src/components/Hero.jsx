import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Animated gradient blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 flex-shrink-0"
      >
        <img
          src="/profile-pic.jpg"
          alt="Amrit Rai"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center md:text-left max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-indigo-400 font-semibold tracking-widest"
        >
          FRONTEND DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold mt-4"
        >
          Hey, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Amrit Rai
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-lg text-gray-400"
        >
          I build clean, responsive UIs using React, Next.js, Tailwind CSS and
          animations with Framer Motion / GSAP. Passionate about performance,
          accessibility and delightful micro-interactions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-500/10 border border-indigo-500 text-indigo-400 hover:bg-indigo-500/20 hover:scale-105 transition-transform backdrop-blur-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

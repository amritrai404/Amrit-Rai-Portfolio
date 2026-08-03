import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Animated gradient blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
        >
          <span className="text-indigo-400 font-medium text-sm tracking-wide">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Amrit Rai
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
        >
          I build modern, scalable web applications with{" "}
          <span className="text-indigo-400">Next.js</span>,{" "}
          <span className="text-purple-400">React</span>,{" "}
          <span className="text-blue-400">TypeScript</span>, and{" "}
          <span className="text-teal-400">Tailwind CSS</span>.
          <br />
          <span className="text-gray-400 text-base">
            Clean code, smooth animations, and pixel-perfect design.
          </span>
        </motion.p>

        {/* Buttons - View My Work & View Resume */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/148BLg3YqsGE6nwQuLQWh8_keaPoEgznv/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-green-400 border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-sm flex items-center gap-2"
          >
            <span>📄</span> View Resume
          </a>
        </motion.div>

        {/* Small Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            Next.js
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            React
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            TypeScript
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            Tailwind
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            Framer Motion
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            Node.js
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
            MongoDB
          </span>
        </motion.div>
      </div>
    </section>
  );
}
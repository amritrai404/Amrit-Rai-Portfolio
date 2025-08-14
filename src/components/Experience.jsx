import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Experience() {
  return (
    <div className="section">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Experience
      </motion.h2>

      {/* Sanggo Tech */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <div className="flex items-center justify-between">
          <a
            href="https://sanggotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:underline"
          >
            <h3 className="text-lg font-semibold">Sanggo Tech</h3>
            <FiExternalLink className="text-lg" />
          </a>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Frontend Developer Intern
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          {/* Skills */}
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            React
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            TypeScript
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            JavaScript
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            Tailwind CSS
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            GSAP
          </span>

          {/* Timeline */}
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
            March 2025 – June 2025
          </span>

          {/* Certificate Link */}
          <a
            href="https://drive.google.com/file/d/17ZWz0DxVnz4OWhpZPEe4nRgHMSmODvMl/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1 rounded-full bg-green-600/10 text-green-700 dark:text-green-300 border border-green-600/20 flex items-center gap-1 hover:underline"
          >
            Certificate <FiExternalLink className="text-xs" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

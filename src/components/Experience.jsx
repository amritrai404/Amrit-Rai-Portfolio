import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white"
        >
          Experience
        </motion.h2>

        {/* Global Fellowship / Asymmetric.ai */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg dark:shadow-zinc-800/30 border border-zinc-200 dark:border-zinc-700 p-6 mb-6 transition-all hover:shadow-xl dark:hover:shadow-zinc-800/40"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Global Fellowship (US-based NGO) – Asymmetric.ai
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Full-Stack Developer Intern
              </p>
            </div>
            <span className="text-sm px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20 whitespace-nowrap">
              January 2026 – April 2026 (3 Months)
            </span>
          </div>

          <ul className="mt-3 list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1 text-sm">
            <li>Built responsive frontend interfaces using Next.js, React, TypeScript and Tailwind CSS.</li>
            <li>Converted Figma designs into reusable and scalable UI components.</li>
            <li>Collaborated with international developers using GitHub, pull requests and code reviews.</li>
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
            <a
              href="https://drive.google.com/file/d/1oa3dAtb4XT4H3nf_lRcCZcOLtp1Xn0VY/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 rounded-full bg-green-600/10 text-green-700 dark:text-green-300 border border-green-600/20 flex items-center gap-1 hover:underline"
            >
              Certificate <FiExternalLink className="text-xs" />
            </a>
          </div>
        </motion.div>

        {/* Sanggo Tech */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg dark:shadow-zinc-800/30 border border-zinc-200 dark:border-zinc-700 p-6 mb-6 transition-all hover:shadow-xl dark:hover:shadow-zinc-800/40"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Sanggo Tech (Startup)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Frontend Developer Intern
              </p>
            </div>
            <span className="text-sm px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20 whitespace-nowrap">
              March 2025 – June 2025 (3 Months)
            </span>
          </div>

          <ul className="mt-3 list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1 text-sm">
            <li>Developed and maintained responsive websites using Next.js, React and Tailwind CSS.</li>
            <li>Built reusable UI components and implemented animations with GSAP and Framer Motion.</li>
            <li>Improved website performance and user experience across different screen sizes.</li>
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion"].map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
            <a
              href="https://drive.google.com/file/d/17ZWz0DxVnz4OWhpZPEe4nRgHMSmODvMl/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1 rounded-full bg-green-600/10 text-green-700 dark:text-green-300 border border-green-600/20 flex items-center gap-1 hover:underline"
            >
              Certificate <FiExternalLink className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
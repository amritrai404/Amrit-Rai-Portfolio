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

      {/* Sanggo Tech Internship */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-6 mb-4"
      >
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Sanggo Tech</h3>
          <a
            href="https://sanggotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-indigo-600 hover:underline"
          >
            <FiExternalLink className="text-sm" />
          </a>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Frontend Developer Intern
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {/* Skills */}
          {["React", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP"].map(
            (skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                {skill}
              </span>
            )
          )}
          {/* Timeline */}
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
            March 2025 – June 2025
          </span>
          {/* Certificate */}
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

      {/* Satnam Cooling Services Frontend Work */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-6 mb-4"
      >
        <h3 className="text-lg font-semibold">Satnam Cooling Services</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Frontend Development (Internship)
        </p>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Worked on responsive UI implementation, modern design, and frontend features using Next.js, React, and Tailwind CSS.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {["Next.js", "React", "Tailwind CSS"].map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Sanggo Tech Main Website Frontend Work */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-6 mb-4"
      >
        <h3 className="text-lg font-semibold">Sanggo Tech Main Website</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Frontend Development (Internship)
        </p>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Worked on About, Contact, Career, Policy pages and footer implementation using React and Tailwind CSS.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {["React", "Next.js", "Tailwind CSS"].map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

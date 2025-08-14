import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Education() {
  return (
    <div className="section">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <div className="flex items-center justify-between">
          <a
            href="https://www.mgkvp.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:underline"
          >
            <h3 className="text-lg font-semibold">
              Mahatma Gandhi Kashi Vidyapith (MGKVP)
            </h3>
            <FiExternalLink className="text-lg" />
          </a>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Varanasi, Uttar Pradesh
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            Bachelor of Computer Applications
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
            Expected 2027
          </span>
        </div>
      </motion.div>
    </div>
  );
}

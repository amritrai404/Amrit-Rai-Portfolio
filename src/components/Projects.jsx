import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "FlipZon E-commerce",
    desc: "Full e-commerce app demo. Product listings, cart and checkout UX.",
    stack: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    live: "",
    repo: "",
  },
  {
    title: "Gadgets Galaxy",
    desc: "Responsive e-commerce gadget store UI.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://amrit-gadgets-galaxy.netlify.app",
    repo: "https://github.com/amritrai404/Gadgets-Galaxy",
    featured: true,
  },
  {
    title: "ToDo List",
    desc: "A simple and responsive to-do list app to manage daily tasks.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    live: "https://amritrai404-enhanced-todo-list.netlify.app/",
    repo: "https://github.com/amritrai404/TodoList-Enhanced/",
  },
];

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className={
        "card p-6 " + (p.featured ? "ring-2 ring-indigo-500/20" : "")
      }
    >
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <FiExternalLink /> Live
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <FiGithub /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="section">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </div>
  );
}

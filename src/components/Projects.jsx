import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Sanggo Tech Main Website",
    desc: "Internship project: worked on frontend for About, Contact, Career, Policy pages, and footer implementation using React and Tailwind CSS.",
    stack: ["React", "Tailwind CSS", "Next.js"],
    live: "https://sanggo.netlify.app/",
    repo: "https://github.com/amritrai404/sanggo-main-project",
  },
  {
    title: "QuickCart",
    desc: "Modern e-commerce app with product browsing, cart management, and secure authentication using Clerk.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk", "Framer Motion"],
    live: "https://amrit-quick-cart.netlify.app",
    repo: "https://github.com/amritrai404/Quick-Cart",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    desc: "My personal portfolio website built with React.js, Tailwind CSS, and Framer Motion — showcasing my skills, projects, and professional experience as a frontend developer.",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    live: "https://amritrai-portfolio.netlify.app/",
    repo: "https://github.com/amritrai404/Amrit-Rai-Portfolio",
  },
  {
    title: "Satnam Cooling Services",
    desc: "Client project completed during my internship at Sanggo Tech. I built the complete frontend using Next.js, React, and Tailwind CSS — implementing a responsive, modern UI for a real-world client.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.satnamcoolingservice.shop/",
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
        "bg-white dark:bg-zinc-800 rounded-xl shadow-lg dark:shadow-zinc-800/30 border border-zinc-200 dark:border-zinc-700 p-6 transition-all hover:shadow-xl dark:hover:shadow-zinc-800/40 " +
        (p.featured ? "ring-2 ring-indigo-500/20" : "")
      }
    >
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {p.title}
      </h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
        {p.desc}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
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
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm"
          >
            <FiExternalLink /> Live
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
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
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
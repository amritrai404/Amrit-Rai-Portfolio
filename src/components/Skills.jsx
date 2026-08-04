import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFigma,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiFramer,
  SiClerk,
  SiShadcnui,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const skills = [
  // Languages
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },

  // Frameworks
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },

  // Animation/UI
  { name: "GSAP", icon: <SiJavascript /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Shadcn/UI", icon: <SiShadcnui /> },

  // Backend & Database
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiPostgresql /> },

  // Tools
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <FiCode /> },  // ← Fixed icon
  { name: "Figma", icon: <SiFigma /> },
  { name: "Clerk", icon: <SiClerk /> },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg dark:shadow-zinc-800/30 border border-zinc-200 dark:border-zinc-700 p-5 flex items-center gap-3 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] transition-all hover:shadow-xl dark:hover:shadow-zinc-800/40"
            >
              <div className="text-2xl text-indigo-600 dark:text-indigo-400">{s.icon}</div>
              <div className="font-medium text-zinc-800 dark:text-zinc-100">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
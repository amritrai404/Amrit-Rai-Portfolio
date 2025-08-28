import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiGnubash,
  SiFigma,
  SiMongodb,
  SiFramer,  // Framer Motion icon
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Git / GitHub", icon: <SiGnubash /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "GSAP", icon: <SiJavascript /> },  // Use JavaScript icon for GSAP
];

export default function Skills() {
  return (
    <div className="section">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Skills
      </motion.h2>
      
      {/* Flex container */}
      <div className="flex flex-wrap gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-5 flex items-center gap-3 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)]"
          >
            <div className="text-2xl">{s.icon}</div>
            <div className="font-medium">{s.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

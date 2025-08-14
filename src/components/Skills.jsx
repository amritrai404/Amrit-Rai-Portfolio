import React from "react";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiGnubash, SiFigma, SiCss3 } from "react-icons/si";

const skills = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git / GitHub", icon: <SiGnubash /> },
  { name: "Figma", icon: <SiFigma /> },
];

export default function Skills() {
  return (
    <div className="section">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-8">
        Skills
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-5 flex items-center gap-3"
          >
            <div className="text-2xl">{s.icon}</div>
            <div className="font-medium">{s.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certs = [
  {
    title: "React.js Certification – Scaler Topics",
    link: "https://moonshot.scaler.com/s/sl/LKZAenjM2q?_gl=1*1m5qe8a*FPAU*MjIxMDY2MTcyLjE3NDQ5NjEwNDA.*_ga*MjAzMTc0NTcyNC4xNzQ0OTYxMDM4*_ga_53S71ZZG1X*MTc0NTIxNDkxNi41LjEuMTc0NTIxNjA3NC4wLjAuNDA3NDc0OTM0",
  },
  {
    title: "JavaScript Certification – GreatStack",
    link: "https://drive.google.com/file/d/1qKU3Tfmzwp4vAhZwACp9jVz5EWSrycg_/view?usp=sharing",
  },
];

export default function Certificates() {
  return (
    <div className="section p-3">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-8">
        Certificates
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.link}
            target="_blank"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-5 flex items-center justify-between"
          >
            <span className="font-medium">{c.title}</span>
            <FiExternalLink />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

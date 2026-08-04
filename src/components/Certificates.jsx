import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certs = [
  {
    title: "React.js Certification – Scaler",
    link: "https://moonshot.scaler.com/s/sl/LKZAenjM2q?_gl=1*1m5qe8a*FPAU*MjIxMDY2MTcyLjE3NDQ5NjEwNDA.*_ga*MjAzMTc0NTcyNC4xNzQ0OTYxMDM4*_ga_53S71ZZG1X*MTc0NTIxNDkxNi41LjEuMTc0NTIxNjA3NC4wLjAuNDA3NDc0OTM0",
  },
  {
    title: "JavaScript Fundamentals – GreatStack",
    link: "https://drive.google.com/file/d/1qKU3Tfmzwp4vAhZwACp9jVz5EWSrycg_/view?usp=sharing",
  },
  {
    title: "Data Analytics – Cisco Networking Academy",
    link: "https://www.linkedin.com/posts/amrit-rai-data-analyst_dataanalytics-sql-excel-activity-7300821830812991488-buUS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKjhd4Brl791716Ia4iGESvwwkZXLoCN3A",
  },
  {
    title: "Introduction to Python – Analytics Vidhya",
    link: "https://courses.analyticsvidhya.com/certificates/5d0xs7uv0u",
  },
  {
    title: "Figma Certification – Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MzcyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODg5OTgxNF85Mjg2OTEwMTc1NjgwNzYyMjE4Ni5wbmciLCJ1c2VybmFtZSI6IkFtcml0IFJhaSAifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7320%2FIntroduction%2520to%2520Figma%2520course%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1504081209273260174&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD%2FeyCMxyK3HJDk%2ByrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAKN2nI5BAAAA",
  },
  {
    title: "AI for Business – HP LIFE",
    link: "https://www.life-global.org/certificate/8aea8171-82e3-43ef-a6b1-f98051d5d5af",
  },
  {
    title: "Machine Learning using Python – Simplilearn",
    link: "https://drive.google.com/file/d/1aRO5iyGAqVBPshM1vmeuCnFSNUXXBWks/view?usp=drivesdk",
  },
  {
    title: "Global Fellowship Internship Completion",
    link: "https://drive.google.com/file/d/1oa3dAtb4XT4H3nf_lRcCZcOLtp1Xn0VY/view",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white"
        >
          Certificates
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg dark:shadow-zinc-800/30 border border-zinc-200 dark:border-zinc-700 p-5 flex items-center justify-between transition-all hover:shadow-xl dark:hover:shadow-zinc-800/40 hover:border-indigo-500/50 dark:hover:border-indigo-500/50"
            >
              <span className="font-medium text-zinc-800 dark:text-zinc-100">
                {c.title}
              </span>
              <FiExternalLink className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 ml-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
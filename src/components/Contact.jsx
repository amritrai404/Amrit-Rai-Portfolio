import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if at least 1 char in each field
    if (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.message.trim().length > 0
    ) {
      // Clear form to give "sent" feeling
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="section p-3">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 space-y-4"
        >
          {/* Resume Link */}
          <a
            className="flex items-center gap-3 hover:opacity-90"
            href="https://drive.google.com/file/d/1zOrsM7RAQsfh9FJN_BH44nc0UO0KKRtj/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Resume
          </a>

          {/* Gmail */}
          <a
            className="flex items-center gap-3 hover:opacity-90"
            href="mailto:amritrai1061@gmail.com"
          >
            <FiMail /> amritrai1061@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            className="flex items-center gap-3 hover:opacity-90"
            href="https://www.linkedin.com/in/amrit-rai-data-analyst"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin /> linkedin.com/in/amritrai
          </a>

          {/* GitHub */}
          <a
            className="flex items-center gap-3 hover:opacity-90"
            href="https://github.com/amritrai404"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> github.com/amritrai404
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+919696782522"
            className="flex items-center pl-0 gap-3 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300"
          >
            <FaPhoneAlt /> +91 96967 82522
          </a>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3"
              placeholder="Your name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3"
              placeholder="Your email"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3"
            placeholder="Message"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Send
          </button>
          <p className="text-xs text-zinc-500">
            Form is demo-only. Hook it with Formspree/EmailJS later.
          </p>
        </motion.form>
      </div>
    </div>
  );
}

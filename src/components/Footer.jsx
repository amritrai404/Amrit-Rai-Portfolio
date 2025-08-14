import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6">
      <div className="section flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <p>© {new Date().getFullYear()} Amrit Rai. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="hover:underline">Top</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

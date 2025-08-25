import React, { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <nav className="section h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">
          Amrit <span className="text-indigo-600">Rai</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            aria-label="Toggle theme"
          >
          
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
            aria-label="Toggle theme"
          >
           
          </button>
          <button onClick={() => setOpen(true)} className="p-2" aria-label="Open menu">
            <FiMenu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-zinc-950 p-4 border-l border-zinc-200 dark:border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
                <FiX />
              </button>
            </div>
            <div className="flex flex-col p-2 gap-4 bg-black">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 border-b hover:bg-amber-600 border-zinc-200/60 dark:border-zinc-800/60">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

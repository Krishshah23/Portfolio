"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitch } from "./ui/ThemeToggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "Observations", href: "#observations" },
  { label: "Stack", href: "#stack" },
  { label: "Signal", href: "#signal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-bg border-b border-border" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-14">
          <a href="#" className="text-[15px] font-semibold text-text tracking-tight">
            Krish Shah
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-1.5 text-[13px] text-text-secondary hover:text-text transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Krish_Shah_Resume.pdf"
              download
              className="ml-3 px-3.5 py-1.5 text-[12px] font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors"
            >
              Résumé
            </a>
            <span className="mx-2 h-4 w-px bg-border" />
            <ThemeSwitch />
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitch />
            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 text-text-secondary text-[13px] cursor-pointer"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-6"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="text-lg text-text"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="/Krish_Shah_Resume.pdf"
              download
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-2 px-5 py-2.5 text-[13px] font-medium text-white bg-accent rounded-md"
            >
              Download Résumé
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

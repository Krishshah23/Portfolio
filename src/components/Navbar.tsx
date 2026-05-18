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

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="text-[10px] font-mono text-text-muted tabular-nums">
      IST {time}
    </span>
  );
}

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
          scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-12">
          <a href="#" className="font-mono text-[13px] text-text tracking-tight">
            krish<span className="text-accent">.</span>shah
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-1.5 text-[12px] text-text-secondary hover:text-text transition-colors font-mono"
              >
                {l.label}
              </a>
            ))}
            <span className="mx-2 h-3 w-px bg-border" />
            <LiveClock />
            <span className="mx-2 h-3 w-px bg-border" />
            <ThemeSwitch />
            <span className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-live bg-live-dim border border-live/20">
              <span className="w-1.5 h-1.5 rounded-full bg-live pulse-live" />
              building
            </span>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitch />
            <button
              onClick={() => setOpen(!open)}
              className="p-1.5 text-text-secondary font-mono text-[12px] cursor-pointer"
            >
              {open ? "[close]" : "[menu]"}
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
            className="fixed inset-0 z-40 bg-bg/98 flex flex-col items-center justify-center gap-6"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="text-lg font-mono text-text"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="mt-4">
              <LiveClock />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

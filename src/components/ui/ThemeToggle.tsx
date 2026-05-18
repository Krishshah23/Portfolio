"use client";

import { useState, useEffect, createContext, useContext, type ReactNode } from "react";

type Theme = "midnight" | "terminal";

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "midnight",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeCtx);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("midnight");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    if (saved === "terminal") setTheme("terminal");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "midnight" ? "terminal" : "midnight"));

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function ThemeSwitch() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono text-text-muted hover:text-text-secondary border border-border hover:border-border-hover transition-all cursor-pointer"
      title={`Switch to ${theme === "midnight" ? "terminal" : "midnight"} mode`}
    >
      <span className={`w-1.5 h-1.5 rounded-full transition-colors ${theme === "midnight" ? "bg-accent" : "bg-live"}`} />
      {theme === "midnight" ? "midnight" : "terminal"}
    </button>
  );
}

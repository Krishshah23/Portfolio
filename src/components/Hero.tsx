"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(start);
    }, 30);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ── Deploy log entries ── */
const deployLog = [
  { time: "2m ago", text: "Poll auto-generated from RCB squad", tag: "crictalx" },
  { time: "14m ago", text: "Leaderboard rankings recalculated", tag: "crictalx" },
  { time: "1h ago", text: "Confidence scoring deployed to prod", tag: "crictalx" },
  { time: "3h ago", text: "Quiz battle matchmaking optimized", tag: "brainbrew" },
  { time: "5h ago", text: "Reward boost roulette v2 shipped", tag: "crictalx" },
  { time: "8h ago", text: "XP progression curve rebalanced", tag: "brainbrew" },
  { time: "12h ago", text: "Share card generator refactored", tag: "crictalx" },
  { time: "1d ago", text: "Analytics dashboard v2 released", tag: "crictalx" },
];

/* ── Typewriter hook ── */
function useTypewriter(lines: typeof deployLog, visible: boolean) {
  const [displayed, setDisplayed] = useState<{ time: string; text: string; tag: string; typed: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!visible) return;
    // Start typing after a short delay
    const startDelay = setTimeout(() => setIsTyping(true), 800);
    return () => clearTimeout(startDelay);
  }, [visible]);

  useEffect(() => {
    if (!isTyping || currentLine >= lines.length) return;

    const line = lines[currentLine];
    const fullText = `[${line.time}] ${line.text}`;

    if (currentChar < fullText.length) {
      // Type next character with variable speed
      const speed = 20 + Math.random() * 40;
      const id = setTimeout(() => {
        setDisplayed(prev => {
          const updated = [...prev];
          if (updated.length <= currentLine) {
            updated.push({ ...line, typed: fullText[0] });
          } else {
            updated[currentLine] = { ...line, typed: fullText.slice(0, currentChar + 1) };
          }
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, speed);
      return () => clearTimeout(id);
    } else {
      // Line complete, pause then move to next
      const id = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 600);
      return () => clearTimeout(id);
    }
  }, [isTyping, currentLine, currentChar, lines]);

  return { displayed, isComplete: currentLine >= lines.length };
}

/* ── System status ── */
const systems = [
  { name: "crictalx.kreesh.me", status: "live" as const, version: "v2.4", uptime: "47d", href: "https://crictalx.kreesh.me" },
  { name: "brainbrew.kreesh.me", status: "live" as const, version: "v1.2", uptime: "23d", href: "https://brainbrew.kreesh.me" },
  { name: "wanderlux.kreesh.me", status: "deployed" as const, version: "v1.0", uptime: "—", href: "https://wanderlux.kreesh.me" },
  { name: "spicegarden.kreesh.me", status: "deployed" as const, version: "v1.0", uptime: "—", href: "https://spicegarden.kreesh.me" },
];

/* ── Blinking cursor ── */
function Cursor() {
  return <span className="inline-block w-[7px] h-[14px] bg-accent ml-0.5 animate-cursor-blink align-middle" />;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const { displayed, isComplete } = useTypewriter(deployLog, inView);
  const [terminalText, setTerminalText] = useState("");
  const terminalFull = "currently shipping crictalx v2.4";

  // Terminal prompt typewriter at bottom
  useEffect(() => {
    if (!isComplete) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      if (i <= terminalFull.length) {
        setTerminalText(terminalFull.slice(0, i));
      } else {
        clearInterval(id);
      }
    }, 50);
    return () => clearInterval(id);
  }, [isComplete]);

  // Uptime counter
  const [uptimeSeconds, setUptimeSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setUptimeSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const formatUptime = useCallback((s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative dot-grid flex flex-col">
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050508_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 w-full flex-1 flex flex-col justify-center pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          {/* ── LEFT: Identity ── */}
          <div className="pt-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-live pulse-live" />
              <span className="text-[10px] font-mono text-text-muted tracking-[0.15em] uppercase">
                sys.status: online
              </span>
              <span className="text-[10px] font-mono text-text-muted/50 ml-1">
                uptime {formatUptime(uptimeSeconds)}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[clamp(3.2rem,7vw,5.5rem)] font-black leading-[0.9] tracking-[-0.05em] text-white mb-5"
            >
              Krish
              <br />
              Shah
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-[14px] text-text-secondary font-mono mb-6"
            >
              Product Engineer · Systems Builder
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="max-w-md mb-8"
            >
              <p className="text-[14px] text-text-secondary leading-[1.7]">
                Second-year CS student who learns by shipping real internet products.
                I build systems people actually use — prediction platforms, gamified learning,
                engagement engines. I obsess over{" "}
                <span className="text-text">user behavior</span>,{" "}
                <span className="text-text">product engagement</span>, and{" "}
                <span className="text-text">system architecture</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <a
                href="#work"
                className="text-[12px] font-mono text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
              >
                view systems <span className="text-text-muted">↓</span>
              </a>
              <a
                href="#signal"
                className="text-[12px] font-mono text-text-secondary hover:text-text transition-colors"
              >
                open channel →
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: System Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="panel p-0 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-live pulse-live" />
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                    Live Systems
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  {systems.filter((s) => s.status === "live").length}/{systems.length} online
                </span>
              </div>

              {/* System list */}
              <div className="p-3 space-y-1.5">
                {systems.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center justify-between px-2.5 py-2 rounded panel-inner hover:border-border-hover transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          s.status === "live" ? "bg-live pulse-live" : "bg-text-muted"
                        }`}
                      />
                      <span className="text-[11px] font-mono text-text truncate group-hover:text-accent transition-colors">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      {s.status === "live" && (
                        <span className="text-[9px] font-mono text-text-muted">{s.uptime}</span>
                      )}
                      <span className="text-[10px] font-mono text-text-muted">{s.version}</span>
                      <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Deploy log - typewriter */}
              <div className="px-3.5 py-2 border-b border-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                  Deploy Log
                </span>
                {!isComplete && (
                  <span className="text-[9px] font-mono text-live">streaming...</span>
                )}
              </div>
              <div className="h-[180px] overflow-hidden relative">
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg-elevated to-transparent z-10 pointer-events-none" />
                <div className="p-3 space-y-0.5 font-mono">
                  {displayed.map((entry, i) => (
                    <div key={i} className="flex items-start gap-0 py-0.5 px-1">
                      <span className="text-[10px] text-text-muted whitespace-pre">{`$ `}</span>
                      <span className="text-[10px] text-text-secondary leading-tight">
                        {entry.typed}
                        {i === displayed.length - 1 && !isComplete && <Cursor />}
                      </span>
                    </div>
                  ))}
                  {displayed.length === 0 && (
                    <div className="flex items-center gap-0 py-0.5 px-1">
                      <span className="text-[10px] font-mono text-text-muted">$ </span>
                      <Cursor />
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics footer */}
              <div className="border-t border-border px-3.5 py-2.5 grid grid-cols-3 gap-2">
                <div>
                  <div className="text-[10px] font-mono text-text-muted mb-0.5">Products</div>
                  <div className="text-[15px] font-semibold text-text">
                    <Counter target={4} />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-muted mb-0.5">Users</div>
                  <div className="text-[15px] font-semibold text-text">
                    <Counter target={3100} suffix="+" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-muted mb-0.5">Features</div>
                  <div className="text-[15px] font-semibold text-text">
                    <Counter target={47} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom: Terminal Prompt ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3">
          <div className="flex items-center gap-0 font-mono text-[12px]">
            <span className="text-text-muted">krish@kreesh.me</span>
            <span className="text-accent">:</span>
            <span className="text-text-muted">~</span>
            <span className="text-text-muted">$ </span>
            <span className="text-text-secondary ml-1">{terminalText}</span>
            {terminalText.length < terminalFull.length && <Cursor />}
            {terminalText.length >= terminalFull.length && (
              <span className="inline-block w-[7px] h-[14px] bg-accent/60 ml-0.5 animate-cursor-blink align-middle" />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

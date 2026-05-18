"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SR from "./ui/ScrollReveal";

function GithubIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>; }
function LinkedinIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
function InstagramIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>; }
function MailIcon() { return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>; }

const channels = [
  { icon: GithubIcon, label: "GitHub", handle: "@Krishshah23", href: "https://github.com/Krishshah23" },
  { icon: LinkedinIcon, label: "LinkedIn", handle: "Krish Shah", href: "https://www.linkedin.com/in/krish-shah-7461b8325" },
  { icon: InstagramIcon, label: "Instagram", handle: "@kreesh.me", href: "https://instagram.com/kreesh.me" },
  { icon: MailIcon, label: "Email", handle: "krish23076@gmail.com", href: "mailto:krish23076@gmail.com" },
];

const currently = [
  { label: "Reading", value: "\"Designing Data-Intensive Applications\"" },
  { label: "Building", value: "Crictalx 2.0 — scoring engine rewrite" },
  { label: "Exploring", value: "How ML can predict match outcomes from historical data" },
  { label: "Thinking", value: "Why streak mechanics create stronger retention than rewards" },
  { label: "Location", value: "Ahmedabad, India · GMT+5:30" },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Signal() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [terminalDone, setTerminalDone] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const signoff = 'echo "thanks for scrolling"';

  useEffect(() => {
    // Start terminal animation after a delay when section loads
    const timeout = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        if (i <= signoff.length) {
          setTerminalText(signoff.slice(0, i));
        } else {
          setTerminalDone(true);
          clearInterval(id);
        }
      }, 50);
      return () => clearInterval(id);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "66a38b50-a87d-4364-ab53-291c24dbb149",
          name: form.name,
          email: form.email,
          message: form.msg,
          from_name: "Portfolio Contact",
          subject: `Portfolio message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", msg: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="signal" className="pt-20 md:pt-28 pb-0">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* ── Currently ── */}
        <SR>
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em]">
              Signal
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </SR>

        <SR delay={0.05}>
          <div className="mb-16">
            <h2 className="text-[11px] font-mono text-accent uppercase tracking-wider mb-6">
              Currently
            </h2>
            <div className="space-y-3">
              {currently.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 font-mono text-[13px]">
                  <span className="text-text-muted w-24 shrink-0">{item.label}</span>
                  <span className="text-text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </SR>

        {/* ── Contact ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mb-16">
          <SR delay={0.08}>
            <div>
              <h2 className="text-[clamp(1.3rem,2.5vw,1.75rem)] font-bold tracking-[-0.03em] text-white mb-2">
                Say something
              </h2>
              <p className="text-[12px] text-text-muted font-mono mb-5">
                Project ideas, opportunities, or just systems talk.
              </p>
              <form onSubmit={send} className="space-y-2.5">
                <input
                  type="text" required placeholder="Name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-bg-elevated border border-border text-[12px] font-mono text-text placeholder:text-text-muted focus:outline-none focus:border-accent/30 transition-colors"
                />
                <input
                  type="email" required placeholder="Email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-bg-elevated border border-border text-[12px] font-mono text-text placeholder:text-text-muted focus:outline-none focus:border-accent/30 transition-colors"
                />
                <textarea
                  required rows={4} placeholder="Message" value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-bg-elevated border border-border text-[12px] font-mono text-text placeholder:text-text-muted focus:outline-none focus:border-accent/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2.5 rounded-md bg-accent text-white text-[12px] font-mono font-medium hover:bg-accent/85 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "idle" && "send_message()"}
                  {status === "sending" && "sending..."}
                  {status === "sent" && "✓ message sent"}
                  {status === "error" && "error — try again"}
                </button>
              </form>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 px-3 py-2 rounded-md bg-live-dim border border-live/20 text-[11px] font-mono text-live"
                  >
                    ✓ Message delivered — I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 px-3 py-2.5 rounded-md bg-red-500/10 border border-red-500/20 text-[11px] font-mono text-red-400"
                  >
                    Something went wrong. Try{" "}
                    <a href="mailto:krish23076@gmail.com" className="underline hover:text-red-300">
                      krish23076@gmail.com
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SR>

          {/* Channels */}
          <SR delay={0.12}>
            <div className="space-y-2">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-md bg-bg-elevated border border-border hover:border-border-hover transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-text-muted group-hover:text-accent transition-colors">
                      <c.icon />
                    </span>
                    <div>
                      <div className="text-[12px] font-mono text-text">{c.label}</div>
                      <div className="text-[10px] font-mono text-text-muted">{c.handle}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-text-muted group-hover:text-accent transition-colors">→</span>
                </a>
              ))}
              <div className="pt-2 text-[11px] font-mono text-text-muted">
                domain:{" "}
                <a href="https://kreesh.me" className="text-accent hover:underline">kreesh.me</a>
              </div>
            </div>
          </SR>
        </div>

        {/* ── Terminal sign-off ── */}
        <SR delay={0.15}>
          <div className="border-t border-border py-6 font-mono text-[12px]">
            <div className="flex items-center gap-0">
              <span className="text-text-muted">krish@kreesh.me</span>
              <span className="text-accent">:</span>
              <span className="text-text-muted">~</span>
              <span className="text-text-muted">$ </span>
              <span className="text-text-secondary ml-1">{terminalText}</span>
              {!terminalDone && (
                <span className="inline-block w-[7px] h-[14px] bg-accent ml-0.5 animate-cursor-blink align-middle" />
              )}
            </div>
            {terminalDone && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-text-secondary mt-1">thanks for scrolling</div>
                <div className="flex items-center gap-0 mt-1">
                  <span className="text-text-muted">krish@kreesh.me</span>
                  <span className="text-accent">:</span>
                  <span className="text-text-muted">~</span>
                  <span className="text-text-muted">$ </span>
                  <span className="inline-block w-[7px] h-[14px] bg-accent/60 ml-0.5 animate-cursor-blink align-middle" />
                </div>
              </motion.div>
            )}
          </div>
        </SR>
      </div>
    </section>
  );
}

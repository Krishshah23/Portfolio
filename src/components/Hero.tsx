"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const systems = [
  { name: "pathpilot.kreesh.me", href: "https://pathpilot.kreesh.me" },
  { name: "crictalx.kreesh.me", href: "https://crictalx.kreesh.me" },
  { name: "brainbrew.kreesh.me", href: "https://brainbrew.kreesh.me" },
  { name: "spicegarden.kreesh.me", href: "https://spicegarden.kreesh.me" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Identity ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[13px] font-medium text-accent mb-5"
            >
              Computer Science Student · Freelance Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex items-center gap-4 text-[clamp(2.75rem,7vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-text mb-7"
            >
              <span
                className="inline-block rounded-full overflow-hidden border border-border shrink-0"
                style={{ width: "1.15em", height: "1.15em" }}
              >
                <Image
                  src="/profile.webp"
                  alt="Krish Shah"
                  width={128}
                  height={128}
                  priority
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                />
              </span>
              Krish Shah
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="max-w-xl mb-10"
            >
              <p className="text-[17px] text-text-secondary leading-[1.7]">
                I&apos;m a third-year CS student, though most of what I actually know came from
                building outside of class rather than in it. Over the past year and a half I&apos;ve
                shipped several full products on my own — a fantasy cricket platform, a gamified
                study app, and most recently an AI career-readiness tool — while freelancing for
                other CS students who needed real software built. I like sitting with a few
                problems long enough to actually understand them: mostly{" "}
                <span className="text-text font-medium">how people use a product</span>, and{" "}
                <span className="text-text font-medium">how the system underneath holds up</span> once they do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="px-5 py-2.5 text-[13px] font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors"
              >
                View my work
              </a>
              <a
                href="#signal"
                className="px-5 py-2.5 text-[13px] font-medium text-text border border-border rounded-md hover:border-border-hover hover:bg-bg-elevated transition-colors"
              >
                Get in touch
              </a>
              <a
                href="/Krish_Shah_Resume.pdf"
                download
                className="px-5 py-2.5 text-[13px] font-medium text-text-secondary hover:text-text transition-colors"
              >
                Download résumé ↓
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Live Systems ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hidden lg:block"
          >
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <span className="text-[12px] font-medium text-text-muted uppercase tracking-wider">
                  Live Systems
                </span>
                <span className="text-[12px] text-text-muted">{systems.length}/{systems.length} online</span>
              </div>
              <div className="p-2">
                {systems.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-bg-hover transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                      <span className="text-[13px] text-text truncate group-hover:text-accent transition-colors">
                        {s.name}
                      </span>
                    </div>
                    <span className="text-[13px] text-text-muted group-hover:text-accent transition-colors shrink-0 ml-2">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

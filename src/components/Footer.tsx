"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border py-4">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <span className="text-[11px] font-mono text-text-muted">
          © {new Date().getFullYear()} krish.shah
        </span>
        <div className="flex items-center gap-4 text-[11px] font-mono">
          <a href="https://github.com/Krishshah23" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">github</a>
          <a href="https://www.linkedin.com/in/krish-shah-7461b8325" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">linkedin</a>
        </div>
      </div>
    </footer>
  );
}

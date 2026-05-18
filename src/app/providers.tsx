"use client";

import { ThemeProvider } from "@/components/ui/ThemeToggle";
import SmoothScroll from "@/components/ui/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll />
      {children}
    </ThemeProvider>
  );
}

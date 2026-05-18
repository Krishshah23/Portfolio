import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krish Shah — Product Engineer",
  description:
    "Systems-focused product engineer building real internet products. Full-stack developer specializing in gamification, engagement systems, and interactive platforms.",
  keywords: [
    "Krish Shah",
    "product engineer",
    "full stack developer",
    "systems builder",
    "gamification",
    "web developer",
  ],
  openGraph: {
    title: "Krish Shah — Product Engineer",
    description: "Building real internet products that people actually use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


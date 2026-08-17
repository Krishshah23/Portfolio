import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kreesh.me"),
  title: "Krish Shah — CS Student & Freelance Developer",
  description:
    "Third-year Computer Science student building real products — PathPilot AI, Crictalx, BrainBrew — and freelancing for CS students on the side.",
  keywords: [
    "Krish Shah",
    "computer science student",
    "freelance developer",
    "full stack developer",
    "web developer",
  ],
  openGraph: {
    title: "Krish Shah — CS Student & Freelance Developer",
    description: "Building real products, and freelancing for CS students along the way.",
    url: "https://kreesh.me",
    siteName: "Krish Shah",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Shah — CS Student & Freelance Developer",
    description: "Building real products, and freelancing for CS students along the way.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();",
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


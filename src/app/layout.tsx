import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

// ✅ Fonts from /src/data/font/font.ts
import { incognito, gitlabmono } from "@/font/font"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramesh Devkota",
  description: "Portfolio of Ramesh Devkota — Full Stack Developer, UI/UX Designer & Creator.",
  keywords: ["Ramesh Devkota", "Full Stack Developer", "Next.js Portfolio", "React", "TypeScript", "Tailwind"],
  authors: [{ name: "Ramesh Devkota", url: "https://ramesh.dev" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable} ${incognito.variable} ${gitlabmono.variable}
          bg-white text-zinc-900 dark:bg-black dark:text-white
          font-sans transition-colors duration-300
        `}
      >
        <ThemeProvider>
          <Navbar />

          {/* Optional decorative overlay (can be removed if unused) */}
          {/* <div className="gradient-overlay aura absolute top-0 w-full h-60 z-20 pointer-events-none" /> */}

          <main className="relative min-h-[90vh] px-4 sm:px-6 md:px-10 pt-6">
            <div className="relative z-10 max-w-4xl mx-auto">{children}</div>
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

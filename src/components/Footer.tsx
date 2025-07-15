"use client";

import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  ArrowUpIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const iconMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
};

const socialLinks = [
  {
    href: "https://github.com/Rawmace",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/ramesh-devkota",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://x.com/Rawhmace",
    label: "Twitter",
    icon: "twitter",
  },
];

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 bg-white px-6 pt-12 pb-8 text-sm leading-relaxed text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200 font-[var(--incognito)]">
            Ramesh Devkota
          </h2>
          <p className="mt-2">
            Web Developer specializing in modern full-stack apps.
            <br />
            Built with ❤️ using <strong>Next.js</strong> & <strong>Tailwind CSS</strong>.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200 font-[var(--incognito)]">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-1">
            {["about", "projects", "blog", "contact"].map((page) => (
              <li key={page}>
                <a
                  href={`/${page}`}
                  className="capitalize transition-colors hover:text-[var(--accent-color)]"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div>
          <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200 font-[var(--incognito)]">
            Connect
          </h3>
          <div className="mb-3 mt-2 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="transition text-zinc-600 hover:text-[var(--accent-color)] dark:text-zinc-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <a
            href="mailto:drhsemar@gmail.com"
            className="transition hover:text-[var(--accent-color)]"
          >
            drhsemar@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-600">
        © {new Date().getFullYear()} Ramesh Devkota. All rights reserved.
      </p>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full bg-zinc-100 p-2 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
        </button>
      )}
    </footer>
  );
};

export default Footer;

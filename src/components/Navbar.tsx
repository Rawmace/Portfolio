"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blogs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-white/70 dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold cursor-pointer dark:text-white text-zinc-800 transition-colors duration-300"
          >
            <div className="group">
              <h1 className="lg:text-2xl md:text-lg sm:text-sm font-semibold cursor-pointer dark:text-white text-zinc-700 transition-colors duration-300">
                <span className="block sm:hidden">RD</span>
                <span className="hidden sm:block">Ramesh Devkota</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "bg-zinc-100 dark:bg-zinc-800 text-[var(--accent-color)]"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"
                } transition-all duration-300`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2" />
            <ThemeToggle />
          </div>

          {/* Hamburger for Mobile */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6 text-zinc-800 dark:text-white" /> : <Menu className="w-6 h-6 text-zinc-800 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-2 sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "bg-zinc-100 dark:bg-zinc-800 text-[var(--accent-color)]"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"
                } transition-all duration-300`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

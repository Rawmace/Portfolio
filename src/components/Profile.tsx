import { Mail, Github, Linkedin } from "lucide-react";
import { incognito } from "../font/font";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const ProfileSection = ({ email = "drhsemar@gmail.com" }) => {
  const [_, setLetterClass] = useState("text-animate"); // Placeholder for future animation logic

  return (
    <section className={`flex flex-col gap-6 mt-6 ${incognito.variable}`}>
      {/* Profile Header */}
      <div className="flex items-start gap-6">
        {/* Profile Picture */}
        <div className="relative inline-block size-[70px] select-none">
          <div className="absolute inset-1">
            <Image
              src="/assets/images/profile.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="size-full rounded-full bg-muted-foreground/30 object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background dark:hidden"
            />
            <Image
              src="/assets/images/profile.jpg"
              alt="Profile Dark"
              width={80}
              height={80}
              className="hidden size-full rounded-full bg-muted-foreground object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background dark:block"
            />
          </div>
          <svg
            className="absolute inset-0 size-full rotate-[-90deg]"
            viewBox="0 0 100 100"
          >
            <circle
              className="stroke-emerald-500 dark:stroke-green-700"
              cx="80"
              cy="80"
              r=""
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="289.03"
              strokeDashoffset="289.03"
            />
          </svg>
        </div>

        {/* Name and CTA */}
        <div className="flex-1">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300">
            Hey, I&apos;m <br /> Ramesh Devkota
            <span className="inline-block waving-hand">👋</span>
          </h1>

          {/* Hire Me Button */}
          <a
            href={`mailto:${email}`}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1.5 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-green-600" />
            <div className="relative cursor-pointer overflow-hidden">
              <p className="group text-muted-foreground">
                <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1000 ease-slow">
                Reach me out
                  <span className="invisible h-0"> via email</span>
                </span>
                <span className="group-hover:-translate-y-full absolute top-full flex items-center transition-all duration-1000 ease-slow">
              Via Email
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 w-4 h-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
              </p>
            </div>
          </a>
        </div>

        {/* Social Icons & Resume */}
        <div className="hidden sm:flex sm:flex-col gap-4">
          <div className="flex gap-4">
            <a
              href={`mailto:${email}`}
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Rawmace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramesh-devkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <a
            href="/assets/CV/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white transition"
            aria-label="Resume"
          >
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              Resume
            </motion.div>
          </a>
        </div>
      </div>

      {/* Bio Summary */}
      <div className="text-xs sm:text-lg text-zinc-700 dark:text-zinc-300">
        <p>
          I&apos;m a Full Stack Developer with a passion for modern web development,
          focused on building responsive and intuitive applications using React,
          Next.js, Node.js, and more. I blend technical skills with creative
          problem-solving to build engaging digital experiences.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;


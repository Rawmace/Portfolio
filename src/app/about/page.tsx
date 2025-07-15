"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, Brain, Rocket } from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <motion.div
        className="space-y-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden dark:bg-zinc-900/50 bg-zinc-100/50 p-8 card-glow">
          <div className="relative hover-lift">
            <h1 className="text-4xl font-bold mb-4 text-gradient">About Me</h1>
            <p className="text-lg dark:text-zinc-300 text-zinc-700">
              A software engineering graduate with a lifelong fascination for
              technology, demonstrated through building full-stack web
              applications and exploring emerging technologies. Through personal
              projects and continuous learning, I&apos;m developing practical
              solutions that solve real-world problems.
            </p>
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              Icon: Code2,
              title: "Technical Foundation",
              description:
                "Built a strong foundation in computer science through hands-on experience with systems, working with various programming languages and modern frameworks in my projects.",
              color: "purple",
              delay: 0.2,
            },
            {
              Icon: BookOpen,
              title: "Education Path",
              description:
                "Recently graduated with a Software Engineering diploma, and actively learning through building projects and exploring new technologies.",
              color: "blue",
              delay: 0.3,
            },
            {
              Icon: Brain,
              title: "Project Experience",
              description:
                "Built full-stack apps like a Twitter clone, AI-powered blog CMS, eCommerce site, and real-time chat app using React, Next.js, Node.js, and MongoDB as my key milestones in my dev journey..",
              color: "green",
              delay: 0.4,
            },
            {
              Icon: Rocket,
              title: "Current Focus",
              description:
                "Working on personal projects while exploring modern development practices, from TypeScript and testing to cloud services and real-time features.",
              color: "yellow",
              delay: 0.5,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-lg dark:bg-zinc-900/50 bg-zinc-100/50 border dark:border-zinc-800 border-zinc-200 card-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <item.Icon className={`w-8 h-8 mb-4 text-${item.color}-500`} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="dark:text-zinc-400 text-zinc-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="p-8 rounded-xl dark:bg-zinc-900/50 bg-zinc-100/50 border dark:border-zinc-800 border-zinc-200 card-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gradient">
            My Philosophy
          </h2>
          <p className="dark:text-zinc-300 text-zinc-600 leading-relaxed">
            I believe in learning by doing and growing through challenges. My
            journey in technology has taught me that every project, whether
            successful or not, is a learning opportunity. I&apos;m committed to
            writing clean code, creating user-friendly applications, and
            constantly expanding my knowledge. While I&apos;m at the beginning
            of my professional journey, I bring fresh perspectives and a strong
            drive to contribute meaningfully to the tech community.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;

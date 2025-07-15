"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectsGrid = ({ showFeaturedOnly = false }) => {
  const displayedProjects = showFeaturedOnly
    ? projects.filter((project) => project.featured)
    : projects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-4">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My personal projects
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {showFeaturedOnly && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/projects"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsGrid;

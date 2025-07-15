"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Tv } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden rounded-2xl dark:bg-zinc-900/50 bg-zinc-100/50 hover:dark:bg-zinc-900/75 hover:bg-zinc-200/75 transition-all duration-300 group card-glow"
    >
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/70 transition-all duration-300 ease-out opacity-70 group-hover:scale-105"></div>
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-black/50 transition-opacity">
          <div className="relative flex flex-col gap-4 transform transition-all duration-300 group-hover:-translate-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
            </div>
            <p className="text-zinc-200 dark:text-zinc-300 mb-4 line-clamp-4 group-hover:line-clamp-none">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full text-sm hover:bg-black/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-white">
                    {typeof tech.icon === "function" ? tech.icon() : tech.icon}
                  </span>
                  <span className="text-zinc-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition p-2 hover:bg-black/30 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition p-2 hover:bg-black/30 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Tv size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

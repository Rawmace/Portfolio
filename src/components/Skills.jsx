import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: 90, color: "orange" },
    { name: "CSS", icon: <FaCss3Alt />, level: 85, color: "beige" },
    { name: "JavaScript", icon: <FaJs />, level: 80, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, level: 75, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, level: 70, color: "#339933" },
    { name: "MongoDB", icon: <FaDatabase />, level: 65, color: "pink" },
    { name: "Git", icon: <FaGitAlt />, level: 80, color: "red" },
    { name: "ASP.NET", icon: <SiDotnet />, level: 60, color: "aqua" },
    {
      name: "SQL",
      icon: <SiMicrosoftsqlserver />,
      level: 75,
      color: "white",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-bar-container">
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                style={{ backgroundColor: skill.color }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// src/components/Timeline.js
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaCode, FaWordpress, FaGraduationCap } from "react-icons/fa";

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    {
      date: "2022",
      title: "FullStack Developer",
      place: "Deerwalk.Inc, Kathmandu Nepal",
      description:
        "Led a team of developers in creating cutting-edge web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved overall team productivity by 30%.",
      icon: <FaCode />,
      color: "Aqua",
    },
    {
      date: "2020",
      title: "WordPress Developer",
      place: "Sathi Solutions,Kathmandu Nepal",
      description:
        "Developed and maintained over 20 WordPress sites for various clients. Customized themes, created plugins, and optimized site performance, resulting in a 40% increase in client satisfaction.",
      icon: <FaWordpress />,

      color: "Yellow",
    },
    {
      date: "2019",
      title: "Intern",
      place: "Deerwalk.Inc, Kathmandu Nepal",
      description:
        "Started my journey in web development. Learned the fundamentals of HTML, CSS, and JavaScript. Assisted in the development of sites for various clients and businesses gaining valuable real-world experience.",
      icon: <FaGraduationCap />,
      color: "Pink",
    },
  ];

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.1 },
    },
  };

  return (
    <VerticalTimeline lineColor="#ddd">
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.date}
          dateClassName="date"
          iconStyle={{ background: event.color, color: "#fff" }}
          icon={event.icon}
          contentStyle={{
            background: "transparent",
            boxShadow: "2px 2px  10px red",
            border: "1px solid white",
            borderRadius: "15px",
            padding: "2rem",
          }}
          contentArrowStyle={{ borderRight: `7px solid #f8f9fa` }}
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: event.color, marginBottom: "1rem" }}
            >
              {event.title}
            </h3>
            <p
              style={{
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                color: "white",
                lineHeight: "1.6",
                fontSize: "medium",
              }}
            >
              <h2
                style={{
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                  color: "aquamarine",
                  lineHeight: "1.6",
                  fontSize: "medium",
                }}
              >
                {event.place}
              </h2>
              {event.description}
            </p>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                style={{
                  marginTop: "1rem",

                  color: "yellow",
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                  fontStyle: "Bolder",
                  boxShadow: "0px 4px 5px aqua",
                  borderRadius: "2rem",
                }}
              >
                <p>Skills: React, Node.js, MongoDB, Git</p>
              </motion.div>
            )}
          </motion.div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;

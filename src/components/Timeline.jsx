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
      date: "2022-2023",
      title: "FullStack Developer",
      place: "Deerwalk.Inc, Kathmandu Nepal",
      description:
        "Led a team of developers in creating cutting-edge web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved overall team productivity by 30%.",
      skills: "SKills: React, Node.js, MongoDB, Git,Kanban",
      icon: <FaCode />,
      color: "Aqua",
    },
    {
      date: "2021-2022",
      title: "Intern",
      place: "Deerwalk.Inc, Kathmandu Nepal",
      description:
        "Started my journey in web development. Learned the fundamentals of HTML, CSS, and JavaScript. Assisted in the development of sites for various clients and businesses gaining valuable real-world experience.",
      icon: <FaGraduationCap />,
      skills: "SKills: React, Node.js, MongoDB, Git",
      color: "Pink",
    },
    {
      date: "2019-2020",
      title: "Digital Marketing Specialist",
      place: "Digital Terai, Kathmandu, Nepal",
      description:
        "Drove digital marketing strategies, boosting SEO and social media engagement. Increased client engagement by 40% and improved search rankings for 20+ websites. Enhanced PPC campaigns and web designs, achieving a 25% rise in conversions.",
      skills: "SKills: SEO, Social Media Marketing, Web Design, PPC",
      icon: <FaWordpress />,

      color: "Yellow",
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
                  maxWidth: "fit-content",
                  padding: "1em",
                }}
              >
                <p>{event.skills}</p>
              </motion.div>
            )}
          </motion.div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;

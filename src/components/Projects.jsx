import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Gurkha Gears",
      description:
        " It is my first project as a developer: An virtual e-commerce website for a Clothing brand named Gurkha Gears in Nepal, Kathmandu done as college project",
      link: "https://gurkha-gears.vercel.app/",
      color: "yellow",
    },
    {
      title: "Muncha.Com",
      description:
        "A fully functional  Ecommerce site for a gift and grocery store with delivery system.",
      link: "https://muncha.com/",
      color: "Aqua",
    },
    {
      title: "Khutruke - Online Savings Platform",
      description:
        "Developed and launched Nepal's pioneering online savings platform, tansforming a local savings group into a nationwide digital solution.",
      link: "https://khutruke.org.np/",
      color: "Pink",
    },
  ];

  const buttonStyle = {
    backgroundColor: "black",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "medium",
    color: "yellow",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "color 0.2s ease",
  };

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="projects" className="projects">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              background: "transparent",
              boxShadow: "0px 0px  15px green",
              border: "1px solid pink",
              borderRadius: "15px",
              margin: "1.5rem",
              padding: "1rem",
              maxWidth: "350px",
            }}
          >
            <h3 style={{ color: project.color }}>{project.title}</h3>
            <p style={{ fontFamily: "Roboto", fontSize: "1rem" }}>
              {project.description}
            </p>
            <button
              style={buttonStyle}
              onClick={() => handleClick(project.link)}
              onMouseDown={(e) => (e.target.style.color = "green")}
              onMouseUp={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) => (e.target.style.color = "aquamarine")}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

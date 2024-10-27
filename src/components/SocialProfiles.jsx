import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import tooltip styles
import "./SocialProfiles.css";

const SocialProfiles = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ramesh-devkota-b9342723a/",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Rawmace",
      icon: "fab fa-github",
    },
    {
      name: "Twitter",
      url: "https://x.com/Rawhmace",
      icon: "fab fa-twitter",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mace_raw/",
      icon: "fab fa-instagram",
    },
  ];

  return (
    <div className="social-profiles">
      <ul className="social-links">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`Visit my ${link.name}`}
              data-tooltip-id={`tooltip-${index}`}
              data-tooltip-content={`Visit my ${link.name}`}
            >
              <i className={link.icon}></i>
              <span className="social-name">{link.name}</span>
            </a>
            <Tooltip id={`tooltip-${index}`} place="top" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialProfiles;

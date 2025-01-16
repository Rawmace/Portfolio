import React from "react";
import backgroundImage from "../assets/b1.jpg"; // Import your image

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section id="home" className="hero" style={heroStyle}>
      <h1>Ramesh Devkota</h1>
      <h2>Full Stack Developer and Digital Creator</h2>
      <a href="tel:+4373760407" className="cta-button">
        Get in Touch
      </a>
    </section>
  );
};

export default Hero;

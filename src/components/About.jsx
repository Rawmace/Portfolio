import React from "react";
import { Color } from "three";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm{" "}
        <strong
          style={{
            backgroundColor: "black",
            color: "Yellow",
            fontSize: "xx-large",
          }}
        >
          Ramesh Devkota(Rawmace)
        </strong>
        , a skilled full stack developer with expertise in{" "}
        <strong
          style={{
            backgroundColor: "black",
            color: "aquamarine",
            fontSize: "x-large",
          }}
        >
          Web application development,cloud technologies and deployment
          strategies.
        </strong>
        I specialize in creating dynamic, scalable applications that seamlessly
        integrate{" "}
        <b
          style={{
            color: "Pink",
            fontSize: "x-large",
            backgroundColor: "black",
          }}
        >
          front-end and back-end systems
        </b>
        , ensuring smooth deployment and management in cloud environments for
        optimal performance and user satisfaction.
      </p>
    </section>
  );
};

export default About;

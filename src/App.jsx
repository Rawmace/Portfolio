// src/App.jsx
import React from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillsChart from "./components/SkillsChart";
import Projects from "./components/Projects";

import Timeline from "./components/Timeline";
import LiveCodeEditor from "./components/LiveCodeEditor";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background3D from "./components/Background3D";
// import BlogPost from "./components/BlogPost";
import "./styles.css";
import SocialProfiles from "./components/SocialProfiles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaAlignCenter } from "react-icons/fa";
function AppContent() {
  const { isDarkMode } = useTheme();

  // // Sample blog post data
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "IS AI Curse Or Blessing??",
  //     date: "2024-10-21",
  //     author: "Ramesh Devkota",
  //     content: "Blogs are underway. Coming soon!!! ",
  //   },
  // ];

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Background3D />

      <Header />
      <main>
        <SocialProfiles />
        <Hero />

        <SkillsChart />
        <About />
        <section id="skills">
          <h2>My Skills</h2>
          <Skills />
        </section>
        {/* <section id="blogs">
          <h2>Blogs</h2>
          {blogPosts.map((post) => (
            <BlogPost
              title={post.title}
              key={post.id}
              date={post.date}
              author={post.author}
              content={post.content}
            />
          ))}
        </section> */}

        <section id="projects">
          <h2>My Projects</h2>
          <Projects />
        </section>
        <section id="experience">
          <h2>My Experience</h2>
          <Timeline />
        </section>
        <section
          id="code-sample"
          style={{
            alignItems: "center",
            margin: "40px",
            fontSize: "20px",
          }}
        >
          <h2>Live Code Editor</h2>
          <LiveCodeEditor />
        </section>
        <Contact />
      </main>
      <SocialProfiles />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

// src/App.jsx
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SocialProfiles from "./components/SocialProfiles";
import Footer from "./components/Footer";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Lazy load components
const Projects = lazy(() => import("./components/Projects"));
const Timeline = lazy(() => import("./components/Timeline"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="skills">
          <h2>My Skills</h2>
          <Skills />
        </section>

        <Suspense fallback={<div>Loading projects...</div>}>
          <section id="projects">
            <h2>My Projects</h2>
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading experience...</div>}>
          <section id="experience">
            <h2>My Experience</h2>
            <Timeline />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading contact form...</div>}>
          <Contact />
        </Suspense>
      </main>

      <SocialProfiles />
      <Footer />
    </>
  );
}

export default App;

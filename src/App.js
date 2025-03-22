import React from "react";
import Headermain from "./components/Headermain";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="resume-container">
      <Headermain />
      <Contact />
      <div className="content">
        <div className="left-section">
          <Experience />
          <Education />
        </div>
        <div className="right-section">
          <Skills />
          <Projects />
          <Certificates />
          <Languages />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

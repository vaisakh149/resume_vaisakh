import React from "react";

const Projects = () => {
  const projects = [
    { name: "HMI Development", desc: "Developed an HMI application for oil & gas automation using React and Node.js." },
    { name: "Flywheel", desc: "Built data management solutions for imaging research and machine learning." },
    { name: "Water Efficient Thrissur", desc: "Developed a React-based module for smart water distribution." }
  ];

  return (
    <section>
      <h2>Major Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;

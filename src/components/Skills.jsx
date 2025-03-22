import React from "react";

const Skills = () => {
  const skills = ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Node.js", "MongoDB", "SQL", "Agile", "Scrum"];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;

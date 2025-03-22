import React from "react";

const Education = () => {
  const education = [
    { degree: "PG Diploma in IoT and AI Industry 4.0", school: "NIELIT, Calicut", duration: "06/2018 - 02/2019" },
    { degree: "B.Tech in Computer Science and Engineering", school: "School of Engineering, CUSAT", duration: "06/2014 - 06/2018" }
  ];

  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.school} | {edu.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;

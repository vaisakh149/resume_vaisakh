import React from "react";

const Certificates = () => {
  const certs = [
    { name: "Certified Scrum Master", issuer: "Scrum Alliance", duration: "06/2023 - 06/2025" },
    { name: "Full Stack Developer", issuer: "Edureka", duration: "09/2021 - Present" }
  ];

  return (
    <section>
      <h2>Certificates</h2>
      {certs.map((cert, index) => (
        <div key={index}>
          <h3>{cert.name}</h3>
          <p>{cert.issuer} | {cert.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default Certificates;

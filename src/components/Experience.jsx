import React from "react";

const Experience = () => {
  const jobs = [
    { role: "Senior Engineer", company: "Tata Elxsi", duration: "04/2022 - Present" },
    { role: "Software Engineer", company: "Trenser Technology Solutions (P) Ltd.", duration: "04/2022 - Present" },
    { role: "Infrastructure Engineer IoT", company: "UL Technology Solutions", duration: "08/2019 - 04/2022" },
    { role: "Squad Executive (Part time)", company: "Talrop Technologies Pvt Ltd.", duration: "03/2017 - 03/2018" }
  ];

  return (
    <section>
      <h2>Work Experience</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.role}</h3>
          <p>{job.company} | {job.duration}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;

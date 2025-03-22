import React from "react";

const Languages = () => {
  const languages = ["English (80%)", "Malayalam (100%)"];

  return (
    <section>
      <h2>Languages</h2>
      <ul>
        {languages.map((lang, index) => <li key={index}>{lang}</li>)}
      </ul>
    </section>
  );
};

export default Languages;

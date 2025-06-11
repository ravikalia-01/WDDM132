import React from "react";

function Section({ title, content }) {
  return (
    <div className="resume-section">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Section;

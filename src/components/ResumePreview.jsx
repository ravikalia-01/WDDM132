import React from "react";
import Section from "./Section";
import "./resume.css"; // Import your CSS styles

function ResumePreview({ data }) {
  return (
    <div className="resume-preview">
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>

      <Section title="Education" content={data.education} />
      <Section title="Experience" content={data.experience} />
      <Section title="Skills" content={data.skills} />

      <img
        src="https://via.placeholder.com/400x200"
        alt="Resume screenshot preview"
        className="screenshot"
      />
    </div>
  );
}

export default ResumePreview;

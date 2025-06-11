import React, { useState } from "react";
import ResumePreview from "./ResumePreview";
import Modal from "./Modal"; // Import Modal Component
import "./resume.css"; // Import your CSS styles

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: ""
  });

  const [showPreview, setShowPreview] = useState(false); // State for showing preview

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handlePreview = () => {
    setShowPreview(true); // Show the preview modal
  };

  const closePreview = () => {
    setShowPreview(false); // Close the preview modal
  };

  return (
    <div className="resume-builder">
      <h1>Resume Builder</h1>
      <form className="resume-form">
        {Object.keys(resumeData).map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label><br />
            <input
              type="text"
              name={field}
              value={resumeData[field]}
              onChange={handleChange}
            />
            <br /><br />
          </div>
        ))}
      </form>

      <button onClick={handlePreview}>Preview</button> {/* Preview Button */}

      {showPreview && (
        <Modal onClose={closePreview}> {/* Show Modal on Preview button click */}
          <ResumePreview data={resumeData} />
        </Modal>
      )}
    </div>
  );
}

export default ResumeBuilder;

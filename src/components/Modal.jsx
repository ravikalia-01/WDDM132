import React from "react";
import "./Modal.css"; // Optional: We'll use this for styling

function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;

import React from "react";
import "../styles/Modal.css";

const Modal = ({ title, isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;

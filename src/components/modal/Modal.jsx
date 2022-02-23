import React from 'react';
import './modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>email y password invalidos</h2>
        <button className="modal-btn" onClick={() => closeModal(false)}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;

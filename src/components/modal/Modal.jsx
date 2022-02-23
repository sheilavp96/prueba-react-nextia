import React from 'react';
import './modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <p className="modal-text">
          Email o contraseña invalidos por favor intente nuevamente
        </p>
        <button className="modal-btn" onClick={() => closeModal(false)}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;

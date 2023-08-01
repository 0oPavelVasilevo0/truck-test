import React from 'react';
import './styles_modal.css';

const Modal = ({ active, setActive, children }) => {
  const closeModal = () => {
    setActive(false);
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={closeModal}>
      <div className={active ? "modal_content active" : "modal_content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal
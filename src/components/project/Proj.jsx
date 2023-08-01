import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import './style-proj.css'
import Project from '../../pages/Project';
import Modal from '../Modal/Modal';
import { t } from 'i18next';
import { FaWindowClose } from 'react-icons/fa';

const Proj = ({ project }) => {
  const [modalActive, setModalActive] = useState(false);


  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <li className="project">
          {project.img}
          <h3 className="project__title">{t(project.title)}</h3>
        </li>
      </div>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <button className='window_close' onClick={closeModal}>
            <FaWindowClose className='icon_close' />
          </button>
          <Project projectData={project} />
        </Modal>
      )}
    </>
  );
};

export default Proj
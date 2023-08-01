import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import './style-proj.css'
import Project from '../../pages/Project';
import Modal from '../Modal/Modal';
import { t } from 'i18next';
import { FaWindowClose } from 'react-icons/fa';

// const Proj = ({ title, img, index }) => {
//   return (
//     // <NavLink to={`/project/${index}`}>
//       <li className="project">
//         {/* <img src={img} alt={title} className="project__img" /> */}
//         {/* <p className="project__img">{img}</p> */}
//         {img}
//         <h3 className="project__title">{title}</h3>
//       </li>
//     // </NavLink>
//   )
// }
const Proj = ({ project }) => {
  const [modalActive, setModalActive] = useState(false);


  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  // const handleCardClick = () => {
  //   setModalActive(true);
  // };

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <li className="project">
          {project.img}
        <h3 className="project__title">{t(project.title)}</h3>
        {/* <img src={project.img} alt={project.title} /> */}
        </li>
      </div>

      {/* The modal will be displayed when modalActive is true */}
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <button className='window_close' onClick={closeModal}>
            <FaWindowClose className='icon_close'/>
          </button>
          {/* The content you want to display in the modal goes here */}
          {/* <h2>{project.title}</h2>
          <img src={project.img} alt={project.title} /> */}
          {/* Add any additional project details or description here */}
          {/* You can also render the <Project /> component here */}
          <Project projectData={project} />
          
        </Modal>
      )}
    </>
  );
};

export default Proj
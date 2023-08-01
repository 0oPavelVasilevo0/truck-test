import React, { useState } from 'react';
import "./styles_btn_photo.css";
import Modal from '../Modal/Modal';
// import photo from './2023-07-10 15.06.23.jpg';
// import Project from '../../pages/Project';
import ProjectFive from '../projects/ProjectFive';
import { projects } from '../../helpers/projectsList';
import { useTranslation } from 'react-i18next';
import Proj from '../project/Proj';


const BtnPhoto = () => {

  const { t } = useTranslation()  
    const [modalActive, setModalActive] = useState(false)
  return (
    <>
      {/* <a href="#!" className="btn_photo"></a> */}
          {/* <button className="btn_photo" title='Сlick to enlarge' onClick={() => setModalActive(true)} ></button> */}
      <button className="btn_photo" title='Сlick to enlarge' onClick={() => setModalActive(true)} ><ul className="projects">
        {projects.map((project, index) => {
          return (
            <Proj
              key={project.id}
              title={t(project.title)}
              img={project.img}
              index={index}
            />
          )
        })}
      </ul></button>
      {/*  <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Proj
                                key={project.id}
                                title={t(project.title)}
                                img={project.img}
                                index={index}
                            />
                        )
                    })}
                </ul> */}
          <Modal active={modalActive} setActive={setModalActive}>
            {/* <img src={photo} style={{borderRadius: 20}} alt=''></img> */}
            <ProjectFive />
          </Modal>

      </>
  )
}

export default BtnPhoto
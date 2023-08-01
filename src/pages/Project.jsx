import React from 'react';
// import { useParams } from 'react-router-dom';
// import { projects } from '../helpers/projectsList';
import { useTranslation } from 'react-i18next';

// const Project = () => {
//     const { id } = useParams();
//     const { t } = useTranslation();
//     const project = projects[id];

//     return (
//         <main className="section">
//             <div className="container">
//                 <div className="project-details">
//                     <h1 className="title-1">{t(project.title)}</h1>
//                     {project.carusel}
//                     {/* {project.gitHubLink && (<BtnGitHub link="https://gitHub.com" />)} */}
//                     {project.imgBig && (<img src={project.imgBig} alt="{project.title}" className="project-details__cover" />)}
//                     <div className="project-details__desc">
//                         <p>{project.skills}</p>
//                         {project.description}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

const Project = ({ projectData }) => {
    // const { id } = useParams();
    const { t } = useTranslation();
    // const project = projects[id];
    // Use the projectData prop to display information about the selected project
    return (
        // <div className="container">
        <div className="project-details">
       
            <h3 className="title-3">{t(projectData.title)}</h3>
            {projectData.carusel}
            <div className="project-details__desc">
                       <p>{projectData.skills}</p>
                        {projectData.description}
                     </div>
            {/* Add other project details as needed */}
           
         </div>
        // </div>
    );
};

export default Project  
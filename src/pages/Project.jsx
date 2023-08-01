import React from 'react';
import { useTranslation } from 'react-i18next';

const Project = ({ projectData }) => {
    const { t } = useTranslation();
    return (
        <div className="project-details">

            <h3 className="title-3">{t(projectData.title)}</h3>
            {projectData.carusel}
            <div className="project-details__desc">
                <p>{projectData.skills}</p>
                {projectData.description}
            </div>
        </div>
    );
};

export default Project  
import React from 'react';
import Proj from '../components/project/Proj';
import { projects } from '../helpers/projectsList';
import { useTranslation } from 'react-i18next';

const Projects = () => {

    const { t } = useTranslation()

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">{t('repair_title')}</h2>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Proj
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default Projects
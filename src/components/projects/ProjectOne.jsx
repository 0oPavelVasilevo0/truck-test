import React from 'react';
import './projects_style.css';
import { useTranslation } from 'react-i18next';

const ProjectOne = () => {

    const { t } = useTranslation();

    return (
        <div className='project_01'>
            <div className='list-project'>
                <ol>
                    <ul className='list_project_ul'>
                        <li>{t('projects.one.engine')}</li>
                        <li>{t('projects.one.hood')}</li>
                        <li>{t('projects.one.brake')}</li>
                        <li>{t('projects.one.steering')}</li>
                        <li>{t('projects.one.transmission')}</li>
                        <li>{t('projects.one.gearbox')}</li>
                        <li>{t('projects.one.electrical')}</li>
                        <li>{t('projects.one.pneumatic')}</li>
                    </ul>
                </ol>
            </div>
        </div>
    )
}

export default ProjectOne
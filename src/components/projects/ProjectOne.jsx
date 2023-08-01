import React from 'react';
import './projects_style.css';

const ProjectOne = () => {
    return (
        <div className='project_01'>
            <div className='list-project'>
                <ol>
                    <ul className='list_project_ul'>
                        <li>Ремонт двигателя</li>
                        <li>Ремонт ходовки</li>
                        <li>Тормозная система</li>
                        <li>Ремонт рулевой сиситемы</li>
                        <li>Ремонт КПП</li>
                        <li>Ремонт редуктора</li>
                        <li>Ремонт электрики</li>
                        <li>Ремонт пневмосистем</li>
                    </ul>
                </ol>
            </div>
        </div>
    )
}

export default ProjectOne
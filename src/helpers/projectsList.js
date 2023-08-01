import ProjectOne from '../components/projects/ProjectOne';
import CaruselInfoOne from '../components/carusel/CaruselInfoOne';
import { GiHandTruck, GiMechanicGarage, GiTowTruck, GiTruck } from 'react-icons/gi';
import { RiOilFill } from 'react-icons/ri'
import './projectsImg.css';
import { FaTrailer } from 'react-icons/fa';
import ProjectTwo from '../components/projects/ProjectTwo';
import ProjectThree from '../components/projects/ProjectThree';
import ProjectFour from '../components/projects/ProjectFour';
import ProjectFive from '../components/projects/ProjectFive';

const projects = [

  { 
    id: '1',
    title: 'projects.title.engine', 
    description: <ProjectOne/>,
    img: <GiTruck className='project__img' />,
  },
  {
    id: '2',
    title:  'projects.title.suspension', 
    description: <ProjectTwo />,
    img: <FaTrailer className='project__img' />
  },
  {
    id: '3',
    title: 'projects.title.transmission',
    description: <ProjectThree />,
    img: <GiTowTruck className='project__img' />,
  },
  {
    id: '4',
    title: 'projects.title.brake_system',
    description: <ProjectFour />,
    img: <GiHandTruck className='project__img' />
  },
  {
    id: '5',
    title: 'projects.title.maintenance',
    description: <ProjectFive />,
    img: <RiOilFill className='project__img' />, 
  },
  {
    id: '6',
    title: 'projects.title.other',
    carusel: <CaruselInfoOne />,
    img: <GiMechanicGarage className='project__img' />
  }
]


export {projects};
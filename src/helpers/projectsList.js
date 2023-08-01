// import project01 from './../img/projects/repair.png';
// import project01Big from './../img/projects/engine.png';
// import project02 from './../img/projects/dvs1.png';
// import project02Big from './../img/projects/suspension.png';
// import project03 from './../img/projects/assembly.png';
// import project03Big from './../img/projects/Transmission.png';
// import project04 from './../img/projects/spare.png';
// import project04Big from './../img/projects/break.png';
// import project05 from './../img/projects/TO.png';
// import project05Big from './../img/projects/oilchange.png';
// import project06 from './../img/projects/work.png';
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
// import BtnPhoto from '../components/btnPhoto/BtnPhoto';

const projects = [

  { 
    id: '1',
    title: 'projects.title.engine', 
    description: <ProjectOne/>,
    // carusel: <CaruselInfoOne />,
    // skills: <GiTruck style={{ width: 100 }} />,
    img: <GiTruck className='project__img' />,
    // imgBig: project01Big,
   
  },
  {
    id: '2',
    title:  'projects.title.suspension', 
    description: <ProjectTwo />,
    // skills: 'Описание',
    img: <FaTrailer className='project__img' />,
    // imgBig: project02Big,
   
  },
  {
    id: '3',
    title: 'projects.title.transmission',
    // skills: 'Описание',
    description: <ProjectThree />,
    img: <GiTowTruck className='project__img' />,
    // imgBig: project03Big,
  
  },
  {
    id: '4',
    title: 'projects.title.brake_system',
    // skills: 'Описание',
    description: <ProjectFour />,
    img: <GiHandTruck className='project__img' />,
    // imgBig: project04Big,
    
  },
  {
    id: '5',
    title: 'projects.title.maintenance',
    // skills: 'Описание',
    description: <ProjectFive />,
    img: <RiOilFill className='project__img' />,
    // imgBig: project05Big,
    
  },
  {
    id: '6',
    title: 'projects.title.other',
    carusel: <CaruselInfoOne />,
    // skills: 'Описание',
    img: <GiMechanicGarage className='project__img' />
    // imgBig: project06Big,
    
  },
  // {
  //   id: '6',
  //   title: 'projects.title.other',
  //   carusel: <CaruselInfoOne />,
  //   // skills: 'Описание',
  //   img: <BtnPhoto />
  //   // imgBig: project06Big,

  // }

]


export {projects};
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import "./styles_Navbar.css";
import ChangeLang from '../ChangeLang/ChangeLang';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

// const Navbar = () => {

//     const activeLink = 'nav-list__link nav-list__link--active';
//     const normalLink = 'nav-list__link';
//     const { t } = useTranslation();

//     return (
//         <nav className="nav">
//             <div className="container">
//                 <div className="nav-row">
//                     <NavLink to="/" className="logo"><strong>{t('navbar_title')}</strong> {t('navbar_title/')}</NavLink>
//                     <BtnDarkMode />
//                     <ChangeLang />
//                     <ul className="nav-list">
//                         <li className="nav-list__item">
//                             <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list1')}</NavLink>
//                         </li>
//                         <li className="nav-list__item">
//                             <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list2')}</NavLink>
//                         </li>
//                         <li className="nav-list__item">
//                             <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list3')}</NavLink>
//                         </li>
//                     </ul>

//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


const Navbar = () => {

    const { t } = useTranslation();

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    const [isOpen, setOpen] = useState();

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <div className="navbar">
            <span className="navbar__logo">
                <NavLink to="/" className="logo"><strong>{t('navbar_title')}</strong> {t('navbar_title/')}</NavLink>
            </span>
            <nav className={`navbar__nav ${isOpen ? "active" : ""}`}>
                <ul className="navbar__nav-list">
                    <li className="navbar__nav-item">
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list1')}</NavLink>
                    </li>
                    <li className="navbar__nav-item">
                        <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list2')}</NavLink>
                    </li >
                    <li className="navbar__nav-item">
                        <NavLink to="/contacts" onClick={closeMenu} className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list3')}</NavLink>
                    </li >
                    <li className="navbar__nav-item">
                        <ChangeLang />
                    </li >
                    <li className="navbar__nav-item">
                        <BtnDarkMode />
                    </li>
                </ul >
            </nav >
            <button className='navbar__menu-button' onClick={toggleMenu}>
                {isOpen ? (
                    <FaRegWindowClose className='button-icon' />
                ) : (
                    <GiHamburgerMenu className='button-icon' />
                )}
            </button>
        </div>
    )
}

export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import "./styles_Navbar.css";
import ChangeLang from '../ChangeLang/ChangeLang';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    const { t } = useTranslation();

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo"><strong>{t('navbar_title')}</strong> {t('navbar_title/')}</NavLink>
                    {/* <NavLink to="/" className="logo">Ремонт грузовиков Тольятти</NavLink> */}
                    <BtnDarkMode />
                    <ChangeLang />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list1')}</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list2')}</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>{t('navbar_list3')}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
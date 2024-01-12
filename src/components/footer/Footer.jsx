import React from 'react';
import "./styles_Footer.css";
import { FaTelegram, FaViber, FaVk, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const activeLink = 'reviews__menu-button reviews__menu-button--active';
    const normalLink = 'reviews__menu-button';

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <NavLink  className={({ isActive }) => isActive ? activeLink : normalLink} to='/reviews'>отзывы</NavLink>
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/v.danileichyk"><FaVk className="social_icon" /></a></li>
                        <li className="social__item"><a href="https://t.me/+79963421022"><FaTelegram className="social_icon" /></a></li>
                        <li className="social__item"><a href="https://wa.me/+79963421022"><FaWhatsapp className="social_icon" /></a></li>
                        <li className="social__item"><a href="viber://chat?number=%2B79963421022"><FaViber className="social_icon" /></a></li>
                    </ul>
                    {/* <div className="copyright">
                        <p>© 2023 pawasil</p>
                    </div> */}      
                </div>
            </div>
        </footer>
    )
}

export default Footer
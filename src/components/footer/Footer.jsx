import React from 'react';
import "./styles_Footer.css";
import { FaTelegram, FaViber, FaVk, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/v.danileichyk"><FaVk className="social_icon" /></a></li>
                        <li className="social__item"><a href="https://t.me/+79963421022"><FaTelegram className="social_icon" /></a></li>
                        <li className="social__item"><a href="https://wa.me/+79963421022"><FaWhatsapp className="social_icon" /></a></li>
                        <li className="social__item"><a href="https://chats.viber.com/%2B79963421022"><FaViber className="social_icon" /></a></li>
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
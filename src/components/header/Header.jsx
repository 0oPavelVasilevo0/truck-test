import React from 'react';
import "./styles_Header.css";
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>{t('title_header')}</strong>
                    <br />
                </h1>
                <div className="header__text">
                    <p>{t('header_text')}</p>
                </div>
            </div>
        </header>
    )
}
export default Header
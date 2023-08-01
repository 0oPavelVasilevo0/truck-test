import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './changeLang.css';

const ChangeLang = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setSelectedLang(language);
    };

    return (
        <div className="btn_lang">
            <button
                className={`lang ${selectedLang === 'ru' ? 'selected' : ''}`}
                onClick={() => changeLanguage('ru')}
            >
                RU
            </button>
            <button
                className={`lang ${selectedLang === 'en' ? 'selected' : ''}`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <button
                className={`lang ${selectedLang === 'tr' ? 'selected' : ''}`}
                onClick={() => changeLanguage('tr')}
            >
                TR
            </button>
        </div>
    );
};

export default ChangeLang;

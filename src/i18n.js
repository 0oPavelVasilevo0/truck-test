import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['ru', 'en', 'tr'],
        fallbackLng: 'ru',
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            cashes: []
        },
        backend: {
            loadPAth: 'public/locales/ru/{{lng}}/translation.json',
        },
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n;
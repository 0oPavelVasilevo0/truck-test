import React, { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
// import sun from "./sun.svg";
// import moon from "./moon.svg";
import "./style_dark_btn.css"
import detectDarkMode from '../../utils/detectDarkMode';
// import { FaMoon, FaSun } from 'react-icons/fa';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const BtnDarkMode = () => {


    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');     
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);
// Если меняются системные настройки, меняем тему   
    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((curentValue) => {
            return curentValue === 'light' ? 'dark' : 'light';
        })
    }

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <BsSunFill alt="Light mode" className="dark-mode-btn__icon sun" />
            <BsMoonStarsFill alt="Dark mode" className="dark-mode-btn__icon moon" />
        </button>
    )
}

export default BtnDarkMode
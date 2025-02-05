import React from 'react';
// import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import enFlag from "../assets/flags/en.png"
import kaFlag from "../assets/flags/ka.jpg"
import ruFlag from "../assets/flags/ru.png"



const LanguageDropdown: React.FC = () => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        const currentPath = location.pathname;
        const pathWithoutLanguage = currentPath.replace(/^\/(en|ka|ru)/, '');
        const newPath = `/${language}${pathWithoutLanguage}`;
        window.location.href = newPath;
    };

    return (
        <div className="relative flex space-x-2">
            <img
                src={enFlag}
                alt="EN"
                className="w-8 cursor-pointer"
                onClick={() => handleLanguageChange('en')}
            />
            <img
                src={kaFlag}
                alt="KA"
                className="w-8 cursor-pointer"
                onClick={() => handleLanguageChange('ka')}
            />
            <img
                src={ruFlag}
                alt="RU"
                className="w-8 cursor-pointer"
                onClick={() => handleLanguageChange('ru')}
            />
        </div>
    );
};

export default LanguageDropdown;

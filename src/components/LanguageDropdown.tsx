import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import enFlag from "../assets/flags/en.png";
import kaFlag from "../assets/flags/ka.jpg";
import ruFlag from "../assets/flags/ru.png";
import clsx from 'clsx';

const LanguageDropdown: React.FC<{ isScrolled: boolean, isHomePage : boolean }> = ({ isScrolled, isHomePage  }) => {
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
            {[
                { code: 'en', flag: enFlag, alt: 'EN' },
                { code: 'ka', flag: kaFlag, alt: 'KA' },
                { code: 'ru', flag: ruFlag, alt: 'RU' }
            ].map(({ code, flag, alt }) => (
                <img
                    key={code}
                    src={flag}
                    alt={alt}
                    className={clsx(
                        "w-8 cursor-pointer p-1 transition-all",
                        i18n.language === code ? "ring-2 rounded" : "opacity-80 hover:opacity-100",
                        isScrolled && isHomePage && "ring-grayish",
                        !isHomePage && "ring-grayish",
                        !isScrolled && isHomePage && "ring-main-color" 
                    )}
                    onClick={() => handleLanguageChange(code)}
                />
            ))}
        </div>
    );
};

export default LanguageDropdown;

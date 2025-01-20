import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const LanguageDropdown: React.FC = () => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        const currentPath = location.pathname;
        const pathWithoutLanguage = currentPath.replace(/^\/(en|ka|ru)/, '');
        const newPath = `/${selectedLanguage}${pathWithoutLanguage}`;
        window.location.href = newPath
    };

    return (
        <div className="relative w-[100px] text-black">
            <select
                value={i18next.language}
                onChange={handleLanguageChange}
                className="px-3 py-2 border rounded-md bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="en">EN</option>
                <option value="ka">KA</option>
                <option value="ru">RU</option>
            </select>
        </div>
    );
};

export default LanguageDropdown;

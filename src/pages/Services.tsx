import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LanguageDropdown: React.FC = () => {
    const { i18n } = useTranslation();
    const location = useLocation();

    const handleLanguageChange = (selectedLanguage: string) => {
        i18n.changeLanguage(selectedLanguage);
        const currentPath = location.pathname;
        const pathWithoutLanguage = currentPath.replace(/^\/(en|ka|ru)/, "");
        const newPath = `/${selectedLanguage}${pathWithoutLanguage}`;
        window.location.href = newPath;
    };

    return (
        <div className="flex space-x-2">
            <button onClick={() => handleLanguageChange("en")}>
                <img src="../flags/en.png" alt="English" className="w-6 h-6" />
            </button>
            <button onClick={() => handleLanguageChange("ka")}>
                <img src="../flags/ka.png" alt="Georgian" className="w-6 h-6" />
            </button>
            {/* <button onClick={() => handleLanguageChange("ru")}>
                <img src="../flags/ru.png" alt="Russian" className="w-6 h-6" />
            </button> */}
        </div>
    );
};

export default LanguageDropdown;

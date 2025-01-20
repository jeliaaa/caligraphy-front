import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const navigationList = [
        { title: "services", to: 'services' },
        { title: "gallery", to: 'gallery' },
        { title: "calculate", to: '' },
        { title: "myProject", to: 'track/0' },
        { title: "blog", to: '' },
        { title: "contactUs", to: '' },
        { title: "info", to: '' },
    ] as const;
    const { t } = useTranslation();
    return (
        <footer className="bg-main-color text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex items-center space-x-3">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="GROMKOM Logo"
                                    className="w-24"
                                />
                            </Link>
                            <p className="font-bold text-2xl">{t("name")}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="font-semibold">სოც ქსელები</p>
                            <div className="flex space-x-4 mt-2">
                                <Link to="/" target="_blank">
                                    <img
                                        src="https://gromkom.com/wp-content/uploads/2022/11/facebook.png"
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                </Link>
                                <Link to="/" target="_blank">
                                    <img
                                        src="https://gromkom.com/wp-content/uploads/2022/11/instagram.png"
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                </Link>
                                <Link to="/" target="_blank">
                                    <img
                                        src="https://gromkom.com/wp-content/uploads/2022/11/vk.png"
                                        alt="VK"
                                        className="w-6 h-6"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className="flex space-x-8">
                        <div>
                            <div className="font-bold text-lg mb-4">მენიუ</div>
                            <ul className="space-y-2">
                                {navigationList.map((item, index) => (
                                    <li key={index}>
                                        <Link className="text-gray-300 hover:text-white" to={`/${item.to}`}>
                                            {t(item.title)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div>
                            <div className="font-bold text-lg mb-4">მომსახურება</div>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        className="text-gray-300 hover:text-white"
                                        to="/"
                                    >
                                        ახალი შენობების მიღება
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-gray-300 hover:text-white"
                                        to="/"
                                    >
                                        ახალი შენობების რემონტი
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-300 hover:text-white" to="/">
                                        ბინის რემონტი
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-300 hover:text-white" to="/">
                                        რემონტი | შავი კარკასი
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-300 hover:text-white" to="/">
                                        რემონტი | მწვანე კარკასი
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-300 hover:text-white" to="/">
                                        რემონტი | თეთრი კარკასი
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-300 hover:text-white" to="/">
                                        ყველა მომსახურება
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Advantages Section */}

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

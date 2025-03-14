import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/tetri.png";
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';

const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
        if (email.trim()) {
            alert(`Subscribed with: ${email}`);
            setEmail("");
        }
    };

    const navigationList = [
        { title: "main", to: '/' },
        { title: "services", to: 'services' },
        // { title: "calculate", to: 'calculate' },
        { title: "myProject", to: 'track/0' },
        { title: "team", to: 'team' },
        { title: "advantages", to: 'advantages' },
    ];

    const contacts = [
        { icon: <FaWhatsapp size={25} />, link: "https://whatsapp.com" },
        { icon: <BsTelegram size={25} />, link: "tel:593933399" }
    ];

    const { t } = useTranslation();

    return (
        <footer className="bg-main-color text-white py-8">
            <div className="container gap-y-20 mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0 lg:space-x-10">
                <div className="flex flex-col lg:w-1/3 md:flex-row justify-around mt-5 w-full space-y-5 lg:space-y-0 md:space-x-10">
                    {/* Navigation */}
                    <div>
                        <div className="font-bold text-lg mb-4">{t("menu")}</div>
                        <ul className="space-y-2">
                            {navigationList.map((item, index) => (
                                <li key={index}>
                                    <Link className="text-gray-300 hover:text-white" to={`/${item.to}`}>{t(item.title)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold text-lg mb-4">{t('services')}</div>
                        <ul className="space-y-2">
                            <li><Link className="text-gray-300 hover:text-white" to="/services/0">{t('service1')}</Link></li>
                            <li><Link className="text-gray-300 hover:text-white" to="/services/1">{t('service2')}</Link></li>
                            <li><Link className="text-gray-300 hover:text-white" to="/services/2">{t('service3')}</Link></li>
                        </ul>
                    </div>
                </div>


                {/* Feedback Section */}
                <div className="flex flex-col items-center w-full m-0 lg:w-1/3 text-center">
                    <h3 className="font-bold text-xl mb-4">{t("enter_your_email")}</h3>
                    <input
                        type="email"
                        placeholder={t("email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded-md text-black"
                    />
                    <textarea className="w-full mt-3 p-2 rounded-md text-black" placeholder={t("comment")}></textarea>
                    <button
                        onClick={handleSubscribe}
                        className="mt-3 bg-grayish px-4 py-2 text-main-color uppercase hover:bg-gray-300"
                    >
                        {t("send")}
                    </button>
                </div>

                {/* Logo and Socials */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-52" />
                    </Link>
                    {/* <p className="font-bold text-2xl">{t("websiteName")}</p> */}
                    <div className="flex space-x-4">
                        {contacts.map((contact) => (
                            <Link to={contact.link}>{contact.icon}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
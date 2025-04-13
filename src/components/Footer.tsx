import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/tetri.png";
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // დროებით
        toast.error("შეტყობინების გაგზავნა ვერ მოხერხდა სცადეთ მოგვიანებით")
        // if (formData.name.trim() && formData.email.trim() && formData.phone.trim()) {
        //     setFormData({ name: '', email: '', phone: '' });
        // } else {
        //     alert(t("please_fill_all_fields"));
        // }
    };

    const navigationList = [
        { title: "main", to: '/' },
        { title: "services", to: 'services' },
        { title: "myProject", to: 'track/0' },
        { title: "team", to: 'team' },
        { title: "advantages", to: 'advantages' },
    ];

    const contacts = [
        {
            icon: (
                <svg width={25} height={25} className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1...z" />
                </svg>
            ),
            link: "https://whatsapp.com"
        },
        {
            icon: (
                <svg width={25} height={25} className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M248 8C111 8...z" />
                </svg>
            ),
            link: "tel:593933399"
        }
    ];

    return (
        <footer className="bg-main-color text-white py-8">
            <div className="container gap-y-20 mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0 lg:space-x-10">
                {/* Navigation */}
                <div className="flex flex-col lg:w-1/3 md:flex-row justify-around mt-5 w-full space-y-5 lg:space-y-0 md:space-x-10">
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
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full h-full">
                        <input
                            type="text"
                            name="name"
                            placeholder={t("namePlaceholder")}
                            className="border p-2 rounded focus:outline-main-color placeholder-main-color text-main-color"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t("emailPlaceholder")}
                            className="border p-2 rounded focus:outline-main-color placeholder-main-color text-main-color"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t("phonePlaceholder")}
                            className="border p-2 rounded focus:outline-main-color placeholder-main-color text-main-color"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="bg-main-color border border w-fit self-center px-5 uppercase text-white py-2 rounded hover:bg-opacity-90 transition-all"
                        >
                            {t("submit")}
                        </button>
                    </form>
                </div>

                {/* Logo and Socials */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-52" />
                    </Link>
                    <div className="flex space-x-4">
                        {contacts.map((contact, i) => (
                            <Link key={i} to={contact.link}>{contact.icon}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

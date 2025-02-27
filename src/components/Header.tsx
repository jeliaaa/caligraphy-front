import React, { useState, useEffect } from 'react';
import { FaBars, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import LanguageDropdown from './LanguageDropdown';
import logo from "../assets/logos/logo.png";
import logoLight from "../assets/logos/logo-light.png"
import { useTranslation } from 'react-i18next';
import { BsTelegram } from 'react-icons/bs';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const { t } = useTranslation();
    const location = useLocation();  // Get the current route

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationList = [
        { title: "services", to: 'services' },
        // { title: "calculate", to: 'calculate' },
        { title: "myProfile", to: 'track/0' },
        { title: "team", to: 'team' },
        { title: "advantages", to: 'advantages' },
    ];

    const contacts = [
        { icon: <FaWhatsapp size={25} />, link: "https://whatsapp.com" },
        { icon: <BsTelegram size={25} />, link: "tel:593933399" }
    ];

    // Check if the user is on the homepage
    const isHomePage = location.pathname === '/';

    return (
        <header className={`h-[90px] w-full flex items-center justify-between px-5 py-3 transition-all duration-300  
            ${isHomePage ? (isScrolled ? 'sticky top-0 bg-main-color shadow-md text-grayish z-50' : 'absolute bg-white bg-opacity-65 text-main-color z-50')
                : 'sticky top-0 bg-main-color shadow-md text-grayish z-50'}`}>

            <nav className='hidden lg:flex space-x-6'>
                {navigationList.map((nav, index) => (
                    <Link to={nav.to} key={index} className='lg:text-xl font-extrabold hover:underline'>
                        {t(nav.title)}
                    </Link>
                ))}
            </nav>

            <Link to={'/'} className='absolute left-1/2 -translate-x-1/2' onClick={() => setMenuOpen(false)}>
                <img src={isScrolled || !isHomePage ? logoLight : logo} className='w-[70px] aspect-square' alt='Logo' />
            </Link>

            <div className='hidden lg:flex items-center space-x-4'>
                {contacts.map((contact, index) => (
                    <Link to={contact.link} key={index} className='hover:text-2xl rounded-full'>
                        {contact.icon}
                    </Link>
                ))}
                <FaPhone /><Link to='tel:555555555' className='m-0 p-0'>+995 555-555555</Link>
                <LanguageDropdown isScrolled={isScrolled} isHomePage={isHomePage} />
            </div>

            <button className='lg:hidden p-2' onClick={toggleMenu}>
                {menuOpen ? <HiX size={30} className={!isHomePage ? 'text-grayish' : isHomePage && isScrolled ? 'text-grayish' : 'text-main-color'} /> : <FaBars className={!isHomePage ? 'text-grayish' : isHomePage && isScrolled ? 'text-grayish' : 'text-main-color'} size={30} />}
            </button>

            {menuOpen && (
                <div className={`absolute left-0 w-full p-5 flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out 
                    ${isScrolled || !isHomePage ? "bg-main-color text-grayish" : "bg-gray-50 bg-opacity-65 text-main-color"} 
                    ${menuOpen ? "translate-y-[62%]" : "translate-y-[-100%]"}`}>

                    {navigationList.map((nav, index) => (
                        <Link to={nav.to} key={index} className='text-lg' onClick={() => setMenuOpen(false)}>
                            {t(nav.title)}
                        </Link>
                    ))}

                    <div className='flex space-x-4'>
                        {contacts.map((contact, index) => (
                            <Link to={contact.link} key={index} className='p-2 rounded-full'>
                                {contact.icon}
                            </Link>
                        ))}
                    </div>

                    <div className='flex'>
                        <FaPhone /><Link to='tel:555555555' className='m-0 p-0'>+995 555-555555</Link>
                    </div>

                    <LanguageDropdown isScrolled={isScrolled} isHomePage={isHomePage} />
                </div>
            )}
        </header>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { FaBars, FaPhone, FaUser, FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import LanguageDropdown from './LanguageDropdown';
// import logo from "../assets/logos/logo.png";
import logoLight from "../assets/logos/tetri.png"
import { useTranslation } from 'react-i18next';
import { BsTelegram } from 'react-icons/bs';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const { t } = useTranslation();
    const location = useLocation();  // Get the current route
    const { isAuthenticated } = useAuth();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    // Check if the user is on the homepage
    const isHomePage = location.pathname === '/';

    return (
        <header className={`h-[120px] w-full sticky top-0 bg-main-color shadow-md text-grayish z-50 flex items-center justify-between px-5 py-3 transition-all duration-300`}>
            <nav className='hidden  xl:flex space-x-6'>
                {navigationList.map((nav, index) => (
                    <Link to={nav.to} key={index} className='xl:text-xl uppercase font-extrabold!'>
                        {t(nav.title)}
                    </Link>
                ))}
            </nav>

            <Link to={'/'} className='absolute xl:static 2xl:absolute left-1/2 -translate-x-1/2' onClick={() => setMenuOpen(false)}>
                <img src={logoLight} className='w-[150px]' alt='Logo' />
            </Link>

            <div className='hidden xl:flex items-center space-x-4'>
                {contacts.map((contact, index) => (
                    <Link to={contact.link} key={index} className='hover:text-2xl rounded-full'>
                        {contact.icon}
                    </Link>
                ))}
                <FaPhone /><Link to='tel:555555555' className='m-0 p-0'>+995 555-555555</Link>
                {!isAuthenticated ? <Link to={'/login'}>{t('login')}</Link> : <Link to={'/profile'}><FaUser /></Link>}
                <LanguageDropdown isScrolled={isScrolled} isHomePage={isHomePage} />
            </div>

            <button className='xl:hidden p-2' onClick={toggleMenu}>
                {menuOpen ? <HiX size={30} className={'text-grayish'} /> : <FaBars className={'text-grayish'} size={30} />}
            </button>

            {menuOpen && (
                <div className={`absolute left-0 bg-main-color text-grayish w-full p-5 flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out 
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
                    {!isAuthenticated ? <Link to={'/login'}>{t('login')}</Link> : <Link to={'/profile'}><FaUser /></Link>}
                    <LanguageDropdown isScrolled={isScrolled} isHomePage={isHomePage} />
                </div>
            )}
        </header>
    );
};

export default Header;

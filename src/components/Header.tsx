import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';
// import logo from "../assets/logos/logo.png";
import logoLight from "../assets/logos/tetri.png"
import { useTranslation } from 'react-i18next';
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
        { icon: <svg width={25} height={25} className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>, link: "https://whatsapp.com" },
        { icon: <svg width={25} height={25} className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>, link: "tel:593933399" }
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
                    <Link to={contact.link} key={index} className='hover:text-2xl text-3xl rounded-full'>
                        {contact.icon}
                    </Link>
                ))}
                <svg className='w-[20px] h-[20px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><Link to='tel:555294040' className='m-0 p-0 text-xl'>+995 555 29 40 40</Link>
                {!isAuthenticated ? <Link to={'/login'} className='text-xl'>{t('login')}</Link> : <Link to={'/profile'}>
                    <svg className='w-[20px] h-[20px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </Link>}
                <LanguageDropdown isScrolled={isScrolled} isHomePage={isHomePage} />
            </div>

            <button className='xl:hidden p-2' onClick={toggleMenu}>
                {menuOpen ? <svg className='fill-grayish  rotate-45 w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> : <svg className='fill-grayish w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>}
            </button>

            {menuOpen && (
                <div className={`absolute xl:hidden z-40 left-0 bg-main-color text-grayish w-full p-5 flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out 
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

                    <div className='flex items-center'>
                        <svg className='w-[15px] h-[15px] mr-2 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><Link to='tel:555294040' className='m-0 p-0'>+995 555 29 40 40</Link>
                    </div>
                    {!isAuthenticated ? <Link to={'/login'} className='uppercase'>{t('login')}</Link> : <Link to={'/profile'}>
                        <svg className='w-[20px] h-[20px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                    </Link>}
                    <LanguageDropdown isScrolled={isScrolled} isHomePage={isHomePage} />
                </div>
            )}
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { FaBars, FaFacebookMessenger, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { BsPinFill } from 'react-icons/bs';
import LanguageDropdown from './LanguageDropdown';
import logo from "../assets/logos/logo.png";
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const { t } = useTranslation();


    const navigationList = [
        { title: "services", to: 'services' },
        { title: "gallery", to: 'gallery' },
        { title: "calculate", to: '' },
        { title: "myProject", to: 'track/0' },
        { title: "blog", to: '' },
        { title: "contactUs", to: '' },
        { title: "team", to: 'team' },
    ] as const;



    const contacts = [
        { color: "00FF00", icon: <FaWhatsapp size={30} color='#00FF00' />, title: "Whatsapp", link: "https://whatsapp.com" },
        { color: "0000FF", icon: <FaFacebookMessenger size={30} color='#0000FF' />, title: "Messenger", link: "https://facebook.com" },
        { color: "00115F", icon: <FaTelegram size={30} color='#00115F' />, title: "Phone", link: "tel:593933399" }
    ];

    return (
        <header className='w-full flex flex-col sticky bg-grayish shadow-md z-50'> {/* Added z-50 */}
            <div className='w-full py-3 px-5 flex justify-between items-center'>
                <Link to={'/'}>
                    <img src={logo} className='w-[70px] aspect-square' alt='...' />
                </Link>
                <div className='hidden flex-col md:flex md:flex-row items-center gap-4 md:gap-6 px-5 md:px-0'>
                    <div className='flex items-center text-white gap-x-2 bg-secondary-color rounded-3xl p-2'>
                        <BsPinFill size={20} />
                        <span>ქ.ბათუმი სელიმ ხიმშიაშვილის ქ.N1</span>
                    </div>
                    <div className='flex-col items-start flex md:items-center'>
                        <div className='flex gap-x-3'>
                            {contacts.map((contact, _id) => (
                                <Link to={contact.link} key={_id}>
                                    <div
                                        className="bg-gray-100 w-fit p-2 flex items-center justify-center aspect-square rounded-full hover:bg-slate-200"
                                    >
                                        {contact.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className='w-full mt-2'>
                            ტელეფონი: <Link className='underline' to="tel:555555555">+995 555555555</Link>
                        </div>
                    </div>
                    <LanguageDropdown />
                </div>

                <button className='md:hidden p-2' onClick={toggleMenu}>
                    {menuOpen ? <HiX size={30} color='#2c3424' /> : <FaBars color='#2c3424' size={30} />}
                </button>
            </div>

            <div
                className={`flex flex-col w-full bg-white md:sticky absolute z-50 transition-all duration-700 ${menuOpen ? 'top-[90px]' : 'top-[-1000%]'} md:top-auto`}
            >
                <div className='flex flex-col py-5 md:flex-wrap w-full md:items-center md:flex-row md:justify-evenly gap-y-4 md:gap-y-0 md:gap-x-3 bg-main-color text-white px-5 md:px-0'>
                    {navigationList.map((nav, _id) => (
                        <Link
                            to={nav.to}
                            key={_id}
                            className='relative flex h-full text-center md:py-5 px-3 border-b md:border-0 border-main-color group'
                        >
                            {t(nav.title)}  {/* `nav.title` is now properly typed */}
                            {/* Hover underline */}
                            <div className='hidden md:block absolute left-0 bottom-2 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
                        </Link>
                    ))}

                    <div className='flex flex-col gap-y-3 md:hidden '>
                        <div className='flex items-center gap-x-2 bg-secondary-color  rounded-3xl p-2'>
                            <BsPinFill color='white' size={20} />
                            <span>ქ.ბათუმი სელიმ ხიმშიაშვილის ქ.N1</span>
                        </div>
                        <div className='flex-col items-start flex md:items-center'>
                            <div className='flex gap-x-3'>
                                {contacts.map((contact, _id) => (
                                    <Link to={contact.link} key={_id}>
                                        <div
                                            className="bg-gray-100 w-fit p-2 flex items-center justify-center aspect-square rounded-full"
                                        >
                                            {contact.icon}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className='w-full mt-2'>
                                ტელეფონი: <Link className='underline' to="tel:555555555">+995 555555555</Link>
                            </div>
                            <LanguageDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
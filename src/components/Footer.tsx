import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/logo-light.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email.trim()) {
            alert(`Subscribed with: ${email}`);
            setEmail("");
        }
    };

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
                <div className="flex flex-col justify-between items-start space-y-8 md:space-y-0">
                    {/* Logo Section */}
                    <div className='w-full flex flex-col items-center space-y-8 md:flex-row justify-between md:items-start'>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex items-center space-x-3">
                                <Link to="/">
                                    <img src={logo} alt="GROMKOM Logo" className="w-24" />
                                </Link>
                                <p className="font-bold text-2xl">{t("name")}</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="font-semibold">სოც ქსელები</p>
                                <div className="flex space-x-4 mt-2">
                                    <Link to="/" target="_blank">
                                        <img src="https://gromkom.com/wp-content/uploads/2022/11/facebook.png" alt="Facebook" className="w-6 h-6" />
                                    </Link>
                                    <Link to="/" target="_blank">
                                        <img src="https://gromkom.com/wp-content/uploads/2022/11/instagram.png" alt="Instagram" className="w-6 h-6" />
                                    </Link>
                                    <Link to="/" target="_blank">
                                        <img src="https://gromkom.com/wp-content/uploads/2022/11/vk.png" alt="VK" className="w-6 h-6" />
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
                                <ul className="space-y-2 mb-8">
                                    <li><Link className="text-gray-300 hover:text-white" to="/">ახალი შენობების მიღება</Link></li>
                                    <li><Link className="text-gray-300 hover:text-white" to="/">ახალი შენობების რემონტი</Link></li>
                                    <li><Link className="text-gray-300 hover:text-white" to="/">ბინის რემონტი</Link></li>
                                    <li><Link className="text-gray-300 hover:text-white" to="/">რემონტი | შავი კარკასი</Link></li>
                                    <li><Link className="text-gray-300 hover:text-white" to="/">რემონტი | მწვანე კარკასი</Link></li>
                                    <li><Link className="text-gray-300 hover:text-white" to="/">რემონტი | თეთრი კარკასი</Link></li>
                                    <li><Link className="text-gray-300 hover:text-white" to="/">ყველა მომსახურება</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Leave Your Mail Section */}
                    <div className="flex w-full flex-col items-center gap-y-5 border-t">
                        <div className="flex flex-col items-center w-full box-border gap-x-3">
                            <div className='w-3/4 mt-5'>
                                <h3 className="font-bold text-xl mb-4 text-center md:text-start">დატოვე შენი ელ.ფოსტა და უკუკავშირი!</h3>
                                <div className="flex items-center">
                                    <input
                                        type="email"
                                        placeholder="შეიყვანეთ ელ.ფოსტა"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-2 rounded-l-md text-black"
                                    />
                                </div>
                            </div>
                            <textarea className='w-3/4 mt-5 box-border p-5 text-black' placeholder='დაგვიტოვეთ უკუკავშირი' />
                        </div>
                        <div className='w-full flex justify-center'>
                            <button
                                onClick={handleSubscribe}
                                className="bg-grayish px-4 py-2 text-main-color hover:bg-gray-300"
                            >
                                გაგზავნა
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

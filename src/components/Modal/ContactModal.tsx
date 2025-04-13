import React, { Dispatch, SetStateAction, useState } from 'react'
import karkasi from "../../assets/photos/karkasi.jpeg"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactInfo } from '../../redux/thunks/contactThunk';
import { AppDispatch, RootState } from 'redux/store';

interface Props {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactModal: React.FC<Props> = ({ setIsModalOpen }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState) => state.auth.status);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name.trim() && formData.email.trim() && formData.phone.trim()) {
            await dispatch(sendContactInfo(formData));
            if (status === "succeeded") {
                alert(t('informationSentSuccessfully'));
            } else {
                alert(t('error'));
            }
            setFormData({ name: '', email: '', phone: '' });
            setIsModalOpen(false); // optionally close modal on success
        }
    };

    return (
        <div className="fixed inset-0 flex items-center w-full h-full justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:max-w-[60%] shadow-lg relative">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 w-[15px] h-[15px] text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>
                <h2 className="text-xl font-bold text-main-color mb-4">{t("contactUs")}</h2>
                <div className='flex gap-5'>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full md:w-1/2 h-full">
                        <input
                            type="text"
                            name="name"
                            placeholder={t("namePlaceholder")}
                            className="border p-2 rounded focus:outline-main-color"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t("emailPlaceholder")}
                            className="border p-2 rounded focus:outline-main-color"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t("phonePlaceholder")}
                            className="border p-2 rounded focus:outline-main-color"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-main-color uppercase text-white py-2 rounded hover:bg-opacity-90 transition-all"
                        >
                            {t("submit")}
                        </button>
                    </form>
                    <img className='hidden md:block w-1/2' src={karkasi} alt='...' />
                </div>
            </div>
        </div>
    )
}

export default ContactModal

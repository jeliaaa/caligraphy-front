import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Optionally, clear the form after submission
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <footer className="w-full p-4 bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('namePlaceholder')}
          className="border p-2 rounded focus:outline-main-color"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('emailPlaceholder')}
          className="border p-2 rounded focus:outline-main-color"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t('phonePlaceholder')}
          className="border p-2 rounded focus:outline-main-color"
        />
        <button
          type="submit"
          className="bg-main-color uppercase text-white py-2 rounded hover:bg-opacity-90 transition-all"
        >
          {t('submit')}
        </button>
      </form>
    </footer>
  );
};

export default Footer;

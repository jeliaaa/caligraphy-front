import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Track from './pages/Track';
import Services from './pages/Services';
import ServcicesSingle from './pages/ServcicesSingle';
import Footer from './components/Footer';
import LoginForm from './pages/Login';
import RegistrationForm from './pages/RegistrationForm';
import TeamPage from './pages/Team';
import Gallery from './pages/Gallery';
import VerifyEmail from './pages/Verify';
import PriceCalculator from './components/PriceCalc';
import { animateScroll } from 'react-scroll';
import { MdMessage } from 'react-icons/md';

const App = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    animateScroll.scrollToTop();
  }, [location]);

  return (
    <div className="App">
      <Header />
      <div className='w-full min-h-[80dvh]'>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route index path='/login' element={<LoginForm />} />
          <Route index path='/register' element={<RegistrationForm />} />
          <Route path='/track/:id' element={<Track />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:id' element={<ServcicesSingle />} />
          <Route path='/team' element={<TeamPage slider={false} />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/calculate' element={<PriceCalculator />} />
        </Routes>
      </div>

      {/* Contact Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed rounded-full hover:-translate-y-2 hover:border-2 delay-75 transition-all bottom-2 right-2 z-50 w-[50px] h-[50px] bg-white flex items-center justify-center shadow-lg"
      >
        <MdMessage size={30} className='text-main-color z-50' />
      </button>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 w-[15px] h-[15px] text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-main-color mb-4">Contact Us</h2>
            <form className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded focus:outline-main-color"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded focus:outline-main-color"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="border p-2 rounded focus:outline-main-color"
              />
              <button
                type="submit"
                className="bg-main-color text-white py-2 rounded hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;

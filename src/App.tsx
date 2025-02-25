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
import Gallery from './components/Gallery';
import VerifyEmail from './pages/Verify';
import PriceCalculator from './components/PriceCalc';
import { animateScroll } from 'react-scroll';
import { MdMessage } from 'react-icons/md';
import ContactModal from './components/Modal/ContactModal';
import ServiceBenefits from './pages/ServiceBenefits';

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
          <Route path='/advantages' element={<ServiceBenefits />} />
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
        <ContactModal setIsModalOpen={setIsModalOpen} />
      )}

      <Footer />
    </div>
  );
}

export default App;

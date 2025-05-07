import React, { useEffect, useMemo, useState } from 'react'
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
import ContactModal from './components/Modal/ContactModal';
import ServiceBenefits from './pages/ServiceBenefits';
import Profile from './pages/Profile';
import ProjectSingle from './pages/ProjectSingle';
import { useAuth } from './context/AuthContext';
import ClientOnly from './components/ClientOnly';
import Loader from './components/Loader';
import ResetPassword from './pages/ResetPassword';
import RequestReset from './pages/RequestReset';

const App = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const pathSegments = location.pathname.split('/');

    if (!(pathSegments[1] === 'services' && pathSegments.length >= 3)) {
      animateScroll.scrollToTop();
    }
  }, [location]);


  const { status } = useAuth();

  const isLoading = useMemo(() => status === 'loading', [status]);

  if (isLoading) {
    return <Loader />;
  }

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
          <Route path='/profile' element={<ClientOnly><Profile /></ClientOnly>} />
          <Route path='/profile/:id' element={<ClientOnly><ProjectSingle /></ClientOnly>} />
          <Route path='/request-reset-password' element={<RequestReset />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
        </Routes>
      </div>

      {/* Contact Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed rounded-full hover:-translate-y-2 hover:border-2 delay-75 transition-all bottom-2 right-2 z-50 
      w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white flex items-center justify-center shadow-2xl shadow-main-color"
      >
        <svg width={35} className='fill-main-color w-[35px] h-[35px] z-50' height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
        </svg>
      </button>


      {/* Contact Form Modal*/}
      {isModalOpen && (
        <ContactModal setIsModalOpen={setIsModalOpen} />
      )}

      <Footer />
    </div>
  );
}

export default App;

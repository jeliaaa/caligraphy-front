import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
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

const App = () => {

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
          <Route path='/team' element={<TeamPage />} />
          <Route path='/verify-email' element={<VerifyEmail  />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

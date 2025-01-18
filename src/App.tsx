import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Track from './pages/Track';
import Services from './pages/Services';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='w-full min-h-[80dvh]'>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/track/:id' element={<Track />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

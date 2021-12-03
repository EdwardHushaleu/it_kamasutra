import React from 'react';
// import { Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Profile/Music/Music';
import News from './components/Profile/News/News';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs />} /> {/*с версией react 6 синтаксис, поменялся , нужно ставить /.../*, также роуты поменялись*/}
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
};

export default App;
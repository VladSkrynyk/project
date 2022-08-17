import React from 'react';
import './App.css';
// import Favicon from "react-favicon";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainContent/MainPage/MainPage';
import AboutUs from './components/MainContent/AboutUs/AboutUs';
import News from './components/MainContent/News/News';
import Team from './components/MainContent/Team/Team';
import ForScouts from './components/MainContent/ForScouts/ForScouts';
import Join from './components/MainContent/Join/Join';


function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/for-scouts' element={<ForScouts />}/>
          <Route path='/join' element={<Join />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

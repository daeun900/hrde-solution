import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './css/index.css' 
import './css/common.scss'
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import LMS from './pages/LMS';
import Contents from './pages/Contents';
import Consulting from './pages/Consulting';
import Consult from './pages/Consult';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
  <Router>
    <Header />  
    <ScrollToTop /> 
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/lms" element={<LMS/>} />  
      <Route path="/contents" element={<Contents/>} />  
      <Route path="/consulting" element={<Consulting/>} />  
      <Route path="/consult" element={<Consult/>} />  
      <Route path="/news" element={<News/>} />  
      <Route path="/newsdetail" element={<NewsDetail/>} />  
    </Routes>
    <Footer />  
  </Router>
  );
}

export default App;

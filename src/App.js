import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
  <Router>
    <Header />  
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

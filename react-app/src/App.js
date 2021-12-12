import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 


import Home from './Home';
import {Route, Routes, } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
   <>
   <Navbar/>
   <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/home" element={<Home/>} />
     <Route exact path="/about" element={<About/>} />
     <Route exact path="/services" element={<Services/>} />   
     <Route exact path="/contact" element={<Contact/>}/> 
   </Routes>   
   <Footer/>   
   </>
  );
}






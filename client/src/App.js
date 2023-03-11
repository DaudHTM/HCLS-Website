
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { Component, useState } from 'react';

import './App.css';
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Axios from "axios";


function App() {
  

  const [yScroll,setyScroll] = useState(0);

const setScroll = () =>{
  setyScroll(window.scrollY);

}
  window.addEventListener('scroll',setScroll)
  return (
    <div className="appContainer"> 
    <BrowserRouter>
      <Nav yscroll={yScroll}/>
      <Home yscroll ={yScroll}/>
        <About yscroll={yScroll}/>
        <Contact/>

      <Routes>
   
     
        <Route path="/login" element={<Login/>} />
       

      </Routes>
   
   
    </BrowserRouter>

    <div className="df"></div>

    </div>
    
  
  );
}

export default App;

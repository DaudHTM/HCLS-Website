
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { Component } from 'react';

import './App.css';
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Axios from "axios";

function App() {
  
  return (
    <div> 
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
   
   
    </BrowserRouter>

    <div className="df"></div>

    </div>
    
  
  );
}

export default App;


import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { Component } from 'react';

import './App.css';
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Axios from "axios";

function App() {
  
  return (
    <div> 
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
   
   
    </BrowserRouter>

    <div className="df"></div>

    </div>
    
  
  );
}

export default App;

import React from 'react'
import logo from '../assets/hazardlogo.png';
import '../CSS/nav.css'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

function Nav() {

  const [toggleNav, setToggleNav] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());
 
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <div className="navContainer">
      
      <Link to="/" > <img alt="" src={logo}  width="95px" /> </Link>

         <button  className="openBtn" onClick={() => setToggleNav(!toggleNav)}><FaBars/></button>
        <ul  style={{right: toggleNav && windowSize.innerWidth<650 ? "-70%":"0%"}} > 

            <div>
            <li><Link to="/" > Home </Link> </li>
            <li><Link to="/" > About </Link> </li>
            <li><Link to="/login" > Members </Link> </li>
            <li><Link to="/login" > Dashboard </Link> </li>
            </div>
            <li><Link className="contactBtn" to="/" > Contact</Link> </li>
        </ul>
        

       
    </div>
  )
}
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
  
}

export default Nav

import React from 'react'
import logo from '../assets/hazardlogo.png';
import '../CSS/nav.css'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"

function Nav() {
  return (
    <div className="navContainer">
      
      <Link to="/" > <img alt="" src={logo}  width="90px" /> </Link>
    
        <ul> 
            <li><Link to="/" > Home </Link> </li>
            <li><Link to="/" > About </Link> </li>
            <li><Link to="/login" > Members </Link> </li>
            <li><Link to="/login" > Dashboard </Link> </li>
            
        </ul>
        <li><Link className="contactBtn" to="/" > Contact us </Link> </li>
     
    </div>
  )
}

export default Nav

import React from 'react'
import logo from '../assets/hazardlogo.png';
import '../CSS/nav.css'
function Nav() {
  return (
    <div className="navContainer">
      <img alt="" href="#/" src={logo}  width="90px" />

      <div className="btnContainer"> 
        <ul> 
            <li><a href="#"> Home</a></li>
            <li><a href="#"> About</a></li>
            <li><a href="#"> Members</a></li>
            <li><a href="#"> Dashboard</a></li>
            <li><a href="#"> Contact</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Nav

import React from 'react'
import logo from '../assets/hazardlogo.png';
import '../CSS/nav.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
function Nav(props) {

  const [toggleNav, setToggleNav] = useState(true);

  const [windowSize, setWindowSize] = useState(getWindowSize());
 
  const [navBarBackground, setNavBarBackground] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(()=>{
    if(props.yscroll>90){
      setNavBarBackground(true);
    }
    else{
      setNavBarBackground(false);
    }


  },[props.yscroll])

  



  return (
    <motion.div transition={{type:"tween",duration:.5}}  animate={{y:0}} initial={{y:-100}}  className={navBarBackground ? 'navContainer activeBackground' : 'navContainer'}>
      
      <Link Link smooth={true} offset={-10} duration={500} activeClass="active" to="home"> <img alt="" src={logo}  width="95px" /> </Link>

         <button  className="openBtn" onClick={() => setToggleNav(!toggleNav)}><FaBars/></button>
        <ul className={!navBarBackground ? 'activeText' : 'unactiveText'} style={{right: toggleNav && windowSize.innerWidth<650 ? "-70%":"0%"}} > 

            <div>
            <li><Link onClick={() => setToggleNav(true)} smooth={true} offset={-10} duration={500} activeClass="active" to="home" > Home </Link></li>
            <li><Link Link smooth={true} offset={-10} duration={500} activeClass="active" to="about" > About </Link> </li>
            <li><Link onClick={() => setToggleNav(true)}  to="/login" > Members </Link> </li>
            <li><Link onClick={() => setToggleNav(true)}  to="/login" > Dashboard </Link> </li>
            </div>
            <li><Link onClick={() => setToggleNav(true)}  className="contactBtn" Link smooth={true} offset={-10} duration={500} activeClass="active" to="contact"> Contact</Link> </li>
        </ul>
        

       
    </motion.div>
    
  )
}
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
  
}

export default Nav

import React from 'react'
import { useState,useEffect } from 'react';
import "../CSS/about.css";
import { motion} from 'framer-motion/dist/framer-motion';
function About(props) {

const [isAnimate,setIsAnimate] = useState(false);

useEffect(()=>{
  if(props.yscroll>140){
    setIsAnimate(true);
  }

},[props.yscroll]);


  return (
    <div className="aboutSectionContainer">
    <div className="aboutTeamContainer">
      <div className="teamInfo">
        <p1 className="teamTitle">About our team</p1>
      </div>
      <div className="teamPicture"></div>

    </div>
    <div className="aboutContainer" id='about'>
            <motion.div initial={{x:-1100}} animate={{x: isAnimate?0:-1100}} transition={{duration:.9, type:"tween"}}  className="libraryImageContainer">
        
        </motion.div>
      <motion.div  initial={{x:1100}} animate={{x: isAnimate?0:1100}} transition={{duration:.9, type:"tween"}} className="clubContainer">
        <p1 className="clubTitle">HCLS Robotics Club</p1>
        <p2 className="clubInformation">Interested in coding? Interested in design? Want to build a robot? Then FTC (FIRST Tech Challenge) might just be the perfect competition for you! FTC is a robotics challenge for middle and high school that involves building and programming a robot while marketing your team to potential sponsors and companies. Interested in learning more? Join us every Saturday at 3 - 4:30 PM at the Miller Branch for building, programming, coding, or marketing sessions with our Library workshop/team! If you have any questions or concerns, feel free to email us at hclsftcrobotics@gmail.com. Hope to see you there!<span><a target="_blank" href='https://howardcounty.librarycalendar.com/event/hcls-robotics-club-6'> <p3 className="learnMore">Learn More!</p3></a> </span></p2>

      </motion.div>

    </div>
    </div>
  )
}

export default About

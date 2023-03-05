import React from 'react'
import { useState } from 'react';
import "../CSS/about.css";
import { motion} from 'framer-motion/dist/framer-motion';
function About() {

const [isAnimate,setIsAnimate] = useState(false);


if(window.scrollY>100){
  setIsAnimate(true);
}

  return (
    <div className="aboutContainer" id='about'>
            <motion.div initial={{x:-500}} animate={{x: isAnimate?0:-500}}  className="libraryImageContainer">
        
        </motion.div>
      <div className="clubContainer">
        <p1 className="clubTitle">HCLS Robotics Club</p1>
        <p2 className="clubInformation">Interested in coding? Interested in design? Want to build a robot? Then FTC (FIRST Tech Challenge) might just be the perfect competition for you! FTC is a robotics challenge for middle and high school that involves building and programming a robot while marketing your team to potential sponsors and companies. Interested in learning more? Join us every Saturday at 3 - 4:30 PM at the Miller Branch for building, programming, coding, or marketing sessions with our Library workshop/team! If you have any questions or concerns, feel free to email us at hclsftcrobotics@gmail.com. Hope to see you there!<span><a href='https://howardcounty.librarycalendar.com/event/hcls-robotics-club-6'> <p3 className="learnMore">Learn More!</p3></a> </span></p2>

      </div>

    </div>
  )
}

export default About

import React from 'react'
import { useState,useEffect } from 'react';
import "../CSS/about.css";
import { motion} from 'framer-motion/dist/framer-motion';
function About(props) {

const [isAnimate,setIsAnimate] = useState(0);

useEffect(()=>{
  if(props.yscroll>300 && isAnimate!=2){
    setIsAnimate(1);
  }
  if(props.yscroll>1050 && isAnimate!=3){
    setIsAnimate(2);
  }
  if(props.yscroll>2000){
    setIsAnimate(3);
  }

},[props.yscroll]);


  return (
    <div>
    <div className="aboutSectionContainer">
    <div className="aboutTeamContainer">
      <motion.div initial={{x:-1100}} animate={{x: isAnimate>0?0:-1100}} transition={{duration:.9, type:"tween"}} className="teamInfo">
        <p1 className="teamTitle">About our team</p1>
        <p2 className="teamInformation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Molestiae culpa saepe tempora nostrum officiis voluptates ratione sunt ea, quibusdam, rem eos autem veritatis quas! Repellat distinctio quia deleniti vitae et.
          Mollitia doloremque expedita, corrupti repellat saepe earum iusto quisquam eos nihil, officiis hic nisi minima dolorum molestiae voluptatibus. Impedit dignissimos nam mollitia autem minus, nobis deserunt consequuntur ab tempore tenetur.
        </p2>
      </motion.div>
      <motion.div initial={{x:1100}} animate={{x: isAnimate>0?0:1100}} transition={{duration:.9, type:"tween"}} className="teamPicture"></motion.div>

    </div>
    <div className="aboutContainer" id='about'>
            <motion.div initial={{x:-1100}} animate={{x: isAnimate>1?0:-1100}} transition={{duration:.9, type:"tween"}}  className="libraryImageContainer">
        
        </motion.div>
      <motion.div  initial={{x:1100}} animate={{x: isAnimate>1?0:1100}} transition={{duration:.9, type:"tween"}} className="clubContainer">
        <p1 className="clubTitle">HCLS Robotics Club</p1>
        <p2 className="clubInformation">Interested in coding? Interested in design? Want to build a robot? Then FTC (FIRST Tech Challenge) might just be the perfect competition for you! FTC is a robotics challenge for middle and high school that involves building and programming a robot while marketing your team to potential sponsors and companies. Interested in learning more? Join us every Saturday at 3 - 4:30 PM at the Miller Branch for building, programming, coding, or marketing sessions with our Library workshop/team! If you have any questions or concerns, feel free to email us at hclsftcrobotics@gmail.com. Hope to see you there!<span><a target="_blank" href='https://howardcounty.librarycalendar.com/event/hcls-robotics-club-6'> <p3 className="learnMore">Learn More!</p3></a> </span></p2>

      </motion.div>

    </div>
    </div>
    <LearnFTC shouldAnimate={isAnimate}/>
    </div>
  )
}
function LearnFTC(props){
  return(
<motion.div initial={{x:-1400}} animate={{x: props.shouldAnimate>2?0:-1400}} transition={{duration:.9, type:"tween"}} className="ftcContainer">
<p1 className="learnMoreText">
  Learn more about the FIRST Tech Challenge <span > <a className="ftcLink" target="_blank" href="https://www.firstinspires.org/robotics/ftc">here.</a> </span>
</p1>
<div className="ftcImage"></div>

</motion.div>
  );
}
export default About

import React from 'react'
import "../CSS/home.css"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
function Home() {
  return (
    <div className='homeContainer' id='home'>
      <div className='homeBackgroundLogo'> </div> 
      <div className='backgroundImage'>
         
        <div className='backgroundImgTextContainer'> 
          <motion.div transition={{type:"tween",duration:.5}}  animate={{y:0,scale:1,opacity:1}} initial={{y:-100,scale:.7,opacity:.4}}   className='imgTextContainer'>
            <p4>
              FTC Robotics Team
            </p4>
            <p1>
              HoCo Hazards # 222742
            </p1>
            <p3> 
              HCLS Robotics Club
            </p3>
          </motion.div>
        </div>
      </div>
      <div className=''>


      </div>
    </div>
  )
}

export default Home

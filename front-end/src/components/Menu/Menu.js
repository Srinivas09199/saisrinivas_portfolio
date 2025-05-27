import React from 'react'
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import './Menu.css'
import profile_pic from '../../assets/Images/profile_pic.jpg'
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcReadingEbook, FcVideoProjector } from "react-icons/fc";

const Menu = ({toggle}) => {
  return (
    <>
        {toggle ? (
            <>
            <Zoom>
               <div className="navbar-profile-pic">
                    <img src={ profile_pic } alt="profile pic" />
               </div>
            </Zoom>
            <motion.div 
               variants={fadeIn("right", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.7}}
               classNme='nav-items'>
               <div className="nav-item">
                  <div className='nav-link'>
                     <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcHome /> Home
                     </Link>
                  </div>
                  <div className='nav-link'>
                     <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcAbout /> About
                     </Link>
                  </div>
                  <div className='nav-link'>
                     <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcReadingEbook /> Education
                     </Link>
                  </div>
                  <div className='nav-link'>
                     <Link to='skills' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBiotech /> Skills
                     </Link>
                  </div>
                  <div className='nav-link'>
                     <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcVideoProjector /> Projects
                     </Link>
                  </div>
                  <div className='nav-link'>
                     <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBusinessContact /> Contact
                     </Link>
                  </div>
               </div>
            </motion.div>     
         </>
        ) : (
            <>
                <div className='nav-items'>
                    <div className="nav-item">
                        <div className='nav-link'>
                           <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                              <FcHome title='home' />
                           </Link> 
                        </div>
                        <div className='nav-link'>
                           <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                              <FcAbout title='about' />
                           </Link> 
                        </div>
                        <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                              <FcReadingEbook title='education' />
                           </Link>
                        </div>
                        
                        <div className='nav-link'>
                           <Link to='skills' spy={true} smooth={true} offset={-100} duration={100}>
                              <FcBiotech title='skills' />
                           </Link>
                        </div>
                        
                        <div className='nav-link'>
                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                              <FcVideoProjector title='project' />
                           </Link>
                        </div>
                     
                        <div className='nav-link'>
                           <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                              <FcBusinessContact title='contact' /> 
                           </Link> 
                        </div>
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default Menu
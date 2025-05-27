import React from 'react'
import './About.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import profile_pic from '../../assets/Images/profile_pic.jpg'
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <>
        <div className='about' id='about'>
            <div className='row'>
                <Zoom>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                        <img src={profile_pic} alt="profile pic" />
                    </div>
                </Zoom>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                        <motion.h1
                            variants={fadeIn("left", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{
                                once: false, amount: 0.9
                            }}
                        >About Me</motion.h1>
                        <motion.p
                            variants={fadeIn("right", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{
                                once: false, amount: 0.9
                            }}
                        >
                            Focused and enthusiastic developer with a keen interest in software
                            development and full-stack development. By comprehensive exposure to the 
                            underlying concepts and applying them widly to various projects, my love for these 
                            domains came into being. I am a passionate individual who thrives to build and apply
                            algorithms to solve real-world industry problems.
                        </motion.p>
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default About
import React from 'react'
import { useTheme } from '../../Context/ThemeContext';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import Resume from '../../assets/docs/Sai Srinivas Dandangi Updated Resume.pdf'
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import './Home.css'
//import Fade from 'react-reveal/Fade'

const Home = () => {
  const [theme, setTheme] = useTheme()
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme === "light" ? (<BsMoonStarsFill size={25} />) : (<BsFillSunFill size={25} />)}
        </div>
        <div className='container home-content'>
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false, amount: 0.7
              }}
            >I'm Sai Srinivas Dandangi 👨‍💼
            </motion.h2>
            <h1>
              <Typewriter
                  options={{
                      strings: [
                        'Python Programmer',
                        'Full Stack Developer!',
                        'FrontEnd Developer!',
                        'Web Developer!',
                      ],
                      autoStart: true,
                      loop: true,
                }}  
              />
            </h1>
            <motion.div 
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false, amount: 0.7
              }}
              className='home-buttons'>
              <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=917659804151" target="_blank" rel="noreferrer">Hire Me</a>
              <a className='btn btn-cv' href={Resume} download="Sai Srinivas Full Stack Developer_Resume.pdf">Download CV</a>
            </motion.div>
        </div>
      </div>
    </>
  )
}

export default Home
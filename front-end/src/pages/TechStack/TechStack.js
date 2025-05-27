import React from 'react'
import './TechStack.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Zoom from 'react-reveal/Zoom';
import { TechstackList } from '../../utils/TechstackList'
import RubberBand from 'react-reveal/RubberBand'
//import Fade from 'react-reveal/Fade'

const TechStack = () => {
  return (
    <>
        <div className='container techstack' id='techstack'>
            <RubberBand>
                <h2 className='col-12 mt-3 b-1 text-center text-uppercase'>Skills</h2>
                <hr/>
            </RubberBand>
                <motion.p 
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{
                        once: false, amount: 0.9
                    }}
                    className='pb-3 text-center'
                >Including programming Languages, frameworks, databases, front-end and back-end tools, and APIs
                </motion.p>
            
            <div className='row'>
                {TechstackList.map((tech) => (
                    <Zoom>
                        <div key={tech._id} className='col-md-3'>
                            <div className='card m-2'>
                                <div className='card-content'>
                                    <div className='card-body'>
                                        <div className='media d-flex justify-content-center'>
                                            <div className='alig-self-center'>
                                                <tech.icon className='tech-icon' />
                                            </div>
                                            <div className='media-body'>
                                                <h5>{tech.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    </>
  )
}

export default TechStack
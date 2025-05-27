import React from 'react'
import './Projects.css'
import travel_website from '../../assets/Images/travel_website.png'
import netflix from '../../assets/Images/netflix.png'
import portfolio from '../../assets/Images/portfolio.png'
import e_commerce from '../../assets/Images/e_commerce.png'
import Fade  from 'react-reveal/Fade'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'

const Projects = () => {
  return (
    <>
        <div className='container project' id='project'>
            <RubberBand>
                <h2 className='col-12 mt-3 b-1 text-center text-uppercase'>Projects</h2>
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
                >here are my top 4 recent project with live links and source code</motion.p>
            
            {/* card design */}
            <div className='row' id='ads'>
                <div className='col-md-4'>
                        <Fade right>
                            <div className='card rounded'>
                                <div className='card-image'>
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={e_commerce} alt='e_commerce' />
                                </div>
                                <div className='card-image-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>React</span>
                                    <span className='card-detail-badge'>Mongodb</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto'>
                                        <h5 className='text-uppercase'>E-Commerce </h5>
                                    </div>
                                    <a className='ad-btn' href="https://drizzle-fit-e-commerce-frontend.vercel.app/">View</a>
                                </div>
                            </div>
                        </Fade>
                </div> 

                <div className='col-md-4'>
                        <Fade right>
                            <div className='card rounded'>
                                <div className='card-image'>
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={portfolio} alt='portfolio' />
                                </div>
                                <div className='card-image-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>React</span>
                                    <span className='card-detail-badge'>Mongodb</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto'>
                                        <h5 className='text-uppercase'>My Personal Portfolio</h5>
                                    </div>
                                    <a className='ad-btn' href="#">View</a>
                                </div>
                            </div>
                        </Fade>
                </div>   

                <div className='col-md-4'>
                        <Zoom>
                            <div className='card rounded'>
                                <div className='card-image'>
                                    <span className='card-notify-badge'>Full Stack</span>
                                    <img src={netflix} alt='netflix' />
                                </div>
                                <div className='card-image-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>Node</span>
                                    <span className='card-detail-badge'>Express</span>
                                    <span className='card-detail-badge'>React</span>
                                    <span className='card-detail-badge'>Mongodb</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto'>
                                        <h5 className='text-uppercase'>Netflix Clone</h5>
                                    </div>
                                    <a className='ad-btn' href="https://github.com/Srinivas09199/netflix-clone">View</a>
                                </div>
                            </div>
                        </Zoom>
                </div>

                <div className='col-md-4 mt-4'>
                        <Fade left>
                            <div className='card rounded'>
                                <div className='card-image'>
                                    <span className='card-notify-badge'>Front End</span>
                                    <img src={travel_website} alt='travel_website' />
                                </div>
                                <div className='card-image-overly m-auto mt-3'>
                                    <span className='card-detail-badge'>Html</span>
                                    <span className='card-detail-badge'>Css</span>
                                    <span className='card-detail-badge'>JavaScript</span>
                                    <span className='card-detail-badge'>BootStrap</span>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='ad-title m-auto'>
                                        <h5 className='text-uppercase'>Tourism Website</h5>
                                    </div>
                                    <a className='ad-btn' href="https://github.com/Srinivas09199/Explore-India-Travel-Website">View</a>
                                </div>
                            </div>
                        </Fade>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects